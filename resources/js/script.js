$(document).ready(function () {
    
    //For the Sticky navigation//
    
   $('.js--section-features').waypoint(function (direction) {
       if (direction == "down") {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
   }, {
       offset: '60px;'
   });
    
    
    //Scroll on buttons//
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    // navigation Scroll // 
    
    $('a[href*="#"]')
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (s) {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var a = $(this.hash);
                    (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")).length &&
                        (s.preventDefault(),
                        $("html, body").animate({ scrollTop: a.offset().top }, 1e3, function () {
                            var s = $(a);
                            if ((s.focus(), s.is(":focus"))) return !1;
                            s.attr("tabindex", "-1"), s.focus();
                        }));
                }
            });
    
     $('.js--wp-1').waypoint(function () {
         $('.js--wp-1').addClass('animated animate__fadeIn');
        }, {
         offset: '50%'
     });
    
    $('.js--wp-2').waypoint(function () {
         $('.js--wp-2').addClass('animated animate__fadeInUp');
        }, {
         offset: '50%'
     });
    
    $('.js--wp-3').waypoint(function () {
         $('.js--wp-3').addClass('animated animate__fadeIn');
        }, {
         offset: '50%'
     });
    
    $('.js--wp-4').waypoint(function () {
         $('.js--wp-4').addClass('animated animate__pulse');
        }, {
         offset: '50%'
     });
    
    // mobile-navigation
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i ');
        
        nav.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
    
});