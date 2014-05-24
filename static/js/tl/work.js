	$(function(){ 
		$("#CloseWork").click(
		function(){
		var selected = $("#tabs").tabs('option', 'selected');
		$("#tabs").tabs("remove",selected);
		$("#tabs").tabs('select', 0);
		});
	});
	