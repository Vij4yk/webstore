$(function() {
    //hide elements on start
    $('.overlay, h1.fab-title, .icon-close, .form-wrapper, svg.done').hide();

    //fab open function
    function fabOpen() {
        $('.btn-mail').fadeOut(350)
        $('.fab').addClass('fab-open');
        $('.overlay').fadeIn(700);
        $('.fab-header').addClass('fab-header-open');
        $('h1.fab-title, .icon-close').delay(400).fadeIn();
        $('.form-wrapper').delay(350).fadeIn(0);
        $('body, html').css({
            'overflow': 'hidden'
        });
    }

    //fab close function
    function fabClose() {
        $('.btn-mail').fadeIn(350);
        $('.fab').removeClass('fab-open');
        $('.overlay').fadeOut(400);
        $('.fab-header').removeClass('fab-header-open');
        $('h1.fab-title, .icon-close, .form-wrapper').fadeOut(0);
        $('.button').removeClass('f-btn-off');
        $("#form")[0].reset();
        $('body, html').css({
            'overflow': 'visible'
        });
        $('svg.send').css({
            'display': 'block'
        });
        $('svg.done').css({
            'display': 'none'
        });
        setTimeout(function() {
            $('.fab-header').removeClass('fab-header-badlo');
        }, 400);
    }

    //fab open
    $('.fab').on('click', function() {
        fabOpen();
    });

    //fab close
    $('.overlay, .icon-close').on('click', function() {
        fabClose();
    });

    // contact button ani
    $('.button').on('click', function() {
        $('.button').addClass('f-btn-off');
        $('.fab-header').addClass('fab-header-badlo');
        // $("#form")[0].reset();
        setTimeout(function() {
            $('svg.send').css('display', 'none');
            $('svg.done').css('display', 'block');
        }, 400);
    });


    $('.chips').on('click',function () {
        $(this).toggleClass('chip-clicked');
    });

    $('.add-btn').on('click',function () {
        $(this).toggleClass('add-btn-clicked');
    });
    //header
    $(window).scroll(function() {
        if ($(window).scrollTop() > 174) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    });

    //anchor for scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});
