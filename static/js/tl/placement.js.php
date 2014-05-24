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
	  $("#placement-dialog").dialog({
			autoOpen: false,
			resizable: false,
			modal: true,
			buttons: {
				"Сохранить": function() {
					$('#WorkAssignResult').load("/server/work_assign_deny.php",{ids:$('#WorkAssignID').val(),wid:$_POST['wid']});
				},
				"Закрыть": function() {
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
		  {name:'volume', index:'volume', width:50, align:'center'}, 
		  {name:'complete_date', index:'complete_date', width:70, align:'center'},
		  {name:'worker', index:'worker', width:130, align:'center'}, 
		  {name:'action', index:'action', width:110}
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
		$("#placement-dialog").dialog("option", "title", "Назначить исполнителя работы - №"+id);	
		$("#placement-dialog").dialog("open");
		$("#placement-dialog").load("/forms/work_assign.php",{idb:idb,ids:ids,wid:id});
		return false;
		};
		if (action == 2) {
		$("#placement-dialog").dialog( "option", "title", "Переназначить исполнителя работы - №"+id);	
		$("#placement-dialog").dialog("open");
		$("#placement-dialog").load("/forms/work_reassign.php",{idb:idb,ids:ids,wid:id});
		return false;
		};
		if (action == 3) {
		$("#placement-dialog").dialog( "option", "title", "Отказать исполнителю работы - №"+id);	
		$("#placement-dialog").dialog("open");
		$("#placement-dialog").load("/forms/work_deny_executor.php"+id,{idb:idb,ids:ids,wid:id});
		return false;
		};
	}