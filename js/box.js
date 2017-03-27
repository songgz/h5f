;(function (global, $) {
    'use strict'

    function Box(options){
        this.init(options);
        this.initComponent();
        this.render();        
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

        if(this.options.el){
            this.$el = $(this.options.el);  
        }
        if(this.options.afterRender){
            this.bind('afterRender', this.options.afterRender)
        }        
    }

    Box.prototype.bind = function(event, fn){
        this.events[event] = fn;              
    };

    Box.prototype.unbind = function(event){
        this.events[event] = null;
    };

    Box.prototype.fire = function(event){ 
        var me = this;       
        if ($.isFunction(this.events[event])){
            this.events[event](me);
        }        
    };

    Box.prototype.initComponent = function(){};

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
            if(this.options.draggable) {
                this.$el.makeDraggable({handle: this.options.dragHandle});            
            }
        
            if(this.options.resizable) {            
                this.$el.makeResizable({handle: this.options.resizeHandle});
            }             
        }
        this.fire('afterRender');
    };

    Box.prototype.doRender = function(){
        this.$el = $('<div>');        
    };    

    global.Box = global.Box || Box;

})(window, jQuery);

