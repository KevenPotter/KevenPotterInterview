/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_advanced_button').click();
    storedProcedurePageTitleTips();
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