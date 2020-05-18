/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
});

/**
 * @param ECharts 图表
 * @author KevenPotter
 * @date 2019-12-20 14:58:45
 * @description 依据浏览器大小重新定义图表尺寸
 */
function resize(ECharts) {
    $(window).resize(function () {
        ECharts.resize();
    });
}