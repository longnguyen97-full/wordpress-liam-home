(function($) {
    function disableF5(e) {
        var keycode;
        // execute by system
        if (window.event) {
            keycode = window.event.keyCode;
        // execute by user
        } else if (e) {
            keycode = e.which;
        }
        if (keycode == 116 || (window.event.ctrlKey && keycode == 82)) {
            e.preventDefault();
            alert('This page cannot reload');
        }
    }
    $(document).on("keydown", disableF5);
})(jQuery);
