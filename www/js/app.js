var $ = jQuery;

var SERVER = "http://api.devfest.xyz";
var SPEAKERS_ENDPOINT = SERVER + "/api/devfest/speakers/";
var SPEECHES_ENDPOINT = SERVER + "/api/devfest/sponsors/";
var SPONSORS_ENDPOINT = SERVER + "/api/devfest/speeches/";
var REGISTER_ENDPOINT = SERVER + "/api/devfest/attends/";


$(document).on("ready", function(){


    var $intro = $('.intro-block');
    var $navbar = $('.navbar');

    var valH = $(window).height();

    // Preloader
    var preloader = new $.materialPreloader({
        position: 'top',
        height: '5px',
        col_1: '#159756',
        col_2: '#da4733',
        col_3: '#3b78e7',
        col_4: '#fdba2c',
        fadeIn: 200,
        fadeOut: 200
    });

    // Intro block.
    $intro.css({
        "height": valH
    });

    var speakers =[
        {
            "id": 1,
            "full_name": "Victor Aguilar",
            "position": "CEO in Xiberty",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\nquis nostrud exe",
            "banner": null,
            "photo": "http://api.devfest.xyz/media/photos/2015/10/06/avatar.jpg",
            "info": "http://api.devfest.xyz/media/cvs/2015/10/06/Convenio-CINEMATECA.pdf",
            "talk": "http://api.devfest.xyz/media/cvs/2015/10/06/Convenio-CINEMATECA.pdf",
            "twitter": "https://twitter.com/jvacx",
            "github": "https://github.com/jvacx",
            "google_plus": "https://plus.google.com/"
        }
    ];

    // Populate SPEAKERS
    $.get( SPEAKERS_ENDPOINT, function( data ) {
        Notary.populate("speaker", data, "speakers", function($dom, obj){
            var $menu = $dom.find("[data-card-menu]");
            var $back = $dom.find("[data-card-back]");
            var $card = $dom.find(".speaker-card");
            $menu.click(function(){
                $card.toggleClass("show-menu");
            });
            $back.click(function(){
                $card.toggleClass("show-menu");
            });
        });
    });

    var $btnRegister = $("#btnRegister");
    var $registerForm = $("#registerForm");

    $btnRegister.click(function(e){
        e.preventDefault();

        preloader.on();

        $registerForm.validate(function(success){

            preloader.off();

            if(success) {
                var obj = Notary.makeAttende();


                console.log(obj);

                $.ajax({
                    url: REGISTER_ENDPOINT,
                    method: 'POST',
                    data: obj,
                    success: function(data, textStatus, jqXHR){
                        $registerForm.trigger("reset");
                        Materialize.toast('Te has registrado exitosamente!', 4000);
                    },
                    error: function( jqXHR, textStatus, errorThrown){
                        Materialize.toast('Hubo un error en el registro', 2000);
                    },
                    beforeSend: function( jqXHR, settings){
                        preloader.on();
                    },
                    complete: function(jqXHR, textStatus){
                        preloader.off();
                    },
                })
            }
        });

    })





    // data-model
    // data-text
    // data-link
    // data-image

});
