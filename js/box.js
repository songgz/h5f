;(function (global, $) {
    'use strict'

    function Box(options){
        this.init(options);
        this.initComponent();
        this.render();
        this.bind();
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

    Box.prototype.bind = function(){
        if(this.options.draggable) {
            this.$el.draggable({handle: this.options.handle});            
        }
        
        if(this.options.resizable) {            
            this.$el.resizable({handle: '.resize'});
        }
    };

    Box.prototype.unbind = function(){};

    Box.prototype.initComponent = function(){};

    Box.prototype.render = function(){        
        this.doRender();         
        if(this.$el){
            this.$el.appendTo(this.options.applyTo || document.body);          
        }
    };

    Box.prototype.doRender = function(){
        this.$el = $('<div>');        
    };    

    global.Box = global.Box || Box;

})(window, jQuery);

