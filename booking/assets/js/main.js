(function($) {
    "use strict";

    // sticky menu

    var header = $('.main-nav');
    var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 1) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
    });

    // sticky menu


})(jQuery);
$.fn.selectpicker.Constructor.BootstrapVersion = '4';

$(function() {
    $('.selectpicker-region').selectpicker();
    $('.selectpicker-placement').selectpicker();

});