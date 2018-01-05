;(function($){
	$.fn.myplugin = function(){
		return this.each(function(){
			console.log('myplugin');
			console.log('init');
			console.log('options');
		});
	}
})(jQuery);
