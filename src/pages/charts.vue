<template>
    <div class="container">
        <div class="title">数据监控</div>
        <div class="web-container">
            <div class="content-left">
                <InfoBox/>
                <MonitorBox/>
            </div>
            <div class="content-center">
                <MapCharts/>
            </div>
            <div class="content-right">
                <TemperatureRotate/>
                <TemperatureRotateList
                    @showCover="isShowCoverList"
                />
            </div>
        </div>
        <div v-show="isShowCover" class="cover">
            <ChartsList @closeCover="isShowCoverList"/>
        </div>
    </div>
</template>

<script>
import InfoBox from '../components/InfoBox'
import MonitorBox from '../components/MonitorBox'
import MapCharts from "../components/MapCharts"
import TemperatureRotate from "../components/TemperatureRotate"
import TemperatureRotateList from "../components/TemperatureRotateList"
import ChartsList from "../components/ChartsList"

export default {
    name: 'charts',
    components: {
        InfoBox,
        MonitorBox,
        MapCharts,
        TemperatureRotate,
        TemperatureRotateList,
        ChartsList
    },
    data() {
        return {
            isShowCover: false
        }
    },
    methods: {
        isShowCoverList(data) {
            this.isShowCover = data
        }
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
    background: rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content-center {
    width: 40%;
    background: rgba(0, 0, 0, .3);
    height: 92vh;
    margin: 0 .1rem;
}

.content-right {
    height: 92vh;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .3);
    overflow: hidden;
}

.cover {
    right: 0;
    width: 80vw;
    background: rgba(0, 0, 0, 1);
    z-index: 100;
    position: absolute;
    top: 0;
}
</style>
