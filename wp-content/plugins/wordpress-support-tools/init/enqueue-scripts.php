<?php
function wst_react_app_init()
{
    $path = "/support-tools-app/build/static";
    wp_register_script("wst_react_app", plugins_url("{$path}/js/main.js", dirname(__FILE__)), array(), "1.0", false);
    wp_register_style("wst_react_app", plugins_url("{$path}/css/main.css", dirname(__FILE__)), array(), "1.0", "all");
}
add_action('init', 'wst_react_app_init');

function wst_react_app()
{
    wp_enqueue_script("wst_react_app", '1.0', true);
    wp_enqueue_style("wst_react_app");
    return "<div id=\"wst_react_app\"></div>";
}
add_shortcode('wst_react_app', 'wst_react_app');
