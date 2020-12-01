/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_high_level_button').click();
    permissionsTableChart();
});

/**
 * 权限与安全管理提示
 */
function authorityAndSecurityManagementTips() {
    layerCapture('authority_and_security_management_tips', 0, 35, 19);
}

/**
 * 权限表提示
 */
function permissionsTableTips() {
    layerCapture('permissions_table_tips', 0, 35, 15);
}

/**
 * 权限表图表
 */
function permissionsTableChart() {
    var permissionsTableChart = $('#permissions_table');
    permissionsTableChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(permissionsTableChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'user':
                layerCapture('permissions_table_user', 0, 40, 70);
                break;
            case 'db':
                layerCapture('permissions_table_db', 0, 40, 70);
                break;
            case 'host':
                layerCapture('permissions_table_host', 0, 40, 70);
                break;
            case 'tables_priv':
                layerCapture('permissions_table_tables_priv', 0, 40, 70);
                break;
            case 'columns_priv':
                layerCapture('permissions_table_columns_priv', 0, 40, 70);
                break;
            case 'procs_priv':
                layerCapture('permissions_table_procs_priv', 0, 40, 70);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '权限表',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P339',
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
            data: ['user', 'db', 'host', 'tables_priv', 'columns_priv', 'procs_priv'],
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
                    {value: 1, name: 'user'},
                    {value: 1, name: 'db'},
                    {value: 1, name: 'host'},
                    {value: 1, name: 'tables_priv'},
                    {value: 1, name: 'columns_priv'},
                    {value: 1, name: 'procs_priv'}
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
 * 权限表-user-用户列提示
 */
function permissionsTableUserUserColumnTips() {
    layerCapture('permissions_table_user_user_column_tips', 0, 35, 21);
}

/**
 * 权限表-user-权限列提示
 */
function permissionsTableUserPermissionColumnTips() {
    layerCapture('permissions_table_user_permission_column_tips', 0, 35, 15);
}

/**
 * 权限表-user-安全列提示
 */
function permissionsTableUserSafeColumnTips() {
    layerCapture('permissions_table_user_safe_column_tips', 0, 35, 15);
}

/**
 * 权限表-user-资源控制列提示
 */
function permissionsTableUserResourceControlColumnTips() {
    layerCapture('permissions_table_user_resource_control_column_tips', 0, 35, 15);
}