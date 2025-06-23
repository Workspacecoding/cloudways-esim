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
    <div class="search-wrapper" id="search-wrapper">
    <span class="search-icon">🔍</span>
    <input type="text" id="countryInput" placeholder="搜尋目的地">
    <div id="result-box">旅行目的地</div>
  </div>
  </div>

 
</div>
</section>
<?php
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

        $variations = $product->get_available_variations();

        foreach ($variations as $variation_data) {
            $variation_id = $variation_data['variation_id'];
            $variation = wc_get_product($variation_id);
            if (!$variation) continue;

            $attributes = $variation->get_attributes();

            foreach ($attributes as $encoded_key => $value) {
                $decoded_key = urldecode(str_replace('attribute_', '', $encoded_key));

                if ($decoded_key === 'pa_days' && trim((string)$value) === '1') {
                    $product_id = $product->get_id();

                    // ✅ 嘗試抓主商品 ACF 圖片
                    $image_id = get_field('country_img', $product_id);
                    $image_url = wp_get_attachment_url($image_id);

                    // ❗ 若 ACF 沒設圖片就 fallback
                    if (!$image_url) {
                        $image_url = wc_placeholder_img_src(); // 預設 WooCommerce 圖片
                    }
                } else {
                    $image_id = $variation->get_image_id() ?: $product->get_image_id();
                    $image_url = wp_get_attachment_url($image_id);
                }

                $matched[] = [
                    '商品名稱' => $product->get_name(),
                    '價格'     => wc_price($variation->get_price()),
                    '變體ID'   => $variation_id,
                    '連結'     => get_permalink($variation->get_parent_id()),
                    '圖片'     => $image_url,
                ];

                break 2; // 找到一組符合就跳出內層 foreach
            }
        }
    }
    wp_reset_postdata();
}
?>

<!-- 輸出卡片 -->
<?php
// ✅ 取得目前頁數
$paged = isset($_GET['paged']) ? max(1, intval($_GET['paged'])) : 1;

// ✅ 每頁顯示數量
$per_page = 9;

// ✅ 計算總數
$total_items = count($matched);
$total_pages = ceil($total_items / $per_page);

// ✅ 切分目前頁面要顯示的資料
$paged_items = array_slice($matched, ($paged - 1) * $per_page, $per_page);
?>

<div class="country-list full-width-mode">
  <?php
  if (!empty($paged_items)) {
    foreach ($paged_items as $i => $item) {
      if ($i % 3 === 0) {
        if ($i > 0) echo '</div>';
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
          </div>
          <div class="oui--arrow-up"></div>
        </div>
      </a>
      <?php
    }
    echo '</div>';
  } else {
    echo '<p>找不到相關商品</p>';
  }
  ?>
</div>

<?php
// ✅ 分頁連結（使用 query string）
echo '<div class="pagination">';
echo paginate_links([
  'base' => add_query_arg('paged', '%#%'),
  'format' => '',
  'current' => $paged,
  'total' => $total_pages,
  'prev_text' => '« 上一頁',
  'next_text' => '下一頁 »',
  'type' => 'plain',
]);
echo '</div>';
?>


</main>
</body>
<?php get_footer(); ?>