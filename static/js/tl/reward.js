	$(function(){ 
      $("#btnFilterReward").click(
	  function(){
	  $("#PersonalReward").jqGrid('setGridParam',{url:'/server/reward.php?t=pwr&ids='+ids+'&from='+$('#datepicker3').val()+'&to='+$('#datepicker4').val(),page:1}).trigger("reloadGrid");
 	  }
	  );
      $("#btnClearFilterReward").click(
	  function(){
	  $("#PersonalReward").jqGrid('setGridParam',{url:'/server/reward.php?t=pwr&ids='+ids,page:1}).trigger("reloadGrid");
 	  }
	  );			   
	  $("#EmployeesReward").jqGrid({
		url:'/server/reward.php?t=br&idb='+idb+'&ids='+ids,
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Сотрудник', 'Вознаграждение'],
		colModel :[ 
		  {name:'id_specialist', index:'id_specialist', width:20, align:'center'}, 
		  {name:'worker', index:'worker', width:370}, 
		  {name:'reward', index:'reward', width:120, align:'center'}
		],
		rowNum:20,
		height: 150,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true
	  }); 
	});
	$(function(){ 
	  $("#PersonalReward").jqGrid({
		url:'/server/reward.php?t=pwr&ids='+ids,
		datatype: 'xml',
		mtype: 'GET',
		colNames:['ID','Работа', 'Вознаграждение', 'Дата'],
		colModel :[ 
		  {name:'id', index:'id', width:20, align:'center'}, 
		  {name:'work', index:'work', width:370}, 
		  {name:'Reward', index:'Reward', width:120, align:'center'}, 
		  {name:'Add_date', index:'Add_date', width:120, align:'center'}
		],
		rowNum:20,
		height: 150,
		sortname: 'id',
		sortorder: 'asc',
		viewrecords: true,
		gridview: true
	  }); 
	});