	$(function() {
	/*___________BUTTONS___________*/
	$("button").button();
	$("#btncheckworks").click(
	function(){
	$("#tabs").tabs("select",1);
	}
	);
	/*_____________TABS_____________*/
	$( "#tabs" ).tabs({
	   select: function(event, ui) 
	   {
		   //reload desktop tab
		   if (ui.index == 0)
		   {$("#endingworks").trigger("reloadGrid");
		   $("#checkworks").trigger("reloadGrid");
		   $("#checkworks").trigger("reloadGrid");		   
		   }
	   }
	}
	);	
	});
	/*-------------CHECK WORKS-------------*/	
	$(function(){ 
	  $("#checkworks").jqGrid({
		url:'http://module.com/grid/grid.php',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Исполнитель', 'Срок'],
		colModel :[ 
		  {name:'id_publication', index:'id_publication', width:20}, 
		  {name:'zagolovok', index:'zagolovok', width:300}, 
		  {name:'istochnik', index:'istochnik', width:190}, 
		  {name:'data_dobavleniya', index:'data_dobavleniya', width:120, align:'center'}
		],
		rowNum:20,
		height: 80,
		sortname: 'id_publication',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
				var data = $("#endingworks").getRowData(rowid);
				//alert(data.zagolovok);
				//$("#tabs").tabs("select","tabs-2");
				$("#tabs").tabs("select",2);
			}
	  }); 
	}); 	  
	/*-------------ENDING WORKS-------------*/	
	$(function(){ 
	  $("#endingworks").jqGrid({
		url:'http://module.com/grid/grid1.php',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Исполнитель','Статус', 'Дата'],
		colModel :[ 
		  {name:'id_novosti', index:'id_novosti', width:20}, 
		  {name:'zagolovok', index:'zagolovok', width:250}, 
		  {name:'avtor', index:'avtor', width:135}, 
		  {name:'istochnik', index:'istochnik', width:100}, 
		  {name:'data_dobavleniya', index:'data_dobavleniya', width:120, align:'center'}
		],
		rowNum:20,
		height: 80,
		sortname: 'id_novosti',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
				var data = $("#endingworks").getRowData(rowid);
				//alert(data.zagolovok);
				//$("#tabs").tabs("select","tabs-2");
				$("#tabs").tabs("select",1);				
			}
	  }); 	  
	}); 
	/*-------------MY WORKS-------------*/
	$(function(){ 
	  $("#myworks").jqGrid({
		url:'http://module.com/grid/grid1.php',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Объем','Статус', 'Срок сдачи'],
		colModel :[ 
		  {name:'id_novosti', index:'id_novosti', width:20}, 
		  {name:'zagolovok', index:'zagolovok', width:250}, 
		  {name:'avtor', index:'avtor', width:135}, 
		  {name:'istochnik', index:'istochnik', width:100}, 
		  {name:'data_dobavleniya', index:'data_dobavleniya', width:120, align:'center'}
		],
		rowNum:20,
		height: 80,
		sortname: 'id_novosti',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
				var data = $("#endingworks").getRowData(rowid);
				//alert(data.zagolovok);
				//$("#tabs").tabs("select","tabs-2");
				$("#tabs").tabs("select",3);				
			}
	  }); 	  
	});