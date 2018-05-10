<template>
	<div class="aslide-boxmax-bg">
		<div class="aslide3-div-position"><img class="aslide2-img-size" src="../assets/home-3.png" alt=""></div>
		<div class="aslide4-position-boxmin">
		    <div class="aslide8-height-boxmin" v-for="(x, index, key) in aslidearr">
		   		<div class="aslide5-text-align">
		   			<p @click="toTab(index)" class="aslide6-border-align">{{x.name}}</p>
		   		</div>
				<p class="aslide5-text-align aslide7-text-color">{{x.text}}</p>
		    </div>
		</div>
		<div class="aslide9-img-position">
			<img class="aslide2-img-size" src="../assets/home-2.png" alt="">
		</div>
	</div>

</template>


<script>
	export default {
	  name: 'aslide',
	   data () {
    return {
    	 aslidearr:[ {name: '了解我们', text: 'about us', paths:'/understandUs' },
    	 		  	{name: '品牌优势', text: 'Advantage', paths:'/'},
    	 		  	{name: '人气产品', text: 'product', paths:'/'},
    	 		  	{name: '赢取市场', text: 'market', paths:'/'},
    	 		  	{name: '形象展示', text: 'Visual Identity', paths:'/'},
    	 		  	{name: '联系我们', text: 'contact us', paths:'/'}
    			]
    }

  },
	methods: {
  		toTab (indexs) {
  			console.log(this.aslidearr[indexs].paths);
  			this.$router.push({path: this.aslidearr[indexs].paths})
    } }
}
</script>


<style scoped>
.aslide-boxmax-bg{background-image: url('../assets/home-1.png'); background-repeat: no-repeat; background-size: cover;height: 100%; position: relative; width: 50%; overflow: hidden;}
	.aslide3-div-position{position: absolute; top: 0;left:calc(50% - 25%); width: 50%; margin: 0 auto; height: 15%;}
	.aslide2-img-size{width: 100%; height: 100%;}
	.aslide4-position-boxmin{position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto; width: 60%; background-color:rgba(251,250,249,0.5); height: 60%;}
	.aslide5-text-align{text-align: center; width: 100%; display: block;}
	.aslide6-border-align{display: inline-block; width: 80%; text-align: center; height: 80%; border:1px solid #b39478; margin: 2% auto; font-family: '宋体 Regular'; line-height: 30px; font-size: 16px;}
	.aslide7-text-color{color: #b39478;}
	.aslide8-height-boxmin{height: 16.8%;}
	.aslide9-img-position{height: 30%; position: absolute; bottom: 10%; left: calc(50% + 15%); width: 40%;}
</style>