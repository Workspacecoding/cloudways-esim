<?php get_header(); ?>
<main class="site-main">
  <!--hero 區塊-->
<section class="hero">
  <div class="hero-content">
    <h1>全球 eSIM 上網服務</h1>
    <h2>一卡在手 <span class="highlight">輕鬆連線 130+ 國家</span></h2>
    <p>價格實惠！即買即用，秒速連接 4G/5G 高速網路！</p>
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="搜尋目的地" />
    </div>
  </div>
</section>
  <!--產品列表區塊-->
  <div class="country-section">
  <h2>計劃去哪裡 <span class="highlight">旅行？</span></h2>
  <p>選擇你的 eSIM 隨時享受順暢網速</p>
<?php
$matched = []; // 儲存符合條件的變體資訊
$limit = 9; // 最多取幾筆

$args = [
    'post_type' => 'product',
    'posts_per_page' => -1,
    'post_status' => 'publish',
];

$query = new WP_Query($args);

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        $product_id = get_the_ID();
        $product = wc_get_product($product_id);

        if (!$product) {
            echo '⚠️ 找不到商品 ID：' . $product_id . '<br>';
            continue;
        }

        if (!$product->is_type('variable')) {
            continue;
        }

        $variations = $product->get_available_variations();
        if (!is_array($variations)) {
            continue;
        }

        foreach ($variations as $variation_data) {
            $variation_id = $variation_data['variation_id'];
            $variation = wc_get_product($variation_id);

            if (!$variation) {
                continue;
            }

            $attributes = $variation->get_attributes();
            foreach ($attributes as $name => $value) {
                $decoded_name = urldecode(str_replace('attribute_', '', $name));
                $decoded_name_lower = strtolower(trim($decoded_name));
                
                // 只處理 G數 屬性
                if ($decoded_name_lower === 'g數' && trim($value) === '1G') {
                    // 抓圖片：優先用變體圖，否則 fallback 用主商品圖
                    $image_id = $variation->get_image_id() ?: $product->get_image_id();
                    $image_url = $image_id ? wp_get_attachment_url($image_id) : '';

                    $matched[] = [
                        '商品名稱' => $product->get_name(),
                        '變體ID' => $variation_id,
                        '價格' => $variation->get_price(),
                        '圖片' => $image_url,
                        '屬性' => $attributes
                    ];

                    break 2; // 找到後跳出兩層迴圈
                }
            }

            if (count($matched) >= $limit) {
                break 2;
            }
        }
    }
    wp_reset_postdata();
}
?>
<!--輸出結果-->
<div class="country-list">
  <?php
    if (!empty($matched)) {
      foreach ($matched as $index => $item) {
        // 每 3 個換一列
        if ($index % 3 === 0) {
          if ($index > 0) echo '</div>'; // 關掉上一列
          echo '<div class="row">';       // 開新列
        }
  ?>
        <div class="country-card">
          <div class="flag-frame">
            <img src="<?php echo esc_url($item['圖片']); ?>" alt="<?php echo esc_attr($item['商品名稱']); ?>">
          </div>
          <div class="country-info">
            <div class="name"><?php echo esc_html($item['商品名稱']); ?></div>
            <div class="price">NTD <?php echo esc_html($item['價格']); ?></div>
          
          </div>
          <div class="oui--arrow-up"></div>
        </div>
  <?php
      }
      echo '</div>'; // 關掉最後一列
    } else {
      echo '<p>⚠️ 沒有找到 G數 = 1G 的變體。</p>';
    }
  ?>
</div>
<div class="button-wrapper">
  <div class="country-button">查看所有目的地<span class="iconamoon--arrow-up-2"></span></div>
  </div>


</main>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/upload/card-list.js" defer></script>

</body>

<?php get_footer(); ?>