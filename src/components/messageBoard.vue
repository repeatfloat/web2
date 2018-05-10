<style scoped>
	.messageBoard-text-color{color:834a15; text-align: center; font-size: 18px; line-height: 40px;}
	.messageBoard2-text-size{font-size: 24px; line-height: 60px; text-indent: 1em;}
	.messageBoard3-box-left{width:calc(80% - 10px); display: inline-block; border: 1px solid #e8e1da; box-shadow: 5px 5px #d7a87e; border-radius: 20px; margin-top: 50%; margin-bottom: 40px;}
	.messageBoard4-box-right{display: inline-block; width:calc(20% - 10px); margin-top: 45%;}
	.messageBoard5-img-width{width: 100%; height: 100%; display: block;}
	.messageBoard6-div-margin{width: 90%; margin: 0 auto;}
	.messageBoard7-left-shadow{width: 80%; display: inline-block; border: 2px solid #e8e1da; box-shadow: 5px 5px  #d7a87e; text-align: center; line-height: 40px; font-size: 16px;}
	.messageBoard8-right-shadow{width: 80%; display: inline-block; border: 2px solid #e8e1da; box-shadow: 5px 5px  #d7a87e; text-align: center; line-height: 40px; font-size: 16px;}
	.messageBoard9-left-box{width: 50%; display: inline-block;}
	.messageBoard10-ovflow{overflow:hidden; padding-bottom: 50px; margin-top: 20px;}
	.messageBoard11-bg-color{background-color: #f1f1f1; padding-bottom: 20px;  height: 100%;}
	.messageBoard12-box-margin{width: 80%; margin: 20px auto 0;}
</style>
<template>
	
<div class="messageBoard11-bg-color">
	<div class="messageBoard6-div-margin">
		<div class="messageBoard3-box-left fl"><p class="messageBoard2-text-size">花一分钟测试有礼</p><p class="messageBoard-text-color">测试您的创业概率</p></div>
		<div class="messageBoard4-box-right fl"><img class="messageBoard5-img-width" src="../assets/messageBoard@2x-1.png" alt=""></div>
	</div>


	<div class="messageBoard12-box-margin messageBoard10-ovflow">
		<div class="messageBoard9-left-box fl"><div class="messageBoard7-left-shadow">残忍拒绝</div></div>
		<router-link to="/contactUs" class="messageBoard9-left-box fl"><div class="messageBoard8-right-shadow">马上测试</div></router-link>
	</div>







</div>
</template>