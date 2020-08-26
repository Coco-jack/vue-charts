<template>
    <div class="garden-data">
        <div class="garden-data-title">
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <span>温度曲线</span>
        </div>
        <div class="temperature-rotate" id="temperature-rotate"></div>
    </div>
</template>

<script>
	export default {
		name: "TemperatureRotate",
        data() {
		    return {

            }
        },
        mounted() {
            this.getTemperatureRotate()
        },
        methods: {
            getTemperatureRotate() {
	            let color = ['#5793f3', '#d14a61', '#675bba']
	            let myChart = this.$echarts.init(document.getElementById('temperature-rotate'))
	            let option = {
		            color: color,
		            tooltip: {
			            trigger: 'axis'
		            },
		            legend: {
			            data: ['最高土壤温度', '最低土壤温度', '平均温度'],
			            textStyle: {
				            color: '#fff'
			            }
		            },
		            grid: {
			            top: 70,
			            bottom: 70,
			            containLabel: true
		            },
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
				            data: ['2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09']
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
				            name: '最高土壤温度',
				            type: 'line',
				            smooth: true,
				            data: [20, 25, 31, 20, 20, 30, 28, 38, 31, 35, 30, 35]
			            },
			            {
				            name: '最低土壤温度',
				            type: 'line',
				            smooth: true,
				            data: [18, 15, 17, 12, 13, 14, 19, 30, 28, 30, 24, 26]
			            },
			            {
				            name: '平均温度',
				            type: 'line',
				            smooth: true,
				            data: [19, 20, 25, 16, 15, 15, 25, 34, 29, 33, 26, 30]
			            }
		            ]
	            };
	            myChart.setOption(option)
            }
        }
	}
</script>

<style scoped>
    .garden-data-title {
        height: .2rem;
        display: flex;
    }

    .temperature-rotate {
        width: 100%;
        height: 3rem;
        margin-top: .4rem;
    }

</style>
