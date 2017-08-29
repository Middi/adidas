$(document).ready(function () {

    // ===========================
    // Mobile Nav
    // ===========================

    $('.hamburger').click(function () {
        if ($('.mobile-nav').hasClass('hidden')) {
            $('.fa').removeClass('fa-bars').addClass('fa-times');
            $('.mobile-nav').slideDown("slow", function () {
                $('.mobile-nav').removeClass('hidden');
            });
        } 
        
        else {
            $('.fa').removeClass('fa-times').addClass('fa-bars');
            $('.mobile-nav').slideUp("slow", function () {
                $('.mobile-nav').addClass('hidden');
            });
        }
    });
});