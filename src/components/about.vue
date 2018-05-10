<template>
  <transition name="slideRight">
  <div class="about about-bg-images" @click="toanav()">
     <div class="about-maxbox">
         <div class="about-head-box"><img src="../img/about@2x-3.png"></div>
         <div class="about2-head-box"><img src="../img/about@2x-2.png"></div>
     </div>
  </div>
  </transition>
</template>
<script>
	export default {
  name: 'about',
  data () {
  	return {
  	indexcscls:'',
  	indextoarr:[
  		{tourl:'/nav'}
  	]
}},
  methods: {

  		toanav(){
  			this.$router.push({path: this.indextoarr[0].tourl})
  		}

},
 mounted () {
    }
}
</script>