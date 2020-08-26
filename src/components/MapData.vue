<template>
    <div class="map-data">
        <div class="map-data-container" v-for="item in realTimeListDetail">
            <div class="map-scroll-title">空中花园 -- {{item.name}}</div>
            <div class='map-scroll-container' :class="{'animate-up':animateUp}">
                <div v-for="title in item.data" class="map-data-detail">
                    <span>{{title.name}}</span>
                    <span>{{title.data}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "MapData",
		data() {
			return {
				realTimeList: [],
				realTimeListDetail: [],
				animateUp: false
			}
		},
		mounted() {
			this.getMapInfo()
			setInterval(this.scrollAnimate, 2000)
		},
		methods: {
			getMapInfo() {
				this.$http.get('https://www.billdazy.com/190901/floorv4?project=P200320121679722').then(res => {
					if (res && res.data.code === 200) {
						this.realTimeList = res.data.data
						this.realTimeListDetail = this.realTimeList[0].house
					}
				})
			},
			scrollAnimate() {
				this.animateUp = true;
				setTimeout(() => {
					this.realTimeListDetail.push(this.realTimeListDetail[0]);
					this.realTimeListDetail.shift();
					this.animateUp = false;
				}, 500);
			}
		}
	}
</script>

<style scoped>
    .map-data {
        height: 27vh;
        padding-left: .2rem;
        overflow: hidden;
    }

    .map-scroll-title {
        font-size: .14rem;
        color: #ffffff;
        margin: .05rem 0;
        text-align: left;
    }

    .map-scroll-container {
        display: flex;
        flex-wrap: wrap;
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
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
    }
</style>
