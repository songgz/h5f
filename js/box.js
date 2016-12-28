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
            var el = '<div class="box">sss</div>';

            $(el).appendTo(container);
        });
 
    };

}(jQuery));

