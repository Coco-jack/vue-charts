<template>
    <div class="garden-data">
        <div class="garden-data-title">
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <span>监控温度曲线列表</span>
            <Button type="text">查看全部</Button>
        </div>
        <div id="data-list" style="width: 100%; height: 300px; margin-top: 30px"></div>
    </div>
</template>

<script>
    import {Button} from 'element-ui'
	export default {
		name: "TemperatureRotateList",
        components: {
	        Button
        },
        mounted() {
			this.drawCharts()
        },
        methods: {
			drawCharts() {
				let envTemperature = this.$echarts.init(document.getElementById('data-list'))
				let envTemperatureOption = {
					title: {
						text: '环境温度日统计柱状图 1',
						x: 'center',
						textStyle: {
							color: '#fff',
							fontSize: 14,
							fontWeight: 0,
						}
					},
					tooltip: {
						trigger: 'axis'
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
						data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16']
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
							data: [120, 200, 150, 80, 70, 110, 130, 70, 100, 150, 160, 180, 170, 160, 89, 100],
							type: 'bar',
							name: '最高环境温度',
							label: {
								formatter: '{a}: {@value}°C'
							}
						},
						{
							data: [120, 200, 150, 80, 70, 110, 130, 70, 100, 150, 160, 180, 170, 160, 89, 100],
							type: 'bar',
							name: '最低环境温度'
						},
						{
							data: [120, 200, 150, 80, 70, 110, 130, 70, 100, 150, 160, 180, 170, 160, 89, 100],
							type: 'bar',
							name: '平均环境温度'
						}
					]
				}
				envTemperature.setOption(envTemperatureOption)
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
</style>
