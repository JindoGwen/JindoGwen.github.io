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
})






