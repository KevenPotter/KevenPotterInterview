/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_advanced_button').click();
    indexClassificationChart();
    createIndex_CREATE_TABLE_Chart();
    createIndex_ALTER_TABLE_Chart();
    createIndex_CREATE_INDEX_Chart();
    pointsToNoteWhenUsingIndexQueriesChart();
});

/**
 * 索引的分类图表
 */
function indexClassificationChart() {
    var indexClassificationChart = $('#index_classification');
    indexClassificationChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(indexClassificationChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '普通索引和唯一索引':
                layerCapture('index_classification_ordinary_index_and_unique_index', 0, 30, 17);
                break;
            case '单列索引和组合索引':
                layerCapture('index_classification_single_column_index_and_composite_index', 0, 30, 17);
                break;
            case '全文索引':
                layerCapture('index_classification_full_text_index', 0, 30, 17);
                break;
            case '空间索引':
                layerCapture('index_classification_spatial_index', 0, 30, 19);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '索引的分类',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P254',
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
            data: ['普通索引和唯一索引', '单列索引和组合索引', '全文索引', '空间索引'],
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
                    {value: 1, name: '普通索引和唯一索引'},
                    {value: 1, name: '单列索引和组合索引'},
                    {value: 1, name: '全文索引'},
                    {value: 1, name: '空间索引'}
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
 * 创建索引-CREATE TABLE时图表
 */
function createIndex_CREATE_TABLE_Chart() {
    var createIndex_CREATE_TABLE_Chart = $('#create_index_CREATE_TABLE');
    createIndex_CREATE_TABLE_Chart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(createIndex_CREATE_TABLE_Chart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '创建普通索引':
                layerCapture('create_index_create_table_create_a_normal_index', 0, 30, 33);
                break;
            case '创建唯一索引':
                layerCapture('create_index_create_table_create_a_unique_index', 0, 30, 36);
                break;
            case '创建单列索引':
                layerCapture('create_index_create_table_create_a_single_column_index', 0, 30, 34);
                break;
            case '创建组合索引':
                layerCapture('create_index_create_table_create_a_composite_index', 0, 30, 46);
                break;
            case '创建全文索引':
                layerCapture('create_index_create_table_create_a_full_text_index', 0, 30, 41);
                break;
            case '创建空间索引':
                layerCapture('create_index_create_table_create_a_spatial_index', 0, 30, 33);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: 'MySQL的数据类型',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P256',
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
            data: ['创建普通索引', '创建唯一索引', '创建单列索引', '创建组合索引', '创建全文索引', '创建空间索引'],
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
                    {value: 1, name: '创建普通索引'},
                    {value: 1, name: '创建唯一索引'},
                    {value: 1, name: '创建单列索引'},
                    {value: 1, name: '创建组合索引'},
                    {value: 1, name: '创建全文索引'},
                    {value: 1, name: '创建空间索引'}
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
 * 创建索引-ALTER TABLE时图表
 */
function createIndex_ALTER_TABLE_Chart() {
    var createIndex_ALTER_TABLE_Chart = $('#create_index_ALTER_TABLE');
    createIndex_ALTER_TABLE_Chart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(createIndex_ALTER_TABLE_Chart[0], 'macarons');
    myChart.on('mouseover', function (params) {
        switch (params.name) {
            case '创建普通索引':
                layerTips('普通：ALTER TABLE t1 ADD INDEX nameIdx(t_name(30));', createIndex_ALTER_TABLE_Chart);
                break;
            case '创建唯一索引':
                layerTips('唯一：ALTER TABLE t2 ADD UNIQUE INDEX UniqIdIdx(t_id);', createIndex_ALTER_TABLE_Chart);
                break;
            case '创建单列索引':
                layerTips('单列：ALTER TABLE t3 ADD INDEX tNameIdx(t_name(50));', createIndex_ALTER_TABLE_Chart);
                break;
            case '创建组合索引':
                layerTips('组合：ALTER TABLE t4 ADD INDEX tIdNameAgeIdx(id,name(30),age);', createIndex_ALTER_TABLE_Chart);
                break;
            case '创建全文索引':
                layerTips('全文：ALTER TABLE t5 ADD FULLTEXT INDEX infoFTIdx(info);', createIndex_ALTER_TABLE_Chart);
                break;
            case '创建空间索引':
                layerTips('空间：ALTER TABLE t6 ADD SPATIAL INDEX spatIdx(g);', createIndex_ALTER_TABLE_Chart);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: 'MySQL的数据类型',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P261',
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
            data: ['创建普通索引', '创建唯一索引', '创建单列索引', '创建组合索引', '创建全文索引', '创建空间索引'],
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
                    {value: 1, name: '创建普通索引'},
                    {value: 1, name: '创建唯一索引'},
                    {value: 1, name: '创建单列索引'},
                    {value: 1, name: '创建组合索引'},
                    {value: 1, name: '创建全文索引'},
                    {value: 1, name: '创建空间索引'}
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
 * 创建索引-CREATE INDEX时图表
 */
function createIndex_CREATE_INDEX_Chart() {
    var createIndex_CREATE_INDEX_Chart = $('#create_index_CREATE_INDEX');
    createIndex_CREATE_INDEX_Chart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(createIndex_CREATE_INDEX_Chart[0], 'macarons');
    myChart.on('mouseover', function (params) {
        switch (params.name) {
            case '创建普通索引':
                layerTips('普通：CREATE INDEX idx ON t1(t_id);', createIndex_CREATE_INDEX_Chart);
                break;
            case '创建唯一索引':
                layerTips('唯一：CREATE UNIQUE INDEX UniqIdIdx ON t2(t_id);', createIndex_CREATE_INDEX_Chart);
                break;
            case '创建单列索引':
                layerTips('单列：CREATE INDEX tNameIdx ON t3(t_name(50));', createIndex_CREATE_INDEX_Chart);
                break;
            case '创建组合索引':
                layerTips('组合：CREATE INDEX tIdNameAgeIdx ON t4(id,name(30),age);', createIndex_CREATE_INDEX_Chart);
                break;
            case '创建全文索引':
                layerTips('全文：CREATE FULLTEXT INDEX infoFTIdx ON t5(info);', createIndex_CREATE_INDEX_Chart);
                break;
            case '创建空间索引':
                layerTips('空间：CREATE SPATIAL INDEX spatIdx ON t6(g);', createIndex_CREATE_INDEX_Chart);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: 'MySQL的数据类型',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P266',
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
            data: ['创建普通索引', '创建唯一索引', '创建单列索引', '创建组合索引', '创建全文索引', '创建空间索引'],
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
                    {value: 1, name: '创建普通索引'},
                    {value: 1, name: '创建唯一索引'},
                    {value: 1, name: '创建单列索引'},
                    {value: 1, name: '创建组合索引'},
                    {value: 1, name: '创建全文索引'},
                    {value: 1, name: '创建空间索引'}
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
 * 创建索引-CREATE TABLE时提示
 */
function createIndexCreateTablePanelTitleTips() {
    layerCapture('create_index_create_table_panel_title_tips', 0, 35, 34);
}

/**
 * 创建索引-ALTER TABLE时提示
 */
function createIndexAlterTablePanelTitleTips() {
    layerCapture('create_index_alter_table_panel_title_tips', 0, 35, 32);
}

/**
 * 创建索引-CREATE INDEX时提示
 */
function createIndexCreateIndexPanelTitleTips() {
    layerCapture('create_index_create_index_panel_title_tips', 0, 35, 31);
}

/**
 * 统计直方图提示
 */
function histogramTips() {
    layerCapture('histogram_tips', 0, 35, 31);
}

/**
 * 使用索引查询注意点图表
 */
function pointsToNoteWhenUsingIndexQueriesChart() {
    var pointsToNoteWhenUsingIndexQueriesChart = $('#points_to_note_when_using_index_queries');
    pointsToNoteWhenUsingIndexQueriesChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(pointsToNoteWhenUsingIndexQueriesChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '使用LIKE关键字的查询语句':
                layerCapture('points_to_note_when_using_index_queries_query_statement_using_the_like_keyword', 0, 40, 64);
                break;
            case '使用多列索引的查询语句':
                layerCapture('points_to_note_when_using_index_queries_query_statement_using_multi_column_index', 0, 40, 74);
                break;
            case '使用OR关键字的查询语句':
                layerCapture('points_to_note_when_using_index_queries_query_statement_using_or_keyword', 0, 40, 70);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '使用索引查询注意点',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P424',
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
            data: ['使用LIKE关键字的查询语句', '使用多列索引的查询语句', '使用OR关键字的查询语句'],
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
                    {value: 1, name: '使用LIKE关键字的查询语句'},
                    {value: 1, name: '使用多列索引的查询语句'},
                    {value: 1, name: '使用OR关键字的查询语句'}
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