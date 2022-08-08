$(function(){
    $('.main_slider').slick({
        arrows: false,
        autoplay:true,
        pauseOnHover: false,
        pauseFocus: false,
        
    });
    $('.left_slider').slick({
        arrows: false,
        fade: true,

    });
    $('.right_slider').slick({
        arrows: false,
        slidesToShow:4,
        asNavFor:'.left_slider'

    });
    

    $('.slide02 .right i:nth-child(1)').on('click' , function (){
        $('.right_slider').slick('slickPrev')
        
    });
    $('.slide02 .right i:nth-child(2)').on('click' , function (){
        $('.right_slider').slick('slickNext')

    });
 

})