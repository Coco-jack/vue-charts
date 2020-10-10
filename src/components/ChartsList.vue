<template>
    <div class="cover-container">
        <div class="cover-title">
            数据统计列表
            <el-button type="primary" @click="closeCover">关闭</el-button>
        </div>
        <div class="charts-box">
            <div v-for="(item, index) in dataList" :key="index">
                <ChartsItem :id="item.id" :data="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import ApiServers from '../lib/ApiServers'
import ChartsItem from './ChartsItem'

export default {
    name: "ChartsList",
    data() {
        return {
            dataList: [],
            chartsList: []
        }
    },
    components: {
        ChartsItem
    },
    mounted() {
        this.getChartData()
    },
    methods: {
        getChartData() {
            ApiServers.getChartsListData().then(res => {
                if (res && res.data.code === 200) {
                    this.dataList = res.data.data
                    for (let i = 0; i < this.dataList.length; i++) {
                        this.chartsList.push(this.dataList.slice(i, i + 5))
                        i = i + 4
                    }
                }
            })
        },
        closeCover() {
            this.$emit('closeCover', false)
        }
    }
}
</script>

<style scoped>
.cover-title {
    height: 10vh;
    color: #ffffff;
    font-size: .4rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}

.charts-box {
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: .6rem;
    overflow: hidden;
    overflow-y: scroll;
}

.el-button {
    width: 1rem;
    margin-left: .5rem;
}

.charts-detail {
    height: 2rem;
    width: 2.5rem;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 0, 0, 0.4);
}
</style>
