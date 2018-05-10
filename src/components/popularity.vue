<template>
<div class="banner-bg-boxmax">
	<div class="banner3-text-align">
		<p class="banner102-position-p">
				<img class="banner103-img-size" src="../assets/understandUs@2x-1.png" alt=""/>
			</p>
			<div class="banner106-ovflow-border">
				<div class="banner103-top-div banner5-text-color">
					<img class="banner104-img-min" src="../assets/understandUs@2x_03.png" alt=""/>
					人气产品
				</div>
			</div>
			<p class="banner105-text-color banner5-text-color">about us</p>
	</div>
	<div class="pro_list" @touchstart="touchStart" @touchend="touchEnd">
	    <transition-group tag="div" :name="slideStyle">
	        <img class="banner-imgarr" v-for="(img, index) in imgArray" :src="img" v-show="index === idx" :key="index" @click="stop()">
	    </transition-group>
	</div>
	<img class="banner2-left-click" src="../assets/banner-2.png" alt="" @click="prev()" />
	<img class="banner3-right-click" src="../assets/banner-1.png" alt="" @click="next()" />

<div class="banner4-footer-div">
	<div class="banner1240-margin banner1247-box-size">
		<p class="banner1242-position-icon banner1244-left">
		<img class="banner1245-img-size" src="../assets/understandUs@2x_17.png">
		</p>
		<div class="banner1246-color-size">
			<router-link to="/market" class="banner1241shadow"> 继续了解 </router-link>
		</div>
		<p class="banner1242-position-icon banner1244-right">
			<img class="banner1245-img-size" src="../assets/understandUs@2x_19.png">
	</p>
	</div>
</div>

</div>
</template>
<script>
export default {
    data () {
        return {
            timer: null,
            idx: 0,
            imgArray: [
                require('../assets/banner@2x-2.jpg'),
                require('../assets/banner@2x-3.jpg'),
                require('../assets/banner@2x-4.jpg'),
              	require('../assets/banner@2x-5.jpg'),
                require('../assets/banner@2x-6.jpg'),
                require('../assets/banner@2x-7.jpg'),
                require('../assets/banner@2x-8.jpg'),
                require('../assets/banner@2x-9.jpg'),
                require('../assets/banner@2x-10.jpg'),
                require('../assets/banner@2x-11.jpg'),
                require('../assets/banner@2x-12.jpg'),
                require('../assets/banner@2x-13.jpg'),
                require('../assets/banner@2x-14.jpg'),
                require('../assets/banner@2x-15.jpg'),
                require('../assets/banner@2x-16.jpg'),
                require('../assets/banner@2x-17.jpg')
            ],
            startX: 0,
            startY: 0,
            slideStyle: 'slideLeft'
        };
    },
    methods: {
        autoPlay () {
            this.slideStyle = 'proSlide';
            this.idx++;
            if (this.idx == this.imgArray.length-1) {
                this.idx = 0;
            }
        },
        play () {
            this.timer = setInterval(this.autoPlay, 3000);
        },
        stop () {
            clearInterval(this.timer);
        },
        prev () {
            this.slideStyle = 'proHold';
            this.idx--;
            if (this.idx <= 0) {
                this.idx = this.imgArray.length-1;
            };
        },
        next () {
            this.slideStyle = 'proSlide';
            this.idx++;
            if (this.idx === this.imgArray.length-1) {
                this.idx = 0;
            };
        },
        touchStart(ev) {
            ev = ev || event;
            if (ev.touches.length === 1) {
                this.startX = ev.touches[0].clientX;
                this.startY = ev.touches[0].clientY;
            };
        },
        touchEnd(ev) {
            ev = ev || event;
            if (ev.changedTouches.length === 1) {
                var endX = ev.changedTouches[0].clientX;
                var endY = ev.changedTouches[0].clientY;
                this.stop();
                if(endY - this.startY <= 25 ) {
                    if (endX < this.startX) {
                        this.next();
                    } else if (endX > this.startX) {
                        this.prev();
                    };
                };
            };
        }
    },
   
    mounted () {
        this.play()
    }
}; 


</script>

<style scoped>
.banner-bg-boxmax{width: 100%; height: 100%; background-color: #f1edeb; overflow:hidden;}
.proSlide-enter-active,.proSlide-leave-active,.proHold-leave-active{transition:all 1s ease;-webkit-transition: all 1s ease;}
.proSlide-enter,.proHold-leave-to{transform: translate3d(100%,0,0);-webkit-transform: translate3d(100%,0,0);}
.pro_list{ width: 90%; margin:0 auto; height: 70%;position: relative; overflow:hidden; background: url(../assets/banner@2x-2.jpg); background-size: cover; background-repeat: no-repeat;}
.pro_list .banner-imgarr{position: absolute;}
.pro_list .btn{width: 0.666667rem;height: 0.746667rem;background-size: 0.666667rem auto; top:50%; margin-top: -0.333333rem}
.banner-imgarr{width: 100%; height: 100%;}
.banner2-left-click{width: 15px; height: 50px; position: absolute; top: calc(50% - 25px); left: 0px; background-color: none;}
.banner3-right-click{width: 15px; height: 50px; position: absolute; top: calc(50% - 25px); right: 0px; background-color: none;}
.banner102-position-p{position:absolute; top: 23px; left: 7%; width: 50px; height: 50px; border:1px solid #777; border-radius: 50%; overflow:hidden;  z-index: 2;}
.banner103-img-size{width: 100%; height: 100%; background: #f1f1f1;}
.banner103-top-div{height: 30px; line-height: 30px; text-align:right; position: relative; overflow:hidden; font-size: 18px;  padding-right: 5px; margin: 2.5px; background-color: #f1f1f1;}
.banner104-img-min{width: 30px; height: 30px; position: absolute; right: 80px;}
.banner105-text-color{height: 20px; line-height: 20px; text-align: right; padding-right: 5%; width: 80%; margin: 0 auto;}
.banner106-ovflow-border{display: inline-block; width: 80%; overflow: hidden;margin: 0 auto; margin: 30px auto 0;border: 1px solid #777; border-radius: 10px;}
.banner3-text-align{text-align: center; height: 20%;}
.banner1246-color-size{color: #2b0c06; font-size:16px; height: 44px; line-height: 44px; text-align: center;}
.banner1245-img-size{width: 100%; height: 100%; background: #f1f1f1;}
.banner1244-left{left: 0;}
.banner1244-right{right: 0;}
.banner1242-position-icon{position: absolute; top: 0;height: 44px; width: 20%;}
.banner1241shadow{border: 1px solid #fd921d; box-shadow: 5px 5px #fd921d; width: 40%; margin-left: calc(50% - 20%); float: left; line-height: 35px; letter-spacing: 3px; color: #777;}
.banner1240-margin{margin: 10px auto 0px; position: relative;}
.banner1247-box-size{width: 90%; margin: calc(10% - 20px) auto 0; height: 40px; line-height: 60px; overflow:hidden;}
.banner4-footer-div{height: 10%;}
.banner5-text-color{color: #777;}
</style>






    