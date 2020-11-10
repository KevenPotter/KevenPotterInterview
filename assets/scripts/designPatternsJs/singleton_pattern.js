/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#design_patterns_page_button').click();
    // 单例模式的定义提示
    singletonPatternDefinitionTips();
    // 单例模式种类图表
    singletonPatternTypesChart();
    // 单例模式通用类图放大镜
    singletonPatternGenericClassDiagram();
    // 单例模式的优缺点图表
    the_advantages_and_disadvantages_of_the_singleton_pattern_chart();
});

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
 * 单例模式的定义提示
 */
function singletonPatternDefinitionTips() {
    $('#singleton_pattern_definition_tips').mouseover(function () {
        layer.tips('确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例。', $('#singleton_pattern_definition_tips'), {tips: 3});
    });
}

/**
 * 单例模式通用类图放大镜
 */
function singletonPatternGenericClassDiagram() {
    $('#singleton_pattern_generic_class_diagram').blowup({
        "cursor": false,
        "width": 300,
        "height": 300
    });
}

/**
 * 单例模式的优缺点图表
 */
function the_advantages_and_disadvantages_of_the_singleton_pattern_chart() {
    var the_advantages_and_disadvantages_of_the_singleton_pattern_chart = $('#the_advantages_and_disadvantages_of_the_singleton_pattern');
    the_advantages_and_disadvantages_of_the_singleton_pattern_chart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(the_advantages_and_disadvantages_of_the_singleton_pattern_chart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '减少内存开支':
                layerCapture('singleton_mode_advantages_reduce_memory_expenses', 10000, 40, 20);
                break;
            case '减少系统性能开销':
                layerCapture('singleton_mode_advantages_reduce_system_performance_overhead', 10000, 40, 20);
                break;
            case '避免资源多重占用':
                layerCapture('singleton_mode_advantages_avoid_multiple_resources', 10000, 40, 20);
                break;
            case '优化共享资源访问':
                layerCapture('singleton_mode_advantages_avoid_multiple_resources_optimize_access_to_shared_resources', 10000, 40, 20);
                break;
            case '扩展困难':
                layerCapture('singleton_pattern_disadvantages_difficult_to_expand', 10000, 40, 20);
                break;
            case '对测试不利':
                layerCapture('singleton_pattern_disadvantages_not_good_for_testing', 10000, 40, 20);
                break;
            case '与SRP有冲突':
                layerCapture('singleton_pattern_disadvantages_conflict_with_SRP', 10000, 40, 20);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '单例模式的优缺点',
            subtext: '《设计模式之禅》-P60',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['减少内存开支', '减少系统性能开销', '避免资源多重占用', '优化共享资源访问', '扩展困难', '对测试不利', '与SRP有冲突'],
            textStyle: {
                fontSize: 15
            }
        },
        toolbox: {
            show: true,
            feature: {
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        series: [
            {
                name: '优点',
                type: 'pie',
                radius: [20, 110],
                center: ['25%', '50%'],
                roseType: 'radius',
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 15
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    {value: 1, name: '减少内存开支'},
                    {value: 2, name: '减少系统性能开销'},
                    {value: 3, name: '避免资源多重占用'},
                    {value: 4, name: '优化共享资源访问'}
                ]
            },
            {
                name: '缺点',
                type: 'pie',
                radius: [30, 110],
                center: ['75%', '50%'],
                roseType: 'area',
                data: [
                    {value: 1, name: '扩展困难'},
                    {value: 2, name: '对测试不利'},
                    {value: 3, name: '与SRP有冲突'}
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    resize(myChart);
    $('#singleton_pattern_generic_class_diagram_panel_body')
        .css('padding-top', $('#the_advantages_and_disadvantages_of_the_singleton_pattern_panel_body').height() / 4)
        .css('padding-left', $('#the_advantages_and_disadvantages_of_the_singleton_pattern_panel_body').width() / 5)
        .css('height', $('#the_advantages_and_disadvantages_of_the_singleton_pattern_panel_body').height());
}