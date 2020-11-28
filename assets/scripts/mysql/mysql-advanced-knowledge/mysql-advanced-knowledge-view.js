/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_advanced_button').click();
    theRoleOfViewsChart();
    viewViewsChart();
    modifyViewChart();
});

/**
 * 视图简介提示
 */
function introductionToViewsTips() {
    layerCapture('introduction_to_views_tips', 0, 35, 31);
}

/**
 * 视图的作用图表
 */
function theRoleOfViewsChart() {
    var theRoleOfViewsChart = $('#the_role_of_views');
    theRoleOfViewsChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(theRoleOfViewsChart[0], 'macarons');
    myChart.on('mouseover', function (params) {
        switch (params.name) {
            case '简单化':
                layerTips('看到的就是需要的。视图不仅可以简化用户对数据的理解，也可以简化它们的操作。那些被经常使用的查询可以定义为视图，从而使得用户不必为以后的操作每次指定全部的条件。', theRoleOfViewsChart);
                break;
            case '逻辑数据独立性':
                layerTips('视图可以帮助用户屏蔽真实表结构变化带来的影响。', theRoleOfViewsChart);
                break;
        }
    });
    myChart.on('click', function (params) {
        switch (params.name) {
            case '安全性':
                layerCapture('the_role_of_views_safety', 0, 32, 38);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '视图的作用',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P305',
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
            data: ['简单化', '安全性', '逻辑数据独立性'],
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
                    {value: 1, name: '简单化'},
                    {value: 1, name: '安全性'},
                    {value: 1, name: '逻辑数据独立性'}
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
 * 创建视图提示
 */
function createViewTips() {
    layerTips('视图包含了SELECT查询的结果，因此视图的创建基于SELECT语句和已存在的数据表。视图可以建立在一张表上，也可以建立在多张表上。', $('#create_view_panel_title_tips'));
}

/**
 * CREATE VIEW ALGORITHM算法提示
 */
function createViewAlgorithmTips() {
    layerCapture('algorithm_tips', 0, 30, 41);
}

/**
 * CREATE VIEW CASCADED | LOCAL提示
 */
function createViewCascadedLocalTips() {
    layerCapture('create_view_cascaded_local_tips', 0, 30, 41);
}

/**
 * 查看视图提示
 */
function viewViewsTips() {
    layerCapture('view_views_tips', 0, 35, 20);
}

/**
 * 查看视图图表
 */
function viewViewsChart() {
    var viewViewsChart = $('#view_view');
    viewViewsChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(viewViewsChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'DESCRIBE':
                layerCapture('view_views_describe', 0, 40, 45);
                break;
            case 'SHOW TABLE STATUS':
                layerCapture('view_views_show_table_status', 0, 40, 66);
                break;
            case 'SHOW CREATE VIEW':
                layerCapture('view_views_show_create_view', 0, 40, 48);
                break;
            case 'information_schema.views':
                layerCapture('view_views_information_schema_views', 0, 40, 57);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '视图的作用',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P308',
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
            data: ['DESCRIBE', 'SHOW TABLE STATUS', 'SHOW CREATE VIEW', 'information_schema.views'],
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
                    {value: 1, name: 'DESCRIBE'},
                    {value: 1, name: 'SHOW TABLE STATUS'},
                    {value: 1, name: 'SHOW CREATE VIEW'},
                    {value: 1, name: 'information_schema.views'}
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
 * 修改视图提示
 */
function modifyViewTips() {
    layerCapture('modify_view_tips', 0, 35, 16);
}

/**
 * 修改视图图表
 */
function modifyViewChart() {
    var modifyViewChart = $('#modify_view');
    modifyViewChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(modifyViewChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'CREATE OR REPLACE VIEW':
                layerCapture('modify_view_create_or_replace_view', 0, 40, 79);
                break;
            case 'ALTER':
                layerCapture('modify_view_alter', 0, 40, 38);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '视图的作用',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P312',
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
            data: ['CREATE OR REPLACE VIEW', 'ALTER'],
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
                    {value: 1, name: 'CREATE OR REPLACE VIEW'},
                    {value: 1, name: 'ALTER'}
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