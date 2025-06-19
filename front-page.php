<?php get_header(); ?>
<main class="site-main">
  <!--hero 區塊-->
<section class="hero">
  <div class="hero-content">
    <h1>全球 eSIM 上網服務</h1>
    <h2>一卡在手 <span class="highlight">輕鬆連線130+國家</span></h2>
    <p>價格實惠！即買即用，秒速連接 4G/5G 高速網路！</p>
    <div class="search-position">
  <div class="search-wrapper" id="search-wrapper">
    <span class="search-icon">🔍</span>
    <input type="text" id="countryInput" placeholder="搜尋目的地">
    <div id="result-box">旅行目的地</div>
  </div>
</div>
  </div>
</section>

  <!-- ✅ Elementor 編輯器可以使用的下半段 -->
  <section class="elementor-editable-block">
    <?php
    while (have_posts()) : the_post();
      the_content(); // ← Elementor 就編輯這裡的內容！
    endwhile;
    ?>
  </section>

<?php if (!empty($_GET['country'])): ?>
<div id="result-output" style="display:none;">
  <?php
  $keyword = sanitize_text_field($_GET['country']);
  $found = false;

  $args = [
    'post_type'      => 'product',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'tax_query'      => [
      [
        'taxonomy' => 'product_cat',
        'field'    => 'slug',
        'terms'    => ['sim卡', 'eSIM'],
      ]
    ]
  ];

  $query = new WP_Query($args);

  if ($query->have_posts()) {
    while ($query->have_posts()) {
      $query->the_post();
      $product = wc_get_product(get_the_ID());

      // 只處理名稱包含國家關鍵字的商品
      if (stripos($product->get_name(), $keyword) === false) continue;

      // 只處理變數商品
      if ($product->is_type('variable')) {
        foreach ($product->get_available_variations() as $variation_data) {
          $variation = wc_get_product($variation_data['variation_id']);
          if (!$variation) continue;

          $attributes = $variation->get_attributes();

          foreach ($attributes as $encoded_key => $value) {
            $decoded_key = urldecode(str_replace('attribute_', '', $encoded_key));

            // ✅ 條件：屬性 pa_天 = 1
            if ($decoded_key === 'pa_days' && trim((string)$value) === '1') {
              $image = wp_get_attachment_url($variation->get_image_id()) ?: wp_get_attachment_url($product->get_image_id());
              $price = $variation->get_price();
              $link  = get_permalink($variation->get_id());
              $found = true;

              // 輸出結果
              echo '<h4 class="dropdown-title">旅行目的地</h4>';
              echo '<a href="' . esc_url($link) . '" target="_blank" class="result-item">';
              echo '<img src="' . esc_url($image) . '" alt="圖">';
              echo '<div class="info">';
              echo '<div class="name">' . esc_html($product->get_name()) . '</div>';
              echo '<div class="price">NTD ' . esc_html($price) . ' 起</div>';
              echo '</div>'; // .info
              echo '</a>';   // .result-item

              break 3; // 找到後跳出三層（attribute → variation → product）
            }
          }
        }
      }
    }
    wp_reset_postdata();
  }

  // 沒找到任何符合的商品
  if (!$found) {
    echo '<p>❌ 沒有找到相關商品。</p>';
  }
  ?>
</div>
<?php endif; ?>



</main>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/upload/card-list.js" defer></script>





</body>

<?php get_footer(); ?>