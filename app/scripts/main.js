//$(function onLoad(){
$(document).ready(function() {

     $(function() {
        $(".rslides").responsiveSlides({
            pager: true,           // Boolean: Show pager, true or true
            nav: true
        });
      });

    // function parallax () {
    //     var currentMousePos = { x: -1, y: -1 };
    //     var home_w = $('#home').width();
    //     var home_h = $('#home').height();
    //     $('#home').mousemove(function(event) {
    //         home_w_center = home_w/2;
    //         home_h_center = home_h/2;
    //         currentMousePos.x = event.pageX-home_w_center;
    //         currentMousePos.y = event.pageY-home_h_center;
    //         new_x = currentMousePos.x / 2;
    //         // $("#home").css('background-position', 50 - currentMousePos.x/450 + '%');
    //         $("#layer-left").css('left', 7 + currentMousePos.x/300 + '%');
    //         $("#layer-right").css('right', 7 - currentMousePos.x/250 + '%');
    //         $("#layer-center").css('right', 30 - currentMousePos.x/100 + '%');
    //         $("#layer-arbol").css('right', -10 - currentMousePos.x/50 + '%');
    //     });
    // }

    $("#overlay").toggle();
    $(".front").toggle();
    $("#social-globo").toggle();
    $('.C-tooltip').tooltip();
    $.get();

    var scroller = HScroller.create("#pages"); // specify container element

    // animations at the start
    $("#loader").delay(500).fadeOut('slow', function() {
        $(this).remove();
        $('header').delay(350).animate({top: 0 }, 'slow');
        $('#logo').delay(350).animate({top: 15 }, 'slow');
        $('#volumen').delay(350).animate({top: 20 }, 'slow');
        $('footer').delay(400).animate({bottom: 0 }, 'slow');
        $('.prev').delay(700).animate({left: 25 }, 'slow');
        $('.next').delay(700).animate({right: 25 }, 'slow');
        $('#layer-right').delay(800).animate({right: "7%" }, 500);
        $('#layer-left').delay(900).animate({left: "7%" }, 500);
        $('#layer-center').delay(1000).animate({right: "30%" }, 600);

    });


    // $(".layer").mouseover(function() { $(this).addClass("animated pulse"); });
    // $(".layer").mouseout(function() { $(this).removeClass("animated pulse"); });

    var modal = function(subtitulo, charName, imgSrc, parrafo, target) {
        $("img.front").attr('src', imgSrc);
        $(target + " .hero-unit").html(parrafo);
        $(target + " h4").text(subtitulo);
        $(target + " h2").text(charName);
    }

    $(".layer").bind('click tap',function() {
        charName = $(this).data("name");
        modalTheme = $(this).data("theme");
        modalTarget = $(this).data('target');
        parrafo = $(this).next("span").html();
        subtitulo = $(this).data("subtitulo");
        imgSrc = "images/overlays/over-" + $(this).data("img") + ".png";
        modal(subtitulo, charName, imgSrc,  parrafo, modalTarget);
        $("#overlay").fadeIn(200);
        $('#logo-big').animate({top: "-80%" }, 200);
        $(modalTarget).removeClass().addClass('theme-'+modalTheme);
        $(modalTarget).delay(200).animate({ top: "20%", opacity: "1" }, 200);
        $(".front").delay(400).fadeIn(200);
    });

    $(".galeria img").bind('click tap',function() {
        //console.log("hiciste clic en modalGaleria");
        imgSrc = $(this).attr('src');
        imgAlt = $(this).attr('alt');
        modalTarget = $(this).data('target');
        //$('#modalGaleria').append('<div id="close"></div>');
        var fullImgSrc = imgSrc.replace('.min', '');
        fullImgSrc = fullImgSrc.replace('thumbs/', '');
        fullImgSrc = fullImgSrc.replace('images/', 'images/backgrounds/');
        //console.log("la ruta nueva es: "+fullImgSrc);
        $('#modalGaleria' + ' img').attr('src', fullImgSrc);
        // $('#modalGaleria' + ' h4').text(imgAlt);
        $('#overlay').fadeIn('200', function() {
            $('#modalGaleria').animate({
                    top: "0",
                    opacity: "1"
                },
                200);
        });

    });



    $('#overlay, #modal-close').bind('click tap',function() {
        $('#logo-big').animate({top: "21%" }, 'slow' );
        $(modalTarget).animate({
                top: "-250%",
                //bottom: "110%",
                opacity: "0"
            },
            200, function() {
                $('#overlay').fadeOut('200');
                $(".front").fadeOut('200');
            });
    });


    $('#social-lv').bind('mouseover click tap', function() {
        $("#social-globo").show();
        $("#social-globo").delay(10000).fadeOut('slow');
    });

});
