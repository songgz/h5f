;(function ($) {

    var methods = {
        init: function (options) {
            var defaults = {
                color: '#000',
                opacity: 0.5,
                zIndex: 5000
            };

            var settings = $.extend({}, defaults, options);

            return this.each(function () {
                var container = $(this);
                var overlayExist = container.find('.xmt-overlay').length;
                if (overlayExist === 0){
                    var overlay = $('<div></div>', {
                        'css': {
                            'position': ($(document.body).css("position") == "fixed") ? "fixed" : "absolute",
                            'width': '100%',
                            'height': '100%',
                            'top': 0,
                            'left': 0,
                            'overflow': 'hidden',
                            'background': settings.color,
                            'zIndex': settings.zIndex,
                            'opacity': 0.5
                        }
                    }).addClass('xmt-overlay');
                    container.append(overlay);
                }
            });

        },
        show: function (){
            return this.each(function(){
                $(this).find('.xmt-overlay').css('visibility', 'visible');
            });
             
            
        },
        hide: function(){
            return this.each(function(){
                $(this).find('.xmt-overlay').css('visibility', 'hidden');
            });
        },
        remove: function () {
            return this.each(function(){
                $(this).find('.xmt-overlay').remove();
            });
        }
    };

    $.fn.overlay = function (method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method' + method + 'does not exist on jQuery.overlay');
        }
    };

}(jQuery));
