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
import ChartsItem from "./ChartsItem"
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
            this.$http.get('https://www.billdazy.com/190901/infov4?project=P200320121679722').then(res => {
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
    color: #ffffff;
    font-size: .4rem;
    margin-top: .8rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}

.charts-box {
    margin-top: .3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: .6rem;
}

.el-button {
    width: 1rem;
    margin-left: .5rem;
}

.charts-detail {
    height: 2rem;
    width: 2.5rem;
}
</style>