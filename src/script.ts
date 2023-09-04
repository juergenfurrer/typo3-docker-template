(function ($) {
    "use strict";

    $.fancybox.defaults.animationEffect = "zoom-in-out";
    $.fancybox.defaults.transitionEffect = "zoom-in-out";
    $.fancybox.defaults.transitionDuration = 600;
    $.fancybox.defaults.loop = true;
    $.fancybox.defaults.buttons = [
        "zoom",
        "close"
    ];

    // $('[data-toggle="tooltip"],[data-tooltip]').tooltip();
    // $('[data-toggle="popover"],[data-popover]').popover();

    $(function () {
        $('a.external, .leaflet-control-attribution a').attr('target', '_new');
    });
}(jQuery));
