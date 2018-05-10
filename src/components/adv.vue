<template>
    <transition name="slideRight">
  <div style="height:100%;">
      
  <swiper :options="swiperOption" ref="mySwiper" style="height:100%;overflow:hidden"
      @slideChangeTransitionEnd="slideChangeTransitionEnd"
      @transitionStart="transitionStart"
      @reachEnd="reachEnd"
>  
    <div class="swiper-slide">
        <div class="adv-bg-image swiper-wrapper">
            <div class="adv4-div-top">
              <div class="adv2div-left" :class="advcls2"><img src="../img/nav@2x-1.png"></div>
              <div class="adv3-div-right" :class="advcls3"><img src="../img/nav@2x-2.png"></div>
            </div>
            <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-3.png"></div>
            <div class="adv6-align-imgs" :class="advcls4"><img src="../img/nav@2x-4.png"></div>
        </div>
    </div>

    <div class="swiper-slide">
        <div class="adv5-div-top swiper-wrapper">

          <div class="advtwo-div-top" :class="advcls">
             <img src="../img/nav@2x-5.png">
          </div>

          <div class="advtwo8-align-images">
            <div class="fl advtwo2-text-align" :class="advcls2">
               <img src="../img/nav@2x-6.png">
             </div>

            <div class="fr advtwo3-div-top" :class="advcls3">
               <img src="../img/nav@2x-7.png">
             </div>
          </div>

          <div class="advtwo3-images-size"  :class="advcls4">
            <img src="../img/nav@2x-8.png">
          </div>
        </div>
    </div>

    <div class="swiper-slide">
      <div class="adv7-bg-image swiper-wrapper">
          <div class="advtwo10-width-align">
            <div class="op-adv-show" :class="advcls"><img src="../img/nav@2x-9.png"></div>
            <div class="op-adv-show" :class="advcls"><img src="../img/nav@2x-12.png"></div>
             <div class="op-adv-show" :class="advcls"><img src="../img/nav@2x-10.png"></div>
            <div class="op-adv-show" :class="advcls"><img src="../img/nav@2x-11.png"></div>
          </div>
      </div>
    </div>

    <div class="swiper-slide">
        <div class="adv5-bg-images-top">

            <div class="advtwo-div-top" :class="advcls">
                <img src="../img/nav@2x-13.png">
            </div>

             <div class="advtwo8-align-images">
                <div class="fl advtwo2-text-align" :class="advcls2">
                    <img src="../img/nav@2x-14.png">
                 </div>

                <div class="fr advtwo3-div-top" :class="advcls3">
                     <img src="../img/nav@2x-15.png">
                </div>
            </div>

            <div class="advtwo3-images-size" :class="advcls4">
                <img src="../img/nav@2x-16.png">
             </div>

        </div>
    </div>

    <div class="swiper-slide">
      <div class="adv9-bg-image">
          <div class="advtwo10-width-align">
              <div class="op-adv-show" :class="advcls"><img src="../img/nav@2x-17.png"></div>
              <div class="op-adv-show" :class="advcls"><img class="advtwo11-width-image" src="../img/nav@2x-18.png"></div>
              <div class="op-adv-show" :class="advcls"><img src="../img/nav@2x-19.png"></div>
              <div class="op-adv-show" :class="advcls"><img src="../img/nav@2x-20.png"></div>
          </div>
      </div>
    </div>

  <div class="swiper-slide">
    <div class="adv5-div-top" >
      <div class="adv4-div-top">
      <div class="adv2div-left" :class="advcls2"><img src="../img/nav@2x-22.png"></div>
      <div class="adv3-div-right" :class="advcls3"><img src="../img/nav@2x-21.png"></div>
      </div>
      <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-23.png"></div>
      <div class="adv6-margin-top" :class="advcls4"><img src="../img/nav@2x-24.png"></div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="adv6-div-top" >
      <div class="adv4-div-top adv4-opa-hide" :class="advcls">
          <img src="../img/nav@2x-27.png" alt="">
      </div>
      <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-26.png"></div>
      <div class="adv16-margin-top" :class="advcls4"><img src="../img/nav@2x-25.png"></div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="adv6-div-top" >
      <div class="adv4-div-top adv4-opa-hide" :class="advcls">
          <img src="../img/nav@2x-28.png" alt="">
      </div>
      <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-29.png"></div>
      <div class="adv16-margin-top"  :class="advcls4"><img src="../img/nav@2x-30.png"></div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="adv6-div-top" >
      <div class="adv4-div-top adv4-opa-hide" :class="advcls">
          <img src="../img/nav@2x-31.png" alt="">
      </div>
      <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-32.png"></div>
      <div class="adv16-margin-top"  :class="advcls4"><img src="../img/nav@2x-33.png"></div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="adv6-div-top" >
      <div class="adv4-div-top adv4-opa-hide" :class="advcls">
          <img src="../img/nav@2x-36.png" alt="">
      </div>
      <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-35.png"></div>
      <div class="adv16-margin-top"  :class="advcls4"><img src="../img/nav@2x-33.png"></div>
    </div>
  </div>
  
  <div class="swiper-slide">
    <div class="adv6-div-top" >
      <div class="adv4-div-top adv4-opa-hide" :class="advcls">
          <img src="../img/nav@2x-37.png" alt="">
      </div>
      <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-38.png"></div>
      <div class="adv16-margin-top"  :class="advcls4"><img src="../img/nav@2x-39.png"></div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="adv6-div-top" >
      <div class="adv4-div-top adv4-opa-hide" :class="advcls">
          <img src="../img/nav@2x-42.png" alt="">
      </div>
      <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-41.png"></div>
      <div class="adv16-margin-top"  :class="advcls4"><img src="../img/nav@2x-40.png"></div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="adv6-div-top" >
      <div class="adv4-div-top adv4-opa-hide" :class="advcls">
          <img src="../img/nav@2x-43.png" alt="">
      </div>
      <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-44.png"></div>
      <div class="adv16-margin-top"  :class="advcls4"><img src="../img/nav@2x-45.png"></div>
    </div>
  </div>

  <div class="swiper-slide">
    <div class="adv6-div-top" >
      <div class="adv4-div-top adv4-opa-hide" :class="advcls">
          <img src="../img/nav@2x-48.png" alt="">
      </div>
      <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-47.png"></div>
      <div class="adv16-margin-top"  :class="advcls4"><img src="../img/nav@2x-46.png"></div>
    </div>
  </div>

    <div class="swiper-slide">
        <div class="adv-bg-image swiper-wrapper">
            <div class="adv4-div-top">
              <div class="adv2div-left" :class="advcls2"><img src="../img/nav@2x-50.png"></div>
              <div class="adv3-div-right" :class="advcls3"><img src="../img/nav@2x-49.png"></div>
            </div>
            <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-51.png"></div>
            <div class="adv17-margin-top" :class="advcls4"><img src="../img/nav@2x-52.png"></div>
        </div>
    </div>


<div class="swiper-slide">
    <div class="adv7-div-top">

        <div class="advtwo-div-top" :class="advcls">
            <img src="../img/nav@2x-53.png">
        </div>

         <div class="advtwo8-width-align">
            <div class="fl fkcj4-width-top" :class="advcls2">
                <img src="../img/nav@2x-54.png">
             </div>

            <div class="fr fkcj5-top-align" :class="advcls3">
                 <img src="../img/nav@2x-55.png">
            </div>
        </div>

        <div class="fkcj-width-align">
            <div class="fl fkcj2-width-top" :class="advcls2">
                <img src="../img/nav@2x-57.png">
             </div>

            <div class="fl fkcj3-div-top" :class="advcls3">
                 <img src="../img/nav@2x-56.png">
            </div>
        </div>

    </div>
</div>

  <div class="swiper-slide">
    <div class="fkcj8-bg-images" >
      <div class="adv4-div-top">
          <img src="../img/nav@2x-58.png" alt="">
      </div>
      <div class="fkcj6-width-align" :class="advcls4"><img src="../img/nav@2x-59.png"></div>
      <div class="fkcj7-width-align" :class="advcls4"><img src="../img/nav@2x-60.png"></div>
    </div>
  </div>


  <div class="swiper-slide">
    <div class="fkcj8-bg-images" >
      <div class="adv4-div-top">
          <img src="../img/nav@2x-64.png" alt="">
      </div>
      <div class="fkcj6-width-align" :class="advcls4"><img src="../img/nav@2x-65.png"></div>
      <div class="fkcj7-width-align" :class="advcls4"><img src="../img/nav@2x-66.png"></div>
    </div>
  </div>

<div class="swiper-slide">
    <div class="fkcj8-bg-images">

        <div class="advtwo-div-top" :class="advcls4">
            <img src="../img/nav@2x-67.png">
        </div>

        <div class="fkcj8-width-align">
            <div class="fl fkcj4-width-top" :class="advcls2">
                <img src="../img/nav@2x-68.png">
             </div>

            <div class="fr fkcj5-top-align" :class="advcls4">
                 <img src="../img/nav@2x-71.png">
            </div>
        </div>

         <div class="fkcj9-width-align">
            <div class="fl fkcj4-width-top" :class="advcls2">
                <img src="../img/nav@2x-69.png">
             </div>

            <div class="fr fkcj5-top-align" :class="advcls4">
                 <img src="../img/nav@2x-72.png">
            </div>
        </div>

         <div class="fkcj9-width-align">
            <div class="fl fkcj4-width-top" :class="advcls2">
                <img src="../img/nav@2x-70.png">
             </div>

            <div class="fr fkcj5-top-align" :class="advcls4">
                 <img src="../img/nav@2x-73.png">
            </div>
        </div>

    </div>
</div>

<div class="swiper-slide">
    <div class="fkcj8-bg-images">

        <div class="advtwo-div-top" :class="advcls4">
            <img src="../img/nav@2x-74.png">
        </div>

        <div class="fkcj10-width-align">
            <div class="fl fkcj4-width-top" :class="advcls4">
                <img src="../img/nav@2x-75.png">
             </div>

            <div class="fr fkcj5-top-align" :class="advcls3">
                 <img src="../img/nav@2x-78.png">
            </div>
        </div>

         <div class="fkcj10-width-align">
            <div class="fl fkcj4-width-top" :class="advcls4">
                <img src="../img/nav@2x-76.png">
             </div>

            <div class="fr fkcj5-top-align" :class="advcls3">
                 <img class="fkcj11-img-width" src="../img/nav@2x-79.png">
            </div>
        </div>

         <div class="fkcj10-width-align">
            <div class="fl fkcj20-width-top" :class="advcls4">
                <img class="fkcj12-img-width" src="../img/nav@2x-77.png">
             </div>

            <div class="fr fkcj5-top-align" :class="advcls3">
                 <img src="../img/nav@2x-80.png">
            </div>
        </div>

    </div>
</div>

<div class="swiper-slide">
    <div class="adv-bg-image swiper-wrapper">
        <div class="adv4-div-top">
          <div class="adv2div-left" :class="advcls2"><img src="../img/nav@2x-83.png"></div>
          <div class="adv3-div-right" :class="advcls3"><img src="../img/nav@2x-81.png"></div>
        </div>
        <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-82.png"></div>
        <div class="advtwo4-images-size" :class="advcls4"><img src="../img/nav@2x-84.png"></div>
    </div>
</div>

<div class="swiper-slide">
    <div class="fkcj13-bg-images swiper-wrapper">
        <div class="advtwo-div-top" :class="advcls">
            <img src="../img/nav@2x-87..png">
        </div>
        <div class="adv5-margin-cenner" :class="advcls"><img src="../img/nav@2x-86.png"></div>
        <div class="adv6-margin-top" :class="advcls4"><img src="../img/nav@2x-85.png"></div>
    </div>
</div>

<div class="swiper-slide">
    <div class="fkcj13-bg-images swiper-wrapper">
        <div class="advtwo-div-top" :class="advcls">
            <img src="../img/nav@2x-88..png">
        </div>
        <div class="adv5-margin-cenner" :class="advcls"><img src="../img/nav@2x-89..png"></div>
        <div class="adv6-margin-top" :class="advcls4"><img src="../img/nav@2x-90.png"></div>
    </div>
</div>

<div class="swiper-slide">
    <div class="fkcj13-bg-images swiper-wrapper">
        <div class="advtwo-div-top" :class="advcls">
            <img src="../img/nav@2x-91.png">
        </div>
        <div class="adv5-margin-cenner" :class="advcls"><img src="../img/nav@2x-92.png"></div>
        <div class="adv6-margin-top" :class="advcls4"><img src="../img/nav@2x-93.png"></div>
    </div>
</div>

<div class="swiper-slide">
    <div class="adv-bg-image swiper-wrapper">
        <div class="fkcj14-imgs-align" :class="advcls">
            <img src="../img/nav@2x-94.png">
        </div>
        <div class="adv5-div-cenner" :class="advcls"><img src="../img/nav@2x-95.png"></div>
        <div class="fkcj15-imgs-align" :class="advcls4"><img src="../img/nav@2x-96.png"></div>
    </div>
</div>


<div class="swiper-slide">
    <img class="fkcj16-imgs-size" src="../img/nav@2x-10.jpg" alt="">
</div>

  </swiper>

<div class="position-button-icon" v-show="showicon2">
    <img class="fkcj16-imgs-size" src="../img/nav@2x-97.png" alt="">
</div>



</div>
</transition>
</template>

<script>
  export default {
  name: 'adv',

data () {
  return {
    advcls:'',
    advcls2:'',
    advcls3:'',
    advcls4:'',
    showicon:false,
    showicon2:true,
    swiperOption: {
      notNextTick: true,
      direction : 'vertical',
      grabCursor : true,
      setWrapperSize :true,
      autoHeight: true,
      pagination : '.swiper-pagination',
      paginationClickable :true,
      prevButton:'.swiper-button-prev',//上一张
      nextButton:'.swiper-button-next',//下一张
      scrollbar:'scrollbar',//滚动条
      followFinger : false,//滑动时没有动画
      // loop:true, //复制n个slide循环  
      debugger: true,
      },
    }
},

methods: {
  transitionStart: function(){
    this.advcls=""
    this.advcls2=""
    this.advcls3=""
    this.advcls4=""
  },
  slideChangeTransitionEnd: function(){
    this.advcls="showimg-box"
    this.advcls2="showimg-box-left"
    this.advcls3="showimg-box-right"
    this.advcls4="showimg-boxs-rgba"
  },
  reachEnd: function(){
    this.showicon2=false
  },
},

mounted () {
    this.advcls="showimg-box"
    this.advcls2="showimg-box-left"
    this.advcls3="showimg-box-right"
    this.advcls4="showimg-boxs-rgba"
  }

}


</script>
