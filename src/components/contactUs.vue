<style scoped>
.contactUs3-right-click{width: 15px; height: 50px; position: absolute; top: calc(50% - 25px); right: 0px; background-color: none;}
.contactUs102-position-p{position:absolute; top: 23px; left: 7%; width: 50px; height: 50px; border:1px solid #777; border-radius: 50%; overflow:hidden;  z-index: 2;}
.contactUs103-img-size{width: 100%; height: 100%; background: #e1ded7;}
.contactUs103-top-div{height: 30px; line-height: 30px; text-align:right; position: relative; overflow:hidden; font-size: 18px;  padding-right: 5px;
background-color: #e1ded7; margin: 2.5px; background-color: #e1ded7;}
.contactUs104-img-min{width: 30px; height: 30px; position: absolute; right: 80px;}
.contactUs105-text-color{height: 20px; line-height: 20px; text-align: right; padding-right: 5%; width: 80%; margin: 0 auto; color: #773902;}
.contactUs106-ovflow-border{display: inline-block; width: 80%;  overflow: hidden; margin: 0 auto; margin: 30px auto 0; border: 1px solid #777; border-radius: 10px;}
.contactUs3-text-align{text-align: center;}
.contactUs9-position-img{width: 16px; height: 16px;margin-left:-10px;}
.contactUs10-p-text{display: inline-block; width: 100%; text-align: center; position: relative; height: 40px; line-height: 40px; font-size: 24px; letter-spacing: 10px;}
.contactUs11-text-color{color:#804b24;}
.contactUs12-align-img{left: calc(50% - 64px);}
.contactUs16-line-height{line-height: 20px;}
.contactUs-border-radus{width: 20px; height: 20px; border: 1px solid #e7c8ab; color: #fff; line-height: 20px; text-align: center; border-radius: 50%; display: inline-block; background-color: #e7c8ab; font-size: 14px; margin-right: 10px;}
.contactUs2-list-box{width: 33%; text-align: center; line-height: 30px; display: inline-block;}
.contactUs3-content-align{width: 95%; margin: 0 auto; overflow:hidden;}
.contactUs5-text-indent{letter-spacing: 1px; margin-left: 0%; font-size: 12px;}
.contactUs6-box-display{display: none;}
.contactUs7-text-size{font-size: 12px;}
.contactUs8-box-bg{background-color: #eee;}
.contactUs26-dg-text{background-color: rgba(253,253,253,0.5);padding-left: 10px; margin-top: 10px; height: 132px;}
.contactUs27-position-icon{position: absolute; top: 0;height: 44px; width: 20%;}
.contactUs28-color-size{color: #2b0c06; font-size:16px; height: 44px; line-height: 44px; text-align: center;}
.contactUs29-left{left: 0;}
.contactUs29-right{right: 0;}
.contactUs30-shadow{border: 1px solid #fd921d; box-shadow: 5px 5px #fd921d; width: 40%;margin-left:30%; line-height: 35px; float: left;}
.contactUs31-margin{margin: 10px auto 10px;}
.contactUs13-content{position: relative;width: 95%; margin: 10px auto 0px;}
.contactUs3-img-size{width: 100%; height: 100%; background: #d1c0a5;}
.contactUs31-show-box{position: fixed;top: 0; left: 0; width: 100%; background-color: #e7e1e1; height: 100%; z-index: 2;}
.contactUs32-show-margin{margin-top: 20%;}
.contactUs33-border{border-top:#777 1px dashed; line-height: 40px; border-bottom:#777 1px dashed; margin-top: 10px;}
.contactUs34-text-size{font-size: 5rem; color: #804b24; font-family: fantasy;}
.contactUs35-border-shadow{width: 60%; margin: 20px auto; line-height: 50px; border-left: 1px solid #804b24; box-shadow: 5px 5px #c1956d;
	border-top: 1px solid #804b24; font-size: 16px; letter-spacing: 5px;}
.contactUs36-width-show{width: 80%; margin:20% auto 0; border: 1px solid #777; position: relative; background-color: #fff;}
.contactUs37-position-box{position: absolute; top: -15%; right: -15%; width: 30%; height:30%; }
.contactUs38-image-width{width: 100%; height: 100%;}
.contactUs39-text-color{color: #777;}    
.contactUs40-line-height{line-height: 30px; font-size: 14px; letter-spacing: 2px;}
.contactUs41-letter-spacing{letter-spacing: 0.3rem; color: #777;} 
</style>
</style>
<template>
<div class="contactUs8-box-bg">
	<div class="contactUs3-text-align">
		<p class="contactUs102-position-p">
				<img class="contactUs103-img-size" src="../assets/understandUs@2x-1.png" alt=""/>
			</p>
			<div class="contactUs106-ovflow-border">
				<div class="contactUs103-top-div contactUs39-text-color">
					<img class="contactUs104-img-min" src="../assets/understandUs@2x_03.png" alt=""/>
					联系我们
				</div>
			</div>
			<p class="contactUs105-text-color">about us</p>
	</div>


	<div>
		<p class="contactUs10-p-text contactUs39-text-color">
			<img class="contactUs9-position-img contactUs12-align-img" src="../assets/understandUs@2x-2.png" alt="">
			问卷测试
			<img class="contactUs9-position-img" src="../assets/understandUs@2x-2.png" alt="">
		</p>
		<p class="contactUs11-text-color contactUs16-line-height contactUs3-text-align contactUs40-line-height">contactUs introduction </p>
		<p class="contactUs3-text-align contactUs4-margin-bottom contactUs40-line-height contactUs39-text-color contactUs41-letter-spacing">检茶官：茶饮界的“检察官”</p>
	</div>

<div>
	<div class="contactUs3-content-align" v-for="(item,index) in contactusarr">
		<div>
			<p class="contactUs5-text-indent contactUs40-line-height contactUs39-text-color" @click="toTab(index)"><span class="contactUs-border-radus">{{item.number}}</span>{{item.textarr}}</p>
		</div>
		<div>
			<p class="contactUs2-list-box fl contactUs7-text-size contactUs40-line-height contactUs39-text-color"><input v-model="item.check" type="checkbox">{{item.name}}</p>
			<p class="contactUs2-list-box fl contactUs7-text-size contactUs40-line-height contactUs39-text-color"><input v-model="item.check1" type="checkbox">{{item.text}}</p>
			<p class="contactUs2-list-box fl contactUs7-text-size contactUs40-line-height contactUs39-text-color" :class="item.cls"><input v-model="item.check2" type="checkbox">{{item.describe}}</p>
		</div>
	</div>

	
</div>


	<div class="contactUs13-content contactUs-boxmax-bg contactUs31-margin">
		<p class="contactUs27-position-icon contactUs29-left" @click="arrclick()">
			<img class="contactUs3-img-size" src="../assets/understandUs@2x_17.png">
		</p>
		<div class="contactUs28-color-size">
			<p class="contactUs30-shadow contactUs41-letter-spacing" @click="arrclick()"> 继续了解 </p>
		</div>
		<p class="contactUs27-position-icon contactUs29-right">
			<img class="contactUs3-img-size" src="../assets/understandUs@2x_19.png">
		</p>
	</div>

<div v-show="ok" class="contactUs31-show-box">
<div class="contactUs36-width-show">
		<div class="contactUs32-show-margin">
		<p class="contactUs10-p-text">
			<img class="contactUs12-align-img" src="../assets/understandUs@2x-2.png" alt="">
			恭喜您
			<img class="" src="../assets/understandUs@2x-2.png" alt="">
		</p>
		<p class="contactUs11-text-color contactUs16-line-height contactUs3-text-align">Congratulations</p>
		<p class="contactUs3-text-align contactUs4-margin-bottom contactUs11-text-color contactUs33-border">您的创业成功指数</p>
		</div>
	<div>
		<h1 class="contactUs3-text-align contactUs34-text-size">100%</h1>
	</div>

	<div>
		<p class="contactUs35-border-shadow contactUs3-text-align"><router-link to="/callmidea">领取锦囊</router-link></p>
	</div>
	<div class="contactUs37-position-box"><img class="contactUs38-image-width" src="../assets/messageBoardThree@2x-1.png" alt=""></div>
	<div id="text"></div>
</div>

</div>

</div>
</template>

<script>
	export default {
	  name: 'Home',
	   data () {
    return {
    	 contactusarr:[ {name: '有', text: '没有', cls:'contactUs6-box-display', number:1 , textarr:'您品尝过“检茶官”的产品吗？', check:false, check1:false, 
    	 				check2:false},
    	 		   {name: '8万', text: '10万', number:2 , textarr:'您投资创业的预算是多少？' , describe:'20万以上', check:false, check1:false,check2:false},
    	 		   {name: '店铺选择 ', text: ' 营销服务', cls:'contactUs6-box-display', number:3 , textarr:'您与公司合作希望得到哪方面的支持？',describe:' 有无优惠 ', check:false, check1:false,check2:false},
    	 		   {name: '产品口感', text: '店铺管理 ', number:4 , textarr:'您在开店过程中最担心什么？',describe:'技术培训', check:false, check1:false,check2:false},
    	 		   {name: '个人独资 ', text: '合伙经营', cls:'contactUs6-box-display', number:5, textarr:'您的投资性质是什么？', check:false, check1:false,check2:false},
    	 		   {name: '一个月内 ', text: '两个月内', cls:'contactUs6-box-display', number:6, textarr:' 您计划什么时候开业？' , check:false, check1:false,check2:false},
    	 		   {name: ' 愿意', text: '不愿意', cls:'contactUs6-box-display', number:7 , textarr:' 您愿意加入“检茶官”大家庭吗？', check:false, check1:false,check2:false}
    			],
    			ok: false
    }

  },
	methods: {
  		arrclick() {
  			let dede=[];
  			for(var i=0; i<this.contactusarr.length;i++){
  				if(this.contactusarr[i].check==true){
  					dede.push(this.contactusarr[i].name);
  				}else if(this.contactusarr[i].check1==true){
  					dede.push(this.contactusarr[i].text)
  				}else if(this.contactusarr[i].check2==true){
  					dede.push(this.contactusarr[i].describe)
  				}
  			}
  			let obj={
  				date:dede
  			}
  			// let text=document.getElementById('text')
  			// text.innerHTML= '你的选择是' + obj.date
  			console.log(obj.date)
  			this.ok=true
  			}



}
}
</script>