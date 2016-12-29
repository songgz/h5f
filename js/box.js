;(function ($) {
    $.fn.box = function( options ) {

        var defaults = {
            width   : 100,
            height  : 100, 
            cls: 'box', 
            'border-style': '#ff0000',          
            autoEl:'div', //{tag:'div',name:'ss'}
            content: ''    
        };
     
        var settings = $.extend({}, defaults, options );

        var mark = "";
        var tag = "";
        if(typeof settings.autoEl === "object"){
            tag = settings.autoEl.tag;
            mark += '<'+ tag;
            foreach(var attr in settings.autoEl){
                if (settings.autoEl.hasPropject(attr)){
                    mark += ' attr="' + settings.autoEl[attr] + '"'
                }
            }
        }else{
            tag = settings.autoEl;
            mark += tag;
        }
        mark += '>';
        mark += settings.content;        
        mark += '</' + tag + '>';     
         


        var el = $(mark, {
                css:{
                    'border-style': 'solid',
                    'border-color': '#ff0000',
                    'border-width': 'thin',
                    width: settings.width +'px',
                    height: settings['height'] + 'px'
                }
            });  
     
        return this.each(function() {
            var container = this;            
            el.appendTo(container);
        });
 
    };

}(jQuery));

