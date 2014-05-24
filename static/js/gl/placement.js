	$(function(){ 
	  $("#placement-dialog").dialog({
			autoOpen: false,
			resizable: false,
			modal: true,
			buttons: {
				"Ok": function() {
					$( this ).dialog( "close" );
				},
				"Отмена": function() {
					$( this ).dialog( "close" );
				}
			}
		});			   
	/*-------------BRIGADE WORKS-------------*/	
	jQuery(document).ready(function(){ 
	  jQuery("#BrigadeWorks").jqGrid({
		url:'/server/brig_list.php?gid='+idg,
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Бригада', 'Код бригады'],
		colModel :[ 
		  {name:'id', index:'id', width:20, align:'center'}, 
		  {name:'name', index:'name', width:270}, 
		  {name:'code', index:'code', width:190, align:'center'}
		],
		pager: 'pager-placement',
		rowNum:10,
		width:640,
		height:300,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		subGrid: true,
		subGridRowExpanded: function(subgrid_id, row_id) {
		// we pass two parameters
		// subgrid_id is a id of the div tag created within a table
		// the row_id is the id of the row
		// If we want to pass additional parameters to the url we can use
		// the method getRowData(row_id) - which returns associative array in type name-value
		// here we can easy construct the following
		   var subgrid_table_id;
		   subgrid_table_id = subgrid_id+"_t";
		   jQuery("#"+subgrid_id).html("<table id='"+subgrid_table_id+"' class='scroll'></table>");
		   jQuery("#"+subgrid_table_id).jqGrid({
			  url:"/server/work_list.php?t=brwr&idb="+row_id,
			  datatype: "xml",
   			  colNames:['ID','Работа', 'Объем', 'Срок сдачи', '% выполнения', 'Действие'],
			  colModel :[ 
			  	  {name:'id', index:'id', width:20, align:'center'}, 
				  {name:'name', index:'name', width:220, search:true, stype:'text'}, 
				  {name:'volume', index:'volume', width:50, align:'center'}, 				  
				  {name:'complete_date', index:'complete_date', width:90, align:'center'}, 
				  {name:'complete_percent', index:'complete_percent', width:60, align:'center'}, 
				  {name:'action', index:'action', width:120, align:'center'}
			  ],
			  height: '100%',
			  rowNum:20,
			  sortname: 'id',
			  sortorder: "asc"
		   });
	   }
	  });
	});
	/*-------------EMPLOYEES LOAD-------------*/		
	  $("#EmployeesLoad").jqGrid({
		url:'/server/work_list.php?t=gload&ids=0&idb='+idg,
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Бригада', 'Группа работ', 'Срок', 'Приоритет'],
		colModel :[ 
		  {name:'id', index:'id', width:20, align:'center'}, 
		  {name:'worker', index:'worker', width:115}, 
		  {name:'name', index:'name', width:250},
		  {name:'complete_date', index:'complete_date', width:110, align:'center'},
		  {name:'priority', index:'priority', width:130, align:'center'}
		],
		pager:'#pager-empload',
		rowNum:20,
		height: 130,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true
	  });
	});
	function PlacementAction(action,wid,idb,ids){
		if (action == 1) {
		$("#placement-dialog").dialog("option", "title", "Назначить исполнителя работы - №"+wid);	
		$("#placement-dialog").dialog("open");
		$("#placement-dialog").load("/forms/work_assign.php",{idg:idg,idb:idb,ids:ids,wid:wid});
		return false;
		};
		if (action == 2) {
		$("#placement-dialog").dialog( "option", "title", "Переназначить исполнителя работы - №"+wid);	
		$("#placement-dialog").dialog("open");
		$("#placement-dialog").load("/forms/work_reassign.php",{idg:idg,idb:idb,ids:ids,wid:wid});
		return false;
		};
		if (action == 3) {
		$("#placement-dialog").dialog( "option", "title", "Отказать исполнителю работы - №"+id);	
		$("#placement-dialog").dialog("open");
		$("#placement-dialog").load("/forms/work_deny_executor.php",{idg:idg,idb:idb,ids:ids,wid:wid});
		return false;
		};
	}	