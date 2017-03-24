//https://github.com/WebComponentsBook/chapter-14_x-dialog/blob/master/components/src/x-dialog.html
//http://rightjs.org/index.html
;(function(global, $){
	'use strict'
	
	function Dialog(options){
		Box.call(this, options)	
		
		return this;
	}

	Dialog.prototype = new Box();

	Dialog.prototype.constructor = Dialog;

	Dialog.prototype.defaults = {
		draggable: true,
		resizable: true,
		dragHandle: null,
        resizeHandle: null
	};	

	Dialog.prototype.initComponent = function(){
		Box.prototype.initComponent.call(this);
		this.$overlay = new Overlay();
	};

	Dialog.prototype.doRender = function(){
		this.$el = $('<div id="wiz377" class="dialog-box" style="width: 493px; height: 420px; position: absolute; left: 59px; top: 25px; z-index: 6000;"><div class="header"><h1 class="title">my window</h1><a href="#" class="close-button">X</a></div><div id="wiz775" class="content" style="width: 100px; height: 100px; max-height: 315px;"></div><div id="resizer" class="resize"></div></div>');
	};		

	global.Dialog = global.Dialog || Dialog;

})(window, jQuery);