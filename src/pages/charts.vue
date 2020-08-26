<template>
    <div>
        <div class="title">数据监控</div>
        <div class="content-left">
            <div class="garden-data">
                <div class="garden-data-title">
                    <img class="right-route" src="../assets/images/right.png"/>
                    <img class="right-route" src="../assets/images/right.png"/>
                    <img class="right-route" src="../assets/images/right.png"/>
                    <span>空中花园 (平均数据)</span>
                </div>
                <InfoBox />
                <MonitorBox />
            </div>
        </div>
        <div class="content-center">

        </div>
    </div>
</template>

<script>
import InfoBox from '../components/InfoBox'
import MonitorBox from '../components/MonitorBox'
export default {
    name: 'charts',
    components: {
        InfoBox,
        MonitorBox
    },
    data() {
        return {
        }
    }
}
</script>

<style scope>
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 92vh;
}

.garden-data {
    width: 100%;
    color: #fff;
    background: rgba(1, 1, 1, .3);
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

.garden-data-title>span {
    font-size: .14rem;
    margin-left: .07rem;
    line-height: .2rem;
}
</style>
