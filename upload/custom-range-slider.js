console.log('Snippets 成功注入 JS！');

jQuery(document).ready(function($) {
    setTimeout(function() {
        var $select = $('select[name="attribute_天數"]');

        if (!$select.length) {
            $select = $('select').filter(function() {
                return $(this).find('option:contains("1")').length && 
                       $(this).closest('form.cart').length;
            });
        }

        if (!$select.length) return;

        var options = [];
        $select.find('option').each(function() {
            var val = parseInt($(this).val() || $(this).text());
            if (!isNaN(val)) options.push(val);
        });

        if (options.length < 2) return;

        var min = Math.min.apply(Math, options);
        var max = Math.max.apply(Math, options);
        var current = parseInt($select.val()) || min;

        var $form = $('form.cart');
        var $formRow = $select.closest('.value').parent();
        var $addToCartBtn = $('.single_add_to_cart_button');

        var $container = $('<div class="esim-days-selector"></div>');
        var $title = $('<div class="slider-title">自訂所需天數</div>');
        var $sliderContainer = $('<div class="slider-container"></div>');
        var $sliderTrack = $('<div class="slider-track"></div>');
        var $sliderProgress = $('<div class="slider-progress"></div>');
        var $rangeInput = $('<input type="range" id="days-input" min="' + min + '" max="' + max + '" value="' + current + '" step="1">');
        var $handleDisplay = $('<div class="handle-display"><span>' + current + '</span></div>');
        var $sliderMarks = $('<div class="slider-marks"><span class="min-mark">' + min + '</span><span class="max-mark">' + max + '</span></div>');

        $sliderTrack.append($sliderProgress);
        $sliderContainer.append($sliderTrack);
        $sliderContainer.append($rangeInput);
        $sliderContainer.append($handleDisplay);
        $sliderContainer.append($sliderMarks);

        var $totalSection = $('<div class="total-section"></div>');
        var $totalLabel = $('<span class="total-label">總計</span>');
        var $totalPrice = $('<span class="total-price">計算中...</span>');

        $totalSection.append($totalLabel);
        $totalSection.append($totalPrice);

        var $buyButton = $('<button type="button" class="buy-button">立即購買</button>');

        $container.append($title);
        $container.append($sliderContainer);
        $container.append($totalSection);
        $container.append($buyButton);

        $formRow.before($container);
        $formRow.hide();
        $form.find('.quantity').hide();
        $addToCartBtn.hide();

        function updateSlider(value) {
            $handleDisplay.find('span').text(value);
            var percentage = ((value - min) / (max - min)) * 100;
            $sliderProgress.css('width', percentage + '%');
            $handleDisplay.css('left', percentage + '%');

            if ($select.val() != value) {
                $select.val(value).trigger('change');
            }
        }

        // ✅ 新版價格更新：用 variation 資料直接取得價格
        function updatePriceFromVariationObject(variation) {
            if (variation && variation.display_price !== undefined) {
                var formatted = variation.display_price.toLocaleString();
                $totalPrice.text(formatted + ' TWD');
            }
        }

        // ✅ WooCommerce AJAX 成功時觸發
        $form.on('found_variation', function(e, variation) {
            updatePriceFromVariationObject(variation);
            // 可選：移除 WooCommerce 原生價格 DOM（避免閃動）
            $('.woocommerce-variation-price').remove();
        });

        // ✅ 輸入過程即時更新滑桿 UI
        $rangeInput.on('input', function() {
            var value = $(this).val();
            updateSlider(value);
        });

        // ✅ 拉完後觸發 change（觸發 WooCommerce AJAX）
        $rangeInput.on('change', function() {
            updateSlider($(this).val());
        });

        // ✅ 立即購買按鈕
        $buyButton.on('click', function() {
            $(this).addClass('button-active');
            setTimeout(function() {
                $addToCartBtn.trigger('click');
            }, 100);
        });

        // 初始化
        updateSlider(current);
    }, 800);
});
