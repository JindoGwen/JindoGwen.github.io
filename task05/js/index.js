$(function(){
    $('.sliderContent').slick({
        arrows: false,
        autoplay: true,
        pasueOnHover: false,
        pasueOnFocus: false,
        autoplaySpeed:3000,
    });
    $("#bgndVideo").YTPlayer({
        videoURL:'https://youtu.be/0qjGn_AunuA',
        containment:'.diviceContent',
        autoPlay:true,
        mute:true,
        showControls: false,
        playOnlyIfVisible: true,
        useOnMobile: true,
        stopMovieOnBlur: false,
       
    });
      
})

