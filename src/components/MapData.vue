<template>
    <div class="map-data">
        <el-carousel indicator-position="none" arrow="never">
            <el-carousel-item v-for="(item, index) in realTimeData" :key="index">
                <div class="map-data-detail" v-for="title in item">
                    <span>{{ title.data }}{{ title.danwei }}</span>
                    <span>{{ title.name }}</span>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: "MapData",
    data() {
        return {
            realTimeList: [],
            realTimeData: [],
            animateUp: false
        }
    },
    mounted() {
        this.getMapInfo()
    },
    methods: {
        getMapInfo() {
            this.$http.get('https://www.billdazy.com/190901/showtitlev4?project=P200320121679722').then(res => {
                if (res && res.data.code === 200) {
                    this.realTimeList = res.data.data
                    for (let i = 0; i < this.realTimeList.length; i++) {
                        this.realTimeData.push(this.realTimeList.slice(i, i + 4))
                        i = i + 3
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
.map-data {
    height: 30vh;
    overflow: hidden;
}

.map-data-detail {
    width: 1.5rem;
    height: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('../assets/images/detail.png') no-repeat;
    background-size: 100% 100%;
    background-position-y: -.1rem;
}

.map-data-detail > span {
    color: #ffffff;
    font-size: .16rem;
    display: block;
    width: .9rem;
}

.el-carousel__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
