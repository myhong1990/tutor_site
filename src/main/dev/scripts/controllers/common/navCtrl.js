jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('lv1Menu');
        jQuery('#menu ul').toggleClass('lv1Menu');
        e.preventDefault();
    });
});