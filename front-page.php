<?php get_header(); ?>
<main class="site-main">
  <!--hero 區塊-->
<section class="hero">
  <div class="hero-content">
    <h1>全球 eSIM 上網服務</h1>
    <h2>一卡在手 <span class="highlight">輕鬆連線 130+ 國家</span></h2>
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

  <!--產品列表區塊-->
  <div class="country-section">
  <h2>計劃去哪裡 <span class="highlight">旅行？</span></h2>
  <p>選擇你的 eSIM 隨時享受順暢網速</p>

<?php
$matched = []; // 儲存符合條件的變體資訊
$limit = 9;    // 最多取幾筆

$args = [
    'post_type'      => 'product',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'orderby'        => 'menu_order', // ✅ 套用 WooCommerce 後台排序
    'order'          => 'ASC',
];

$query = new WP_Query($args);

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        $product_id = get_the_ID();
        $product = wc_get_product($product_id);

        if (!$product || !$product->is_type('variable')) {
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

                if ($decoded_name_lower === 'g數' && trim($value) === '1G') {
                    // 圖片抓變體圖 → fallback 主圖
                    $image_id = $variation->get_image_id() ?: $product->get_image_id();
                    $image_url = $image_id ? wp_get_attachment_url($image_id) : '';

                    $matched[] = [
                        '商品名稱' => $product->get_name(),
                        '變體ID'   => $variation_id,
                        '價格'     => $variation->get_price(),
                        '圖片'     => $image_url,
                        '屬性'     => $attributes,
                    ];

                    break 2; // 已找到一個，跳出
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

        // 取得該商品的連結
        $product_link = get_permalink($item['變體ID']); // 或改抓母商品 ID 看你需求
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
      echo '</div>'; // 關掉最後一列
    } else {
      echo '<p>⚠️ 沒有找到 G數 = 1G 的變體。</p>';
    }
  ?>
</div>

<div class="button-wrapper">
  <div class="country-button">查看所有目的地<span class="iconamoon--arrow-up-2"></span></div>
  </div>

<!--eSIM優點-->
<section class="feature-section">
  <div class="features">
    <div class="feature-item">
      <span class="icon">🌐</span>
      <P>多國方案</p>
    </div>
    <div class="feature-item">
      <span class="icon">☁️</span>
      <p>雲端開通</p>
    </div>
    <div class="feature-item">
      <span class="icon">⚡</span>
      <p>快速啟用</p>
    </div>
  </div>
  <h2 class="main-title">線上開通旅行連線不中斷</h2>
  <p class="sub-title">從出發到回家，走到哪連到哪，安心上網不中斷</p>
</section>
<section class="feature-section">
  <div class="feature-block">
    <!-- 圖片放在 HTML 後面，透過 RWD 控制順序 -->
    <div class="feature-text">
      <h3><?php the_field('feature_title1'); ?></h3>
      <div class="sub-title-wrapper">
        <div class="sub-title-line"></div>
        <div class="sub-title-content">
          <h4><?php the_field('feature_littletitle1'); ?></h4>
          <p>
          <?php the_field('feature_text1'); ?>
          </p>
        </div>
      </div>
    </div>

    <?php
$image = get_field('feature_img1'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="feature-img">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
<?php endif; ?>
  </div>
  <!-- 第二組 -->
  <div class="feature-block reverse">
    <!-- 圖片放在 HTML 後面，透過 RWD 控制順序 -->
    <div class="feature-text">
      <h3><?php the_field('feature_title2'); ?></h3>
      <div class="sub-title-wrapper">
        <div class="sub-title-line"></div>
        <div class="sub-title-content">
          <h4><?php the_field('feature_littletitle2'); ?></h4>
          <p>
          <?php the_field('feature_text2'); ?>
          </p>
        </div>
      </div>
    </div>

    <?php
$image = get_field('feature_img2'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="feature-img">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
<?php endif; ?>
  </div>
    <!-- 第三組 -->
    <div class="feature-block third">
    <!-- 圖片放在 HTML 後面，透過 RWD 控制順序 -->
    <div class="feature-text">
      <h3><?php the_field('feature_title3'); ?></h3>
      <div class="sub-title-wrapper">
        <div class="sub-title-line"></div>
        <div class="sub-title-content">
          <h4><?php the_field('feature_littletitle3'); ?></h4>
          <p>
          <?php the_field('feature_text3'); ?>
          </p>
        </div>
      </div>
    </div>
    <?php
$image = get_field('feature_img3'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="feature-img">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
<?php endif; ?>
  </div>
</section>
<!--eSIM步驟-->
<section class="eSIM-step-title">
<h2 class="main-title">OceanEsim 如何運作？</h2>
  <p class="sub-title">免插卡、免等待，一掃即用，輕鬆暢遊全球網路</p>
</section>
<section class="steps-section">
  <div class="steps-container">
    
    <div class="step-box">
      <div class="step-number">1</div>
      <h3>為旅程購買eSIM方案</h3>
      <p>選擇旅行目的地，並選擇上網方案</p>
      <!-- 你可以加選項按鈕、國旗、單位等 -->
      <?php echo wp_get_attachment_image(134, 'medium', false, ['class' => 'step-image']); ?>
    </div>

    <div class="step-box">
      <div class="step-number">2</div>
      <h3>掃描QRcode設訂eSIM</h3>
      <p>根據電子郵件說明設定eSIM</p>
      <?php echo wp_get_attachment_image(131, 'medium', false, ['class' => 'step-image']); ?>
      <!-- 放上 QRCode 圖片 -->
    </div>

    <div class="step-box">
      <div class="step-number">3</div>
      <h3>享受eSIM方案</h3>
      <p>方案會於抵達旅行目的地後啟用</p>
      <!-- 放上 Wi-Fi 圖標等圖片 -->
      <?php echo wp_get_attachment_image(135, 'medium', false, ['class' => 'step-image']); ?>
    </div>

  </div>
</section>
<!--eSIM 優勢-->
<section class="why-esim-section">
<h2 class="main-title">為什麼選擇 OceaneSIM？</h2>
  <p class="sub-title">因應多元場景需求・上網更簡單、靈活</p>
</section>
<section class="esim-benefits">
  <div class="benefit-container">
     <!-- 第1組 共六組 -->
    <div class="benefit-item">
      <?php
$image = get_field('good_img1'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="benefit-icon">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
<?php endif; ?>
      <h3><?php the_field('good_title1'); ?></h3>
      <p><?php the_field('good_text1'); ?></p>
      <div class="cta-text"><?php the_field('good_littletitle1'); ?></div>
    </div>
    <!-- 第2組 共六組 -->
    <div class="benefit-item">
    <?php
$image = get_field('good_img2'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="benefit-icon">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
  <?php endif; ?>
      <h3><?php the_field('good_title2'); ?></h3>
      <p><?php the_field('good_text2'); ?></p>
      <div class="cta-text"><?php the_field('good_littletitle2'); ?></div>
    </div>
      <!-- 第3組 共六組 -->
      <div class="benefit-item">
<?php 
$image = get_field('good_img3'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="benefit-icon">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
  <?php endif; ?>
          <h3><?php the_field('good_title3'); ?></h3>
      <p><?php the_field('good_text3'); ?></p>
      <div class="cta-text"><?php the_field('good_littletitle3'); ?></div>
    </div>
       <!-- 第4組 共六組 -->
       <div class="benefit-item">
       <?php 
$image = get_field('good_img4'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="benefit-icon">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
  <?php endif; ?>
          <h3><?php the_field('good_title4'); ?></h3>
      <p><?php the_field('good_text4'); ?></p>
      <div class="cta-text"><?php the_field('good_littletitle4'); ?></div>
    </div>
    <!-- 第5組 共六組 -->
    <div class="benefit-item">
    <?php 
$image = get_field('good_img5'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="benefit-icon">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
  <?php endif; ?>
          <h3><?php the_field('good_title5'); ?></h3>
      <p><?php the_field('good_text5'); ?></p>
      <div class="cta-text"><?php the_field('good_littletitle5'); ?></div>
    </div>
      <!-- 第6組 共六組 -->
      <div class="benefit-item">
    <?php 
$image = get_field('good_img6'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="benefit-icon">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
  <?php endif; ?>
          <h3><?php the_field('good_title6'); ?></h3>
      <p><?php the_field('good_text6'); ?></p>
      <div class="cta-text"><?php the_field('good_littletitle6'); ?></div>
    </div>
</section>
<section class="refer-section">
  <div class="refer-container">
    <div class="refer-image">
    <?php 
$image = get_field('discount_img'); // 這裡改成你的欄位名稱
if ($image): ?>
  <div class="refer-main-img">
    <img src="<?php echo esc_url($image['url']); ?>"
         alt="<?php echo esc_attr($image['alt']); ?>">
  </div>
  <?php endif; ?>
    </div>
    <div class="refer-text">
      <h2><?php the_field('discount_title'); ?></h2>
      <p><?php the_field('discount_text'); ?></p>
      <a href="#" class="refer-btn">看更多資訊</a>
    </div>
  </div>
</section>
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












</main>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/upload/card-list.js" defer></script>





</body>

<?php get_footer(); ?>