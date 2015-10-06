var Notary = Notary || {};
(function thename($){

    var NotaryBase = {

        populate: function(template, array, destiny) {
            // template, array and destiny are  values from dom data-*
            var $template = $('[data-template="'+template+'"]');
            var $destiny = $('[data-container="'+destiny+'"]');

            $.each([ 52, 97 ], function( index, value ) {

            });

            console.log($template);
            console.log($destiny);
        },

        makeTexts: function(dom, obj){

        },
        makeLinks: function(dom, obj){

        },
        makeImages: function(dom, obj){

        }
    }


    Notary = NotaryBase;

}(jQuery));



