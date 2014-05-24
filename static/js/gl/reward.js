	$(function(){ 
	  $("#EmployeesReward").jqGrid({
		url:'/server/work_list.php',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Исполнитель', 'Срок'],
		colModel :[ 
		  {name:'id', index:'id', width:20}, 
		  {name:'name', index:'name', width:300}, 
		  {name:'specialist', index:'specialist', width:190}, 
		  {name:'complete_date', index:'complete_date', width:120, align:'center'}
		],
		rowNum:20,
		height: 80,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
				$("#tabs").tabs( "add" , "work_info.php?id="+rowid , "<img src='img/personaldata.jpg'><br />Работа - №"+rowid+"<br /><br />");				
				$("#tabs").tabs("select",6);
			}
	  }); 
	});
	$(function(){ 
	  $("#PersonalReward").jqGrid({
		url:'/server/work_list.php',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Исполнитель', 'Срок'],
		colModel :[ 
		  {name:'id', index:'id', width:20}, 
		  {name:'name', index:'name', width:300}, 
		  {name:'specialist', index:'specialist', width:190}, 
		  {name:'complete_date', index:'complete_date', width:120, align:'center'}
		],
		rowNum:20,
		height: 80,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
				$("#tabs").tabs( "add" , "work_info.php?id="+rowid , "<img src='img/personaldata.jpg'><br />Работа - №"+rowid+"<br /><br />");				
				$("#tabs").tabs("select",6);
			}
	  }); 
	});
	