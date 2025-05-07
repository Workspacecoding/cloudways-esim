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

  <div class="country-list">
    <?php
      $args = array(
        'post_type' => 'product',
        'posts_per_page' => 6,
        'product_cat' => 'esim', // 替換為你對應的分類 slug
      );
      $loop = new WP_Query($args);

      while ($loop->have_posts()) : $loop->the_post();
        global $product;
        $flag_url = get_the_post_thumbnail_url($product->get_id(), 'thumbnail');
        $price = $product->get_price();
        $country = get_the_title();
    ?>
      <div class="country-card">
        <div class="flag-frame">
          <img src="<?php echo esc_url($flag_url); ?>" alt="<?php echo esc_attr($country); ?>">
        </div>
        <div class="country-info">
          <div class="name"><?php echo esc_html($country); ?></div>
          <div class="price">NTD <?php echo esc_html($price); ?>起</div>
        </div>
        <div class="arrow">➔</div>
      </div>
    <?php endwhile; wp_reset_query(); ?>
  </div>
</div>

</main>
</body>

<?php get_footer(); ?>