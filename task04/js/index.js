$(function(){


    $('.hamburger').on('click',function(){
        $(this).toggleClass('is-active');
        $('.m_smenu').toggleClass('on')
    });

   $('.Vs_container').slick({
        arrows: false,
        autoplay: false,
        pasueOnHover: false,
        pasueOnFocus: false,
        autoplaySpeed:4000,
        dots:true,
        Responsive:[
            {
                breakpoint:1200,
                settings:{
                    autoplay:true,
                    autoplaySpeed:4000,
                }
            }
        ]
    
   });


$('.slider_icon i:nth-child(1)').on('click', function(){
    $('.Vs_container').slick('slickPrev');
})
$('.slider_icon i:nth-child(2)').on('click', function(){
    $('.Vs_container').slick('slickNext');
})

$('.mboxes_slider').slick({
        arrows: false,
        autoplay: false,
        pasueOnHover: false,
        pasueOnFocus: false,
});

$('.Mslider_icon i:nth-child(1)').on('click', function(){
    $('.mboxes_slider').slick('slickPrev');
})
$('.Mslider_icon i:nth-child(2)').on('click', function(){
    $('.mboxes_slider').slick('slickNext');
})

})


