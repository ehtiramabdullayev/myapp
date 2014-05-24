	$(function(){ 
	  /*--------------Buttons-------------*/
      $("#btnUnathorizedWorks").click(
	  function(){
	  $("#WorksPlacement").jqGrid('setGridParam',{url:"/server/work_list.php?t=pl&ids=1&idb="+idb,page:1}).trigger("reloadGrid");
 	  }
	  );
      $("#btnPlacementShowAll").click(
	  function(){
	  $("#WorksPlacement").jqGrid('setGridParam',{url:"/server/work_list.php?t=pl&idb="+idb,page:1}).trigger("reloadGrid");
 	  }
	  );
	  $("#EmployeesLoadSelect").load("/server/empl_list.php?t=brcom",{idb:idb,ids:ids});
	  /*----------------------------------*/
	  $("#assign-dialog").dialog({
			autoOpen: false,
			resizable: false,
			modal: true,
			buttons: {
				"Сохранить": function() {
					$('#WorkAssignResult').load("/server/work_assign_deny.php?t=wa",{ids:$('#WorkAssignID').val(),wid:wid});
				},
				"Закрыть": function() {
					$("#WorksPlacement").trigger("reloadGrid");
					$( this ).dialog( "close" );
				}
			}
		});
	  //переназначение
	  $("#reassign-dialog").dialog({
			autoOpen: false,
			resizable: false,
			modal: true,
			buttons: {
				"Сохранить": function() {
					$('#WorkReassignResult').load("/server/work_assign_deny.php?t=wr",{ids:$('#WorkReassignID').val(),wid:wid});
				},
				"Закрыть": function() {
					$("#WorksPlacement").trigger("reloadGrid");
					$( this ).dialog( "close" );
				}
			}
		});
	  $("#deny-dialog").dialog({
			autoOpen: false,
			resizable: false,
			modal: true,
			buttons: {
				"Сохранить": function() {
					$('#WorkDenyResult').load("/server/work_assign_deny.php?t=wd",{dr:$('#DenyReson').val(),wid:wid});
				},
				"Закрыть": function() {
					$("#WorksPlacement").trigger("reloadGrid");
					$( this ).dialog( "close" );
				}
			}
		});	  
	  $("#WorksPlacement").jqGrid({
		url:'/server/work_list.php?t=pl&idb='+idb,
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Объем', 'Срок сдачи', 'Авторизация', 'Действие'],
		colModel :[ 
		  {name:'id', index:'id', width:20, align:'center'}, 
		  {name:'name', index:'name', width:240}, 
		  {name:'volume', index:'volume', width:40, align:'center'}, 
		  {name:'complete_date', index:'complete_date', width:70, align:'center'},
		  {name:'worker', index:'worker', width:130, align:'center'}, 
		  {name:'action', index:'action', width:120, align:'center'}
		],
		pager: '#pager-placement',
		rowNum:20,
		height: 155,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true
	  }); 
	  $("#EmployeesLoad").jqGrid({
		url:'/server/work_list.php?t=load&ids=0&idb='+idb,
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Исполнитель', 'Работа', 'Срок', 'Приоритет'],
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
	function EmployeesLoadFilterGrid(id){
		$("#EmployeesLoad").jqGrid('setGridParam',{url:"/server/work_list.php?t=load&ids="+id+"&idb="+idb,page:1}).trigger("reloadGrid");
	}
	function PlacementAction(action,id){
		if (action == 1) {
		$("#assign-dialog").dialog("option", "title", "Назначить исполнителя работы - №"+id);	
		$("#assign-dialog").dialog("open");
		$("#assign-dialog").load("/forms/work_assign.php",{wid:id});
		return false;
		};
		if (action == 2) {
		$("#reassign-dialog").dialog( "option", "title", "Переназначить исполнителя работы - №"+id);	
		$("#reassign-dialog").dialog("open");
		$("#reassign-dialog").load("/forms/work_reassign.php",{wid:id});
		return false;
		};
		if (action == 3) {
		$("#deny-dialog").dialog( "option", "title", "Отказать исполнителю работы - №"+id);	
		$("#deny-dialog").dialog("open");
		$("#deny-dialog").load("/forms/work_deny_executor.php",{wid:id});
		return false;
		};
	}