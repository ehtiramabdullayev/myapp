	$(function(){ 
	  $("#control-dialog").dialog({
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
	  $("#work-info").dialog({
			autoOpen: false,
			resizable: false,
			modal: true,
			width:900,
			height:650,
			buttons: {
				"Закрыть": function() {
					$( this ).dialog( "close" );
				},
				"Завершить работу": function() {
					$('#FinishResult').load("/server/work_control.php?t=wfn",{wid:wid});										
				}
			}
		});
	  $("#work-info-control").dialog({
			autoOpen: false,
			resizable: false,
			modal: true,
			width:900,
			height:650,
			buttons: {
				"Закрыть": function() {
					$( this ).dialog( "close" );
				},
				"Отправить на доработку": function() {
					$('#WorkRemarkResult').load("/server/work_control.php?t=wrv",{remark:$('#WorkRemark').val(),wid:wid});										
				}
			}
		});	  
	  $("#WorksControl").jqGrid({
		url:'/server/work_list.php?t=cont',
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Объем', 'Срок сдачи', 'Выполн.','Исполнитель', 'Действие'],
		colModel :[ 
		  {name:'id', index:'id', width:20, align:'center'}, 
		  {name:'name', index:'name', width:200}, 
		  {name:'volume', index:'volume', width:40, align:'center'}, 
		  {name:'complete_date', index:'complete_date', width:80, align:'center'},
		  {name:'complete_percent', index:'complete_percent', width:50, align:'center'},
		  {name:'worker', index:'worker', width:100, align:'center'}, 
		  {name:'action', index:'action', width:120, align:'center'}
		],
		rowNum:20,
		height: 300,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true,
		ondblClickRow: function (rowid) {
		$("#work-info-control").dialog("option", "title", "Проверка работы - №"+rowid);	
		$("#work-info-control").dialog("open");
		$("#work-info-control").load("/work_info.php?pg=check&id="+rowid,{idb:idb,ids:ids,wid:rowid});		
		return false;				
				//$("#tabs").tabs( "add" , "work_info.php?pg=check&id="+rowid , "<img src='img/personaldata.jpg'><br />Работа - №"+rowid+"<br /><br />");				
				//$("#tabs").tabs("select",5);
			}		
	  }); 
	});
	function ControlAction(id){
		$("#control-dialog").dialog("option", "title", "Переназначить исполнителя работы - №"+id);	
		$("#control-dialog").dialog("open");
		return false;
	}	