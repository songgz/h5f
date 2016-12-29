;(function ($) {
    $.fn.box = function( options ) {

        var defaults = {
            width   : 100,
            height  : 100,            
            autoEl:'div', //{tag:'div',name:'ss'}
            hidden:false,
            allowDomMove:true       
        };
     
        var settings = $.extend( {}, defaults, options );
     
        return this.each(function() {
            var container = this;
            var el = $('<div></div>',{
                css:{
                    'border-style': 'solid',
                    'border-color': '#ff0000',
                    'border-width': 'thin',
                    width: settings['width']+'px',
                    height: settings['height'] + 'px'
                }
            });
            
            el.appendTo(container);
        });
 
    };

}(jQuery));

