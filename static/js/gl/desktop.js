	/*-------------BUTTONS-------------*/	
	$(function(){ 
		$("#btncheckworks").click(
		function(){
		$("#tabs").tabs("select",2);
		}
		);
		$("#btnplacementworks").click(
		function(){
		$("#tabs").tabs("select",1);
		}
		);
	});
	/*-------------CHECK WORKS-------------*/	
	jQuery(document).ready(function(){ 
	  $("#CheckWorks").jqGrid({
		url:'/server/work_list.php',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Исполнитель', 'Срок сдачи'],
		colModel :[ 
		  {name:'id', index:'id', width:20, align:'center'}, 
		  {name:'name', index:'name', width:300, search:true, stype:'text'}, 
		  {name:'specialist', index:'specialist', width:190, align:'center'}, 
		  {name:'complete_date', index:'complete_date', width:120, align:'center'}
		],
		rowNum:20,
		height: 80,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
		$("#work-info-control").dialog("option", "title", "Работа - №"+rowid);	
		$("#work-info-control").dialog("open");
		$("#work-info-control").load("/work_info.php?pg=check&id="+rowid,{idb:idb,ids:ids,wid:rowid});		
		return false;				
				//$("#tabs").tabs( "add" , "work_info.php?pg=check&id="+rowid , "<img src='img/personaldata.jpg'><br />Работа - №"+rowid+"<br /><br />");				
				//$("#tabs").tabs("select",5);
			}
	  });
	}); 	  
	/*-------------ORDERS-------------*/	
	jQuery(document).ready(function(){ 
	  $("#CurrentOrders").jqGrid({
		url:'/server/order_list.php?t=crn',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['№','Заказчик', 'Услуга', 'Статус','Дата заказа'],
		colModel :[ 
		  {name:'id_order', index:'id_order', width:20, align:'center'}, 
		  {name:'id_user', index:'id_user', width:50, align:'center'}, 		  
		  {name:'name', index:'name', width:295, search:true, stype:'text'}, 
		  {name:'status', index:'status', width:140, align:'center'}, 
		  {name:'adddate', index:'adddate', width:120, align:'center'}
		],
		rowNum:20,
		height: 100,
		sortname: 'id_order',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
				$("#tabs").tabs( "add" , "order.php?id="+rowid , "<img src='img/personaldata.jpg'><br />Заказ - №"+rowid+"<br /><br />");				
				$("#tabs").tabs("select",5);
			}
	  });	  
	}); 	
	jQuery(document).ready(function(){ 
	  $("#NewOrders").jqGrid({
		url:'/server/order_list.php',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['№','Заказчик', 'Услуга', 'Статус','Дата заказа'],
		colModel :[ 
		  {name:'id_order', index:'id_order', width:20, align:'center'}, 
		  {name:'id_user', index:'id_user', width:50, align:'center'}, 		  
		  {name:'name', index:'name', width:295, search:true, stype:'text'}, 
		  {name:'status', index:'status', width:140, align:'center'}, 
		  {name:'adddate', index:'adddate', width:120, align:'center'}
		],
		rowNum:20,
		height: 100,
		sortname: 'id_order',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
				$("#tabs").tabs( "add" , "order.php?id="+rowid , "<img src='img/personaldata.jpg'><br />Заказ - №"+rowid+"<br /><br />");				
				$("#tabs").tabs("select",5);
			}
	  });	  
	}); 