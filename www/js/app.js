var $ = jQuery;

$(document).on("ready", function(){


    var $intro = $('.intro-block');
    var $navbar = $('.navbar');

    var valH = $(window).height();


    $intro.css({
        "height": valH
    });

    var $menu = $("[data-card-menu]");
    var $back = $("[data-card-back]");

    $menu.click(function(){
        $(".card, body").toggleClass("show-menu");
    });

    $back.click(function(){
        $(".card, body").toggleClass("show-menu");
    });
});
