;(function (global, $) {
    'use strict'

    function Box(options){
        this.init(options);
        this.render();
        
        //this.$el.appendTo(this.options.applyTo || document.body);       
        
        if(this.options.draggable) {
            this.$el.draggable({handle: this.options.handle});            
        }
        
        if(this.options.resizable) {
            
        }

        return this;
    }

    Box.prototype.defaults = {};

    Box.prototype.events = {};

    Box.prototype.init = function(options){
        this.options = $.extend({}, this.defaults, options);

        if(this.options.el){
            this.$el = $(this.options.el);  
        }       
        
        return this;
    }

    Box.prototype.bind = function(){};

    Box.prototype.unbind = function(){};

    Box.prototype.render = function(){
        
    };

    global.Box = global.Box || Box;





}(window, jQuery));

