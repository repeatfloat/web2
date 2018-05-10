<style scoped>
.win102-position-p{position:absolute; top: 23px; left: 7%; width: 50px; height: 50px; border:1px solid #777; border-radius: 50%; overflow:hidden;  z-index: 2;}
.win103-img-size{width: 100%; height: 100%; background: #f1f1f1;}
.win103-top-div{height: 30px; line-height: 30px; text-align:right; position: relative; overflow:hidden; font-size: 18px;  padding-right: 5px;
background-color: #f1f1f1; margin: 2.5px;}
.win104-img-min{width: 30px; height: 30px; position: absolute; right: 80px;}
.win105-text-color{height: 20px; line-height: 20px; text-align: right; padding-right: 5%; width: 80%; margin: 0 auto;}
.win106-ovflow-border{display: inline-block; width: 80%;  overflow: hidden; margin: 0 auto; margin: 30px auto 0; border: 1px solid #777; border-radius: 10px;}
.win3-text-align{text-align: center; height: 20%;}
.win9-position-img{width: 16px; height: 16px; color: #383838;margin-left: -8px;}
.win10-p-text{display: inline-block; width: 100%; text-align: center; position: relative; height: 30px; line-height: 30px; font-size: 18px; letter-spacing: 8px;}
.win11-text-color{color:#804b24;}
.win13-align-text{text-align: center; letter-spacing: 3px;}
.win16-line-height{font-size: 16px; letter-spacing: 3px;}
.win1-box-size{width: 50%; display: inline-block;}
.win2-img-size{width: 95%; margin: 0 auto; background-color: #ffffff; overflow:hidden;}
.win4-div-center{width: 98%; margin: 10px auto; overflow:hidden;}
.win-max-bg{background-color: #eee;}
.win5-box-size{width: 60%; display: inline-block;}
.win6-border-span{width: 20px;height: 20px; border-radius: 50%; display: inline-block; text-align: center; line-height: 20px; background: #b9a18b; color: #fff;}
.win12-height-line{line-height: 30px; color:#773902; font-size: 16px; }
.win13-divmin-size{width: 40%; display: inline-block;}
.win14-text-indent{padding-left: 5px; line-height: 25px; color: #777;}
.win17-margin{margin: 10px auto 0px;}
.win1246-color-size{color: #2b0c06; font-size:16px; height: 44px; line-height: 44px; text-align: center; background: #f1f1f1;}
.win1245-img-size{width: 100%; height: 100%; background: #d1c0a5;}
.win1244-left{left: 0;}
.win1244-right{right: 0;}
.win1242-position-icon{position: absolute; top: 0;height: 44px; width: 20%;}
.win1241shadow{border: 1px solid #fd921d; box-shadow: 5px 5px #fd921d; width: 40%; display: inline-block;line-height: 35px; float: left;margin-left: 30%; letter-spacing: 3px;color: #777;}
.win1240-margin{margin: 10px auto 0px; position: relative;}
.win1247-box-size{margin: calc(10% - 20px) auto 0; height: 40px; line-height: 60px; overflow:hidden}
.win17-text-color{color: #777;}
.win18-height-line{line-height: 30px;}
.win19-text-lh{line-height: 25px;line-height: 25px;}

</style>

<template>
<div class="win-max-bg">
	<div class="win3-text-align">
		<p class="win102-position-p">
				<img class="win103-img-size" src="../assets/understandUs@2x-1.png" alt=""/>
		</p>
			<div class="win106-ovflow-border">
				<div class="win103-top-div win17-text-color">
					<img class="win104-img-min" src="../assets/understandUs@2x_03.png" alt=""/>
					赢取市场
				</div>
			</div>
		<p class="win105-text-color win17-text-color">Market trends</p>
	</div>

	<div>
		<p class="win10-p-text win17-text-color">
			<img class="win9-position-img win12-align-img" src="../assets/understandUs@2x-2.png" alt="">
			团队简介
			<img class="win9-position-img" src="../assets/understandUs@2x-2.png" alt="">
		</p>
		<p class="win11-text-color win16-line-height win13-align-text win18-height-line">win trends</p>
		<p class="win18-height-line win13-align-text win17-text-color">6大团队为你护航</p>
	</div>


	<div class="win4-div-center" v-for="(item,index) in winarr">
	<div class="win1-box-size fl">
		<div class="win2-img-size">
			<div><img class="win103-img-size" :src="item.imgurl" alt=""></div>
			<p class="win11-text-color win13-align-text">{{item.name}}</p>
		</div>
	</div>
	<div class="win1-box-size fl">
		<div class="win2-img-size">			
			<div><img class="win103-img-size" :src="item.imgurl2" alt=""></div>
			<p class="win11-text-color win13-align-text">{{item.name2}}</p>
		</div>
	</div>
	</div>
	

	<div>
		<p class="win10-p-text win17-text-color">
			<img class="win9-position-img win12-align-img" src="../assets/understandUs@2x-2.png" alt="">
			政策支持
			<img class="win9-position-img" src="../assets/understandUs@2x-2.png" alt="">
		</p>
		<p class="win11-text-color win19-text-lh win13-align-text win25-color-text">win trends</p>
		<p class="win18-height-line win13-align-text win17-text-color"><span class="win11-text-color">没有经验?</span> 检茶官手把手助你成功</p>
	</div>
	
	<div class="win2-img-size win17-margin"  v-for="(x,index) in textarr">
		<div class="win5-box-size fl"><img class="win103-img-size" :src="x.imgurl" alt=""></div>
		<div class="win13-divmin-size fl">
			<p class="win12-height-line win14-text-indent"><span class="win6-border-span">{{x.number}}</span>{{x.name}}</p>
			<p class="win14-text-indent">{{x.text}}</p>
		</div>
	</div>


	<div class="win1240-margin win1247-box-size win2-img-size">
		<p class="win1242-position-icon win1244-left">
		<img class="win1245-img-size" src="../assets/understandUs@2x_17.png">
		</p>
		<div class="win1246-color-size">
			<router-link to="/imageDisplay" class="win1241shadow"> 继续了解 </router-link>
		</div>
		<p class="win1242-position-icon win1244-right">
			<img class="win1245-img-size" src="../assets/understandUs@2x_19.png">
		</p>
	</div>








</div>
</template>

<script>
	export default {
	  name: 'win',
	  
	   data () {
	   	return {
    	winarr:[{name: '售后服务团队', 	imgurl: require('../assets/win@2x_03.jpg'),	name2: '项目研发团队', imgurl2: require('../assets/win@2x_05.jpg')       			},
    	 		  	{name: '市场调研团队', 		imgurl: require('../assets/win@2x_10.jpg'), name2: '投资顾问团队',imgurl2: require('../assets/win@2x_12.jpg')      		},
    	 		  	{name: '人力资源团队', 		imgurl: require('../assets/win@2x_15.jpg'),	name2: '设计策划团',imgurl2: require('../assets/win@2x_16.jpg')}
    			],
    	textarr:[{name: '协助选址', 	imgurl: require('../assets/win@2x_20.jpg'),	number: 1, text:'协助加盟商考察店址，分析当地竞争对手以及消费者。'      			},
    	 		  {name: '装修设计', 	imgurl: require('../assets/win@2x_23.jpg'),	number: 2, text:'根据投资预算设计店面图纸，协助采购开业设施物料。'      			},
    	 		  {name: '开业带店', 	imgurl: require('../assets/win@2x_26.jpg'),	number: 3, text:'店面开业后，总部不定期对投资商提供经营指导服务。'      			},
    	 		  {name: '系统培训', 	imgurl: require('../assets/win@2x_29.jpg'),	number: 4, text:'总部开展培训，如产品制作、店面管理、销售技巧等。'      			},
    	 		  {name: '节日促销', 	imgurl: require('../assets/win@2x_33.jpg'),	number: 5, text:'协助做店庆活动、优惠折扣活动、节假日定制海报等。'      			},
    	 		  {name: '新品研发', 	imgurl: require('../assets/win@2x_35.jpg'),	number: 6, text:'总部不定期对投资商提供新品研发支持，确保竞争力。'      			},
    	 		  {name: '物料配送', 	imgurl: require('../assets/win@2x_38.jpg'),	number: 7, text:'核心物料统一配送，安全及时，物流在线可实时监控'      			},
    	 		  {name: '区域保护', 	imgurl: require('../assets/win@2x_41.jpg'),	number: 8, text:'根据所在地市场严控加盟店数量，保障各家门店客源。'      			}
    			]
   

  } },
	methods: {
  	 }
  	}
</script>