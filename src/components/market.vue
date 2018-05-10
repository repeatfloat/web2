<style scoped>
.market102-position-p{position:absolute; top: 23px; left: 7%; width: 50px; height: 50px; border:1px solid #777; border-radius: 50%; overflow:hidden;  z-index: 2;}
.market103-img-size{width: 100%; height: 100%; background: #f1f1f1;}
.market103-top-div{height: 30px; line-height: 30px; text-align:right; position: relative; overflow:hidden; font-size: 18px;  padding-right: 5px; margin: 2.5px; background-color: #f1f1f1;}
.market104-img-min{width: 30px; height: 30px; position: absolute;  right: 80px;}
.market105-text-color{height: 20px; line-height: 20px; text-align: right; padding-right: 5%; width: 80%; margin: 0 auto;}
.market106-ovflow-border{display: inline-block; width: 80%;  overflow: hidden; margin: 0 auto; margin: 30px auto 0; border: 1px solid #777; border-radius: 10px;}
.market3-text-align{text-align: center; height: 20%;}
.market9-position-img{width: 16px; height: 16px;}
.market10-p-text{display: inline-block; width: 100%; text-align: center; position: relative; height: 40px; line-height: 40px; font-size: 24px;}
.market11-text-color{color:#804b24;}
.market16-line-height{line-height: 20px; color: #383838;}
.market13-align-text{text-align: center;}
.market14-color-text{color: #773902;}
.market15-color-font{color: #7aad12; line-height: 40px; font-size: 18px;}
.market17-div-size{width: 40%; display: inline-block; height: 100px;background-color: #ddd;text-indent: 10px;}
.market18-div-ovflow{overflow:hidden; width: 90%; margin: 20px auto 0;}
.market19-text-height{line-height: 30px; font-size: 14px; overflow:hidden; height: 30px; color:#777;}
.market20-box-size{width: 60%;display: inline-block; height: 100px;}
.market21-img-size{width: 100%; height: 100%; display:block;}
.market22-text-color{color:#777;}
.market23-td-head{color: #fff; font-size: 16px; background-color: #8e5b2c;}
.market24-text-align{text-align: center; width: 90%; margin: 0 auto;}
.market24-color-size{font-size: 16px;}
.market25-color-text{color: #834a16;}
.market26-font-size{font-size: 14px;}
.market24-text-align td{border: 1px solid #c6ab8f;}
.market27-bg-boxmin{background-color: #efe6ce; padding:10px 0 30px; margin-top: 20px;}
.market28-images-size{width: 100%; display: block;}
.market29-color-text{color:#773902; font-size: 16px;}
.marlet30-line-height{line-height: 30px; height: 30px; overflow: hidden;}
.marlet31-boxmax-bg{background-color: #eeeeee;}
.market32-border-bottom{border-bottom: 1px dashed #c3c3c3;}
.market1246-color-size{color: #2b0c06; font-size:16px; height: 44px; line-height: 44px; text-align: center;}
.market1245-img-size{width: 100%; height: 100%; background: #d1c0a5;}
.market1244-left{left: 0;}
.market1244-right{right: 0;}
.market1242-position-icon{position: absolute; top: 0;height: 44px; width: 20%;}
.market1241shadow{border: 1px solid #fd921d; box-shadow: 5px 5px #fd921d; width: 40%; float: left;display: inline-block; line-height: 35px; margin-left: 30%; letter-spacing: 5px;}
.market1240-margin{margin: 10px auto 0px; position: relative;}
.market1247-box-size{margin: calc(10% - 20px) auto 0; height: 40px; line-height: 60px; overflow:hidden;}
.market4-footer-div{height: 10%;}
.market33-text-color{color: #777;}
.market34-line-height{line-height: 30px;}
</style>
<template>
<div class="marlet31-boxmax-bg">
	<div class="market3-text-align">
		<p class="market102-position-p">
				<img class="market103-img-size" src="../assets/understandUs@2x-1.png" alt=""/>
		</p>
			<div class="market106-ovflow-border">
				<div class="market103-top-div market33-text-color">
					<img class="market104-img-min" src="../assets/understandUs@2x_03.png" alt=""/>
					品牌优势
				</div>
			</div>
			<p class="market105-text-color market33-text-color">about us</p>
	</div>
	<p class="market10-p-text market33-text-color">
		<img class="market9-position-img market12-align-img" src="../assets/understandUs@2x-2.png" alt="">
		了解市场
		<img class="market9-position-img" src="../assets/understandUs@2x-2.png" alt="">
	</p>
	<p class="market14-color-text market16-line-height market13-align-text market34-line-height">Market trends</p>
	<p class="market13-align-text market33-text-color market34-line-height"><b class="market14-color-text">2350亿</b>市场商机，年轻消费崛起！</p>

	<div class="market18-div-ovflow" v-for="(x, index, key) in marketarr" :key="index">
		<div class="market17-div-size fl">
			<p class="market15-color-font">{{x.name}}</p>
			<p class="market19-text-height">{{x.text}}</p>
			<p class="market19-text-height">{{x.number}}</p>
		</div>
		<div class="market20-box-size fl"><img class="market21-img-size" v-bind:src="x.imgurl" alt=""></div>
	</div>
	<div class="market27-bg-boxmin">
	<p class="market33-text-color market16-line-height market13-align-text">都在做茶，检茶官凭什么</p>
	<p class="market10-p-text market22-text-color">
		<img class="market9-position-img market12-align-img" src="../assets/understandUs@2x-2.png" alt="">
		更受年轻人欢迎？
		<img class="market9-position-img" src="../assets/understandUs@2x-2.png" alt="">
	</p>
	<div>
		<table class="market24-text-align"  border="1" cellspacing="0">
			<tr>
				<td class="market23-td-head">品牌</td>
				<td>
					<p class="market24-color-size market25-color-text">检茶官</p>
					<p class="market26-font-size market25-color-text">新生代，全力吸粉</p>
				</td>
				<td><p class="market24-color-size market25-color-text">传统茶饮</p><p class="market26-font-size market25-color-text">大路货，食客厌倦</p></td>
			</tr>
			<tr>
				<td class="market23-td-head">口感</td>
				<td><p class="market33-text-color">多种变化，多样呈现</p></td>
				<td><p class="market33-text-color">竞品雷同，口味老套</p></td>
			</tr>
			<tr>
				<td class="market23-td-head">创意</td>
				<td><p class="market33-text-color">意境名字，时尚潮流</p></td>
				<td><p class="market33-text-color">缺乏创意，千篇一律</p></td>
			</tr>
			<tr>
				<td class="market23-td-head">营养</td>
				<td><p class="market33-text-color">好茶，好奶，好食材</p></td>
				<td><p class="market33-text-color">廉价食材，危害健康</p></td>
			</tr>
		</table>
	</div>
	</div>
<div class="market18-div-ovflow">
	<p class="market10-p-text market22-text-color">
		<img class="market9-position-img market12-align-img market33-text-color" src="../assets/understandUs@2x-2.png" alt="">
		品牌优势
		<img class="market9-position-img" src="../assets/understandUs@2x-2.png" alt="">
	</p>
	<p class="market11-text-color market16-line-height market13-align-text market25-color-text">branded advantages</p>
	<p class="market33-text-color market16-line-height market13-align-text market34-line-height"><span class="market25-color-text">小投资，大财富，</span>创业就是这么简单！</p>

	<div v-for="(item, index, key) in runarr">
		 <div class="market29-images-div">
		 	<img class="market28-images-size" v-bind:src="item.imgurl"/>
		 </div>
		<div class="market32-border-bottom">
			<p class="marlet30-line-height market33-text-color">
				<span class="market29-color-text">{{item.name}}</span>{{item.text}}</p>
			<p class="marlet30-line-height market33-text-color">{{item.textarr}}</p>
		</div>
	</div>
	<div class="market4-footer-div">
	<div class="market1240-margin market1247-box-size">
		<p class="market1242-position-icon market1244-left">
		<img class="market1245-img-size" src="../assets/understandUs@2x_17.png">
		</p>
		<div class="market1246-color-size">
			<router-link to="/Win" class="market1241shadow market33-text-color"> 继续了解 </router-link>
		</div>
		<p class="market1242-position-icon market1244-right">
			<img class="market1245-img-size" src="../assets/understandUs@2x_19.png">
	</p>
	</div>
</div>
</div>






</div>
</template>

<script>
	export default {
	  name: 'market',
	  
	   data () {
	   	return {
    	marketarr:[{name: '4.4亿', 	text: '80后、90后突破', 	number:'4.4亿',       			imgurl: require('../assets/market@2x_03.jpg')},
    	 		  	{name: '34%', 		text: '2015年茶饮市场', 	number:'增速超34%',      		imgurl: require('../assets/market@2x_07.jpg')},
    	 		  	{name: '74%', 		text: '20-35岁人群共享', 	number:'74%的餐饮消费', 		imgurl: require('../assets/market@2x_12.jpg')},
    	 		  	{name: '2350亿', 	text: '2017年茶饮市场', 	number:'总值将达2350亿', 		imgurl: require('../assets/market@2x_16.jpg')}
    			],
    	runarr:[
    		{name: '10平米起步', 	text: '1人轻松经营'	,
    		textarr:'检茶官降低投门槛，单店万元起步，1人可干!',  
    			imgurl: require('../assets/market@2x-1_20.jpg')},
    	 	{name: '双线获利', 		text: '财富一网打尽', 	
    	 	textarr:'与各大团购、外卖网站合作，充分引流线上客源！', 
    	 		imgurl: require('../assets/market@2x-1_23.jpg')},
    	 	{name: '多渠道宣传', 		text: '扩大品牌效应', 	
    	 	textarr:'全渠道媒体合作，宣传产品，提升品牌的知名度！',
    	 		imgurl: require('../assets/market@2x-1_26.jpg')},
    	 	{name: '统一供应', 	text: '品质始终如一', 	
    	 	textarr:'完善原料供应链，专属物流系统，保障产品品质！',
    	 		imgurl: require('../assets/market@2x-1_28.jpg')}
    		 	]
   

  } },
	methods: {
  	 }
}
</script>