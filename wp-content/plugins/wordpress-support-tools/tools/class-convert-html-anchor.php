<?php
/**
 *
 */
class ConvertHTMLAnchor
{
    public function __construct()
    {
        // code...
    }
}

if (is_admin()) {
    $ConvertHTMLAnchor = new ConvertHTMLAnchor();
}
