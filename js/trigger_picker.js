;(function ($) {
    $.fn.triggerPicker = function( options ) {

        var defaults = {
            triggerClass: 'trigger',
            readOnly: true            
        };
     
        var settings = $.extend( {}, defaults, options );
     
        return this.each(function() {
            var fieldEl = $(this);
            var trigger = $('<span>...</span>').addClass(settings.triggerClass);            
            var el = $('<span></span>');
            el.on('click', function(){alert('sss');});
            fieldEl.wrap(el);
            fieldEl.parent().append(trigger);
        });
 
    };

}(jQuery));