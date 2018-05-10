<template>
<transition name="slideRight">



</transition>
</template>


<script>
  export default {
  name: 'strength',

data () {
  return {
    advcls:'showimg-box',
    advcls2:'showimg-box-left',
    advcls3:'showimg-box-right',
    productarr:[{tourl:'/product'}]
  }
},
methods: {

toproduct(index){
  this.$router.push({path: this.productarr[index].tourl})
}

},
mounted () {

}
}
</script>