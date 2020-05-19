/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#design_patterns_page_button').click();
    singletonPatternTypesChart();
});

/*************************************************************系部信息开始**********************************************************/

/**
 * 单例模式种类图表
 */
function singletonPatternTypesChart() {
    var singletonPatternTypesChart = $('#singletonPatternTypes');
    singletonPatternTypesChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(singletonPatternTypesChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '静态常量':
                layerCapture('singletonPattern_staticConstant', 0, 60, 70);
                break;
            case '静态代码块':
                layerCapture('singletonPattern_staticCodeBlock', 0, 60, 70);
                break;
            case '线程不安全':
                layerCapture('singletonPattern_threadUnsafe', 0, 60, 70);
                break;
            case '同步方法（线程安全）':
                layerCapture('singletonPattern_synchronizationMethod', 0, 60, 70);
                break;
            case '同步代码块（线程安全）':
                layerCapture('singletonPattern_synchronousCodeBlock', 0, 60, 70);
                break;
            case '双重检查':
                layerCapture('singletonPattern_doubleCheck', 0, 60, 70);
                break;
            case '静态内部类':
                layerCapture('singletonPattern_staticInnerClass', 0, 60, 60);
                break;
            case '枚举':
                layerCapture('singletonPattern_enumerate', 0, 60, 60);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '单例模式种类',
            subtext: '8种',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['静态常量', '静态代码块', '线程不安全', '同步方法（线程安全）', '同步代码块（线程安全）', '双重检查', '静态内部类', '枚举'],
            textStyle: {
                fontSize: 15
            }
        },
        toolbox: {
            show: true,
            feature: {
                restore: {
                    show: true
                },
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        series: [
            {
                name: '单例模式种类',
                type: 'pie',
                roseType: 'area',
                data: [
                    {value: 3, name: '静态常量'},
                    {value: 3, name: '静态代码块'},
                    {value: 1, name: '线程不安全'},
                    {value: 2, name: '同步方法（线程安全）'},
                    {value: 2, name: '同步代码块（线程安全）'},
                    {value: 4, name: '双重检查'},
                    {value: 4, name: '静态内部类'},
                    {value: 5, name: '枚举'}
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    resize(myChart);
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