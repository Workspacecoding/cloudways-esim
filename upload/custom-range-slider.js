console.log(' Snippets 成功注入 JS！');

jQuery(document).ready(function($) {
    // 延遲執行以確保頁面元素已加載
    setTimeout(function() {
        // 選擇包含天數下拉菜單的元素
        var $select = $('select[name="attribute_天數"]');
        
        if (!$select.length) {
            $select = $('select').filter(function() {
                return $(this).find('option:contains("1")').length && 
                       $(this).closest('form.cart').length;
            });
        }
        
        if (!$select.length) return;
        
        // 獲取最小和最大值
        var options = [];
        $select.find('option').each(function() {
            var val = parseInt($(this).val() || $(this).text());
            if (!isNaN(val)) options.push(val);
        });
        
        if (options.length < 2) return;
        
        var min = Math.min.apply(Math, options);
        var max = Math.max.apply(Math, options);
        var current = parseInt($select.val()) || min;
        
        // 找到表單元素
        var $form = $('form.cart');
        var $formRow = $select.closest('.value').parent();
        var $addToCartBtn = $('.single_add_to_cart_button');
        
        // 創建新的UI
        var $container = $('<div class="esim-days-selector"></div>');
        
        // 添加標題
        var $title = $('<div class="slider-title">自訂所需天數</div>');
        
        // 創建滑塊容器和滑塊軌道
        var $sliderContainer = $('<div class="slider-container"></div>');
        var $sliderTrack = $('<div class="slider-track"></div>');
        var $sliderProgress = $('<div class="slider-progress"></div>');
        var $rangeInput = $('<input type="range" id="days-input" min="' + min + '" max="' + max + '" value="' + current + '" step="1">');
        var $handleDisplay = $('<div class="handle-display"><span>' + current + '</span></div>');
        
        // 添加刻度標記
        var $sliderMarks = $('<div class="slider-marks"><span class="min-mark">' + min + '</span><span class="max-mark">' + max + '</span></div>');
        
        // 組裝滑塊
        $sliderTrack.append($sliderProgress);
        $sliderContainer.append($sliderTrack);
        $sliderContainer.append($rangeInput);
        $sliderContainer.append($handleDisplay);
        $sliderContainer.append($sliderMarks);
        
        // 總計顯示
        var $totalSection = $('<div class="total-section"></div>');
        var $totalLabel = $('<span class="total-label">總計</span>');
        var $totalPrice = $('<span class="total-price">計算中...</span>');
        
        $totalSection.append($totalLabel);
        $totalSection.append($totalPrice);
        
        // 購買按鈕
        var $buyButton = $('<button type="button" class="buy-button">立即購買</button>');
        
        // 組裝UI
        $container.append($title);
        $container.append($sliderContainer);
        $container.append($totalSection);
        $container.append($buyButton);
        
        // 插入UI並隱藏原始元素
        $formRow.before($container);
        $formRow.hide();
        $form.find('.quantity').hide();
        $addToCartBtn.hide();
        
        // 更新價格函數
        function updatePrice() {
            var priceHtml = $('.woocommerce-variation-price').html();
            if (!priceHtml) return;
            
            var $tempDiv = $('<div>').html(priceHtml);
            var priceText = $tempDiv.text().trim();
            var priceMatch = priceText.match(/[\d,]+(\.\d+)?/);
            
            if (priceMatch) {
                var currentPrice = parseFloat(priceMatch[0].replace(/,/g, ''));
                $totalPrice.text(currentPrice + 'TWD');
            }
        }
        
        // 更新滑塊
        function updateSlider(value) {
            // 更新手柄上的數字
            $handleDisplay.find('span').text(value);
            
            // 計算手柄位置百分比
            var percentage = ((value - min) / (max - min)) * 100;
            
            // 更新進度條寬度
            $sliderProgress.css('width', percentage + '%');
            
            // 更新手柄位置
            $handleDisplay.css('left', percentage + '%');
            
            // 更新選擇值
            if ($select.val() != value) {
                $select.val(value).trigger('change');
            }
        }
        
        // 綁定滑塊事件
        $rangeInput.on('input', function() {
            var value = $(this).val();
            updateSlider(value);
        });
        
        // 當滑塊釋放時更新價格
        $rangeInput.on('change', function() {
            setTimeout(updatePrice, 100);
        });
        
        // 購買按鈕點擊
        $buyButton.on('click', function() {
            $(this).addClass('button-active');
            setTimeout(function() {
                $addToCartBtn.trigger('click');
            }, 100);
        });
        
        // 監聽WooCommerce事件
        $('body').on('woocommerce_variation_has_changed', updatePrice);
        $(document).on('found_variation', updatePrice);
        
        // 初始化
        updateSlider(current);
        setTimeout(updatePrice, 500);
    }, 800);
});
