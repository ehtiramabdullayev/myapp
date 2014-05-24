	$(function() {
					$('#OrderMessages').load("/server/order_messages.php",{oid:$('#oid').val()});
	});