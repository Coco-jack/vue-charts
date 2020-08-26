<template>
    <div class="container">
        <div class='content' :class="{'animate-up':animateUp}"  v-for="item in realTimeDetail">
            <div class="garden-data-title">
                <img class="right-route" src="../assets/images/right.png"/>
                <img class="right-route" src="../assets/images/right.png"/>
                <img class="right-route" src="../assets/images/right.png"/>
                <span>{{item.name}}</span>
            </div>
            <div class="video-detail">
                <div class='video-scroll'>
                    <div class="scroll-monitor">
                        <img src="../assets/images/video.png"/>
                        <img src="../assets/images/video.png"/>
                        <img src="../assets/images/video.png"/>
                    </div>
                </div>
            </div>
            <div class="realTime">
                <div class="realTime-title">实时数据</div>
                <div class="realTime-container">
                    <div class="realTime-data">
                        <div class='video-scroll' :class="{'animate-up':animateUp}">
                            <div class="scroll-monitor">
                                <div class="realTime-data-detail" v-for="title in item.device">
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
                setTimeout(()=>{
                    this.realTimeDetail.push(this.realTimeDetail[0]);
                    this.realTimeDetail.shift();
                    this.animateUp = false;
                },500);
            }
        }
    }
</script>

<style scope>
.container {
    height: 46vh;
    overflow: hidden;
    margin-top: -.25rem
}
.content {
    width: 100%;
    margin-top: .3rem;
    background: rgba(1, 1, 1, 0);
    color: #fff;
}
.garden-data-title {
    width: 100%;
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
.garden-data-title>span {
    font-size: .14rem;
    margin-left: .07rem;
    line-height: .20rem;
}
.video-detail {
    display: flex;
    overflow: hidden;
}
.video-scroll {
    margin-top: .2rem;
    margin-left: .1rem;
}
.scroll-monitor {
    display: flex;
    justify-content: space-around;
}
.scroll-monitor>img {
    width: 1.1rem;
    height: 1rem;
    margin: 0 .05rem;
}
.realTime {
    margin-top: .1rem;
    overflow: hidden;
}
.realTime-title {
    text-align: left;
    margin-top: .2rem;
    margin-left: .3rem;
    font-size: .14rem;
}
.realTime-container {
    margin-top: .06rem;
    display: flex;
    overflow: hidden;
}
.realTime-data {
    display: flex;
}
.realTime-data-detail {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: url('../assets/images/avgDiv.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-right: .09rem;
}
.temperature-title {
    font-size: .1rem;
    margin-top: .09rem;
}
.temperature-detail {
    display: flex;
    justify-content: space-around;
}
.temperature {
    margin-top: .09rem;
    margin: 0 .1rem;
}
.temperature>span {
    display: block;
    font-size: .12rem;
    white-space: nowrap;
    margin: .05rem 0;
}
</style>
