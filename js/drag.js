;(function(global, $){

	function Drag(el, options){
		this.init(el, options);
		this.bind();

		return this;
	}

	Drag.prototype.defaults = {
		dragHandle: null
	};

	Drag.prototype.init = function(el, options){
		this.options = $.extend({}, this.defaults, options);
		this.$el = $(el);
		this.$dragHandle = this.options.dragHandle ? this.$el.find(this.options.dragHandle) : this.$el;
	};

	Drag.prototype.bind = function(){
		var me = this;
		this.$el.on('mousedown.drag', function(e){
			var pos = {x: e.pageX, y: e.pageY};
			$(window).on('mousemove.shamen', function(e){
				var xDiff = e.pageX - pos.x;
                var yDiff = e.pageY - pos.y;
                e.preventDefault();
                var elpos = me.$el[0];
                me.$el.css({
                	top: elpos.offsetTop + yDiff,
                	left: epos.offsetLeft + xDiff,
                	position: 'absolute'
                });
                pos = {x: e.pageX, y: e.pageY};

			});
		});
	};

	Drag.prototype.destroy = function(){
		this.$el.off('mousedown.drag');
		//this.$dragHandle.css({ cursor: this.originalDragHandleCursor });		
        this.$el = null;
        this.$dragHandle = null;        
        this.options = this.defaults;
	}

})(window, jQuery);