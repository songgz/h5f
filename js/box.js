;(function (global, $) {
    'use strict'

    function Box(options){
        this.init(options);
        this.initComponent();
        this.render();
        this.bind();
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
    }

    Box.prototype.bind = function(){
        if(this.options.draggable) {
            this.$el.makeDraggable({handle: this.options.dragHandle});            
        }
        
        if(this.options.resizable) {            
            this.$el.makeResizable({handle: this.options.resizeHandle});
        }
    };

    Box.prototype.unbind = function(){};

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
        }
    };

    Box.prototype.doRender = function(){
        this.$el = $('<div>');        
    };    

    global.Box = global.Box || Box;

})(window, jQuery);

