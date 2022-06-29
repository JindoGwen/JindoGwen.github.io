$(function(){
    $('.mainSlider').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        pauseOnHover:false,
        pauseOnFocus:false,

    });

    $('.mainboxes').slick({
        arrows:false, 
        dots: true,
        slidesToShow:3,
        centerMode: true,

    });
    $(' .productArrows i:nth-child(1)').on('click', function(){
        $('.mainboxes').slick('slickPrev')
    })
    $(' .productArrows i:nth-child(2)').on('click', function(){
        $('.mainboxes').slick('slickNext')
    });


})