$(function(){

    //2022.06.20 topBanner i 닫는 기능
    $('.topBanner i').on('click', function(){
        $('.topBanner').slideUp();
    })

    $('.mainSlider').on('init afterChange', function(e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slideNum').text((c ? (c + 1) : 1) + " / " +s.slideCount);

    });

    $('.mainSlider').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        pauseOnHover:false,
        pauseOnFocus:false,

    });

    $('.mainArrow i:nth-child(1) ').on('click', function(){
        $('.mainSlider').slick('slickPrev')
    })
    $('.mainArrow i:nth-child(2) ').on('click', function(){
        $('.mainSlider').slick('slickNext')
    })
    
})