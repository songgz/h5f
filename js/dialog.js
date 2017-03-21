//https://github.com/WebComponentsBook/chapter-14_x-dialog/blob/master/components/src/x-dialog.html
(function(global, $){
	'use strict'
	
	function Dialog(options){
		Box.call(this, options)		
		this.init(options);
		this.render();
		return this;
	}

	Dialog.prototype = new Box();

	Dialog.prototype.constructor = Dialog;
	
	Dialog.prototype.init = function(options){	
		Box.prototype.init.call(this, options);	
		
		return this;
	}

	
	Dialog.prototype.render = function(){
		if(!this.$el){
			this.$el = $('<div id="wiz377" class="dialog-box" style="width: 493px; height: 420px; position: absolute; left: 59px; top: 25px;"><div class="header"><h1 class="title">my window</h1><a href="#" class="close-button">X</a></div><div id="wiz775" class="content" style="width: 100px; height: 100px; max-height: 315px;"></div><div id="resizer" class="resize"></div></div>');
		}
	};

	global.Dialog = global.Dialog || Dialog;

})(window, jQuery);