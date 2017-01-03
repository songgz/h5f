;(function ($) {
    $.fn.box = function( options ) {

        var defaults = {
            width   : 100,
            height  : 100, 
            cls: 'box', 
            'border-style': '#ff0000',          
            autoEl: 'div', //{tag:'div',name:'ss'},
            content: ''    
        };
     
        var settings = $.extend({}, defaults, options );
        
        var tag = settings.autoEl;
        var attrs = {};        
        if(typeof settings.autoEl === "object"){
            tag = settings.autoEl.tag;
            delete settings.autoEl.tag;           
            for(var key in settings.autoEl){
                if (settings.autoEl.hasOwnProperty(key)){
                    attrs[key] = settings.autoEl[key];
                }
            }
        }

        var el = $('<' + tag + '>'); 
        el.attr(attrs);
        el.css({
            'border-style': 'solid',
            'border-color': '#ff0000',
            'border-width': 'thin',
            'width': settings.width +'px',
            'height': settings['height'] + 'px'
        });  
     
        return this.each(function() {
            var container = this;            
            el.appendTo(container);
        });
 
    };

}(jQuery));

