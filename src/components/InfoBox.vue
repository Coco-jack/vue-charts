<template>
    <div class="garden-data-scroll" >
        <div class='garden-data-detail' :class="{'animate-up':animateUp}">
            <div v-for="item in titleDetail" class="garden-data-detail-content">
                <span>{{item.name}}</span>
                <span>{{item.data}}{{item.danwei}}</span>
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
                    this.titleDetail = res.data.data
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

<style scope>
.garden-data-scroll {
    height: 2.4rem;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .2rem;
    justify-content: space-around;
}
.garden-data-detail {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: .1rem 0;
}
.garden-data-detail-content {
    width: 1.5rem;
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
    font-size: .14rem;
}
</style>
