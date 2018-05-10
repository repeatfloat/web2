<template>
    <transition name="slideLeft">

    <div class="about4-bg-img swiper">
        <div class="about5-nav-top"><img src="../img/about@2x-4.png"></div>
        <div class="about7-nav-box">
            <div class="about8-nav-img" @click="toaadv(0)"><img src="../img/about@2x-5.png"></div>
            <div class="about6-nav-img"  @click="toaadv(1)"><img src="../img/about@2x-6.png"></div>
            <div class="about6-nav-img" @click="toaadv(0)"><img src="../img/about@2x-7.png"></div>
            <div class="about7-nav-images" @click="toaadv(0)"><img src="../img/about@2x-8.png"></div>
        </div>
     </div>

    </transition>
</template>
<script>
    export default {
  name: 'nav',
data () {
return {
    indexcscls:'',
    indextoarr:[
      {tourl:'/adv'},
      {tourl:'/adv'}
    ]
}
},
methods: {

toaadv(index){
  this.$router.push({path: this.indextoarr[index].tourl})
}

},
mounted () {

}
}
</script>