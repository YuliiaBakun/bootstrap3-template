$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true
    });

    $('.brand-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                  slidesToShow: 3
                }
            },
            {
                breakpoint: 620,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 425,
                settings: {
                  slidesToShow: 1
                }
            }
        ]
    });
});

$('.hidden-menu').click(function() {
    $('.rs-bigmag-header .bigmag-header nav').slideToggle(500, function() {

        if($(this).css('display') === 'none' ){
           $(this).removeAttr('style');
       }
   });
});