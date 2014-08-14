//$(function onLoad(){
$(document).ready(function() {


    //hammertime.on("tap", alert("hola?"));
    // arranca el volumen en mute
    //$('#volumen').addClass("mute");

    // overlay, front y social-globo arrancan invisibles,
    $("#overlay").toggle();
    $("#front").toggle();
    $("#social-globo").toggle();


    // inicia tooltip method bs3
    $('.C-tooltip').tooltip();

    //se crea el elemento de audio
    var audioElement = document.createElement('audio');
    // y se aniade el attr del origen de la fuente.
    audioElement.setAttribute('src', '../sounds/ice.ogg');

    // no se bien que hace esto, revisar por si es necesario realmente
    $.get();

    // play
    var play = false;
    $('#volumen').click(function() {

        if (play == false) {
            audioElement.play();
            $(this).addClass("mute");
            play = true;
        } else if (play) {
            audioElement.pause();
            $(this).removeClass("mute");
            play = false;
        }
    });


    var scroller = HScroller.create("#pages"); // specify container element

    var modal = function(subtitulo, charName, imgSrc, modalColor, parrafo, target) {
        $(target + " h4").css('color', modalColor);
        $("#front" + " img").attr('src', imgSrc);
        $(target + " #modalContent").css('background', modalColor);
        $(target + " h4").text(subtitulo);
        $(target + " h1").text(charName);
        $(target + " #modalContent").html(parrafo);
    }

    $("#loader").delay(500).fadeOut('slow', function() {
        $('header').delay(350).animate({top: 0 }, 'slow');
        $('#logo').delay(350).animate({top: 15 }, 'slow');
        $('#volumen').delay(350).animate({top: 20 }, 'slow');
        $('footer').delay(400).animate({bottom: 0 }, 'slow');
        $('.prev').delay(700).animate({left: 25 }, 'slow');
        $('.next').delay(700).animate({right: 25 }, 'slow');
    });


    $(".layer").mouseover(function() { $(this).addClass("animated pulse"); });
    $(".layer").mouseout(function() { $(this).removeClass("animated pulse"); });

    $(".layer").bind('click tap',function() {

        console.log("hiciste clic en layer");
        charName = $(this).data("name");
        modalColor = $(this).data("color");
        modalTarget = $(this).data('target');
        parrafo = $(this).next("span").html();
        subtitulo = $(this).data("subtitulo");
        imgSrc = "images/overlays/over-" + $(this).data("img") + ".png";

        modal(subtitulo, charName, imgSrc, modalColor, parrafo, modalTarget);
        $("#overlay").fadeIn(200);
        $('#logo-big').animate({top: "-80%" }, 200);
        $(modalTarget).delay(200).animate({ top: "20%", opacity: "1" }, 200);
        $("#front").delay(400).fadeIn(200);


    });

    $(".modalGaleria").bind('click tap',function() {
        console.log("hiciste clic en modalGaleria");
        imgSrc = $(this).attr('src');
        imgAlt = $(this).attr('alt');
        modalTarget = $(this).data('target');
        //$('#modalGaleria').append('<div id="close"></div>');
        var fullImgSrc = imgSrc.replace('.min', '');
        fullImgSrc = fullImgSrc.replace('thumbs/', '');
        fullImgSrc = fullImgSrc.replace('images/', 'images/backgrounds/');
        console.log("la ruta nueva es: "+fullImgSrc);
        $('#modalGaleria' + ' img').attr('src', fullImgSrc);
        $('#modalGaleria' + ' h4').text(imgAlt);
        $('#overlay').fadeIn('200', function() {
            $('#modalGaleria').animate({
                    top: "10%",
                    bottom: "10%",
                    opacity: "1"
                },
                200);
        });

    });
    $(".modalEquipo").bind('click tap',function() {
        console.log("hiciste clic en modalEquipo");
        equipoRol = $("#equipoRol").text();
        equipoNombre = $("#equipoNombre").html();
        equipoDescripcion = $("#equipoDescripcion").html();
        modalTarget = $(this).data('target');
        $('#modalEquipo' + ' h4').text(equipoRol);
        $('#modalEquipo' + ' h1').html(equipoNombre);
        $('#modalEquipo' + ' p').html(equipoDescripcion);
        $('#overlay').fadeIn('200', function() {
            $('#modalEquipo').animate({
                    top: "20%",
                    opacity: "1"
                },
                200);
        });

    });


    $('#overlay, #close').bind('click tap',function() {
        $('#logo-big').animate({top: "21%" }, 'slow' );
        $(modalTarget).animate({
                top: "-80%",
                //bottom: "110%",
                opacity: "0"
            },
            200, function() {
                $('#overlay').fadeOut('200');
                $("#front").fadeOut('200');
            });
    });


    $('#social-lv').bind('mouseover tap', function() {
        $("#social-globo").show();
        $("#social-globo").delay(10000).fadeOut('slow');
        //$(this).css('background-position', '-25px -75px');
        //setInterval(function(){$(this).css('background-position', '0px -50px');}, delay,10000);
    });

    $('.toggleNextSection').on('click',function() {
        /* Act on the event */
        $('#section-arte').toggle('slow');
        console.log("hiciste clic en la flechitaaa");
    });
    //$('#social-globo').mouseout(function() {$(this).delay(200).fadeOut('fast'); });
});