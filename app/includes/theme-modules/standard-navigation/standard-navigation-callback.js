define(["jquery"], function ($) {
    
    return function () {
        
        // Click handler for menu button in header template
        $(".mobile-menu-button").click(function (e) {
            e.preventDefault();
            $("#main-nav").slideToggle(150);
        });

        // Hide/show menu flyout if on desktop
        $(window).resize(function () {
            if ($(window).width() > 991) {
                $("#main-nav").show();
            } else {
                $("#main-nav").hide();
            }
        }).trigger("resize");


        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $("header .top-bar").slideUp(150);
                //$('header .bottom-bar') shrink somehow
            } else {
                $("header .top-bar").slideDown(150);
            }
        });

        
        // modified from elasticBar.js
        // https://github.com/Jlshulman/Elastic-Bar
        // this can really use some cleaning up, but it's a pilot and we're short on time...

        var navigation_height = 100;
        var navigation_min_height = 76;
        var difference = navigation_height - navigation_min_height; //24
        var li_margin_top = 24;
        var min_li_margin_top = 12;
        
        $(window).scroll(function () {
            var s = $("body").scrollTop();
            if ($(window).width() > 991 && s >= -40) {
                if (s <= difference) {
                    //controls elements dimentions on scroll
                    $("#navigation").stop().animate({
                        height: navigation_height - s
                    }, 10);

                    if (li_margin_top - s >= min_li_margin_top) {
                        $("#navigation li").stop().animate({
                            marginTop: li_margin_top - s
                        }, 10);
                    } else {
                        $("navigation li").stop().animate({
                            marginTop: min_li_margin_top
                        });
                    }

                    $("#navigation .logo img").stop().animate({
                        height: navigation_height - s - 22
                    }, 10);
                    //Elements under navigation bar fix
                    //Laggy? Remove this code. The over flow is has a pretty cool effect anyway.
                    $("#nextElementFix").stop().animate({
                        paddingTop: navigation_height - s
                    }, 10);
                } else {
                    //hold animation on fast scroll
                    $("#navigation").stop().animate({
                        height: navigation_min_height
                    }, 15);
                    $("#navigation li").stop().animate({
                        marginTop: min_li_margin_top
                    });
                    $("#navigation .logo img").stop().animate({
                        height: navigation_min_height - 22
                    }, 10);
                    $("#nextElementFix").stop().animate({
                        paddingTop: navigation_min_height - s
                    }, 15);
                }
            }

            $(window).resize(function () {
                if ($(window).width() <= 991) {
                    $("#navigation").stop().animate({
                        height: navigation_height
                    }, 10);
                    $("#navigation .logo img").stop().animate({
                        height: 78
                    }, 10);
                }
            });
        });
    }
});