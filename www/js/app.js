var $ = jQuery;

$(document).on("ready", function(){


    var $intro = $('.intro-block');
    var $navbar = $('.navbar');

    var valH = $(window).height();

    // Intro block.
    $intro.css({
        "height": valH
    });

    var speakers =[
        {
            "id": 1,
            "full_name": "Victor Aguilar",
            "positio": "CEO in Xiberty",
            "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\nquis nostrud exe",
            "banner": null,
            "photo": "http://api.devfest.xyz/media/photos/2015/10/06/avatar.jpg",
            "info": "http://api.devfest.xyz/media/cvs/2015/10/06/Convenio-CINEMATECA.pdf",
            "link_talk": "",
            "twitter": "",
            "github": "",
            "google_plus": ""
        }
    ];


    // Speaker cards.
    var $menu = $("[data-card-menu]");
    var $back = $("[data-card-back]");
    $menu.click(function(){
        $(".card, body").toggleClass("show-menu");
    });
    $back.click(function(){
        $(".card, body").toggleClass("show-menu");
    });

    // Populate speakers


    Notary.populate("speaker", speakers, "speakers");
    // data-model
    // data-text
    // data-link
    // data-image

});
