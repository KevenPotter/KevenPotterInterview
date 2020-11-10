/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#design_patterns_page_button').click();
    // 抽象工厂模式的定义提示
    abstractFactoryPatternDefinitionTips();
    // 抽象工厂模式通用模板图表
    general_template_for_abstract_factory_pattern_chart();
    // 抽象工厂模式通用类图放大镜
    abstract_factory_method_pattern_generic_class_diagram();
    // 抽象工厂模式的优缺点图表
    the_advantages_and_disadvantages_of_the_abstract_factory_pattern_chart();
});

/**
 * 抽象工厂模式通用模板图表
 */
function general_template_for_abstract_factory_pattern_chart() {
    var general_template_for_abstract_factory_pattern_chart = $('#general_template_for_abstract_factory_pattern');
    general_template_for_abstract_factory_pattern_chart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(general_template_for_abstract_factory_pattern_chart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'AbstractProductA':
                layerCapture('abstract_factory_pattern_abstract_product_A', 0, 60, 40);
                break;
            case 'ProductA1':
                layerCapture('abstract_factory_pattern_concrete_product_A1', 0, 60, 40);
                break;
            case 'ProductA2':
                layerCapture('abstract_factory_pattern_concrete_product_A2', 0, 60, 40);
                break;
            case 'AbstractProductB':
                layerCapture('abstract_factory_pattern_abstract_product_B', 0, 60, 40);
                break;
            case 'ProductB1':
                layerCapture('abstract_factory_pattern_concrete_product_B1', 0, 60, 40);
                break;
            case 'ProductB2':
                layerCapture('abstract_factory_pattern_concrete_product_B2', 0, 60, 40);
                break;
            case 'AbstractCreator':
                layerCapture('abstract_factory_pattern_abstract_creator', 0, 60, 40);
                break;
            case 'Creator1':
                layerCapture('abstract_factory_pattern_concrete_creator1', 0, 60, 40);
                break;
            case 'Creator2':
                layerCapture('abstract_factory_pattern_concrete_creator2', 0, 60, 40);
                break;
            case 'Client':
                layerCapture('abstract_factory_pattern_client', 0, 60, 50);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '抽象工厂模式通用模板',
            subtext: '《设计模式之禅》-P84',
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
                name: 'AbstractCreator',
                value: 5,
                children: [{
                    name: 'Creator2',
                    value: 2
                }, {
                    name: 'Creator1',
                    value: 2
                }, {
                    name: 'AbstractCreator',
                    value: 1
                }]
            }, {
                name: 'AbstractProductB',
                value: 7,
                children: [{
                    name: 'ProductB1',
                    value: 3
                }, {
                    name: 'AbstractProductB',
                    value: 2
                }, {
                    name: 'ProductB2',
                    value: 2
                }]
            }, {
                name: 'AbstractProductA',
                value: 7,
                children: [{
                    name: 'ProductA1',
                    value: 3
                }, {
                    name: 'AbstractProductA',
                    value: 2
                }, {
                    name: 'ProductA2',
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
 * 抽象工厂模式的定义提示
 */
function abstractFactoryPatternDefinitionTips() {
    $('#abstract_factory_pattern_definition_tips').mouseover(function () {
        layer.tips('为创建一组相关或相互依赖的对象提供一个接口，而且无需指定它们的具体类。', $('#abstract_factory_pattern_definition_tips'), {tips: 3});
    });
}

/**
 * 抽象工厂模式通用类图放大镜
 */
function abstract_factory_method_pattern_generic_class_diagram() {
    $('#abstract_factory_pattern_generic_class_diagram').blowup({
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
    $('#abstract_factory_pattern_generic_class_diagram_panel_body')
        .css('padding-top', $('#the_advantages_and_disadvantages_of_the_abstract_factory_pattern_panel_body').height() / 4)
        .css('padding-left', $('#the_advantages_and_disadvantages_of_the_abstract_factory_pattern_panel_body').width() / 5)
        .css('height', $('#the_advantages_and_disadvantages_of_the_abstract_factory_pattern_panel_body').height());
}