jQuery(document).ready(function () {
    // --------------------------------------------------
    // paralax background
    // --------------------------------------------------
    $window = jQuery(window);
    jQuery('div[data-type="background"]').each(function () {
        var $bgobj = jQuery(this); // assigning the object

        jQuery(window).scroll(function () {
            var yPos = (($window.scrollTop()) / $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });

        });
    });
    document.createElement("div");


});


