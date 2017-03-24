;(function (global, $) {
    'use strict'

    var Overlay = function(options){
    	this.init();

    	return this;
    }

    Overlay.prototype.defaults = {
    	color: '#000',
        opacity: 0.5,
        zIndex: 500
    };

    Overlay.prototype.init = function(options){
    	options = options || {};
    	this.options = $.extend({}, this.defaults, options);
    	this.$container  = this.options.applyTo ? $(this.options.applyTo) : $(document.body);
    	this.$el = $('<div></div>', {
            'css': {
                'position': (this.$container.css("position") == "fixed") ? "fixed" : "absolute",
                'width': '100%',
                'height': '100%',
                'top': 0,
                'left': 0,
                'overflow': 'hidden',
                'background': this.options.color,
                'zIndex': this.options.zIndex,
                'opacity': 0.5
            }
        });
        this.$container.append(this.$el);        
    };

    Overlay.prototype.show = function(){
    	this.$el.css({
    		visibility: 'hidden',    		
    		opacity: 0
    	});
    };

    Overlay.prototype.hide = function(){
    	this.$el.css({
    		visibility: 'visible',
    		opacity: 0.5
    	});
    };

    Overlay.prototype.destroy = function(){
    	this.$el.remove();
    };

    global.Overlay = global.Overlay || Overlay;

})(window, jQuery);