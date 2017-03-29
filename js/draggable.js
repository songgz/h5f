;(function($){
    $.fn.makeDraggable = function(options) {
        var defaults = {
           handle: null,
           cursor: 'move'
        };

        var settings = $.extend({}, defaults, options); 

        function getMousePos(e) {
            return { 
                x: e.pageX, 
                y: e.pageY
            };
        }

        return this.each(function() {
            var $el = $(this);
            var $handle = settings.handle ? $el.find(settings.handle) : $el;
            $handle.css('cursor', settings.cursor);
            $handle.on("mousedown.draggable", function(e) {                
                var startMousePos = getMousePos(e);                
                $(document).on("mousemove.draggable", function(e) {                    
                    $el.offset({
                        top: $el.offset().top + e.pageY - startMousePos.y,
                        left: $el.offset().left + e.pageX - startMousePos.x
                    });                    
                    startMousePos = getMousePos(e);
                });               
                $(document).on("mouseup.draggable", function(e) {                
                    $(document).off("mousemove.draggable mouseup.draggable");
                });
            });
        });
    }    
})(jQuery);


