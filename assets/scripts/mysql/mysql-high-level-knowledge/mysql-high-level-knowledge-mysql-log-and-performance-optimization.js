/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_high_level_button').click();
    logClassificationChart();
    analyzeQueryStatementsChart();
    optimizeDatabaseStructureChart();
    optimizeMySQLServerChart();
});

/**
 * mysql日志与性能优化提示
 */
function mysqlLogAndPerformanceOptimizationTips() {
    layerCapture('mysql_log_and_performance_optimization_tips', 0, 40, 70);
}

/**
 * 日志分类提示
 */
function logClassificationTips() {
    layerCapture('log_classification_tips', 0, 40, 43);
}

/**
 * 日志分类图表
 */
function logClassificationChart() {
    var logClassificationChart = $('#log_classification');
    logClassificationChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(logClassificationChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '二进制日志':
                layerCapture('log_classification_binary_log', 0, 50, 70);
                break;
            case '错误日志':
                layerCapture('log_classification_error_log', 0, 50, 56);
                break;
            case '通用查询日志':
                layerCapture('log_classification_general_query_log', 0, 50, 70);
                break;
            case '慢查询日志':
                layerCapture('log_classification_slow_query_log', 0, 50, 70);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '日志分类',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P398',
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
            data: ['二进制日志', '错误日志', '通用查询日志', '慢查询日志'],
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
                    {value: 1, name: '二进制日志'},
                    {value: 1, name: '错误日志'},
                    {value: 1, name: '通用查询日志'},
                    {value: 1, name: '慢查询日志'}
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
 * 日志分类-二进制日志提示
 */
function logClassificationBinaryLogTips() {
    layerCapture('log_classification_binary_log_tips', 0, 40, 23);
}

/**
 * 日志分类-二进制日志-启动和设置二进制日志-log-bin提示
 */
function logClassificationBinaryLog1LogBinTips() {
    layerCapture('log_classification_binary_log_1_log_bin_tips', 0, 40, 27);
}

/**
 * 日志分类-二进制日志-使用二进制日志恢复数据库-mysqlbinlog-option提示
 */
function logClassificationBinaryLog4MysqlbinlogOptionTips() {
    layerCapture('log_classification_binary_log_4_mysqlbinlog_option_tips', 0, 40, 28);
}

/**
 * 日志分类-错误日志提示
 */
function logClassificationErrorLogTips() {
    layerCapture('log_classification_error_log_tips', 0, 40, 15);
}

/**
 * 日志分类-通用查询日志提示
 */
function logClassificationGeneralQueryLogTips() {
    layerCapture('log_classification_general_query_log_tips', 0, 40, 13);
}

/**
 * 日志分类-慢查询日志提示
 */
function logClassificationSlowQueryLogTips() {
    layerCapture('log_classification_slow_query_log_tips', 0, 40, 13);
}

/**
 * 日志分类更详细提示
 */
function logClassificationIsMoreDetailedTips() {
    layerCapture('log_classification_is_more_detailed_tips', 0, 50, 52);
}

/**
 * 分析查询语句提示
 */
function analyzeQueryStatementsTips() {
    layerCapture('analyze_query_statements_tips', 0, 40, 70);
}

/**
 * 分析查询语句图表
 */
function analyzeQueryStatementsChart() {
    var analyzeQueryStatementsChart = $('#analyze_query_statements');
    analyzeQueryStatementsChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(analyzeQueryStatementsChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'id':
                layerCapture('analyze_query_statements_explain_id', 0, 50, 13);
                break;
            case 'select_type':
                layerCapture('analyze_query_statements_explain_select_type', 0, 50, 44);
                break;
            case 'table':
                layerCapture('analyze_query_statements_explain_table', 0, 50, 13);
                break;
            case 'type':
                layerCapture('analyze_query_statements_explain_type', 0, 50, 66);
                break;
            case 'possible_keys':
                layerCapture('analyze_query_statements_explain_possible_keys', 0, 50, 15);
                break;
            case 'key':
                layerCapture('analyze_query_statements_explain_key', 0, 50, 15);
                break;
            case 'key_len':
                layerCapture('analyze_query_statements_explain_key_len', 0, 50, 13);
                break;
            case 'ref':
                layerCapture('analyze_query_statements_explain_ref', 0, 50, 13);
                break;
            case 'rows':
                layerCapture('analyze_query_statements_explain_rows', 0, 50, 13);
                break;
            case 'Extra':
                layerCapture('analyze_query_statements_explain_extra', 0, 50, 13);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '分析查询语句',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P419',
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
            data: ['id', 'select_type', 'table', 'type', 'possible_keys', 'key', 'key_len', 'ref', 'rows', 'Extra'],
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
                    {value: 1, name: 'id'},
                    {value: 1, name: 'select_type'},
                    {value: 1, name: 'table'},
                    {value: 1, name: 'type'},
                    {value: 1, name: 'possible_keys'},
                    {value: 1, name: 'key'},
                    {value: 1, name: 'key_len'},
                    {value: 1, name: 'ref'},
                    {value: 1, name: 'rows'},
                    {value: 1, name: 'Extra'}
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
 * 分析查询语句-EXPLAIN-type-const提示
 */
function analyzeQueryStatementsExplainTypeConstTips() {
    layerCapture('analyze_query_statements_explain_type_const_tips', 0, 40, 33);
}

/**
 * 分析查询语句-EXPLAIN-type-eq_ref提示
 */
function analyzeQueryStatementsExplainTypeEqrefTips() {
    layerCapture('analyze_query_statements_explain_type_eq_ref_tips', 0, 40, 33);
}

/**
 * 分析查询语句-EXPLAIN-type-ref提示
 */
function analyzeQueryStatementsExplainTypeRefTips() {
    layerCapture('analyze_query_statements_explain_type_ref_tips', 0, 40, 36);
}

/**
 * 分析查询语句-EXPLAIN-type-ref_or_null提示
 */
function analyzeQueryStatementsExplainTypeRefOrNUllTips() {
    layerCapture('analyze_query_statements_explain_type_ref_or_null_tips', 0, 40, 27);
}

/**
 * 分析查询语句-EXPLAIN-type-range提示
 */
function analyzeQueryStatementsExplainTypeRangeTips() {
    layerCapture('analyze_query_statements_explain_type_range_tips', 0, 40, 41);
}

/**
 * 优化子查询提示
 */
function optimizeSubqueriesTips() {
    layerCapture('optimize_subqueries_tips', 0, 50, 21);
}

/**
 * 优化数据库结构提示
 */
function optimizeDatabaseStructureTips() {
    layerCapture('optimize_database_structure_tips', 0, 50, 15);
}

/**
 * 优化数据库结构图表
 */
function optimizeDatabaseStructureChart() {
    var optimizeDatabaseStructureChart = $('#optimize_database_structure');
    optimizeDatabaseStructureChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(optimizeDatabaseStructureChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '将字段很多的表分解成多个表':
                layerCapture('optimize_database_structure_break_a_table_with_many_fields_into_multiple_tables', 0, 50, 70);
                break;
            case '增加中间表':
                layerCapture('optimize_database_structure_add_intermediate_table', 0, 50, 70);
                break;
            case '增加冗余字段':
                layerCapture('optimize_database_structure_add_redundant_fields', 0, 50, 27);
                break;
            case '优化插入记录的速度':
                layerCapture('optimize_database_structure_optimize_the_speed_of_inserting_records', 0, 50, 44);
                break;
            case '分析表、检查表和优化表':
                layerCapture('optimize_database_structure_analysis_table_check_table_and_optimization_table', 0, 50, 70);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '优化数据库结构',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P427',
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
            data: ['将字段很多的表分解成多个表', '增加中间表', '增加冗余字段', '优化插入记录的速度', '分析表、检查表和优化表'],
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
                    {value: 1, name: '将字段很多的表分解成多个表'},
                    {value: 1, name: '增加中间表'},
                    {value: 1, name: '增加冗余字段'},
                    {value: 1, name: '优化插入记录的速度'},
                    {value: 1, name: '分析表、检查表和优化表'}
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
 * 优化数据库结构-优化插入记录的速度提示
 */
function optimizeDatabaseStructureOptimizeTheSpeedOfInsertingRecordsTips() {
    layerCapture('optimize_database_structure_optimize_the_speed_of_inserting_records_tips', 0, 40, 13);
}

/**
 * 优化数据库结构-分析表、检查表和优化表提示
 */
function optimizeDatabaseStructureAnalysisTableCheckTableAndOptimizationTableTips() {
    layerCapture('optimize_database_structure_analysis_table_check_table_and_optimization_table_tips', 0, 40, 13);
}

/**
 * 优化MySQL服务器图表
 */
function optimizeMySQLServerChart() {
    var optimizeMySQLServerChart = $('#optimize_mysql_server');
    optimizeMySQLServerChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(optimizeMySQLServerChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '优化服务器硬件':
                layerCapture('optimize_mysql_server_optimize_server_hardware', 0, 50, 25);
                break;
            case '优化MySQL的参数':
                layerCapture('optimize_mysql_server_optimize_mysql_parameters', 0, 50, 70);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '优化MySQL服务器',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P434',
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
            data: ['优化服务器硬件', '优化MySQL的参数'],
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
                    {value: 1, name: '优化服务器硬件'},
                    {value: 2, name: '优化MySQL的参数'}
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
 * 优化MySQL服务器提示
 */
function optimizeMysqlServerTips() {
    layerCapture('optimize_mysql_server_tips', 0, 40, 17);
}