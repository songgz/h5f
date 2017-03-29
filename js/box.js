;(function (global, $) {
    'use strict'

    function Box(options){
        this.init(options);
        this.initComponent();
        this.render();
        this.initEvent();        
        return this;
    }

    Box.prototype.defaults = {
        draggable: false,
        resizable: false,
        dragHandle: null,
        resizeHandle: null,
        width: 100,
        height: 100,
        'border-width': 2,
        'border-style': 'solid',
        'border-color': '#bd3f09'
    };

    Box.prototype.events = {};

    Box.prototype.init = function(options){
        this.options = $.extend({}, this.defaults, options);

        if(this.options.applyTo){            
            this.$el = (this.options.applyTo instanceof $) ? this.options.applyTo : $(this.options.applyTo);
        }           
    }

    Box.prototype.bind = function(event, fn){
        this.events[event] = fn;              
    };

    Box.prototype.unbind = function(event){
        this.events[event] = null;
    };

    Box.prototype.fire = function(event){             
        if($.isFunction(this.events[event])){
            this.events[event](this);
        }        
    };

    Box.prototype.initComponent = function(){
        
    };

    Box.prototype.render = function(){        
        this.doRender();         
        if(this.$el){
            this.$el.css({
                width: this.options.width, 
                height: this.options.height,
                'border-width': 2,
                'border-style': 'solid',
                'border-color': '#bd3f09' 
            });
            this.$el.appendTo(this.options.applyTo || document.body);            
        }
        this.fire('afterRender');
    };

    Box.prototype.doRender = function(){
        this.$el = $('<div>');        
    };

    Box.prototype.initEvent = function(){
        if(this.options.draggable) {
            this.$el.makeDraggable({handle: this.options.dragHandle});            
        }
        
        if(this.options.resizable) {            
            this.$el.makeResizable({handle: this.options.resizeHandle});
        }

        if(this.options.afterRender){
            this.bind('afterRender', this.options.afterRender)
        }                  

    };    

    global.Box = global.Box || Box;

})(window, jQuery);

