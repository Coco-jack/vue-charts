<template>
    <div v-bind:id="id" v-show="data.data[0].time && isShowContainer" v-bind:data="data" class="charts-item"></div>
</template>

<script>
export default {
    name: "ChartsItem",
    props: ['id', 'data'],
    watch: {
        // data: {
        //     listenData(newValue, oldValue) {
        //         this.checkDataRef(this.id, newValue)
        //     }
        // }
    },
    data() {
        return {
            isShowContainer: false
        }
    },
    mounted() {
        this.checkDataRef(this.id, this.data)
    },
    methods: {
        checkDataRef(id, data) {
            if (id && data) {
                this.isShowContainer = true
            }
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
                legend: {
                    left: 'center',
                    top: 30,
                    formatter: function (name) {
                        return name
                    },
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        let result = '';
                        for (let i = 0; i < params.length; i++) {
                            result += `${result.includes(params[i].name) ? '' : params[i].name}<br/>${params[i].seriesName}:${params[i].value.toFixed(2)}`
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
                grid: {
                    left: '15%',
                    top: 90
                },
                yAxis: {
                    type: 'value',
                    name: `单位(${data.data[0].danwei})`,
                    offset: 0,
                    min: 1,
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
                        type: `${data.data[0].time.length > 15 ? 'line' : 'bar'}`,
                        name: data.data[0].name
                    },
                    {
                        data: data.data[1].data,
                        type: `${data.data[1].time.length > 15 ? 'line' : 'bar'}`,
                        name: data.data[1].name
                    },
                    {
                        data: data.data[2].data,
                        type: `${data.data[1].time.length > 15 ? 'line' : 'bar'}`,
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
    width: 450px;
    height: 350px;
}
</style>
