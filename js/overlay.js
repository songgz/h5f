;(function ($) {
    $.fn.overlay = function( options ) {

        var defaults = {
            color: '#000',            
            opacity: 0.5,
            zIndex: 5000
        };
     
        var settings = $.extend( {}, defaults, options );
     
        return this.each(function() {
            var container = this;
            //overlay.css("position", (container.css("position") == "fixed") ? "fixed" : "absolute");
            var el = $('<div></div>', {
                'css': {                     
                     'position': ($(document.body).css("position") == "fixed") ? "fixed" : "absolute",
                     'width': '100%',
                     'height': '100%',
                     'top': 0,
                     'left': 0,
                     'overflow': 'hidden',                     
                     'background': settings.color,
                     'zIndex': settings.zIndex,
                     'opacity': 0.5                    
                }
            });            
            el.appendTo(document.body);            
        });
 
    };

}(jQuery));
