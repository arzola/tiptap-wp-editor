<?php
/*
Plugin Name: Tiptap WP Editor
Description: Join to the Gutenberg resistance with a Tiptap editor, build for those that only wants a great editor to write their content.
Version: 1.0.0
Author: Oscar Arzola
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function tiptap_enqueue_dynamic_assets($hook)
{
    if ($hook !== 'post.php' && $hook !== 'post-new.php') {
        return;
    }

    $plugin_dir = plugin_dir_path(__FILE__);
    $manifest_path = $plugin_dir . 'dist/.vite/manifest.json';

    if (!file_exists($manifest_path)) {
        error_log('Manifest file not found: ' . $manifest_path);
        return;
    }

    $manifest = json_decode(file_get_contents($manifest_path), true);

    // Get the hashed JS and CSS filenames
    $js_file = $manifest['js/tiptap-wp-editor.jsx']['file'] ?? '';
    $css_file = $manifest['js/tiptap-wp-editor.jsx']['css'][0] ?? '';

    if ($js_file) {
        wp_enqueue_script(
            'tiptap-editor',
            plugin_dir_url(__FILE__) . 'dist/' . $js_file,
            ['wp-element'], // Ensure React is loaded
            null,
            true
        );
    }

    if ($css_file) {
        wp_enqueue_style(
            'tiptap-editor',
            plugin_dir_url(__FILE__) . 'dist/' . $css_file,
            [],
            null
        );
    }
}

add_action('admin_enqueue_scripts', 'tiptap_enqueue_dynamic_assets');

function tiptap_replace_classic_editor()
{
    ?>
    <div id="tiptap-editor-root"></div>
    <script>
        document.querySelector('#postdivrich').style.display = 'none';
    </script>
    <?php
}

add_action('edit_form_after_editor', 'tiptap_replace_classic_editor');
add_filter('use_block_editor_for_post', '__return_false');
add_action('admin_enqueue_scripts', function () {
    // Dequeue Gutenberg styles
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wp-editor-font');
});
add_action('admin_init', function () {
    remove_action('wp_enqueue_editor', 'wp_enqueue_tinymce_scripts');
    add_filter('user_can_richedit', '__return_false');
});