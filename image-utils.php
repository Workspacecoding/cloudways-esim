<?php
if (!function_exists('render_child_theme_image')) {
  function render_child_theme_image($relative_path, $size = 'medium', $class = '') {
    if (!$relative_path) return;

    $url = get_stylesheet_directory_uri() . '/' . ltrim($relative_path, '/');
    $attachment_id = attachment_url_to_postid($url);

    if ($attachment_id) {
      $alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
      echo wp_get_attachment_image($attachment_id, $size, false, [
        'class'   => $class,
        'alt'     => $alt,
        'loading' => 'lazy',
      ]);
    } else {
      echo '<img src="' . esc_url($url) . '" alt="" class="' . esc_attr($class) . '" loading="lazy">';
    }
  }
}
