<?php
defined('ABSPATH') || exit;

add_action('wp_enqueue_scripts', function () {
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

    add_action('wp_enqueue_scripts', function () {
        $uri = get_stylesheet_directory_uri();
        $dir = get_stylesheet_directory();
    
        wp_enqueue_style('main-style', $uri . '/style.css', [], filemtime($dir . '/style.css'));
        wp_enqueue_style('component-style', $uri . '/assets/css/component.css', [], filemtime($dir . '/assets/css/component.css'));
    });
    

});