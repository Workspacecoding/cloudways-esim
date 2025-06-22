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

</main>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/upload/card-list.js" defer></script>





</body>

<?php get_footer(); ?>