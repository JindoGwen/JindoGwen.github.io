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
    
    $('#utb').YTPlayer({
        videoURL:'http://youtu.be/BsekcY04xvQ',
        containment:'.utb',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.utb .zoom').on('click', function (e) {
        e.preventDefault();
        $('#utb').YTPFullscreen()
    })

    $('.prductSlider').slick ({
        arrows:false, 
        dots: true,
        slidesToShow:5,
        centerMode: true,
    });
    $('.product .productArrows i:nth-child(1)').on('click', function(){
        $('.prductSlider').slick('slickPrev')
    })
    $('.product .productArrows i:nth-child(2)').on('click', function(){
        $('.prductSlider').slick('slickNext')
    })

    $('.tab_menu li').on('click', function(event){
        event.preventDefault();
        //console.log($(this), $(this).index (), event.target, event.currentTarget);
        $('.tab_menu li').removeClass('on');
        $(this).addClass('on');
        var index = $(this).index ();//0, 1 ,2 
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(index).addClass('on');

        

    });

    $('.tab_content .noitce li').on('click', function(event) {
        event.preventDefault();
        var index = $(this).index ();//0, 1 ,2 
        $('.right_content>li').removeClass('on');
        $('.right_content>li').eq(index).addClass('on');



    });

    $('.toTop').on('click',function(){
        $('html,body').animate({scrollTop:0}, 200)
    });

    $(window).on('scroll', function(){
        var sct = $(window).scrollTop();
        if(sct>500) {
            $('.toTop').fadeIn(300)

        }else {
            $('.toTop').fadeOut(1000)

        }
    })





})