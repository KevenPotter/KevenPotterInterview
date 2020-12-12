/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_high_level_button').click();
    logClassificationChart();
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