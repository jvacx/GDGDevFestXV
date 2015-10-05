var $ = jQuery;

$(document).on("ready", function(){


    var $intro = $('.intro-block');
    var $navbar = $('.navbar');

    var valH = $(window).height();


    $intro.css({
        "height": valH
    });
});