$(document).ready(function(){
//退出确认
    $("#exit_tab").click(function(){
        $("#afui").popup({
        title: "请确认",
        message: "您是否要退出应用？",
        cancelText: "取消",
        cancelCallback: function () {
			$("#exit_tab").removeClass("pressed");
			//选取前一个tab的id（window.location.hash+"_tab"）
			$(window.location.hash+"_tab").addClass("pressed");
        },
        doneText: "确认",
        doneCallback: function () {
             navigator.app.exitApp();
        },
        cancelOnly: false
    });
    });
//添加用户
		$('#addconfirm').click(function() {
		var newtr = '<tr><td></td><td></td><td></td></tr>';
		$("table").append(newtr);
		$('table tr:last td:eq(0)').html($("#addtype").val());
		$('table tr:last td:eq(1)').html($("#addname").val());
		$('table tr:last td:eq(2)').html($("#addno").val());
		
    $("#afui").popup({
    title: "添加成功",
    message: "是否继续添加？",
    cancelText: "结束",
    cancelCallback: function () {
    	$.ui.hideModal();
    	$("#addname").val("");
    	$("#addno").val("");
    },
    doneText: "继续",
    doneCallback: function () {
    	$("#addname").val("");
    	$("#addno").val("");   
    },
    cancelOnly: false
		});	
		
	});
//删除用户
		$("#delete tbody tr").click(function (){
				$(this).toggleClass("trSelected");
		});
		$("#SelectAll").click(function () {
			$("tbody tr").removeClass("trSelected").addClass("trSelected")
		});
			
		$('#RemoveUser').click(function() {
				$("tr.trSelected").remove();	
		});
//修改信息
  	$('#modify tbody td:nth-child(2)').bind("doubleTap",function(){   
		$(this).html('<input type="text" value="'+ $(this).text() +'" />').find('input').focus().blur(function(){          
            $(this).parent().html($(this).val());
    });                        
        
});
});
				
   
