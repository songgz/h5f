$.fn.center = function() {
    this.css("position", "fixed");
    this.css("top", ($(window).height()/2 - this.height()/2) + "px");
    this.css("left", ($(window).width()/2 - this.width()/2) + "px");
    return this;
};

;(function ($) {
    $.fn.lightBox = function( options ) {

        var defaults = {
            width:640,
            height:360,
            link: ''
        };
     
        var settings = $.extend({}, defaults, options );        
     
        return this.each(function() {
            var btn = $(this);
            btn.on('click', function(){

            });
            var box = $('<div class="light-box"></div>');
            box.css({                     
                    width: 640,
                    height: 360
                });
            var cont = $('<div class="content"></div>');
            var close = $('<div href="#" class="close-button"></div>');
            cont.appendTo(box);
            close.appendTo(box);
            box.center();
            box.appendTo(document.body);
        });
 
    };

}(jQuery));