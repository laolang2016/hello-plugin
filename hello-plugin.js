;(function($){
	$.fn.myplugin = function(){
		return this.each(function(){
			console.log('myplugin');
		});
	}
})(jQuery);
