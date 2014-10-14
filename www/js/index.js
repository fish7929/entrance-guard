$(document).ready(function(){
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
            console.log("Done for!");
        },
        cancelOnly: false
    });
    })

});
