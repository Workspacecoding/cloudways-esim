<?php
defined('ABSPATH') || exit;

// ✅ 載入樣式
add_action('wp_enqueue_scripts', function () {
    $uri = get_stylesheet_directory_uri();
    $dir = get_stylesheet_directory();

    // 父主題 CSS
    wp_enqueue_style(
        'blocksy-styles',
        get_template_directory_uri() . '/style.css'
    );

    // Google Fonts
    wp_enqueue_style(
        'google-fonts-noto-sans-tc',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap',
        [],
        null
    );

    // 子主題樣式
    wp_enqueue_style('main-style', $uri . '/style.css', [], filemtime($dir . '/style.css'));
    wp_enqueue_style('component-style', $uri . '/assets/css/component.css', [], filemtime($dir . '/assets/css/component.css'));
    
});
?>

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
        'terms' => ['sim卡'],
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
    echo '<p>❌ 沒有找到變體包含「1G / 3天」的商品。</p>';
  }
  ?>
</div>
<?php endif; ?>


