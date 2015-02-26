/**
 * Created by Umer on 2/4/2015.
 */

$(function () {
    var opts = {
        lines: 20, // The number of lines to draw
        length: 30, // The length of each line
        width: 11, // The line thickness
        radius: 10, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#BF55EC', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent
        left: '50%' // Left position relative to parent
    };
    var target = document.getElementById('preloader');
    var spinner = new Spinner(opts).spin(target);
    $(window).on('load', function () {
        spinner.stop();
        $('#preloader').fadeOut();
        resizeWindow();
        welcomeAnimation();
        $.backstretch("img/background/corporate-world.jpg", {fade: 1000});

    });
    $('a[href=#first],a[href=#second], a[href=#third], a[href=#fourth], a[href=#fifth], a[href=#sixth], a[href=#seventh]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });


    $('#contact-form').validate({
        rules: {
            full_name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required"

        }
    });

    var setOffset;
    $('#first').waypoint(function (direction) {
        $.backstretch("img/background/corporate-world.jpg");


    }, {offset: '-50%'});

    $('#second').waypoint(function (direction) {
        if (direction === 'down') {
            setOffset = '20%';
        }
        else {
            setOffset = '-50%'
        }

        $.backstretch("img/background/road-to-success.jpg");

    }, {offset: setOffset});


    $('#third').waypoint(function (direction) {
        if (direction === 'down') {
            setOffset = '20%';
        }
        else {
            setOffset = '-50%'
        }
        $.backstretch("img/background/project.jpg");

    }, {offset: setOffset});
    $('#fourth').waypoint(function (direction) {
        if (direction === 'down') {
            setOffset = '20%';
        }
        else {
            setOffset = '-50%'
        }
        $.backstretch("img/background/project.jpg");

    }, {offset: setOffset});

    $(window).resize(function () {
        resizeWindow();
    });

    $('.features-container .btn').hover(function () {
        $(this).toggleClass('swing');


    }, function () {
        $(this).toggleClass('swing');
    });

    $('#fourth .thumbnail').hover(function () {
        $(this).stop().children('.caption').slideDown(250);
        console.log($(this).children('.caption'));
    }, function () {
        $(this).stop().children('.caption').slideUp(250);
    });
    $('.summary').hover(function () {
        $(this).siblings($('btn')).toggleClass('swing');

        $(this).siblings($('btn')).addClass('change-color');


    }, function () {
        $(this).siblings($('btn')).toggleClass('swing');
        $(this).siblings($('btn')).removeClass('change-color');
    });
    $('#services-carousel').on('slide.bs.carousel', function () {
        $('#services-carousel .active .btn').removeClass('tada');
        $('#services-carousel .active +h3').removeClass('pulse');

    });
    $('#services-carousel').on('slid.bs.carousel', function () {
        $('#services-carousel .active .btn').addClass('tada');
        $('#services-carousel .active +h3').addClass('pulse');


    });
    //var imageWidth, imageHeight;
    //$('.member-container').mouseenter(function(){
    //    imageWidth =$(this).children('img').width();
    //    imageHeight =$(this).children('img').height();
    //    var percentageIncrease=0.05;
    //    var increasedWidth=(imageWidth*percentageIncrease)+imageWidth;
    //    var increasedHeight=(imageHeight*percentageIncrease)+imageHeight;
    //    $(this).children('img').animate({
    //        width:increasedWidth,
    //        height:increasedHeight
    //    });
    //});
    //$('.member-container').mouseleave(function() {
    //    $(this).children('img').animate({
    //        width:imageWidth,
    //        height:imageHeight
    //
    //    });
    //});


    $('.member-container').hover(function () {

        $(this).stop().children('.team-info').fadeIn(100);


        console.log($(this).children('img'));
        $(this).children('.team-info').children('p:first').fadeIn(100).addClass('fadeInUp');
        $(this).children('.team-info').children('p:last').fadeIn(100).addClass('fadeInDown');


    }, function () {
        $(this).stop().children('.team-info').fadeOut(100);
        $(this).children('.team-info>p').fadeOut(100);
        $(this).children('.team-info').children('p').fadeOut();

    });

    function resizeWindow() {
        var navbarHeight = 40;
        var height = $(window).height();
        $('.container-fluid>.row').height(height - navbarHeight);
    }

    function welcomeAnimation() {
        $('#first h1').css('visibility', 'visible').addClass('bounceInDown').delay(1000).queue(function () {
            $('#first p').css('visibility', 'visible').addClass('lightSpeedIn').delay(600).queue(function () {
                $('#first a').css('visibility', 'visible').addClass('flipInX');
            });

        });
    }

    // Navbar  color animation functions:


    function changeNavbarColor(background, border, color, activeColor, opacity) {
        $('nav').animate({
            'background-color': background,
            color: color,
            'border-color': background
        }, 300);


        $('nav').css('opacity', opacity);
    }

    function resetNavbarColor() {
        changeNavbarColor('transparent', 'transparent', '#ffffff', '#9B59B6', 1);
    }

    function dropNavbarShadow(color) {
        $('nav').css('box-shadow', '0px 3px 10px ' + color);
    }


});