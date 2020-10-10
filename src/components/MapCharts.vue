<template>
    <div class="container">
        <div id="map-charts" class="map-charts"></div>
        <MapData/>
    </div>
</template>

<script>
import Json from '../mock/map'
import MapData from "./MapData";

export default {
    name: 'MapCharts',
    data() {
        return {}
    },
    components: {
        MapData
    },
    mounted() {
        this.drawCharts()
    },
    methods: {
        drawCharts() {
            this.$echarts.registerMap('陕西省', Json);
            let mapCharts = this.$echarts.init(document.getElementById('map-charts'))
            const province = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>{c} 设备投放数量(/台)'
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                visualMap: {
                    min: 0,
                    max: 100,
                    text: ['High', 'Low'],
                    textStyle: {
                        color: '#fff'
                    },
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                series: [
                    {
                        type: 'map',
                        map: '陕西省',
                        label: {
                            show: true
                        },
                        data: [
                            { name: '西安市', value: 10 },
                            { name: '铜川市', value: 30 },
                            { name: '宝鸡市', value: 50 },
                            { name: '咸阳市', value: 70 },
                            { name: '渭南市', value: 50 },
                            { name: '延安市', value: 20 },
                            { name: '汉中市', value: 60 },
                            { name: '榆林市', value: 10 },
                            { name: '安康市', value: 30 },
                            { name: '商洛市', value: 80 }
                        ],
                    }
                ]
            }
            mapCharts.setOption(province)
        }
    }
}
</script>

<style scoped>
.map-charts {
    width: 100%;
    height: 62vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
