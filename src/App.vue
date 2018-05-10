<template>
  <div id="app">
    <router-view/>
    <div class="">

		<div class="app11-box-right">
			<div class="app12-top-righ" @click="touchStart()" draggable="true">导航</div>
			
			<div class="app13-bottom-righ"  draggable="true">
				<audio id="audio" src="static/mp3/music.mp3"  loop></audio>
				<img class="app2-img-size" @click="onclick()" :class="box" src="./assets/publice@2x-1.png" alt="">
			</div>
		</div>
    	<div  class="app10-align-position" v-show="slideStyle">
			<div class="app-boxmax-bg">
			<div class="app3-div-position"><img class="app2-img-size" src="./assets/home-3.png" alt=""></div>
			<div class="app4-position-boxmin">
			    <div class="app8-height-boxmin" v-for="(x, index, key) in apparr">
			   		<div class="app5-text-align">
			   			<p @click="toTab(index)" class="app6-border-align">{{x.name}}</p>
			   		</div>
					<p class="app5-text-align app7-text-color">{{x.text}}</p>
			    </div>
			</div>
			<div class="app9-img-position">
				<img class="app2-img-size" src="./assets/app-2.png" alt="">
			</div>
		 	</div>
        </div>









 </div>
 </div>
</template>

<script>
export default {
  name: 'App',
   data () {
    return {
    	 apparr:[ {name: '了解我们', text: 'about us', paths:'/understandUs' },
    	 		  	{name: '品牌优势', text: 'Advantage', paths:'/brand'},
    	 		  	{name: '人气产品', text: 'product', paths:'/popularity'},
    	 		  	{name: '赢取市场', text: 'market', paths:'Win'},
    	 		  	{name: '形象展示', text: 'Visual Identity', paths:'/imageDisplay'},
    	 		  	{name: '联系我们', text: 'contact us', paths:'/contactUs'}
    			],
            slideStyle: false,
            number:1,
            isPlaying:false,
            number1:1,
            box:''
    }

  },
	methods: {
		toTab (indexs) {
  			console.log(this.apparr[indexs].paths);
  			this.$router.push({path: this.apparr[indexs].paths})
   		 },
    touchStart() {
         	this.number++
         	if(this.number%2==0){
         		this.slideStyle=true
         	}else{
         		this.slideStyle=false
         	}
        },
      play(){
        var audio =document.querySelector('#audio');
        console.log(audio)
        if(this.isPlaying==false){
            audio.play();
            this.isPlaying = true;
        }
    },
    stop(){
        var audio =document.querySelector('#audio');
        console.log(audio)
        if(this.isPlaying==true){
            audio.pause();
            this.isPlaying = false;
            audio.currentTime = 0;
        }
    },
    onclick(){
    	this.number1++
         	if(this.number1%2==0){
         		this.play();
         		this.box='app14-play-music'
         	}else{
         		this.stop();
         		this.box=''
         	}
    }
}
}
</script>

<style>
#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
	}
	html{height: 100%;}
	body{height: 100%; margin: 0;}
	a{text-decoration: none; color: #000;}
	li,ul,ol{list-style: none; margin: 0; padding: 0;}
	.fl{float: left;}
	.fr{float: right;}
	h1,h2,h3,h4,h5,h6,div,p,span{margin: 0; padding: 0; }
	div,p,span{font-size: 14px;}
	table,tr,td{margin: 0; padding: 0;}

.app-boxmax-bg{background-color: #fef9ee; height: 100%; position: relative; width: 50%; overflow: hidden;}
	.app3-div-position{position: absolute;top: 5%;left:calc(50% - 25%); width: 50%; margin: 0 auto; height: 10%;}
	.app2-img-size{width: 100%; height: 100%;}
	.app4-position-boxmin{position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto; width: 60%; background-color:rgba(251,250,249,0.5); height: 60%;}
	.app5-text-align{text-align: center; width: 100%; display: block;}
	.app6-border-align{display: inline-block; width: 80%; text-align: center; height: 80%; border:1px solid #b39478; margin: 2% auto; font-family: '宋体 Regular'; line-height: 30px; font-size: 16px;}
	.app7-text-color{color: #b39478;}
	.app8-height-boxmin{height: 16.8%;}
	.app9-img-position{height: 15%; position: absolute; bottom: 3%; left: calc(25% ); width: 40%;}
	.app10-align-position{position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(238,230,230,0.5); z-index: 4;}
	.app12-top-righ{position: fixed; width: 30px; height: 30px; border: 1px solid #000; text-align: center; background-color: #fff; z-index: 5; top: 20%;right: 30px; border-radius: 50%; line-height: 30px;}
	.app13-bottom-righ{position: fixed; width: 30px; height: 30px; border: 1px solid #d3b65f; text-align: center; background-color: #fff; z-index:5; bottom: 20%;right: 30px; border-radius: 50%; line-height: 30px;}
	 .app14-play-music{animation: box 10s linear 0s infinite;}

	@keyframes box {
				from {transform: rotate(0deg);}
	to {transform: rotate(360deg);}}

</style>
