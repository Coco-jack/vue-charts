<template>
    <div class="garden-data">
        <div class="garden-data-title">
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <span class="garden-data-title-content">监控温度曲线列表</span>
            <span class="check-all-btn" @click="showCoverList">查看全部</span>
        </div>
        <div id="data-list" class="temperature-rotate"></div>
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
                                scale: true,
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

    .check-all-btn {
        width: 1.5rem;
        height: 4vh;
        font-size: .16rem;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
        cursor: pointer;
        background: rgb(34, 158, 255);
        border-radius: 0.1rem;
    }

    .temperature-rotate {
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .4rem 0 0 0;
    }
</style>
