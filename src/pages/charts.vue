<template>
    <div>
        <div class="title">数据监控</div>
        <div class="web-container">
            <div class="content-left">
                <div class="garden-data">
                    <div class="garden-data-title">
                        <img class="right-route" src="../assets/images/right.png"/>
                        <img class="right-route" src="../assets/images/right.png"/>
                        <img class="right-route" src="../assets/images/right.png"/>
                        <span>空中花园 (平均数据)</span>
                    </div>
                    <InfoBox/>
                    <MonitorBox/>
                </div>
            </div>
            <div class="content-center">
                <MapCharts/>
            </div>
            <div class="content-right">
                <TemperatureRotate/>
                <TemperatureRotateList/>
            </div>
        </div>
    </div>
</template>

<script>
	import InfoBox from '../components/InfoBox'
	import MonitorBox from '../components/MonitorBox'
    import MapCharts from "../components/MapCharts"
    import TemperatureRotate from "../components/TemperatureRotate"
    import TemperatureRotateList from "../components/TemperatureRotateList"

	export default {
		name: 'charts',
		components: {
			InfoBox,
			MonitorBox,
			MapCharts,
			TemperatureRotate,
			TemperatureRotateList
		},
		data() {
			return {}
		}
	}
</script>

<style scoped>
    .web-container {
        display: flex;
    }

    .title {
        background-image: url('../assets/images/title.png');
        background-size: 100% 100%;
        font-size: .25rem;
        line-height: .5rem;
        text-align: center;
        background-color: #0d2040;
        color: #00a0fe;
        height: 8vh;
    }

    .content-left {
        width: 30%;
        height: 92vh;
        background: rgba(0,0,0,.3);
    }

    .garden-data {
        color: #fff;
        height: 46vh;
    }

    .garden-data-title {
        padding: .1rem;
        display: flex;
        box-sizing: border-box;
    }

    .right-route {
        width: .2rem;
        height: .2rem;
        display: block;
        margin-right: -.07rem;
    }

    .garden-data-title > span {
        font-size: .14rem;
        margin-left: .07rem;
        line-height: .2rem;
    }

    .content-center {
        width: 40%;
        background: rgba(0,0,0,.3);
        height: 92vh;
        margin: 0 .1rem;
    }

    .content-right {
        height: 92vh;
        width: 30%;
        display: flex;
        flex-direction: column;
        background: rgba(0,0,0,.3);
        overflow: hidden;
    }
</style>
