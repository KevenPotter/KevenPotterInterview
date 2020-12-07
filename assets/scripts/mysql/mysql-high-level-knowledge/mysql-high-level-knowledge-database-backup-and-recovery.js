/**
 * @description 页面初始化加载事件
 */
$(document).ready(function () {
    $('#database_page_button').click();
    $('#database_page_high_level_button').click();
    permissionsTableChart();
    accountManagementChart();
    authorityManagementChart();
    accessControlChart();
    improveSafetyChart();
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
    myChart.on('mouseover', function (params) {
        switch (params.name) {
            case '权限管理':
                layerTips('详情请移步“权限管理面板”', accountManagementChart);
                break;
        }
    });
    myChart.on('click', function (params) {
        switch (params.name) {
            case '登录和退出MySQL服务器':
                layerCapture('account_management_log_in_and_log_out_of_the_mysql_server', 0, 40, 62);
                break;
            case '创建用户':
                layerCapture('account_management_create_user', 0, 40, 70);
                break;
            case '删除用户':
                layerCapture('account_management_delete_user', 0, 40, 70);
                break;
            case '密码管理':
                layerCapture('account_management_password_management', 0, 40, 67);
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

/**
 * 权限管理提示
 */
function authorityManagementTips() {
    layerCapture('authority_management_tips', 0, 40, 19);
}

/**
 * 权限管理图表
 */
function authorityManagementChart() {
    var authorityManagementChart = $('#authority_management');
    authorityManagementChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(authorityManagementChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'MySQL的各种权限':
                layerCapture('authority_management_various_permissions_of_mysql', 0, 40, 70);
                break;
            case '授权':
                layerCapture('authority_management_authorization', 0, 40, 70);
                break;
            case '收回权限':
                layerCapture('authority_management_withdraw_permission', 0, 40, 70);
                break;
            case '查看权限':
                layerCapture('authority_management_view_permissions', 0, 40, 67);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '权限管理',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P351',
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
            data: ['MySQL的各种权限', '授权', '收回权限', '查看权限'],
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
                    {value: 1, name: 'MySQL的各种权限'},
                    {value: 1, name: '授权'},
                    {value: 1, name: '收回权限'},
                    {value: 1, name: '查看权限'}
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
 * 权限管理-授权-WITH提示
 */
function authorityManagementAuthorizationWithTips() {
    layerCapture('authority_management_authorization_with_tips', 0, 40, 31);
}

/**
 * 访问控制提示
 */
function accessControlTips() {
    layerCapture('access_control_tips', 0, 40, 18);
}

/**
 * 访问控制图表
 */
function accessControlChart() {
    var accessControlChart = $('#access_control');
    accessControlChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(accessControlChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case '连接核实阶段':
                layerCapture('access_control_connection_verification_phase', 0, 40, 19);
                break;
            case '请求核实阶段':
                layerCapture('access_control_request_verification_stage', 0, 40, 67);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '访问控制',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P357',
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
            data: ['连接核实阶段', '请求核实阶段'],
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
                    {value: 1, name: '连接核实阶段'},
                    {value: 1, name: '请求核实阶段'}
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
 * 提升安全性图表
 */
function improveSafetyChart() {
    var improveSafetyChart = $('#improve_safety');
    improveSafetyChart.removeAttr("_echarts_instance_");
    var myChart = echarts.init(improveSafetyChart[0], 'macarons');
    myChart.on('click', function (params) {
        switch (params.name) {
            case 'AES 256':
                layerCapture('improve_safety_AES_256', 0, 40, 70);
                break;
            case '密码到期更换策略':
                layerCapture('improve_safety_password_expiration_replacement_policy', 0, 40, 70);
                break;
            case '安全模式安装':
                layerCapture('improve_safety_safe_mode_installation', 0, 40, 32);
                break;
        }
    });
    var option = null;
    option = {
        title: {
            text: '提升安全性',
            subtext: '《MySQL8从入门到精通（视频教学版）》-P358',
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
            data: ['AES 256', '密码到期更换策略', '安全模式安装'],
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
                    {value: 1, name: 'AES 256'},
                    {value: 1, name: '密码到期更换策略'},
                    {value: 1, name: '安全模式安装'}
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