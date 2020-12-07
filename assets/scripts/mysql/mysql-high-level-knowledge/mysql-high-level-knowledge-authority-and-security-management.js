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
 * go.js初始化
 */
function init() {
    var goJs = go.GraphObject.make;  // for conciseness in defining templates
    myDiagram =
        goJs(go.Diagram, "mysql_request_verification_process",  // must name or refer to the DIV HTML element
            {
                "LinkDrawn": showLinkLabel,  // this DiagramEvent listener is defined below
                "LinkRelinked": showLinkLabel,
                "undoManager.isEnabled": true  // enable undo & redo
            });

    // helper definitions for node templates

    function nodeStyle() {
        return [
            // The Node.location comes from the "loc" property of the node data,
            // converted by the Point.parse static method.
            // If the Node.location is changed, it updates the "loc" property of the node data,
            // converting back using the Point.stringify static method.
            new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
            {
                // the Node.location is at the center of each node
                locationSpot: go.Spot.Center
            }
        ];
    }

    // Define a function for creating a "port" that is normally transparent.
    // The "name" is used as the GraphObject.portId,
    // the "align" is used to determine where to position the port relative to the body of the node,
    // the "spot" is used to control how links connect with the port and whether the port
    // stretches along the side of the node,
    // and the boolean "output" and "input" arguments control whether the user can draw links from or to the port.
    function makePort(name, align, spot, output, input) {
        var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
        // the port is basically just a transparent rectangle that stretches along the side of the node,
        // and becomes colored when the mouse passes over it
        return goJs(go.Shape,
            {
                fill: "transparent",  // changed to a color in the mouseEnter event handler
                strokeWidth: 0,  // no stroke
                width: horizontal ? NaN : 8,  // if not stretching horizontally, just 8 wide
                height: !horizontal ? NaN : 8,  // if not stretching vertically, just 8 tall
                alignment: align,  // align the port on the main Shape
                stretch: (horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical),
                portId: name,  // declare this object to be a "port"
                fromSpot: spot,  // declare where links may connect at this port
                fromLinkable: output,  // declare whether the user may draw links from here
                toSpot: spot,  // declare where links may connect at this port
                toLinkable: input,  // declare whether the user may draw links to here
                cursor: "pointer",  // show a different cursor to indicate potential link point
                mouseEnter: function (e, port) {  // the PORT argument will be this Shape
                    if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
                },
                mouseLeave: function (e, port) {
                    port.fill = "transparent";
                }
            });
    }

    function textStyle() {
        return {
            font: "bold 11pt Lato, Helvetica, Arial, sans-serif",
            stroke: "#F8F8F8"
        }
    }

    // define the Node templates for regular nodes

    myDiagram.nodeTemplateMap.add("",  // the default category
        goJs(go.Node, "Table", nodeStyle(),
            // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
            goJs(go.Panel, "Auto",
                goJs(go.Shape, "Rectangle",
                    {fill: "#282c34", stroke: "#00A9C9", strokeWidth: 3.5},
                    new go.Binding("figure", "figure")),
                goJs(go.TextBlock, textStyle(),
                    {
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            ),
            // four named ports, one on each side:
            makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
            makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
            makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
            makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
        ));

    myDiagram.nodeTemplateMap.add("Conditional",
        goJs(go.Node, "Table", nodeStyle(),
            // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
            goJs(go.Panel, "Auto",
                goJs(go.Shape, "Diamond",
                    {fill: "#282c34", stroke: "#00A9C9", strokeWidth: 3.5},
                    new go.Binding("figure", "figure")),
                goJs(go.TextBlock, textStyle(),
                    {
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            ),
            // four named ports, one on each side:
            makePort("T", go.Spot.Top, go.Spot.Top, false, true),
            makePort("L", go.Spot.Left, go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
        ));

    myDiagram.nodeTemplateMap.add("Start",
        goJs(go.Node, "Table", nodeStyle(),
            goJs(go.Panel, "Spot",
                goJs(go.Shape, "Circle",
                    {desiredSize: new go.Size(70, 70), fill: "#282c34", stroke: "#09d3ac", strokeWidth: 3.5}),
                goJs(go.TextBlock, "Start", textStyle(),
                    new go.Binding("text"))
            ),
            // three named ports, one on each side except the top, all output only:
            makePort("L", go.Spot.Left, go.Spot.Left, true, false),
            makePort("R", go.Spot.Right, go.Spot.Right, true, false),
            makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
        ));

    myDiagram.nodeTemplateMap.add("End",
        goJs(go.Node, "Table", nodeStyle(),
            goJs(go.Panel, "Spot",
                goJs(go.Shape, "Circle",
                    {desiredSize: new go.Size(60, 60), fill: "#282c34", stroke: "#DC3C00", strokeWidth: 3.5}),
                goJs(go.TextBlock, "End", textStyle(),
                    new go.Binding("text"))
            ),
            // three named ports, one on each side except the bottom, all input only:
            makePort("T", go.Spot.Top, go.Spot.Top, false, true),
            makePort("L", go.Spot.Left, go.Spot.Left, false, true),
            makePort("R", go.Spot.Right, go.Spot.Right, false, true)
        ));

    // taken from ../extensions/Figures.js:
    go.Shape.defineFigureGenerator("File", function (shape, w, h) {
        var geo = new go.Geometry();
        var fig = new go.PathFigure(0, 0, true); // starting point
        geo.add(fig);
        fig.add(new go.PathSegment(go.PathSegment.Line, .75 * w, 0));
        fig.add(new go.PathSegment(go.PathSegment.Line, w, .25 * h));
        fig.add(new go.PathSegment(go.PathSegment.Line, w, h));
        fig.add(new go.PathSegment(go.PathSegment.Line, 0, h).close());
        var fig2 = new go.PathFigure(.75 * w, 0, false);
        geo.add(fig2);
        // The Fold
        fig2.add(new go.PathSegment(go.PathSegment.Line, .75 * w, .25 * h));
        fig2.add(new go.PathSegment(go.PathSegment.Line, w, .25 * h));
        geo.spot1 = new go.Spot(0, .25);
        geo.spot2 = go.Spot.BottomRight;
        return geo;
    });

    myDiagram.nodeTemplateMap.add("Comment",
        goJs(go.Node, "Auto", nodeStyle(),
            goJs(go.Shape, "File",
                {fill: "#282c34", stroke: "#DEE0A3", strokeWidth: 3}),
            goJs(go.TextBlock, textStyle(),
                {
                    margin: 8,
                    maxSize: new go.Size(200, NaN),
                    wrap: go.TextBlock.WrapFit,
                    textAlign: "center",
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            // no ports, because no links are allowed to connect with a comment
        ));


    // replace the default Link template in the linkTemplateMap
    myDiagram.linkTemplate =
        goJs(go.Link,  // the whole link panel
            {
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5, toShortLength: 4,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function (e, link) {
                    link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)";
                },
                mouseLeave: function (e, link) {
                    link.findObject("HIGHLIGHT").stroke = "transparent";
                },
                selectionAdorned: false
            },
            new go.Binding("points").makeTwoWay(),
            goJs(go.Shape,  // the highlight shape, normally transparent
                {isPanelMain: true, strokeWidth: 8, stroke: "transparent", name: "HIGHLIGHT"}),
            goJs(go.Shape,  // the link path shape
                {isPanelMain: true, stroke: "gray", strokeWidth: 2},
                new go.Binding("stroke", "isSelected", function (sel) {
                    return sel ? "dodgerblue" : "gray";
                }).ofObject()),
            goJs(go.Shape,  // the arrowhead
                {toArrow: "standard", strokeWidth: 0, fill: "gray"}),
            goJs(go.Panel, "Auto",  // the link label, normally not visible
                {visible: false, name: "LABEL", segmentIndex: 2, segmentFraction: 0.5},
                new go.Binding("visible", "visible").makeTwoWay(),
                goJs(go.Shape, "RoundedRectangle",  // the label shape
                    {fill: "#F8F8F8", strokeWidth: 0}),
                goJs(go.TextBlock, "Yes",  // the label
                    {
                        textAlign: "center",
                        font: "10pt helvetica, arial, sans-serif",
                        stroke: "#333333",
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            )
        );

    // Make link labels visible if coming out of a "conditional" node.
    // This listener is called by the "LinkDrawn" and "LinkRelinked" DiagramEvents.
    function showLinkLabel(e) {
        var label = e.subject.findObject("LABEL");
        if (label !== null) label.visible = (e.subject.fromNode.data.category === "Conditional");
    }

    // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
    myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
    myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;
    load();  // load an initial diagram from some JSON text
} // end init

function load() {
    var width = $('#access_control_request_verification_stage').width();
    console.log(width);
    myDiagram.model = go.Model.fromJson(
        '{"class": "go.GraphLinksModel",' +
        '"linkFromPortIdProperty": "fromPort",' +
        '"linkToPortIdProperty": "toPort",' +
        '"nodeDataArray": [' +
        '{"category":"Comment", "loc":"' + (width / 3.8) + ' 0", "text":"MySQL请求核实过程", "key":-13},' +
        '{"key":-1, "category":"Start", "loc":"' + (width / 2.5) + ' 0", "text":"Start"},' +
        '{"key":0, "loc":"' + (width / 3) + ' 100", "text":"用户向MySQL发出操作请求"},' +
        '{"key":1, "loc":"' + (width / 2) + ' 200", "text":"MySQL检查user权限表中的权限信息，匹配User、Host字段值，查看请求的全局权限是否被允许，如果找到匹配结果，操作被允许执行，否则MySQL继续向下查找"},' +
        '{"key":2, "loc":"' + (width / 3) + ' 300", "text":"MySQL检查db权限表中的权限信息，匹配User、Host字段值，查看请求的数据库级别的权限是否被允许，如果找到匹配结果，操作被允许执行，否则MySQL继续向下查找"},' +
        '{"key":3, "loc":"' + (width / 2) + ' 400", "text":"MySQL检查tables_priv权限表中的权限信息，匹配User、Host字段值，查看请求的数据表级别的权限是否被允许，如果找到匹配结果，操作被允许执行，否则MySQL继续向下查找"},' +
        '{"key":4, "loc":"' + (width / 3) + ' 500", "text":"MySQL检查columns_priv权限表中的权限信息，匹配User、Host字段值，查看请求的列级别的权限是否被允许，如果找到匹配结果，操作被允许执行，否则MySQL返回错误信息"},' +
        '{"key":-2, "category":"End", "loc":"' + (width / 2.5) + ' 650", "text":"End"}' +
        ' ],' +
        '"linkDataArray": [' +
        '{"from":-1, "to":0, "fromPort":"B", "toPort":"T"},' +
        '{"from":0, "to":1, "fromPort":"B", "toPort":"T"},' +
        '{"from":1, "to":2, "fromPort":"B", "toPort":"T"},' +
        '{"from":2, "to":3, "fromPort":"B", "toPort":"T"},' +
        '{"from":3, "to":4, "fromPort":"B", "toPort":"T"},' +
        '{"from":4, "to":-2, "fromPort":"B", "toPort":"T"}' +
        ' ]}'
    );
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