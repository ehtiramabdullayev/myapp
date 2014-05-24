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
		$("#btnqualityworks").click(
		function(){
		$("#tabs").tabs("select",2);
		}
		);
	});
	/*-------------CHECK WORKS-------------*/	
	$(function(){ 
	  /*$( "#tabs" ).tabs({
	  	select: function(event, ui) { alert($workid) }
	  });*/
	  $("#checkworks").jqGrid({
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
	/*-------------ENDING WORKS-------------*/	
	$(function(){ 
	  $("#endingworks").jqGrid({
		url:'/server/work_list.php?t=endw',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Исполнитель','Выполнено', 'Срок сдачи'],
		colModel :[ 
		  {name:'id', index:'id', width:20, align:'center'}, 
		  {name:'name', index:'name', width:230}, 
		  {name:'worker', index:'worker', width:155, align:'center'}, 
		  {name:'complete_percent', index:'complete_percent', width:100, align:'center'}, 
		  {name:'complete_date', index:'complete_date', width:120, align:'center'}
		],
		rowNum:20,
		height: 80,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
	  }); 	  
	});
	/*-------------MY WORKS-------------*/
	$(function(){ 
	  $("#myworks").jqGrid({
		url:'/server/work_list.php?t=myw&ids=1',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Объем','Выполнено', 'Срок сдачи'],
		colModel :[ 
		  {name:'id', index:'id', width:20, align:'center'}, 
		  {name:'name', index:'name', width:300}, 
		  {name:'volume', index:'volume', width:70, align:'center'}, 
		  {name:'complete_percent', index:'complete_percent', width:115, align:'center'}, 
		  {name:'complete_date', index:'complete_date', width:120, align:'center'}
		],
		rowNum:20,
		height: 80,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
		$("#work-info").dialog("option", "title", "Выполнение работы - №"+rowid);	
		$("#work-info").dialog("open");
		$("#work-info").load("/work_info.php?pg=myw&id="+rowid,{idb:idb,ids:ids,wid:rowid});		
		return false;
				//$("#tabs").tabs( "add" , "work_info.php?pg=myw&id="+rowid , "<img src='img/personaldata.jpg'><br />Работа - №"+rowid+"<br /><br />");				
				//$("#tabs").tabs("select",5);
			}
	  });
	});