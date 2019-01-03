$(function () {
    'use strict';

    //    banner part
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        dots:false,
        arrows:true,
        infinite: true,
        speed: 1500,
        prevArrow: '<i class="fas fa-long-arrow-alt-left arrow_prev_banner arrow"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right arrow_next_banner arrow"></i>',
    });

    //    Progress bar

    var waypoints = $('#about_part').waypoint(function (direction) {
		$('#bar1').barfiller();
        $('#bar2').barfiller();
        $('#bar3').barfiller();
        $('#bar4').barfiller();
        $('#bar5').barfiller();
	}, {
		offset: '80%'
	});

    //    Filterizr start
    $('.filtr-container').filterizr();
	var simplefilter = $('.simplefilter li');
	simplefilter.on('click', function () {
		simplefilter.removeClass('active');
		$(this).addClass('active');
	});


    //    VenuBox plugin start
    $('.venobox').venobox();

    //    Counter plugin start
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    //  animation scroll js
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });



    //  testimonial part plugin

    $('.slide_testimonials').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        nextArrow: false,
        prevArrow: false,
        infinite: true,
    });

    //    client part plugin

    $('#ball').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }
  ]
    });

    //  back to top button start
    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        if (scroll > 200) {
            $(".back_to_top").fadeIn(1000);
        } else {
            $(".back_to_top").fadeOut(500);
        }
    });

    $(".back_to_top").click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)
    });

    if($.fn.animatedHeadline){
        $('.caption_inner').animatedHeadline({
            animationType: 'clip'
        });
    }
     
    if($.fn.ripples){
        $('.banner_rip').ripples({
            resolution: 500,
            dropRadius: 15,
            perturbance: 0.04,
        })
    }
    
});
