/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#design_patterns_page_button').click();
    overviewOfTheSixPrinciplesChart();
    sixPrinciples_ISP_type_of_interfaceChart();
    design_patterns_overview_chart();
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
            case '依赖倒置原则':
                layerTips('Dependence Inversion Principle (DIP)', overviewOfTheSixPrinciplesChart);
                break;
            case '接口隔离原则':
                layerTips('Interface Segregation Principle (ISP)', overviewOfTheSixPrinciplesChart);
                break;
            case '迪米特法则':
                layerTips('Law of Demeter (LoD)<br>Least Knowledge Principle (LKP)', overviewOfTheSixPrinciplesChart);
                break;
            case '开闭原则':
                layerTips('Open Close Principle (OCP)', overviewOfTheSixPrinciplesChart);
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
            case '依赖倒置原则':
                layerCapture('sixPrinciples_DIP', 0, 60, 70);
                break;
            case '接口隔离原则':
                layerCapture('sixPrinciples_ISP', 0, 60, 70);
                break;
            case '迪米特法则':
                layerCapture('sixPrinciples_LoD', 0, 60, 70);
                break;
            case '开闭原则':
                layerCapture('sixPrinciples_OCP', 0, 60, 70);
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
 * 接口隔离原则-接口的类型图表
 */
function sixPrinciples_ISP_type_of_interfaceChart() {
    var sixPrinciples_ISP_type_of_interfaceChart = $('#sixPrinciples_ISP_type_of_interface');
    sixPrinciples_ISP_type_of_interfaceChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(sixPrinciples_ISP_type_of_interfaceChart[0], 'macarons');
    var option = null;
    option = {
        title: {
            text: '接口隔离原则-接口的类型',
            subtext: '《设计模式之禅》-P28',
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
            data: ['实例接口（Object Interface）', '类接口（Class Interface）'],
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
                    {value: 1, name: '实例接口（Object Interface）'},
                    {value: 1, name: '类接口（Class Interface）'}
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
 * 设计模式概览图表
 */
function design_patterns_overview_chart() {
    var design_patterns_overview_chart = $('#design_patterns_overview');
    design_patterns_overview_chart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(design_patterns_overview_chart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '单例模式':
                layerCapture('design_patterns_singleton_pattern', 0, 40, 20);
                break;
            case '工厂方法模式':
                layerCapture('design_patterns_factory_method_pattern', 0, 40, 30);
                break;
            case '抽象工厂模式':
                layerCapture('design_patterns_abstract_factory_pattern', 0, 40, 30);
                break;
            case '模板方法模式':
                layerCapture('design_patterns_template_method_pattern', 0, 40, 30);
                break;
            case '建造者模式':
                layerCapture('design_patterns_builder_pattern', 0, 40, 30);
                break;
            case '代理模式':
                layerCapture('design_patterns_proxy_pattern', 0, 40, 25);
                break;
            case '原型模式':
                layerCapture('design_patterns_prototype_pattern', 0, 40, 25);
                break;
            case '中介者模式':
                layerCapture('design_patterns_mediator_pattern', 0, 40, 30);
                break;
            case '命令模式':
                layerCapture('design_patterns_command_pattern', 0, 40, 30);
                break;
            case '责任链模式':
                layerCapture('design_patterns_chain_of_responsibility_pattern', 0, 40, 30);
                break;
            case '装饰模式':
                layerCapture('design_patterns_decorator_pattern', 0, 40, 30);
                break;
            case '策略模式':
                layerCapture('design_patterns_strategy_pattern', 0, 40, 25);
                break;
            case '适配器模式':
                layerCapture('design_patterns_adapter_pattern', 0, 40, 30);
                break;
            case '迭代器模式':
                layerCapture('design_patterns_iterator_pattern', 0, 40, 30);
                break;
            case '组合模式':
                layerCapture('design_patterns_composite_pattern', 0, 40, 30);
                break;
            case '观察者模式':
                layerCapture('design_patterns_observer_pattern', 0, 40, 30);
                break;
            case '门面模式':
                layerCapture('design_patterns_facade_pattern', 0, 40, 30);
                break;
            case '备忘录模式':
                layerCapture('design_patterns_memento_pattern', 0, 40, 30);
                break;
            case '访问者模式':
                layerCapture('design_patterns_visitor_pattern', 0, 40, 30);
                break;
            case '状态模式':
                layerCapture('design_patterns_state_pattern', 0, 40, 30);
                break;
            case '解释器模式':
                layerCapture('design_patterns_interpreter_pattern', 0, 40, 30);
                break;
            case '享元模式':
                layerCapture('design_patterns_flyweight_pattern', 0, 40, 25);
                break;
            case '桥梁模式':
                layerCapture('design_patterns_bridge_pattern', 0, 40, 25);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '设计模式概览',
            subtext: '《设计模式之禅》-目录',
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
            data: [
                '单例模式', '工厂方法模式', '抽象工厂模式', '模板方法模式', '建造者模式', '代理模式', '原型模式', '中介者模式',
                '命令模式', '责任链模式', '装饰模式', '策略模式', '适配器模式', '迭代器模式', '组合模式', '观察者模式',
                '门面模式', '备忘录模式', '访问者模式', '状态模式', '解释器模式', '享元模式', '桥梁模式'],
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
                    {value: 1, name: '单例模式'},
                    {value: 1, name: '工厂方法模式'},
                    {value: 1, name: '抽象工厂模式'},
                    {value: 1, name: '模板方法模式'},
                    {value: 1, name: '建造者模式'},
                    {value: 1, name: '代理模式'},
                    {value: 1, name: '原型模式'},
                    {value: 1, name: '中介者模式'},
                    {value: 1, name: '命令模式'},
                    {value: 1, name: '责任链模式'},
                    {value: 1, name: '装饰模式'},
                    {value: 1, name: '策略模式'},
                    {value: 1, name: '适配器模式'},
                    {value: 1, name: '迭代器模式'},
                    {value: 1, name: '组合模式'},
                    {value: 1, name: '观察者模式'},
                    {value: 1, name: '门面模式'},
                    {value: 1, name: '备忘录模式'},
                    {value: 1, name: '访问者模式'},
                    {value: 1, name: '状态模式'},
                    {value: 1, name: '解释器模式'},
                    {value: 1, name: '享元模式'},
                    {value: 1, name: '桥梁模式'}
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