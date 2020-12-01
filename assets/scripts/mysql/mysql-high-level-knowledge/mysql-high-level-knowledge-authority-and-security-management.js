/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_high_level_button').click();
    createTriggerChart();
    viewTriggerChart();
});

/**
 * 触发器简介提示
 */
function introductionToTriggersTips() {
    layerTips('MySQL的触发器和存储过程一样，都是嵌入到MySQL的一段程序。触发器是由事件来触发某个操作，这些事件包括INSERT、UPDATE和DELETE语句。<br/>如果定义了触发程序，当数据库执行这些语句的时候就会激发触发器执行相应的操作，触发程序是与表有关的命名数据库对象，当表上出现特定事件时，将激活该对象。', $('#trigger_page_title'));
}

/**
 * 创建触发器提示
 */
function createTriggerTips() {
    layerCapture('create_trigger_tips', 0, 35, 19);
}

/**
 * 创建触发器图表
 */
function createTriggerChart() {
    var createTriggerChart = $('#create_trigger');
    createTriggerChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(createTriggerChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '一个执行语句':
                layerCapture('create_trigger_an_execution_statement', 0, 40, 70);
                break;
            case '多个执行语句':
                layerCapture('create_trigger_multiple_execution_statements', 0, 40, 70);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '创建触发器',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P327',
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
            data: ['一个执行语句', '多个执行语句'],
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
                    {value: 1, name: '一个执行语句'},
                    {value: 1, name: '多个执行语句'}
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
 * 查看触发器提示
 */
function viewTriggerTips() {
    layerCapture('view_trigger_tips', 0, 35, 15);
}

/**
 * 查看触发器图表
 */
function viewTriggerChart() {
    var viewTriggerChart = $('#view_trigger');
    viewTriggerChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(viewTriggerChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'SHOW TRIGGERS':
                layerCapture('view_trigger_show_triggers', 0, 40, 70);
                break;
            case 'information_schema.TRIGGERS':
                layerCapture('view_trigger_information_schema_triggers', 0, 40, 70);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '查看触发器',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P331',
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
            data: ['SHOW TRIGGERS', 'information_schema.triggers'],
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
                    {value: 1, name: 'SHOW TRIGGERS'},
                    {value: 1, name: 'information_schema.TRIGGERS'}
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