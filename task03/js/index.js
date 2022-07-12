$("#bgndVideo").YTPlayer({
    videoURL:'https://youtu.be/pcXTnyCmQbg',
    containment:'.main_video',
    autoPlay:true,
    mute:true,
    showControls: false,
    playOnlyIfVisible: true,
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



})






