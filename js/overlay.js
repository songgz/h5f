;(function ($) {
    $.fn.overlay = function( options ) {

        var defaults = {
           
        };
     
        var settings = $.extend( {}, defaults, options );
     
        return this.each(function() {
            var container = this;

            var el = $('<div></div>', {
                'css': {                     
                     'position': 'fixed',
                     'width': '100%',
                     'height': '100%',
                     'top': 0,
                     'left': 0,
                     'background': 'rgba(0,0,0,0.8)',
                     '-webkit-user-select': 'auto',
                     '-moz-user-select': 'auto',
                     'user-select': 'auto'
                }
            });            
            el.appendTo(document.body);
        });
 
    };

}(jQuery));
