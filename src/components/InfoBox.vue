<template>
    <div class="container">
        <div class="garden-data-title">
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <img class="right-route" src="../assets/images/right.png"/>
            <span class="garden-data-title-content">空中花园 (平均数据)</span>
        </div>
        <div>
            <div class='garden-data-detail' :class="{'animate-up':animateUp}">
                <div v-for="item in titleDetail" class="garden-data-detail-content">
                    <span>{{item.name}}</span>
                    <span>{{item.data}}{{item.danwei}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoBox',
    data() {
        return {
            titleDetail: [],
            animateUp: false
        }
    },
    mounted() {
        this.getData();
        setInterval(this.scrollAnimate, 2000);
    },
    methods: {
        getData() {
            this.$http.get('https://www.billdazy.com/190901/showtitlev4?project=P200320121679722').then( res => {
                if (res && res.data.code === 200) {
                    this.titleDetail = res.data.data.slice(0, 6)
                }
            })
        },
        scrollAnimate() {
            this.animateUp = true;
            setTimeout(()=>{
                this.titleDetail.push(this.titleDetail[0]);
                this.titleDetail.shift();
                this.animateUp = false;
            },500);
        },
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 46vh;
    overflow: hidden;
}
.garden-data-title {
    display: flex;
    height: 4vh;
    width: 100%;
    padding: 0 0 0 .2rem;
    align-items: center;
}
.garden-data-title-content {
    font-size: .16rem;
    margin-left: .07rem;
    color: #ffffff;
}
.right-route {
    width: .2rem;
    height: .2rem;
    display: block;
    margin-right: -.07rem;
}
.garden-data-detail {
    display: flex;
    flex-wrap: wrap;
    height: 42vh;
    justify-content: space-around;
}
.garden-data-detail-content {
    width: 1.5rem;
    height: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("../assets/images/avgDiv.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: .1rem;
    border: 1px solid #00a0e9;
    text-align: center;
    margin: .1rem 0;
}
.garden-data-detail-content>span {
    display: block;
    color: #ffffff;
    font-size: .16rem;
}
</style>
