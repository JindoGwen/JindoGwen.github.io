$(function(){
    $('.main').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '500px'

    });
    $('.section .slide_arrows i:nth-child(1)').on('click', function(){
        $('.main').slick('slickPrev')
    });
    $('.section .slide_arrows i:nth-child(2)').on('click', function(){
        $('.main').slick('slickNext')
    });




})