<?php
defined( 'ABSPATH' ) || exit;

if ( ! wc_get_loop_prop( 'total' ) ) {
    wp_redirect( home_url('/destinations/') ); // 換成你要導去的網址
    exit;
}
?>