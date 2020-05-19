/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#design_patterns_page_button').click();
    overviewOfTheSixPrinciplesChart();
});

/**
 * 六大原则概览图表
 */
function overviewOfTheSixPrinciplesChart() {
    var overviewOfTheSixPrinciplesChart = $('#overviewOfTheSixPrinciples');
    overviewOfTheSixPrinciplesChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(overviewOfTheSixPrinciplesChart[0], 'macarons');
    myChart.on('mouseover', function (params) {
        switch (params.name) {
            case '单一职责原则':
                layerTips('Single Responsibility Principle (SRP)', overviewOfTheSixPrinciplesChart);
                break;
            case '里氏替换原则':
                layerTips('Liskov Substitution Principle (LSP)', overviewOfTheSixPrinciplesChart);
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
    myChart.on('click', function (params) {
        switch (params.name) {
            case '单一职责原则':
                layerCapture('sixPrinciples_SRP', 0, 60, 60);
                break;
            case '里氏替换原则':
                layerCapture('sixPrinciples_LSP', 0, 60, 60);
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
            text: '六大原则概览',
            subtext: '《设计模式之禅》-P1',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
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
        legend: {
            bottom: 10,
            left: 'center',
            data: ['单一职责原则', '里氏替换原则', '依赖倒置原则', '接口隔离原则', '迪米特法则', '开闭原则'],
            textStyle: {
                fontSize: 15
            }
        },
        series: [
            {
                type: 'pie',
                radius: '75%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                    {value: 1, name: '单一职责原则'},
                    {value: 1, name: '里氏替换原则'},
                    {value: 1, name: '依赖倒置原则'},
                    {value: 1, name: '接口隔离原则'},
                    {value: 1, name: '迪米特法则'},
                    {value: 1, name: '开闭原则'}
                ],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 15
                        }
                    }
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
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