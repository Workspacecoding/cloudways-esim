<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="icon" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/favicon.ico" type="image/x-icon" />
    
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> <!--✅ 補上 body -->
<div class="banner">
    <b>出國上網不用怕破費！</b> 支援全球130+國家，每GB只要 US$1.59，划算到不行～<a href="#">立即購買 <span class="arrow">→</span></a>
</div>


<header class="site-header">
  <div class="header-container">
    <div class="logo"><a href="<?php echo home_url(); ?>"><?php bloginfo( 'name' ); ?></a></div>

    <!-- ✅ 漢堡選單按鈕 -->
    <button class="menu-toggle" id="menuToggle" aria-label="Toggle Menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <!-- ✅ 桌機版選單 -->
    <nav class="nav-desktop">
      <a class="btn-desktop" href="<?php echo home_url('/product-list'); ?>"><span>旅遊目的地</span></a>
      <a href="#">什麼是eSIM</a>
      <a href="#">支援的裝置</a>
      <a href="#">部落格</a>
      <a href="<?php echo home_url('/about-us'); ?>">關於我們</a>
      <a href="<?php echo home_url('/question'); ?>">常見問題</a>
      <a href="<?php echo home_url('/my-account');?>" class="guidance-link"><span class="icon-user"></span>註冊/登入</a>
<a href="<?php echo home_url('/cart'); ?>" class="icon-link" data-icon="cart"></a>
    </nav>
  </div>

  <!-- ✅ 手機版選單 -->
  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-header">

      <button class="close-btn" id="menuClose">&times;</button>
    </div>
    <div class="mobile-menu-body">
<!-- HTML -->
<a href="<?php echo home_url('/my-account');?>" class="guidance-link"><span class="icon-user-mobile"></span>註冊/登入</a>

<a href="<?php echo home_url('/cart'); ?>" class="icon-link" data-icon="cart">購物車</a>
      <a href="#">什麼是eSIM</a>
      <a href="#">支援的裝置</a>
      <a href="#">部落格</a>
      <a href="<?php echo home_url('/about-us'); ?>">關於我們</a>
      <a href="<?php echo home_url('/question'); ?>">常見問題</a>
      <a class="btn-mobile full-width" href="<?php echo home_url('/product-list'); ?>">旅遊目的地</a>
    </div>
  </div>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/upload/menu.js"></script>
</header>


