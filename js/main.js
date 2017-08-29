$(document).ready(function () {

    // ===========================
    // Mobile Nav
    // ===========================

    $('.hamburger').click(function () {
        if ($('.mobile-nav').hasClass('hidden')) {
            $('.mobile-nav').slideDown("slow", function () {
                $('.mobile-nav').removeClass('hidden');
            });
        } else {
            $('.mobile-nav').slideUp("slow", function () {
                $('.mobile-nav').addClass('hidden');
            });
        }
    });
});