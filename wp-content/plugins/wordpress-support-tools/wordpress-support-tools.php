<?php
/**
 * @package WordPress_Support_Tools
 * @version 1.0.0
 */
/*
Plugin Name: WordPress Support Tools
Plugin URI: http://wordpress.org/plugins/wordpress-support-tools/
Description: A set of tools support some of problem for WordPress.
Author: Liam
Version: 1.0.0
Author URI: https://github.com/longnguyen97-full
*/

define('PLUGIN', 'wordpress-support-tools');
define('TEXT_DOMAIN', 'wp_sp_tools');

require('init/add-support-tools-page.php');
require('init/enqueue-scripts.php');
