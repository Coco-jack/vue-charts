<template>
    <div v-bind:id="id" v-bind:data="data" class="charts-item"></div>
</template>

<script>
export default {
    name: "ChartsItem",
    props: ['id', 'data'],
    watch: {
        data: {
            listenData(newValue, oldValue) {
                this.checkDataRef(this.id, newValue)
            }
        }
    },
    mounted() {
        this.checkDataRef(this.id, this.data)
    },
    methods: {
        checkDataRef(id, data) {
            let dom = this.$echarts.init(document.getElementById(id))
            let option = {
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
                        for (let i = 0; i < params.length; i++) {
                            result += `${result.includes(params[i].name) ? '' : params[i].name}<br/>${params[i].seriesName}:${params[i].value.toFixed(2)}(°C)`
                        }
                        return result
                    }
                },
                xAxis: {
                    type: 'category',
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
                    name: data.danwei,
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
            dom.setOption(option)
        }
    }
}
</script>

<style scoped>
.charts-item {
    width: 300px;
    height: 250px;
}
</style>