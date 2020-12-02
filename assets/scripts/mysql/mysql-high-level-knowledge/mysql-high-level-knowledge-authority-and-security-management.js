/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_high_level_button').click();
    permissionsTableChart();
    accountManagementChart();
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
                layerCapture('permissions_table_host', 0, 40, 26);
                break;
            case 'tables_priv':
                layerCapture('permissions_table_tables_priv', 0, 40, 44);
                break;
            case 'columns_priv':
                layerCapture('permissions_table_columns_priv', 0, 40, 43);
                break;
            case 'procs_priv':
                layerCapture('permissions_table_procs_priv', 0, 40, 44);
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
    layerCapture('permissions_table_user_permission_column_tips', 0, 35, 26);
}

/**
 * 权限表-user-安全列提示
 */
function permissionsTableUserSafeColumnTips() {
    layerCapture('permissions_table_user_safe_column_tips', 0, 35, 20);
}

/**
 * 权限表-user-资源控制列提示
 */
function permissionsTableUserResourceControlColumnTips() {
    layerCapture('permissions_table_user_resource_control_column_tips', 0, 35, 35);
}

/**
 * 权限表-db-用户列提示
 */
function permissionsTableDBUserColumnTips() {
    layerCapture('permissions_table_db_user_column_tips', 0, 35, 19);
}

/**
 * 权限表-db-权限列提示
 */
function permissionsTableDBPermissionColumnTips() {
    layerCapture('permissions_table_db_permission_column_tips', 0, 35, 28);
}

/**
 * 权限表-tables_priv-Table_priv字段提示
 */
function permissionsTableTablesPrivTablePrivTips() {
    layerTips("SET('Select','Insert','Update','Delete','Create','Drop','Grant','References','Index','Alter','Create View','Show View','Trigger')", $('#permissions_table_tables_priv_table_priv_tips'));
}

/**
 * 账户管理图表
 */
function accountManagementChart() {
    var accountManagementChart = $('#account_management');
    accountManagementChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(accountManagementChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '登录和退出MySQL服务器':
                layerCapture('account_management_log_in_and_log_out_of_the_mysql_server', 0, 40, 62);
                break;
            case '创建用户':
                layerCapture('account_management_create_user', 0, 40, 70);
                break;
            case '删除用户':
                layerCapture('permissions_table_host', 0, 40, 26);
                break;
            case '密码管理':
                layerCapture('permissions_table_tables_priv', 0, 40, 44);
                break;
            case '权限管理':
                layerCapture('permissions_table_columns_priv', 0, 40, 43);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '账户管理',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P344',
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
            data: ['登录和退出MySQL服务器', '创建用户', '删除用户', '密码管理', '权限管理'],
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
                    {value: 1, name: '登录和退出MySQL服务器'},
                    {value: 1, name: '创建用户'},
                    {value: 1, name: '删除用户'},
                    {value: 1, name: '密码管理'},
                    {value: 1, name: '权限管理'}
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