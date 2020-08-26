<template>
    <div>
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
							dataView: {readOnly: false},
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
								{name: '郑州市', value: 10},
								{name: '开封市', value: 30},
								{name: '洛阳市', value: 50},
								{name: '平顶山市', value: 70},
								{name: '安阳市', value: 50},
								{name: '鹤壁市', value: 20},
								{name: '新乡市', value: 60},
								{name: '焦作市', value: 10},
								{name: '濮阳市', value: 30},
								{name: '许昌市', value: 80},
								{name: '漯河市', value: 90},
								{name: '三门峡市', value: 10},
								{name: '商丘市', value: 8},
								{name: '信阳市', value: 60},
								{name: '周口市', value: 10},
								{name: '驻马店市', value: 40},
								{name: '济源市', value: 50},
								{name: '南阳市', value: 30}
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
        height: 65vh;
    }
</style>
