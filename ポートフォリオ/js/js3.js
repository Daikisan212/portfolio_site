$(function(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:10000,
        dots:true,
    });
    $('.menu-btn').on('click', function() {
        $('body').toggleClass('open');
    });
});
