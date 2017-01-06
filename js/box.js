;(function ($) {
    $.fn.box = function( options ) {

        var defaults = {
            width   : 100,
            height  : 100, 
            cls: 'box', 
            'border-style': '#ff0000',      
            attrs: {},
            content: ''    
        };
     
        var settings = $.extend({}, defaults, options );        
     
        return this.each(function() {
            var el = $(this);
            el.css({
                'border-style': 'solid',
                'border-color': '#ff0000',
                'border-width': 'thin',
                'width': settings.width +'px',
                'height': settings['height'] + 'px'
            });  
            el.attr(settings.attrs);
            el.html(settings.content);
        });
 
    };

}(jQuery));

