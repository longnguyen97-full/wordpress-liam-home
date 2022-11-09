<?php
/**
 * Register a support tools menu page.
 */
function wpdocs_register_my_support_tools_menu_page()
{
    add_menu_page(
        __('Support Tools', TEXT_DOMAIN),
        'Support Tools',
        'manage_options',
        'support_tools',
        'support_tools_menu_page',
        plugins_url(PLUGIN . '/assets/images/icon.png'),
        6
    );
}
add_action('admin_menu', 'wpdocs_register_my_support_tools_menu_page');

/**
 * Display a custom menu page
 */
function support_tools_menu_page()
{
    echo do_shortcode( '[wst_react_app]' );
}
