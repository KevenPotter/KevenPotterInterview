/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    indexClassificationChart();
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