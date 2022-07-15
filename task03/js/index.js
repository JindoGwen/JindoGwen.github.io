$("#bgndVideo").YTPlayer({
    videoURL:'https://youtu.be/pcXTnyCmQbg',
    containment:'.main_video',
    autoPlay:true,
    mute:true,
    showControls: false,
    playOnlyIfVisible: true,
    useOnMobile: true,
    stopMovieOnBlur: false,
   
});

$('.main_video i:nth-child(1)').on('click', function(){
    $('#bgndVideo').YTPPause();
  });
  $('.main_video i:nth-child(2)').on('click', function(){
    $('#bgndVideo').YTPPlay();
  });
  $('.main_video i:nth-child(3)').on('click', function(){
    $('#bgndVideo').YTPUnmute();
  });


  $(function(){
    $('.hamburger').on('click',function(){
        $(this).toggleClass('is-active');
        $('.gnb').toggleClass('on')
    })
  
  $('.slider_shoes').slick({
      slidesToShow:3,
      infinite: true,
      dots: true,
      arrows:false,
  })

$(' .slider_icon i:nth-child(1)').on('click' , function (){
    $('.slider_shoes').slick('slickNext')
    
});
$(' .slider_icon i:nth-child(2)').on('click' , function (){
    $('.slider_shoes').slick('slickPrev')
    
});

$('.moblie_only_shose').slick({
  arrows:false,
  pasueOnHover: false,
  pasueOnFocus: false,
  
})

$(' .ms_slider_icon i:nth-child(1)').on('click' , function (){
  $('.moblie_only_shose').slick('slickNext')
  
});
$('.ms_slider_icon i:nth-child(2)').on('click' , function (){
  $('.moblie_only_shose').slick('slickPrev')
  
});


$('.m_flex_container').slick({
  arrows:false,
  pasueOnHover: false,
  pasueOnFocus: false,
  
})

$(' .m_slider_icon i:nth-child(1)').on('click' , function (){
  $('.m_flex_container').slick('slickNext')
  
});
$('.m_slider_icon i:nth-child(2)').on('click' , function (){
  $('.m_flex_container').slick('slickPrev')
  
});

})

$(function(){
  $('.QA_code').click(function(){
    $('.QA_img').toggle();
  });
})

$('.respansive_box').slick({
  arrows:false,
  pasueOnHover: false,
  pasueOnFocus: false,

})

$(' .m_respansive_icon i:nth-child(1)').on('click' , function (){
  $('.respansive_box').slick('slickNext')
  
});
$('.m_respansive_icon i:nth-child(2)').on('click' , function (){
  $('.respansive_box').slick('slickPrev')
  
});





