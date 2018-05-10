<template>
	<div class="home-boxmax-bg"  @touchstart="touchStart" @touchend="touchEnd" :class="slideStyle">
		<div class="home3-div-position"><img class="home2-img-size" src="../assets/home-3.png" alt=""></div>
		<div class="home4-position-boxmin">
		    <div class="home8-height-boxmin" v-for="(x, index, key) in homearr">
		   		<div class="home5-text-align">
		   			<p @click="toTab(index)" class="home6-border-align">{{x.name}}</p>
		   		</div>
				<p class="home5-text-align home7-text-color">{{x.text}}</p>
		    </div>
		</div>
		<div class="home9-img-position">
			<img class="home2-img-size" src="../assets/home-2.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'Home',
	   data () {
    return {
    	 homearr:[ {name: '了解我们', text: 'about us', paths:'/understandUs' },
                    {name: '品牌优势', text: 'Advantage', paths:'/brand'},
                    {name: '人气产品', text: 'product', paths:'/popularity'},
                    {name: '赢取市场', text: 'market', paths:'Win'},
                    {name: '形象展示', text: 'Visual Identity', paths:'/imageDisplay'},
                    {name: '联系我们', text: 'contact us', paths:'/contactUs'}
                ],
    			startX: 0,
            startY: 0,
            slideStyle:''
    }

  },
	methods: {
  		toTab (indexs) {
  			console.log(this.homearr[indexs].paths);
  			this.$router.push({path: this.homearr[indexs].paths})
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
                if(endY - this.startY <= 25 ) {
                    if (endX < this.startX) {
                     	this.slideStyle='home10-z-index';
                     	console.log(this.slideStyle)
                    } else if (endX > this.startX) {
                        this.slideStyle='home10-z-index';
                         console.log(this.apparr)

                    };
                };
            };
        } 
}
}
</script>
<style scoped>
	.home-boxmax-bg{background-image: url('../assets/home-1.png'); background-repeat: no-repeat; background-size: cover;height: 100%; position: relative;
		overflow: hidden; z-index: 2;}
	.home3-div-position{position: absolute; top: 0;left:calc(50% - 25%); width: 50%; margin: 0 auto; height: 15%;}
	.home2-img-size{width: 100%; height: 100%;}
	.home4-position-boxmin{position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto; width: 60%; background-color:rgba(251,250,249,0.5); height: 60%;}
	.home5-text-align{text-align: center; width: 100%; display: block;}
	.home6-border-align{display: inline-block; width: 80%; text-align: center; height: 80%; border:1px solid #b39478; margin: 2% auto; font-family: '宋体 Regular'; line-height: 30px; font-size: 16px;}
	.home7-text-color{color: #b39478;}
	.home8-height-boxmin{height: 16.8%;}
	.home9-img-position{height: 30%; position: absolute; bottom: 10%; left: calc(50% + 15%); width: 40%;}
	.home10-z-index{z-index:1;}
</style>