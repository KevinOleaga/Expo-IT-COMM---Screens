var dom = document.getElementById("chart_1");
var myChart = echarts.init(dom);
var app = {};
option = null;
var item1 = {
    color: '#cf3a32' //rojo1
};
var item2 = {
    color: '#d9655b' //rojo2
};
var item3 = {
    color: '#e28b84' //rojo3
};
var item4 = {
    color: '#e56727' //naranja1
};
var item5 = {
    color: '#ea8552' //naranja2
};
var item6 = {
    color: '#efa47d' //naranja3
};
var item7 = {
    color: '#94005F' //morado1
};
var item8 = {
    color: '#a9337f' //morado2
};
var item9 = {
    color: '#bf669f' //morado3
};
var item10 = {
    color: '#de718f' //rosa3
};
var item11 = {
    color: '#d34169' //rosa2
};
var item12 = {
    color: '#c81244' //rosa1
};
var data = [
    {
        name:'Trabajo',
        value:15,
        itemStyle: item12,
        children:[
            {
                name:'Preferencia',
                value:5,
                itemStyle:item11,
                children:[
                    {
                        name:'Beneficios',
                        value:2.5,
                        itemStyle:item10
                    },
                    {
                        name:'Horario',
                        value:1,
                        itemStyle:item10
                    },
                    {
                        name:'Incentivos',
                        value:0.8,
                        itemStyle:item10
                    },
                    {
                        name:'Otros',
                        value:0.7,
                        itemStyle:item10
                    }
                    ]
            },
            {
                name:'Plataforma',
                value:5,
                itemStyle:item11,
                children:[
                    {
                        name:'Celular',
                        value:2.5,
                        itemStyle:item10
                    },
                    {
                        name:'iPod',
                        value:1,
                        itemStyle:item10
                    },
                    {
                        name:'Laptop',
                        value:0.8,
                        itemStyle:item10
                    },
                    {
                        name:'Otros',
                        value:0.7,
                        itemStyle:item10
                    }
                    ]
            },
            {
                name:'Eficiencia (21%)',
                value:5,
                itemStyle:item11,
                children:[
                    {
                        name: 'Empleado',
                        value:2.6,
                        itemStyle: item10
                    },
                    {
                        name:'No labora',
                        value:1,
                        itemStyle:item10
                    },
                    {
                        name:'Desempleado',
                        value:0.9,
                        itemStyle:item10
                    },
                    {
                        name:'Militar',
                        value:0.5,
                        itemStyle:item10
                    }
                    ]
            }
            ]
    },
    {
        name:'Comunicación',
        value:15,
        itemStyle: item1,
        children:[
            {
                name:'   Redes Sociales',
                value:15,
                itemStyle:item2,
                children:[
                    {
                        name:'Facebook',
                        value:5.1,
                        itemStyle:item3
                    },
                    {
                        name:'Instagram',
                        value:3.5,
                        itemStyle:item3
                    },
                    {
                        name:'Snapchat',
                        value:2.5,
                        itemStyle:item3
                    },
                    {
                        name:'Youtube',
                        value:1.3,
                        itemStyle:item3
                    },
                    {
                        name:'Twitter',
                        value:0.9,
                        itemStyle:item3
                    },
                    {
                        name:'Pinterest',
                        value:0.9,
                        itemStyle:item3
                    },
                    {
                        name:'Gooogle+',
                        value:0.8,
                        itemStyle:item3
                    }
                    ]
            }
            ]
    },
    {
        name:'Cultura',
        value:15,
        itemStyle: item4,
        children:[
            {
                name:'Raza',
                value:5,
                itemStyle:item5,
                children:[
                    {
                        name:'Blancos',
                        value:2.3,
                        itemStyle:item6
                    },
                    {
                        name:'Latinos',
                        value:1.2,
                        itemStyle:item6
                    },
                    {
                        name:'Negros',
                        value:0.8,
                        itemStyle:item6
                    },
                    {
                        name:'Otros',
                        value:0.7,
                        itemStyle:item6
                    }
                    ]
            },
            {
                name:'Religión',
                value:5,
                itemStyle:item5,
                children:[
                    {
                        name:'Cristiana',
                        value:3,
                        itemStyle:item6
                    },
                    {
                        name:'"Nones"',
                        value:1,
                        itemStyle:item6
                    },
                    {
                        name:'No cristiana',
                        value:1,
                        itemStyle:item6
                    }
                    ]
            },
            {
                name:'Tatuajes',
                value:2.5,
                itemStyle:item5,
                children:[
                    {
                        name:'38%',
                        value:2.5,
                        itemStyle:item6
                    }
                    ]
            },
            {
                name:'Ambientalista',
                value:2.5,
                itemStyle:item5,
                children:[
                    {
                        name:'32%',
                        value:2.5,
                        itemStyle:item6
                    }
                    ]
            }
            ]
    },
    {
        name:'Hobbies',
        value:15,
        itemStyle:item7,
        children:[
            {
                name:'Salud',
                value:3,
                itemStyle:item8,
                children:[
                    {
                        name:'Media',
                        value:0.5,
                        itemStyle:item9
                    },
                    {
                        name:'Alta',
                        value:1.5,
                        itemStyle:item9
                    },
                    {
                        name:'Baja',
                        value:1,
                        itemStyle:item9
                    }
                    ]
            },
            {
                
            },
            {
                name:'Gastos',
                value:5,
                itemStyle:item8,
                children:[
                    {
                        name:'Alojamiento',
                        value:2,
                        itemStyle:item9
                    },
                    {
                        name:'Ropa',
                        value:1.2,
                        itemStyle:item9
                    },
                    {
                        name:'Entretenimiento',
                        value:1.3,
                        itemStyle:item9
                    },
                    {
                        name:'Otros',
                        value:0.5,
                        itemStyle:item9
                    }
                    ]
            },
            {
                name:'Matrimonio',
                value:4,
                itemStyle:item8,
                children:[
                    {
                        name:'Nunca',
                        value:2.5,
                        itemStyle:item9
                    },
                    {
                        name:'Casados',
                        value:1,
                        itemStyle:item9
                    },
                    {
                        name:'Divorciados',
                        value:0.5,
                        itemStyle:item9
                    }
                    ]
            },
            {
                name:'Cuidados',
                value:3,
                itemStyle:item8,
                children:[
                    {
                        name:'Primaria',
                        value:1.7,
                        itemStyle:item9
                    },
                    {
                        name:'Telemedicina',
                        value:0.8,
                        itemStyle:item9
                    },
                    {
                        name:'Ambulatoria',
                        value:0.5,
                        itemStyle:item9
                    }
                    ]
            }
            ]
    }
    ];

option = {
    series: {
        radius: ['5%', '100%'],
        type: 'sunburst',
        sort: null,
        highlightPolicy: 'ancestor',
        data: data,
        label: {
            rotate: 'radial'
        },
        levels: [],
        itemStyle: {
            color: '#ddd',
            borderWidth: 0.5
        }
    }
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}