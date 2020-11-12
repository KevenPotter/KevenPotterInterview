/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    theDevelopmentStageOfTheDatabaseChart();
    typeOfDatabaseChart();
    characteristicsOfTheDatabaseChart();
    databaseSystemsChart();
    database_systems_panel_titleTips();
    classificationOfSQLChart();
    advantagesOfMySQLChart();
    dataTypesOfMySQLChart();
    dataTypesOfMySQLNumericTypeChart();
    dataTypesOfMySQLDateAndTimeTypeChart();
    dataTypesOfMySQLTextStringTypeChart();
});

/**
 * 数据库的发展阶段图表
 */
function theDevelopmentStageOfTheDatabaseChart() {
    var theDevelopmentStageOfTheDatabaseChart = $('#the_development_stage_of_the_database');
    theDevelopmentStageOfTheDatabaseChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(theDevelopmentStageOfTheDatabaseChart[0], 'macarons');
    var option = null;
    var data = [20, 53, 61, 98];
    var links = data.map(function (item, i) {
        return {
            source: i,
            target: i + 1
        };
    });
    links.pop();
    option = {
        title: {
            text: '数据库的发展阶段',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P2'
        },
        tooltip: {},
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
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['人工管理阶段', '文件系统阶段', '数据库系统阶段', '高级数据库阶段']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'graph',
                layout: 'none',
                coordinateSystem: 'cartesian2d',
                symbolSize: 40,
                label: {
                    show: true
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                data: data,
                links: links,
                lineStyle: {
                    color: '#2f4554'
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
 * 数据库的种类图表
 */
function typeOfDatabaseChart() {
    var typeOfDatabaseChart = $('#type_of_database');
    typeOfDatabaseChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(typeOfDatabaseChart[0], 'macarons');
    var option = null;
    option = {
        title: {
            text: '数据库的种类',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P2',
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
            data: ['层次式数据库', '网络式数据库', '关系式数据库'],
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
                    {value: 1, name: '层次式数据库'},
                    {value: 1, name: '网络式数据库'},
                    {value: 1, name: '关系式数据库'}
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
 * 数据库的特点图表
 */
function characteristicsOfTheDatabaseChart() {
    var characteristicsOfTheDatabaseChart = $('#characteristics_of_the_database');
    characteristicsOfTheDatabaseChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(characteristicsOfTheDatabaseChart[0], 'macarons');
    var option = null;
    option = {
        title: {
            text: '数据库的特点',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P2',
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
            data: ['实现数据共享，减少数据冗余', '采用特定的数据类型', '具有较高的数据独立性', '具有统一的数据控制功能'],
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
                    {value: 1, name: '实现数据共享，减少数据冗余'},
                    {value: 1, name: '采用特定的数据类型'},
                    {value: 1, name: '具有较高的数据独立性'},
                    {value: 1, name: '具有统一的数据控制功能'}
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
 * 数据库系统图表
 */
function databaseSystemsChart() {
    var databaseSystemsChart = $('#database_systems');
    databaseSystemsChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(databaseSystemsChart[0], 'macarons');
    myChart.on('mouseover', function (params) {
        switch (params.name) {
            case '数据库':
                layerTips('用于存储数据的地方', databaseSystemsChart);
                break;
            case '数据库管理系统':
                layerTips('用于管理数据库的软件', databaseSystemsChart);
                break;
            case '数据库应用程序':
                layerTips('为了提高数据库系统的处理能力所使用的管理数据库的软件补充', databaseSystemsChart);
                break;
        }
    });
    myChart.on('click', function (params) {
        switch (params.name) {
            case '数据库':
                layerCapture('database_systems_database', 0, 30, 22);
                break;
            case '数据库管理系统':
                layerCapture('database_systems_database_management_system', 0, 30, 25);
                break;
            case '数据库应用程序':
                layerCapture('database_systems_database_application', 0, 30, 25);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '数据库系统',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P3',
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
            data: ['数据库', '数据库管理系统', '数据库应用程序'],
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
                    {value: 1, name: '数据库'},
                    {value: 1, name: '数据库管理系统'},
                    {value: 1, name: '数据库应用程序'}
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
 * SQL语言的分类图表
 */
function classificationOfSQLChart() {
    var classificationOfSQLChart = $('#classification_of_SQL');
    classificationOfSQLChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(classificationOfSQLChart[0], 'macarons');
    myChart.on('mouseover', function (params) {
        switch (params.name) {
            case 'DDL':
                layerTips('数据定义语言：DROP、CREATE、ALTER等语句', classificationOfSQLChart);
                break;
            case 'DML':
                layerTips('数据操作语言：INSERT、UPDATE、DELETE语句', classificationOfSQLChart);
                break;
            case 'DQL':
                layerTips('数据查询语言：SELECT语句', classificationOfSQLChart);
                break;
            case 'DCL':
                layerTips('数据控制语言：GRANT、REVOKE、COMMIT、ROLLBACK', classificationOfSQLChart);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: 'SQL语言的分类',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P4',
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
            data: ['DDL', 'DML', 'DQL', 'DCL'],
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
                    {value: 1, name: 'DDL'},
                    {value: 1, name: 'DML'},
                    {value: 1, name: 'DQL'},
                    {value: 1, name: 'DCL'}
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
 * MySQL的优势图表
 */
function advantagesOfMySQLChart() {
    var advantagesOfMySQLChart = $('#advantages_of_MySQL');
    advantagesOfMySQLChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(advantagesOfMySQLChart[0], 'macarons');
    myChart.on('mouseover', function (params) {
        switch (params.name) {
            case '速度':
                layerTips('运行速度快', advantagesOfMySQLChart);
                break;
            case '价格':
                layerTips('MySQL对多数个人来说是免费的', advantagesOfMySQLChart);
                break;
            case '容易使用':
                layerTips('与其他大型数据库的设置和管理相比，其复杂程度较低，易于学习', advantagesOfMySQLChart);
                break;
            case '可移植性':
                layerTips('能够工作在众多不同的系统平台上，例如Windows、Linux、UNIX、Mac OS等', advantagesOfMySQLChart);
                break;
            case '丰富的接口':
                layerTips('提供了用于C、C++、Eiffel、Java、Perl、PHP、Python、Ruby和Tcl等语言的API', advantagesOfMySQLChart);
                break;
            case '支持查询语言':
                layerTips('MySQL可以利用标准SQL语法和支持ODBC的应用程序', advantagesOfMySQLChart);
                break;
            case '安全性和连接性':
                layerTips('十分灵活和安全的权限和密码系统，允许基于主机的验证。<br/>连接到服务器时，所有的密码传输均采用加密形式，从而保证了密码的安全。<br/>由于MySQL是网络化的，因此可以在因特网上的任何地方访问，提高数据共享的效率', advantagesOfMySQLChart);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: 'MySQL的优势',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P7',
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
            data: ['速度', '价格', '容易使用', '可移植性', '丰富的接口', '支持查询语言', '安全性和连接性'],
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
                    {value: 1, name: '速度'},
                    {value: 1, name: '价格'},
                    {value: 1, name: '容易使用'},
                    {value: 1, name: '可移植性'},
                    {value: 1, name: '丰富的接口'},
                    {value: 1, name: '支持查询语言'},
                    {value: 1, name: '安全性和连接性'}
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
 * MySQL的数据类型图表
 */
function dataTypesOfMySQLChart() {
    var dataTypesOfMySQLChart = $('#data_types_of_MySQL');
    dataTypesOfMySQLChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(dataTypesOfMySQLChart[0], 'macarons');
    myChart.on('mouseover', function (params) {
        switch (params.name) {
            case '数值类型':
                layerTips('TINYINT、SMALLINT、MEDIUMINT、INT、BIGINT、FLOAT、DOUBLE、DECIMAL', dataTypesOfMySQLChart);
                break;
            case '日期/时间类型':
                layerTips('YEAR、TIME、DATE、DATETIME、TIMESTAMP', dataTypesOfMySQLChart);
                break;
            case '字符串类型':
                layerTips('CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM、SET', dataTypesOfMySQLChart);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: 'MySQL的数据类型',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P74',
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
            data: ['数值类型', '日期/时间类型', '字符串类型'],
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
                    {value: 1, name: '数值类型'},
                    {value: 1, name: '日期/时间类型'},
                    {value: 1, name: '字符串类型'}
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
 * MySQL的数据类型-数值类型图表
 */
function dataTypesOfMySQLNumericTypeChart() {
    var dataTypesOfMySQLNumericTypeChart = $('#data_types_of_MySQL_numeric_type');
    dataTypesOfMySQLNumericTypeChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(dataTypesOfMySQLNumericTypeChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '整数类型':
                layerCapture('data_types_of_MySQL_numeric_type_integer_type', 0, 60, 30);
                break;
            case '浮点数类型和定点数类型':
                layerCapture('data_types_of_MySQL_numeric_type_floating_point_number_type_and_fixed_point_number_type', 0, 75, 25);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: 'MySQL的数据类型-数值类型',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P75',
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
            data: ['整数类型', '浮点数类型和定点数类型'],
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
                    {value: 1, name: '整数类型'},
                    {value: 1, name: '浮点数类型和定点数类型'}
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
 * MySQL的数据类型-日期与时间类型图表
 */
function dataTypesOfMySQLDateAndTimeTypeChart() {
    var dataTypesOfMySQLDateAndTimeTypeChart = $('#data_types_of_MySQL_date_and_time_type');
    dataTypesOfMySQLDateAndTimeTypeChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(dataTypesOfMySQLDateAndTimeTypeChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'YEAR':
                layerCapture('data_types_of_MySQL_date_and_time_type_YEAR', 0, 60, 30);
                break;
            case 'TIME':
                layerCapture('data_types_of_MySQL_date_and_time_type_TIME', 0, 60, 37);
                break;
            case 'DATE':
                layerCapture('data_types_of_MySQL_date_and_time_type_DATE', 0, 60, 40);
                break;
            case 'DATETIME':
                layerCapture('data_types_of_MySQL_date_and_time_type_DATETIME', 0, 60, 42);
                break;
            case 'TIMESTAMP':
                layerCapture('data_types_of_MySQL_date_and_time_type_TIMESTAMP', 0, 60, 37);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: 'MySQL的数据类型-日期与时间类型',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P78',
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
            data: ['YEAR', 'TIME', 'DATE', 'DATETIME', 'TIMESTAMP'],
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
                    {value: 1, name: 'YEAR'},
                    {value: 1, name: 'TIME'},
                    {value: 1, name: 'DATE'},
                    {value: 1, name: 'DATETIME'},
                    {value: 1, name: 'TIMESTAMP'}
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
 * MySQL的数据类型-文本字符串类型图表
 */
function dataTypesOfMySQLTextStringTypeChart() {
    var dataTypesOfMySQLTextStringTypeChart = $('#data_types_of_MySQL_text_string_type');
    dataTypesOfMySQLTextStringTypeChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(dataTypesOfMySQLTextStringTypeChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'YEAR':
                layerCapture('data_types_of_MySQL_date_and_time_type_YEAR', 0, 60, 30);
                break;
            case 'TIME':
                layerCapture('data_types_of_MySQL_date_and_time_type_TIME', 0, 60, 37);
                break;
            case 'DATE':
                layerCapture('data_types_of_MySQL_date_and_time_type_DATE', 0, 60, 40);
                break;
            case 'DATETIME':
                layerCapture('data_types_of_MySQL_date_and_time_type_DATETIME', 0, 60, 42);
                break;
            case 'TIMESTAMP':
                layerCapture('data_types_of_MySQL_date_and_time_type_TIMESTAMP', 0, 60, 37);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: 'MySQL的数据类型-文本字符串类型',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P89',
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
            data: ['YEAR', 'TIME', 'DATE', 'DATETIME', 'TIMESTAMP'],
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
                    {value: 1, name: 'YEAR'},
                    {value: 1, name: 'TIME'},
                    {value: 1, name: 'DATE'},
                    {value: 1, name: 'DATETIME'},
                    {value: 1, name: 'TIMESTAMP'}
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
 * 数据库系统_数据库系统图示
 */
function database_systems_panel_titleTips() {
    $('#database_systems_panel_title').on('click', function () {
        layerCapture('database_systems_diagram', 0, 30, 70);
    });
}