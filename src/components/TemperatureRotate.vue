<template>
    <div class="garden-data">
        <div class="garden-data-title">
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <span class="garden-data-title-content">温度曲线</span>
        </div>
        <div class="temperature-rotate" id="temperature-rotate"></div>
    </div>
</template>

<script>
	export default {
		name: "TemperatureRotate",
        data() {
		    return {
                dataList: []
            }
        },
        mounted() {
		    this.getTemperatureRotateData()
        },
        methods: {
		    getTemperatureRotateData() {
                this.$http.get('https://www.billdazy.com/190901/info?project=P200320121679722&value=2&u_id=admin').then(res => {
                    if (res && res.data.code === 200) {
                        this.dataList = res.data.data
                        let color = ['#5793f3', '#d14a61', '#675bba']
                        let myChart = this.$echarts.init(document.getElementById('temperature-rotate'))
                        let option = {
                            title: {
                                text: this.dataList.name1,
                                x: 'center',
                                y: 'top',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                    fontWeight: 0,
                                }
                            },
                            legend: {
                                top: 30,
                                data: [this.dataList.data[0].name, this.dataList.data[1].name, this.dataList.data[2].name],
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            color: color,
                            tooltip: {
                                trigger: 'axis',
                                // formatter: `{b}<br/>{a0}:{c0}(°C)<br/>{a1}:{c1}}(°C)<br/>{a2}:{c2}(°C)`
                                formatter: function (params) {
                                    let result = '';
                                    for (let i=0; i<params.length; i++) {
                                        result += `${result.includes(params[i].name) ? '' : params[i].name}<br/>${params[i].seriesName}:${params[i].value.toFixed(2)}(°C)`
                                    }
                                    return result
                                }
                            },
                            grid: {},
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    axisLine: {
                                        onZero: false,
                                        lineStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    data: this.dataList.data[0].time
                                },
                                {
                                    type: 'category',
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                }
                            ],
                            yAxis: [
                                {
                                    scale: true,
                                    type: 'value',
                                    axisLine: {
                                        lineStyle: {
                                            color: '#fff'
                                        }
                                    },
                                }
                            ],
                            series: [
                                {
                                    name: this.dataList.data[0].name,
                                    type: 'line',
                                    smooth: true,
                                    data: this.dataList.data[0].data
                                },
                                {
                                    name: this.dataList.data[1].name,
                                    type: 'line',
                                    smooth: true,
                                    data: this.dataList.data[1].data
                                },
                                {
                                    name: this.dataList.data[2].name,
                                    type: 'line',
                                    smooth: true,
                                    data: this.dataList.data[2].data
                                }
                            ]
                        };
                        myChart.setOption(option)
                    }
                })
            }
        }
	}
</script>

<style scoped>
    .garden-data {
        width: 100%;
        height: 46vh;
    }

    .garden-data-title {
        height: 4vh;
        width: 100%;
        display: flex;
        padding: 0 0 0 .2rem;
        align-items: center;
    }

    .right-route {
        width: .2rem;
        height: .2rem;
        display: block;
        margin-right: -.07rem;
    }

    .garden-data-title-content {
        font-size: .16rem;
        margin-left: .07rem;
        color: #ffffff;
    }

    .temperature-rotate {
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
