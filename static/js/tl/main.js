	$(function() {
	$("button").button();
	$("#datepicker1").datepicker({ dateFormat: "yy-mm-dd" });
	$("#datepicker2").datepicker({ dateFormat: "yy-mm-dd" });
	$("#datepicker3").datepicker({ dateFormat: "yy-mm-dd" });
	$("#datepicker4").datepicker({ dateFormat: "yy-mm-dd" });	
	$("#tabs").tabs({
	   select: function(event, ui) 
	   {
		   //reload desktop tab
		   if (ui.index == 0)
		   {$("#endingworks").trigger("reloadGrid");
		   $("#checkworks").trigger("reloadGrid");
		   $("#myworks").trigger("reloadGrid");
		   }
		   //reload placement tab
		   if (ui.index == 1)
		   {$("#WorksPlacement").trigger("reloadGrid");
		   $("#EmployeesLoad").trigger("reloadGrid");
		   }
		   
		   //reload control tab
		   if (ui.index == 2)
		   {$("#WorksControl").trigger("reloadGrid");
		   }
		   
		   //reload reward tab
		   if (ui.index == 3)
		   {$("#PersonalReward").trigger("reloadGrid");
		   $("#EmployeesReward").trigger("reloadGrid");
		   }
	   }
	});	
	});
	$(function (){            
			$(".worktimer").everyTime(1000,function(i) {
			var h=0; var m=0; var s=0;
			h = truncate(i/3600);
			m = truncate((i - h*3600)/60);
			s = i - h*3600 - m*60;
			if (s<10){
			s = "0"+s;}
			if (m<10){
			m = "0"+m;}
				$(this).text(h+":"+m+":"+s);
			});
	});
	function truncate(n) {
	  return n | 0;
	};