/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_high_level_button').click();
    dataBackupChart();
});

/**
 * 数据库备份与恢复提示
 */
function databaseBackupAndRecoveryTips() {
    layerCapture('database_backup_and_recovery_tips', 0, 35, 19);
}

/**
 * 数据备份图表
 */
function dataBackupChart() {
    var dataBackupChart = $('#data_backup');
    dataBackupChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(dataBackupChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '使用MySQLdump命令备份':
                layerCapture('data_backup_use_mysqldump_command_to_backup', 0, 40, 70);
                break;
            case '直接复制整个数据库目录':
                layerCapture('data_backup_copy_the_entire_database_directory_directly', 0, 40, 70);
                break;
            case '使用MySQLhostcopy工具快速备份':
                layerCapture('data_backup_use_mysqlhostcopy_tool_to_quickly_backup', 0, 40, 26);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '数据备份',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P367',
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
            data: ['使用MySQLdump命令备份', '直接复制整个数据库目录', '使用MySQLhostcopy工具快速备份'],
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
                    {value: 1, name: '使用MySQLdump命令备份'},
                    {value: 1, name: '直接复制整个数据库目录'},
                    {value: 1, name: '使用MySQLhostcopy工具快速备份'}
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
 * 使用MySQLdump命令备份提示
 */
function useMysqldumpCommandToBackupTips() {
    layerCapture('use_mysqldump_command_to_backup_tips', 0, 35, 50);
}