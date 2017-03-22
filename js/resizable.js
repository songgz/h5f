;(function($){
    $.fn.resizable = function(options) {
        var defaults = {
           handle: null
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
            $handle.on("mousedown.resizable", function(e) {                
                var startMousePos = getMousePos(e);
                $(document).on("mousemove.resizable", function(e) {                                
                    $el.width(e.pageX - startMousePos.x + $el.width());
                    $el.height(e.pageY - startMousePos.y + $el.height());
                    startMousePos = getMousePos(e);
                });               
                $(document).on("mouseup.resizable", function(e) {                
                    $(document).off("mousemove.resizable mouseup.resizable");
                });
            });
        });
    }    
})(jQuery);