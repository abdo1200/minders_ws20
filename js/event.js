/*global $, alert, console*/

$(function () {

    'use strict';

    // Spy Scroll 

    $('body').scrollspy({
        target: '.navbar'
    });

    // Links Add Active Class

    $('.nav li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    // Smooth Scroll To Div

    $('.fa-angle-double-down').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);

    });
    
    // Scroll Down 
    
    $('.nav li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);

    });

    /*// NavBar Scroll 

    var profile_offset = 20;

    $(window).scroll(function () {

        var position = $(window).scrollTop();

        if (position >= profile_offset) {

            $('.navbar').css({
                'background': 'linear-gradient(to bottom right, #000000, #0f5a80)',
                'transition': '1s',
                'padding-top': '5px',
                'padding-bottom': '10px',
                'box-shadow': '5px 5px 5px #18515E'
            });

        } else {

            $('.navbar').css({
                'background': 'transparent',
                'transition': '1s',
                'padding-top': '40px',
                'box-shadow': 'none'
            });

        }

    });*/

    // Scroll To Top Button 

    var scrollButton = $("#scroll-top");

    scrollButton.click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 730);

    });

});