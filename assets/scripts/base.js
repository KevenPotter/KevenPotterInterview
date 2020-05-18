/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
});

/*layer提示icon*/
var GREEN_CHECK_MARK = 1;
var RED_ERROR_MARK = 2;
var YELLOW_QUESTION_MARK = 3;
var GRAY_LOCKING_MARK = 4;
var RED_CRYING_MARK = 5;
var GREEN_SMILE_MARK = 6;

/**
 * @param msg 日志消息
 * @author KevenPotter
 * @date 2020-01-06 16:32:03
 * @description 进行日志记录,将结果输出到控制台上
 */
function log(msg) {
    console.log(msg);
}