<?php
/*
Template Name: Product List Page
*/
get_header(); 
?>

<main>
<section class="search-destination">
  <div class="container">
    <h2 class="title">
      <span class="bold">搜尋</span><span class="highlight">旅遊目的地</span>
    </h2>
    <p class="subtitle">
      在 130+ 個國家裡尋找最適合的方案享受高速上網，工作旅遊兩不誤
    </p>
  </div>
  <div class="search-wrapper" id="search-wrapper">
    <span class="search-icon">🔍</span>
    <input type="text" id="countryInput" placeholder="搜尋目的地">
    <div id="result-box">旅行目的地</div>
  </div>
  <!--搜尋結果-->
  <div class="product-list full-width-mode">
  <?php if (!empty($_GET['country'])): ?>
<div id="result-output" style="display:none;">
  <?php
  $keyword = sanitize_text_field($_GET['country']);
  $found = false;

  $args = [
    'post_type' => 'product',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'tax_query' => [
      [
        'taxonomy' => 'product_cat',
        'field' => 'slug',
        'terms' => ['sim卡','eSIM'],
      ]
    ]
  ];

  $query = new WP_Query($args);

  while ($query->have_posts()) {
    $query->the_post();
    $product = wc_get_product(get_the_ID());

    if (stripos($product->get_name(), $keyword) === false) continue;

    if ($product->is_type('variable')) {
      foreach ($product->get_available_variations() as $variation_data) {
        $variation = wc_get_product($variation_data['variation_id']);
        $vname = $variation->get_name();

        if (
          stripos($vname, '1G') !== false &&
          stripos($vname, '3天') !== false
        ) {
          $image = wp_get_attachment_url($variation->get_image_id());
          $price = $variation->get_price();
          $found = true;
          $link = get_permalink($variation->get_id());
          echo '<h4 class="dropdown-title">旅行目的地</h4>';

          echo '<a href="' . esc_url($link) . '" target="_blank" class="result-item">';
          echo '<img src="' . esc_url($image) . '" alt="圖">';
          
          echo '<div class="info">';
          echo '<div class="name">' . esc_html($product->get_name()) . '</div>';
          echo '<div class="price">NTD ' . esc_html($price) . ' 起</div>';
          echo '</div>'; // .info
          
          echo '</a>'; // .result-item
          

          break 2; // 找到就不繼續其他商品
        }
      }
    }
  }

  wp_reset_postdata();

  if (!$found) {
    echo '<p>❌ 沒有找到相關商品。</p>';
  }
  ?>
</div>
<?php endif; ?>
</div>
</div>
</section>
<?php
// 額外顯示所有 G數 = 1G 的變體
$matched = [];

$args = [
  'post_type'      => 'product',
  'posts_per_page' => -1,
  'post_status'    => 'publish',
  'orderby'        => 'menu_order',
  'order'          => 'ASC',
];

$query = new WP_Query($args);

if ($query->have_posts()) {
  while ($query->have_posts()) {
    $query->the_post();
    $product = wc_get_product(get_the_ID());

    if (!$product || !$product->is_type('variable')) continue;

    foreach ($product->get_available_variations() as $variation_data) {
      $variation = wc_get_product($variation_data['variation_id']);
      if (!$variation) continue;

      $attributes = $variation->get_attributes();
      foreach ($attributes as $name => $value) {
        $decoded_name = urldecode(str_replace('attribute_', '', $name));
        $decoded_name_lower = strtolower(trim($decoded_name));

        if ($decoded_name_lower === 'g數' && trim($value) === '1G') {
          $image_id = $variation->get_image_id() ?: $product->get_image_id();
          $image_url = $image_id ? wp_get_attachment_url($image_id) : '';

          $matched[] = [
            '商品名稱' => $product->get_name(),
            '變體ID'   => $variation->get_id(),
            '價格'     => $variation->get_price(),
            '圖片'     => $image_url,
            '屬性'     => $attributes,
          ];
          break; // 找到一組 1G 就跳出變體層
        }
      }
    }
  }
  wp_reset_postdata();
}
?>

<!-- 輸出 G數 = 1G 的商品卡片（滿版樣式） -->
<div class="country-list full-width-mode">
  <?php
  if (!empty($matched)) {
    foreach ($matched as $index => $item) {
      if ($index % 3 === 0) {
        if ($index > 0) echo '</div>';
        echo '<div class="row">';
      }

      $product_link = get_permalink($item['變體ID']);
      ?>
      <a href="<?php echo esc_url($product_link); ?>" target="_blank" rel="noopener noreferrer" class="country-link">
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
      </a>
      <?php
    }
    echo '</div>';
  } else {
    echo '<p>⚠️ 沒有找到 G數 = 1G 的變體。</p>';
  }
  ?>
</div>
</main>
</body>
<?php get_footer(); ?>