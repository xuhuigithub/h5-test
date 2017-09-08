(function($){
//解决插件之间环境变量冲突的问题
	var status = 1;
	//
	$.extend({
		'lalala': function(){
			return status;			
		}
	});
})(jQuery);
