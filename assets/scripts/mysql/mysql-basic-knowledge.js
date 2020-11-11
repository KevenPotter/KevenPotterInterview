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
 * 数据库系统_数据库系统图示
 */
function database_systems_panel_titleTips() {
    $('#database_systems_panel_title').on('click', function () {
        layerCapture('database_systems_diagram', 0, 30, 70);
    });
}