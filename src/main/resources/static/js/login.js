


// 图片切换特效
/*
 * $(function(){ $(".screenbg ul li").each(function(){
 * $(this).css("opacity","0"); }); $(".screenbg ul
 * li:first").css("opacity","1"); var index = 0; var t; var li = $(".screenbg ul
 * li"); var number = li.size(); function change(index){
 * li.css("visibility","visible");
 * li.eq(index).siblings().animate({opacity:0},3000);
 * li.eq(index).animate({opacity:1},3000); } function show(){ index = index + 1;
 * if(index<=number-1){ change(index); }else{ index = 0; change(index); } } t =
 * setInterval(show,5000); //根据窗口宽度生成图片宽度 var width = $(window).width();
 * $(".screenbg ul img").css("width",width+"px"); });
 */















// 弹框特效
// 回调函数可以直接写方法function(){}
/*
 * $("#delete").bind("click", function () { $.MsgBox.Confirm("温馨提示",
 * "执行删除后将无法恢复，确定继续吗？温馨提示", function () { alert("你居然真的删除了..."); }); });
 */
function test() {
    alert("你点击了确定,重新进行认证");
}
// 也可以传方法名 test
$("#update").bind("click", function() {
    $.MsgBox.Confirm("温馨提示", "确定要进行修改吗？", test);
});
// 当然你也可以不给回调函数,点击确定后什么也不做，只是关闭弹出层
// $("#update").bind("click", function () { $.MsgBox.Confirm("温馨提示",
// "确定要进行修改吗？"); });


$(function() {
    $.MsgBox = {
        Alert: function(title, msg) {
            GenerateHtml("alert", title, msg);
            btnOk(); // alert只是弹出消息，因此没必要用到回调函数callback
            btnNo();
        },
        Confirm: function(title, msg, callback) {
            GenerateHtml("confirm", title, msg);
            btnOk(callback);
            btnNo();
        }
    }
    // 生成Html
    var GenerateHtml = function(type, title, msg) {
        var _html = "";
        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
        _html += '<a id="mb_ico">x</a><div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
        if (type == "alert") {
            _html += '<input id="mb_btn_ok" type="button" value="确定" />';
        }
        if (type == "confirm") {
            _html += '<input id="mb_btn_ok" type="button" value="确定" />';
            _html += '<input id="mb_btn_no" type="button" value="取消" />';
        }
        _html += '</div></div>';
        // 必须先将_html添加到body，再设置Css样式
        $("body").append(_html);
        // 生成Css
        GenerateCss();
    }

    // 生成Css
    var GenerateCss = function() {
        $("#mb_box").css({
            width: '100%',
            height: '100%',
            zIndex: '99999',
            position: 'fixed',
            filter: 'Alpha(opacity=60)',
            backgroundColor: 'black',
            top: '0',
            left: '0',
            opacity: '0.6'
        });
        $("#mb_con").css({
            zIndex: '999999',
            width: '400px',
            position: 'fixed',
            backgroundColor: 'White',
            borderRadius: '15px'
        });
        $("#mb_tit").css({
            display: 'block',
            fontSize: '14px',
            color: '#444',
            padding: '10px 15px',
            backgroundColor: '#DDD',
            borderRadius: '15px 15px 0 0',
            borderBottom: '3px solid #009BFE',
            fontWeight: 'bold'
        });
        $("#mb_msg").css({
            padding: '20px',
            lineHeight: '20px',
            borderBottom: '1px dashed #DDD',
            fontSize: '13px'
        });
        $("#mb_ico").css({
            display: 'block',
            position: 'absolute',
            right: '10px',
            top: '9px',
            border: '1px solid Gray',
            width: '18px',
            height: '18px',
            textAlign: 'center',
            lineHeight: '16px',
            cursor: 'pointer',
            borderRadius: '12px',
            fontFamily: '微软雅黑'
        });
        $("#mb_btnbox").css({
            margin: '15px 0 10px 0',
            textAlign: 'center'
        });
        $("#mb_btn_ok,#mb_btn_no").css({
            width: '85px',
            height: '30px',
            color: 'white',
            border: 'none'
        });
        $("#mb_btn_ok").css({
            backgroundColor: '#168bbb'
        });
        $("#mb_btn_no").css({
            backgroundColor: 'gray',
            marginLeft: '20px'
        });
        // 右上角关闭按钮hover样式
        $("#mb_ico").hover(function() {
            $(this).css({
                backgroundColor: 'Red',
                color: 'White'
            });
        }, function() {
            $(this).css({
                backgroundColor: '#DDD',
                color: 'black'
            });
        });
        var _widht = document.documentElement.clientWidth; // 屏幕宽
        var _height = document.documentElement.clientHeight; // 屏幕高
        var boxWidth = $("#mb_con").width();
        var boxHeight = $("#mb_con").height();
        // 让提示框居中
        $("#mb_con").css({
            top: (_height - boxHeight) / 2 + "px",
            left: (_widht - boxWidth) / 2 + "px"
        });
    }
    // 确定按钮事件
    var btnOk = function(callback) {
        $("#mb_btn_ok").click(function() {
            $("#mb_box,#mb_con").remove();
            if (typeof(callback) == 'function') {
                callback();
            }
        });
    }
    // 取消按钮事件
    var btnNo = function() {
        $("#mb_btn_no,#mb_ico").click(function() {
            $("#mb_box,#mb_con").remove();
        });
    }
})();