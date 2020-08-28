<template>
    <div class="map-data">
        <el-carousel height="150px" indicator-position="none" arrow="never">
            <el-carousel-item v-for="item in 4" :key="item">
                <div class="map-data-detail" v-for="item in realTimeList.slice(-8)">
                    <span>{{ item.data }}{{ item.danwei }}</span>
                    <span>{{ item.name }}</span>
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
                }
            })
        }
    }
}
</script>

<style scoped>
.map-data {
    padding-left: .2rem;
    overflow: hidden;
}

.map-data-detail {
    height: .9rem;
    width: .8rem;
    background-image: url('../assets/images/detail.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position-y: -.1rem;
}

.map-data-detail > span {
    color: #ffffff;
    font-size: .14rem;
    display: block;
    width: .7rem;
}

.el-carousel__item.is-animating {
    align-items: center;
    display: flex;
}
</style>
