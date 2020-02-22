$(document).ready(function () {
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
            scrollTop: $('#' + $(this).data('value')).offset().top - 0
        }, 1000);
    });
    // NavBar Scroll 
    var profile_offset = 20;
    $(window).scroll(function () {
        var position = $(window).scrollTop();
        if (position >= profile_offset) {
            $('.navbar').css({
                'height': '65px',
                'background': '#FFF',
                'transition': '0.5s',
                'padding-top': '5px',
                'padding-bottom': '0px',
                'box-shadow': '0 8px 6px -6px #999'
            });
            $('.navbar-brand img').attr('src', 'img/home/mibluelogo.png');
            $('.navbar-brand span').hide();
            $('.navbar li a').css({
                'color': '#18515e',
                'transition': '0.5s',
            });
        } else {
            $('.navbar').css({
                'background': 'transparent',
                'transition': '0.5s',
                'padding-top': '25px',
                'padding-bottom': '0px',
                'box-shadow': 'none'
            });
            $('.navbar li a').css({
                'color': '#FFF',
                'transition': '0.5s',

            });
            $('.navbar-brand img').attr('src', 'img/home/miwhitelogo.png');
            $('.navbar-brand span').show();
        }
    });
    // Scroll To Top Button
    var scrollButton = $("#scroll-top");
    scrollButton.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 730);
    });
    $("html").mouseover(function () {
        $("html").getNiceScroll().resize();
    });
    var nav = $('.bar');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
    new WOW().init();
    $('body').append('<div id="toTop" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-chevron-up"></span></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn(500);
        } else {
            $('#toTop').fadeOut(500);
        }
    });
    $('#toTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /**********************************/
    $(".mat-input").focus(function () {
        $(this).parent().addClass("is-active is-completed");
    });
    $(".mat-input").focusout(function () {
        if ($(this).val() === "")
            $(this).parent().removeClass("is-completed");
        $(this).parent().removeClass("is-active");
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.timer').countTo();
        }
    });
});
$(window).load(function () {
    $(".loading-overlay .spinner").fadeOut(1000,
        function () {
            $(this).parent().fadeOut(2000,
                function () {
                    $("body").css("overflow", "auto");
                    $("body").css("overflow-x", "hidden");
                    $(this).remove();
                });
        });
});
