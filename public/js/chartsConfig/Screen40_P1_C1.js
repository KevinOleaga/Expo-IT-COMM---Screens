		var dom = document.getElementById("chart_1");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		var Graph_1 = [
			[100, 90, 80, 70.60],
		];

		var lineStyle = {
			normal: {
				width: 1,
				opacity: 0.5
			}
		};

		option = {
			backgroundColor: '#000000',
			title: {
				left: 'center',
				textStyle: {
					color: '#eee'
				}
			},
			legend: {
				bottom: 5,
				itemGap: 20,
				textStyle: {
					color: '#eee',
					fontSize: 14
				},
				selectedMode: 'single'
			},
			radar: {
				indicator: [
					{ name: 'Personalidad 01', max: 100 },
					{ name: 'Personalidad 04', max: 100 },
					{ name: 'Personalidad 03', max: 100 },
					{ name: 'Personalidad 02', max: 100 },
					{ name: 'Personalidad 01', max: 100 }
				],
				shape: 'circle',
				splitNumber: 5,
				name: {
					textStyle: {
						color: 'rgb(255, 255, 255)'
					}
				},
				splitLine: {
					lineStyle: {
						color: [
							'rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.2)',
							'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.6)',
							'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 1)'
						].reverse()
					}
				},
				splitArea: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255, 255, 255, 0.5)'
					}
				}
			},
			series: [
				{
					name: 'Graph 01',
					type: 'radar',
					lineStyle: lineStyle,
					data: Graph_1,
					symbol: 'none',
					itemStyle: {
						normal: {
							color: '#e93f40'
						}
					},
					areaStyle: {
						normal: {
							opacity: 0.3
						}
					}
				}
			]
		};;

		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
