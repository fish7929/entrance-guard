$(document).ready(function(){
    $("#exit_tab").click(function(){
        $("#afui").popup({
        title: "请确认",
        message: "您是否要退出应用？",
        cancelText: "取消",
        cancelCallback: function () {
            console.log("cancelled");
        },
        doneText: "确认",
        doneCallback: function () {
            console.log("Done for!");
        },
        cancelOnly: false
    });
    })

});
