<?php
/*
Template Name: esim-supported-devices
*/
get_header(); 
?>

<main>
<section class="search-destination">
  <div class="container two-column">
    <!-- 左欄：文字區 -->
    <div class="text-block">
      <h2 class="title"><span class="bold">eSIM 支援裝置檢測</span></h2>
      <p class="subtitle">
        支援 eSIM 的裝置才能正常使用，出發前先確認您的裝置是否支援
      </p>
      <div class="search-wrapper" id="search-wrapper">
        <span class="search-icon">🔍</span>
        <input type="text" id="countryInput" placeholder="請輸入你的裝置型號">
        <div id="result-box">請輸入你的裝置型號</div>
      </div>
    </div>

    <!-- 右欄：圖片 -->
    <div class="image-block">
    <img src="https://oceanesim.com/wp-content/uploads/2025/06/phone-hands-long.png" alt="eSIM裝置" />
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

<?php get_footer(); ?>

