<template>
    <div class="container">
        <div class='content' :class="{'animate-up':animateUp}" v-for="item in realTimeDetail">
            <div class="garden-data-title">
                <img class="right-route" src="../assets/images/right.png"/>
                <img class="right-route" src="../assets/images/right.png"/>
                <img class="right-route" src="../assets/images/right.png"/>
                <span class="garden-data-title-content">{{ item.name }}</span>
            </div>
            <div class="garden-bottom-content">
                <div class="scroll-monitor">
                    <img src="../assets/images/right01.png"/>
                    <img src="../assets/images/right03.png"/>
                    <img src="../assets/images/right02.png"/>
                </div>
                <div class="realTime-title">实时数据</div>
                <div class="realTime-container">
                    <div style="width: 100%" :class="{'animate-up':animateUp}">
                        <div class="scroll-monitor-content">
                            <div class="realTime-data-detail" v-for="title in item.device.slice(0, 2)">
                                <div class="temperature-title">{{title.name}}</div>
                                <div class="temperature-detail">
                                    <div class="temperature" v-for="titleDetail in title.data">
                                        <span>{{titleDetail.name}}</span>
                                        <span>{{titleDetail.data}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MonitorBox',
    data() {
        return {
            animateUp: false,
            monitorList: [],
            realTimeList: [],
            realTimeDetail: []
        }
    },
    mounted() {
        this.getMonitorList()
        this.getRealData()
        setInterval(this.scrollAnimate, 2000)
    },
    methods: {
        getMonitorList() {
            this.$http.get('https://www.billdazy.com/190901/monitor?project=P200320121679722').then(res => {
                if (res && res.data.code === 200) {
                    this.monitorList = res.data.data.data
                }
            })
        },
        getRealData() {
            this.$http.get('https://www.billdazy.com/190901/floorv4?project=P200320121679722').then(res => {
                if (res && res.data.code === 200) {
                    this.realTimeList = res.data.data
                    this.realTimeDetail = this.realTimeList[0].house
                }
            })
        },
        scrollAnimate() {
            this.animateUp = true;
            setTimeout(() => {
                this.realTimeDetail.push(this.realTimeDetail[0]);
                this.realTimeDetail.shift();
                this.animateUp = false;
            }, 500);
        }
    }
}
</script>

<style scoped>
.container {
    height: 46vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content {
    height: 46vh;
    padding: .2rem 0 0 .2rem;
}

.garden-data-title {
    display: flex;
    height: 4vh;
    width: 100%;
    align-items: center;
}

.right-route {
    width: .2rem;
    height: .2rem;
    display: block;
    margin-right: -.07rem;
}

.garden-data-title-content {
    font-size: .16rem;
    margin-left: .07rem;
    color: #ffffff;
}

.garden-bottom-content {
    height: 42vh;
}

.scroll-monitor {
    display: flex;
    height: 19vh;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
}

.scroll-monitor > img {
    width: 1.1rem;
    height: 1rem;
}

.realTime-title {
    width: 100%;
    height: 4vh;
    color: #ffffff;
    display: flex;
    align-items: center;
    font-size: .16rem;
}

.realTime-container {
    width: 100%;
    height: 19vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
}

.scroll-monitor-content {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}

.realTime-data-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('../assets/images/avgDiv.png') no-repeat;
    background-size: 100% 100%;
    border: 1px solid #00a0e9;
    margin: 0 .1rem;
    padding: .05rem;
}

.temperature-title {
    font-size: .16rem;
    color: #ffffff;
}

.temperature-detail {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.temperature {
    margin: 0 .1rem;
}

.temperature > span {
    display: block;
    font-size: .16rem;
    white-space: nowrap;
    margin: .05rem 0;
    color: #ffffff;
}
</style>
