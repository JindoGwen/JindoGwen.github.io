$('.hamburger').on('click',function(){
    $(this).toggleClass('is-active');
    $('.gnb').toggleClass('on')
});



$("#bgndVideo").YTPlayer({
    videoURL:'https://youtu.be/yoERVK7ifK8',
    containment:'.leftContent',
    autoPlay:true,
    mute:true,
    showControls: false,
    playOnlyIfVisible: true,
    useOnMobile: true,
    stopMovieOnBlur: false,
   
});




$('.storeBox').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows:false,
    dots: true,
  });

 $(' .boxArrows i:nth-child(1)').on('click' , function (){
    $('.storeBox').slick('slickPrev')
    
});
$(' .boxArrows i:nth-child(2)').on('click' , function (){
    $('.storeBox').slick('slickNext')
    
});

