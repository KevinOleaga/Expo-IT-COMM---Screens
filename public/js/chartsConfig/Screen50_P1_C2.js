var dom = document.getElementById("chart_2");
var myChart = echarts.init(dom);

option = {
    backgroundColor: '#060f4c',
    series: [{
        type: 'pie',
        radius: ['35%', '55%'],
        silent: true,
        data: [{
            value: 1,
            itemStyle: {
                normal: {
                    color: '#050f58',
                    borderColor: '#162abb',
                    borderWidth: 2,
                    shadowBlur: 50,
                    shadowColor: 'rgba(21,41,185,.75)'
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ['35%', '55%'],
        silent: true,
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            value: 1,
            itemStyle: {
                normal: {
                    color: '#050f58',
                    shadowBlur: 50,
                    shadowColor: 'rgba(21,41,185,.75)'
                }
            }
        }]
    }, {
        name: '占比',
        type: 'pie',
        radius: ['39%', '52%'],
        hoverAnimation: false,

        data: [{
            value: 52.7,
            name: "男性",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 15,
                            fontWeight: "bold"
                        },
                        position: "center"
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(5,193,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(15,15,90,1)'
                    }])
                }
            },
            label: {
                normal: {
                    position: 'outside',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    formatter: '{b}: 1,120\n\n{a}: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 30,
                    smooth: false,
                    lineStyle: {
                        width: 1,
                        color: "#2141b5"
                    }
                }
            }
        }, {
            value: 47.3,
            name: "女性",
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 15,
                            fontWeight: "bold"
                        },
                        position: "center"
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(5,15,88,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(235,122,255,1)'
                    }])
                }
            },
            label: {
                normal: {
                    position: 'outside',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    formatter: '{b}: 1,120\n\n{a}: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 40,
                    smooth: false,
                    lineStyle: {
                        width: 1,
                        color: "#2141b5"
                    }
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [200, 200],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 0,
            label: {
                normal: {
                    formatter: '38',
                    textStyle: {
                        color: '#fe8b53',
                        fontSize: 25,
                        fontWeight: 'bold'
                    }
                }
            }
        }, {
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    formatter: '\n平均年龄',
                    textStyle: {
                        color: '#bbeaf9',
                        fontSize: 14
                    }
                }
            }
        }]
    }]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}