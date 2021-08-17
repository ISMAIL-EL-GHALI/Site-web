$(function(){
    'use strict';
    var winh =$(window).height(),
        upperpar = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
        $('.sider, .carousel-item').height(winh - (upperpar+navH));

    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')

        if($(this).data('class')==='all'){
            $('.Images .col-lg-3').css('opacity',1);
        }
        else{
            $('.Images .col-lg-3').css('opacity','.08');
           $($(this).data('class')).parent().css('opacity',1)
        }
    })
})