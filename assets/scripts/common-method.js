//
var windowHeight = $(window).height();
var windowWidth = $(window).width();
$(document).ready(function () {
    windowHeight = $(window).height();
    windowWidth = $(window).width();
});


/**
 * @param element bootstrap-select元素
 * @author KevenPotter
 * @date 2019-12-09 13:40:49
 * @description 重新渲染bootstrap-select元素的内容
 */
function bootstrapSelectFlush(element) {
    $('.selectpicker').selectpicker({
        dropupAuto: false
    });
    element.selectpicker("refresh");
    element.selectpicker("render");
}

/**
 * @param element HTML元素
 * @author KevenPotter
 * @date 2019-11-25 22:45:16
 * @description 清空元素的标签内容
 */
function clearHtml(element) {
    element.html("");
}

/**
 * @param element HTML元素
 * @author KevenPotter
 * @date 2020-01-17 14:18:35
 * @description 清空元素的标签值内容
 */
function clearValue(element) {
    element.val("");
}

/**
 * @param parameter 验证参数
 * @returns boolean
 * @author KevenPotter
 * @date 2019-12-17 16:50:37
 * @description 此方法旨在对参数进行非空验证
 */
function isEmpty(parameter) {
    return "" == parameter || null == parameter || undefined == parameter || "null" == parameter;

}

/**
 * @param msg 提示消息
 * @param icon 显示图标
 * @param time 显示时长(毫秒)
 * @author KevenPotter
 * @date 2019-12-18 23:19:25
 * @description 该方法旨在封装了layer插件的msg提示消息,使其使用方式更加便捷
 */
function layerMsg(msg, icon, time) {
    if (isEmpty(msg)) msg = "你好，很高兴认识你";
    if (isEmpty(icon)) icon = GREEN_CHECK_MARK;
    if (isEmpty(time)) time = 3000;
    layer.msg(msg, {icon: icon, time: time});
}

/**
 * @param id 捕获页的id值
 * @param time 显示时长(毫秒)
 * @param widePercentage 宽度百分比
 * @param highPercentage 高度百分比
 * @author KevenPotter
 * @date 2020-05-12 15:14:25
 * @description 该方法旨在封装了layer插件的捕获页提示消息,使其使用方式更加便捷
 */
function layerCapture(id, time, widePercentage, highPercentage) {
    layer.open({
        type: 1,
        shade: false,
        title: false,
        content: $('#' + id + ''),
        area: [widePercentage / 100 * windowWidth + 'px', highPercentage / 100 * windowHeight + 'px'],
        time: time,
        anim: 4,
        move: true
    });
}

/**
 * @param context 提示消息
 * @param id 元素ID值
 * @param time 显示时长(毫秒)
 * @author KevenPotter
 * @date 2020-05-19 20:25:59
 * @description 该方法旨在封装了layer插件的提示框消息,使其使用方式更加便捷
 */
function layerTips(context, id, time) {
    if (null == time) time = 3000;
    layer.tips(context, id, {
        tips: [2, '#008B45'],
        time: time
    });
}

/**
 * @param object
 * @author KevenPotter
 * @date 2020-01-10 08:50:40
 * @description 该方法旨在将对象转化为可用于传参的字符串型对象
 */
function toObjectString(object) {
    return JSON.stringify(object).replace(/\"/g, "'");
}

/**
 * @param divElement div边界框
 * @param spanElement span图标
 * @author KevenPotter
 * @date 2019-12-17 22:22:27
 * @description 此方法旨在[div边界框]和[span图标]进行成功样式的添加
 */
function addSuccessStyle(divElement, spanElement) {
    if (!isEmpty(divElement)) {
        divElement.removeClass("has-error has-feedback").addClass("has-success has-feedback");
    }
    if (!isEmpty(spanElement)) {
        spanElement.removeClass("glyphicon glyphicon-remove form-control-feedback").addClass("glyphicon glyphicon-ok form-control-feedback");
    }
}

/**
 * @param divElement div边界框
 * @param spanElement span图标
 * @author KevenPotter
 * @date 2019-12-17 22:23:11
 * @description 此方法旨在[div边界框]和[span图标]进行失败样式的添加
 */
function addErrorStyle(divElement, spanElement) {
    if (!isEmpty(divElement)) {
        divElement.removeClass("has-success has-feedback").addClass("has-error has-feedback");
    }
    if (!isEmpty(spanElement)) {
        spanElement.removeClass("glyphicon glyphicon-ok form-control-feedback").addClass("glyphicon glyphicon-remove form-control-feedback");
    }
}

/**
 * @param ECharts 图表
 * @author KevenPotter
 * @date 2020-02-08 18:08:32
 * @description 依据浏览器大小重新定义图表尺寸
 */
function resize(ECharts) {
    $(window).resize(function () {
        ECharts.resize();
    });
}