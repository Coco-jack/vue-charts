<template>
    <div class="garden-data">
        <div class="garden-data-title">
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <span>监控温度曲线列表</span>
            <span @click="showCoverList">查看全部</span>
        </div>
        <div id="data-list" style="width: 100%; height: 300px; margin-top: 30px"></div>
    </div>
</template>

<script>
	export default {
		name: "TemperatureRotateList",
        mounted() {
			this.drawCharts()
        },
        methods: {
			drawCharts() {
                this.$http.get('https://www.billdazy.com/190901/infov4?project=P200320121679722&f_id=0').then(res => {
                    if (res && res.data.code === 200) {
                        let data = res.data.data[0]
                        let envTemperature = this.$echarts.init(document.getElementById('data-list'))
                        let envTemperatureOption = {
                            title: {
                                text: data.name,
                                x: 'center',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                    fontWeight: 0,
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                formatter: function (params) {
                                    let result = '';
                                    for (let i=0; i<params.length; i++) {
                                        result += `${result.includes(params[i].name) ? '' : params[i].name}<br/>${params[i].seriesName}:${params[i].value.toFixed(2)}(°C)`
                                    }
                                    return result
                                }
                            },
                            xAxis: {
                                type: 'category',
                                name: '日',
                                nameTextStyle: {
                                    color: '#fff'
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#fff'
                                    }
                                },
                                data: data.data[0].time
                            },
                            yAxis: {
                                type: 'value',
                                name: '环境温度/°C',
                                nameTextStyle: {
                                    color: '#fff'
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            series: [
                                {
                                    data: data.data[0].data,
                                    type: 'bar',
                                    name: data.data[0].name
                                },
                                {
                                    data: data.data[1].data,
                                    type: 'bar',
                                    name: data.data[1].name
                                },
                                {
                                    data: data.data[2].data,
                                    type: 'bar',
                                    name: data.data[2].name
                                }
                            ]
                        }
                        envTemperature.setOption(envTemperatureOption)
                    }
                })
            },
            showCoverList() {
			    this.$emit('showCover', true)
            }
        }
	}
</script>

<style scoped>
    .garden-data {
        color: #fff;
        height: 46vh;
    }

    .garden-data-title {
        height: .2rem;
        padding: .1rem;
        display: flex;
    }

    .garden-data-title > span {
        font-size: .14rem;
        color: #ffffff;
    }

    .garden-data-title > span:nth-child(5) {
        margin-left: 1rem;
        cursor: pointer;
        width: 1.5rem;
        height: .3rem;
        text-align: center;
        line-height: .3rem;
        background: rgb(34, 158, 255);
        border-radius: 0.1rem;
    }
</style>
