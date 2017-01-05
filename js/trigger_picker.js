;(function ($) {
    $.fn.triggerPicker = function( options ) {

        var defaults = {
            pickerClass: 'picker',
            triggerClass: 'trigger',
            triggerClik: function(){alert('sss')},
            readOnly: true            
        };
     
        var settings = $.extend( {}, defaults, options );
     
        return this.each(function() {
            var fieldEl = $(this);
            fieldEl.attr('readonly','readonly');
            var trigger = $('<span>...</span>').addClass(settings.triggerClass);            
            var el = $('<div class="sss"></div>');
            el.on('click', function(){settings.triggerClik();});
            fieldEl.wrap(el);
            fieldEl.parent().append(trigger);
        });
 
    };

}(jQuery));