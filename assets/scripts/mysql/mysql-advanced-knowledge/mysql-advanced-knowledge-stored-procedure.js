/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_advanced_button').click();
    storedProcedurePageTitleTips();
    useOfProcessControlChart();
    viewStoredProceduresAndFunctionsChart();
});

/**
 * 存储过程页面抬头提示
 */
function storedProcedurePageTitleTips() {
    var storedProcedurePageTitleTips = $('#stored_procedure_page_title_tips');
    storedProcedurePageTitleTips.on('mouseover', function (params) {
        layerTips('简单地说，存储过程就是一条或者多条SQL语句的集合，可视为批文件，但是其作用不仅限于批处理', storedProcedurePageTitleTips);
    });
}

/**
 * 创建存储过程和函数的提示
 */
function createStoredProcedureAndFunctionPanelTitleTips() {
    layerCapture('create_stored_procedure_and_function_panel_title_tips', 0, 30, 17);
}

/**
 * 创建存储过程-proc_parameter提示
 */
function createProcedureProcParameterTips() {
    layerCapture('create_procedure_proc_parameter_tips', 0, 30, 30);
}

/**
 * 创建存储过程-characteristics提示
 */
function createProcedureAndFunctionCharacteristicsTips() {
    layerCapture('create_procedure_and_function_characteristics_tips', 0, 45, 50);
}

/**
 * 创建存储函数-func_parameter提示
 */
function createFunctionFuncParameterTips() {
    layerCapture('create_function_func_parameter_tips', 0, 30, 30);
}

/**
 * 变量赋值提示
 */
function variableAssignmentSetTips() {
    layerCapture('variable_assignment_set_tips', 0, 30, 21);
}

/**
 * 定义条件和处理程序提示
 */
function defineConditionsAndProcessingProceduresTips() {
    layerCapture('define_conditions_and_processing_procedures_tips', 0, 30, 23);
}

/**
 * 定义条件-condition_type提示
 */
function defineConditionsConditionTypeTips() {
    layerCapture('define_conditions_condition_type_tips', 0, 30, 26);
}

/**
 * 定义处理程序-handler_type提示
 */
function defineHandlerHandlerTypeTips() {
    layerCapture('define_handler_handler_type_tips', 0, 30, 28);
}

/**
 * 定义处理程序-condition_value提示
 */
function defineHandlerConditionValueTips() {
    layerCapture('define_handler_condition_value_tips', 0, 30, 41);
}

/**
 * 光标的使用提示
 */
function useOfTheCursorTips() {
    layerCapture('use_of_the_cursor_tips', 0, 30, 19);
}

/**
 * 流程控制的使用提示
 */
function useOfProcessControlTips() {
    layerCapture('use_of_process_control_tips', 0, 30, 18);
}

/**
 * 流程控制的使用图表
 */
function useOfProcessControlChart() {
    var useOfProcessControlChart = $('#use_of_process_control');
    useOfProcessControlChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(useOfProcessControlChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'IF语句':
                layerCapture('use_of_process_control_if', 0, 40, 53);
                break;
            case 'CASE语句':
                layerCapture('use_of_process_control_case', 0, 40, 50);
                break;
            case 'LOOP语句':
                layerCapture('use_of_process_control_loop', 0, 40, 64);
                break;
            case 'LEAVE语句':
                layerCapture('use_of_process_control_leave', 0, 40, 51);
                break;
            case 'ITERATE语句':
                layerCapture('use_of_process_control_iterate', 0, 40, 56);
                break;
            case 'REPEAT语句':
                layerCapture('use_of_process_control_repeat', 0, 40, 62);
                break;
            case 'WHILE语句':
                layerCapture('use_of_process_control_while', 0, 40, 63);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '流程控制的使用',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P287',
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
            data: ['IF语句', 'CASE语句', 'LOOP语句', 'LEAVE语句', 'ITERATE语句', 'REPEAT语句', 'WHILE语句'],
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
                    {value: 1, name: 'IF语句'},
                    {value: 1, name: 'CASE语句'},
                    {value: 1, name: 'LOOP语句'},
                    {value: 1, name: 'LEAVE语句'},
                    {value: 1, name: 'ITERATE语句'},
                    {value: 1, name: 'REPEAT语句'},
                    {value: 1, name: 'WHILE语句'}
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
 * 调用存储过程和函数提示
 */
function callStoredProceduresAndFunctionsTips() {
    layerCapture('call_stored_procedures_and_functions_tips', 0, 30, 22);
}

/**
 * 查看存储过程和函数图表
 */
function viewStoredProceduresAndFunctionsChart() {
    var viewStoredProceduresAndFunctionsChart = $('#view_stored_procedures_and_functions');
    viewStoredProceduresAndFunctionsChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(viewStoredProceduresAndFunctionsChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'SHOW STATUS':
                layerCapture('view_stored_procedures_and_functions_show_status', 0, 40, 72);
                break;
            case 'SHOW CREATE':
                layerCapture('view_stored_procedures_and_functions_show_create', 0, 40, 69);
                break;
            case 'information_schema':
                layerCapture('view_stored_procedures_and_functions_information_schema', 0, 40, 70);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '查看存储过程和函数',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P293',
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
            data: ['SHOW STATUS', 'SHOW CREATE', 'information_schema'],
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
                    {value: 1, name: 'SHOW STATUS'},
                    {value: 1, name: 'SHOW CREATE'},
                    {value: 1, name: 'information_schema'}
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
 * 修改存储过程或函数-characteristics提示
 */
function modifyAStoredProcedureOrFunctionCharacteristicsTips() {
    layerCapture('modify_a_stored_procedure_or_function_characteristics_tips', 0, 30, 41);
}
