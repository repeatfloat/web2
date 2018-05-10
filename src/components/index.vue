<template>
    <div class="index container">
    	<div class="index-head index-head-bgimage">
	        <div class="index2-div-top"><img src="../img/index@2x-2.png" alt=""></div>
	        <div class="index3-div-center"><img src="../img/index@2x-1.png" alt=""></div>
	        <div class="index4-div-footer" @click="toabout()"><img src="../img/index@2x-3.png" alt=""></div>
		</div>
    </div>
</template>
<script>
	export default {
  name: 'index',
  data () {
  	return {
  	indexcscls:'',
  	indextoarr:[
  		{tourl:'/about'}
  	]
}},
  methods: {
  // 		indexcsclk(){
  // 			this.indexcscls="indexcs-box-img"
  // 		},
  		toabout(){
  			this.$router.push({path: this.indextoarr[0].tourl})
  		}

},
 mounted () {
     // this.indexcsclk();
    }
}
</script>