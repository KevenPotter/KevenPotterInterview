/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#design_patterns_page_button').click();
    // 工厂方法模式的定义提示
    factoryMethodPatternDefinitionTips();
    // 工厂方法模式通用模板图表
    general_template_for_factory_method_pattern_chart();
    // 工厂方法模式通用类图放大镜
    factoryMethodPatternGenericClassDiagram();
    // 抽象工厂模式的优缺点图表
    the_advantages_and_disadvantages_of_the_abstract_factory_pattern_chart();
    // 工厂方法模式的扩展图表
    extension_of_the_factory_method_pattern_chart();
});

/**
 * 工厂方法模式通用模板图表
 */
function general_template_for_factory_method_pattern_chart() {
    var general_template_for_factory_method_pattern_chart = $('#general_template_for_factory_method_pattern');
    general_template_for_factory_method_pattern_chart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(general_template_for_factory_method_pattern_chart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'Product':
                layerCapture('factory_method_pattern_abstract_product', 0, 60, 40);
                break;
            case 'ConcreteProduct1':
                layerCapture('factory_method_pattern_concrete_product_1', 0, 60, 40);
                break;
            case 'ConcreteProduct2':
                layerCapture('factory_method_pattern_concrete_product_2', 0, 60, 40);
                break;
            case 'Creator':
                layerCapture('factory_method_pattern_abstract_creator', 0, 60, 40);
                break;
            case 'ConcreteCreator':
                layerCapture('factory_method_pattern_concrete_creator', 0, 60, 40);
                break;
            case 'Client':
                layerCapture('factory_method_pattern_client', 0, 60, 40);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '工厂方法模式通用模板',
            subtext: '《设计模式之禅》-P69',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
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
        series: [{
            type: 'treemap',
            data: [{
                name: 'Product',
                value: 7,
                children: [{
                    name: 'Product',
                    value: 2
                }, {
                    name: 'ConcreteProduct1',
                    value: 3
                }, {
                    name: 'ConcreteProduct2',
                    value: 2
                }]
            }, {
                name: 'Creator',
                value: 3,
                children: [{
                    name: 'Creator',
                    value: 1
                }, {
                    name: 'ConcreteCreator',
                    value: 2
                }]
            }, {
                name: 'Client',
                value: 1,
                children: [{
                    name: 'Client',
                    value: 1
                }]
            }],
            "label": {
                "normal": {
                    "textStyle": {
                        "fontSize": 20
                    }
                }
            }
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    resize(myChart);
}

/**
 * 工厂方法模式的定义提示
 */
function factoryMethodPatternDefinitionTips() {
    $('#factory_method_pattern_definition_tips').mouseover(function () {
        layer.tips('定义一个用于创建对象的接口，让子类决定实例化哪一个类。工厂方法使一个类的实例化延迟到其子类。', $('#factory_method_pattern_definition_tips'), {tips: 3});
    });
}

/**
 * 工厂方法模式通用类图放大镜
 */
function factoryMethodPatternGenericClassDiagram() {
    $('#factory_method_pattern_generic_class_diagram').blowup({
        "cursor": false,
        "width": 300,
        "height": 300
    });
}

/**
 * 抽象工厂模式的优缺点图表
 */
function the_advantages_and_disadvantages_of_the_abstract_factory_pattern_chart() {
    var the_advantages_and_disadvantages_of_the_abstract_factory_pattern_chart = $('#the_advantages_and_disadvantages_of_the_abstract_factory_pattern');
    the_advantages_and_disadvantages_of_the_abstract_factory_pattern_chart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(the_advantages_and_disadvantages_of_the_abstract_factory_pattern_chart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '良好的封装性':
                layerCapture('abstract_factory_mode_advantages_good_encapsulation', 10000, 40, 20);
                break;
            case '产品族内的约束为非公开状态':
                layerCapture('abstract_factory_mode_advantages_the_constraints_within_the_product_family_are_private', 10000, 40, 20);
                break;
            case '扩展困难':
                layerCapture('abstract_factory_mode_disadvantages_difficult_to_expand', 10000, 40, 20);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '抽象工厂模式的优缺点',
            subtext: '《设计模式之禅》-P86',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['良好的封装性', '产品族内的约束为非公开状态', '扩展困难'],
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
                    {value: 1, name: '良好的封装性'},
                    {value: 2, name: '产品族内的约束为非公开状态'}
                ]
            }, {
                name: '缺点',
                type: 'pie',
                radius: [30, 110],
                center: ['75%', '50%'],
                roseType: 'area',
                data: [
                    {value: 1, name: '扩展困难'}
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    resize(myChart);
    $('#factory_method_pattern_generic_class_diagram_panel_body')
        .css('padding-top', $('#the_advantages_and_disadvantages_of_the_abstract_factory_pattern_panel_body').height() / 4)
        .css('padding-left', $('#the_advantages_and_disadvantages_of_the_abstract_factory_pattern_panel_body').width() / 5)
        .css('height', $('#the_advantages_and_disadvantages_of_the_abstract_factory_pattern_panel_body').height());
}

/**
 * 工厂方法模式的扩展图表
 */
function extension_of_the_factory_method_pattern_chart() {
    var extension_of_the_factory_method_pattern_chart = $('#extension_of_the_factory_method_pattern');
    extension_of_the_factory_method_pattern_chart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(extension_of_the_factory_method_pattern_chart[0], 'macarons');
    var option = null;
    option = {
        title: {
            text: '工厂方法模式的扩展',
            subtext: '《设计模式之禅》-P71',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['缩小为简单工厂模式', '升级为多个工厂类', '替代单例模式', '延迟初始化'],
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
                name: '工厂方法模式的扩展',
                type: 'pie',
                roseType: 'area',
                data: [
                    {value: 1, name: '缩小为简单工厂模式'},
                    {value: 1, name: '升级为多个工厂类'},
                    {value: 1, name: '替代单例模式'},
                    {value: 1, name: '延迟初始化'}
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    resize(myChart);
    $('#factory_method_pattern_usage_scenarios_panel_body')
        .css('padding-top', $('#extension_of_the_factory_method_pattern_panel_body').height() / 4)
        .css('height', $('#extension_of_the_factory_method_pattern_panel_body').height());
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