<template>
<div class="banner-bg-boxmax">
    <div class="banner-pro_list2" id="brand#/brand" @touchstart="touchStart" @touchend="touchEnd">
        <transition-group tag="div" :name="slideStyle">
            <img class="banner-imgarr" v-for="(img, index) in imgArray" :src="img"
            v-show="index === idx" :key="index" @click="stop()">
        </transition-group>
        <div class="banner2-left-click" @click="prev()">
            <img src="../img/banner@2x-17.png"></div>
        <div class="banner3-right-click" @click="next()">
            <img src="../img/banner@2x-16.png"></div>
        <ul id="productUl" class="banner4-ul-align">
            
        </ul>
    </div>
</div>
</template>
<script>
export default {
    name:'brand',
data () {
    return {
    advcls:'',
    advcls2:'',
    advcls3:'',
    timer: null,
    idx: 0,
    imgArray: [
        require('../img/banner@2x-1.jpg'),
        require('../img/banner@2x-2.jpg'),
        require('../img/banner@2x-3.jpg'),
        require('../img/banner@2x-4.jpg'),
        require('../img/banner@2x-5.jpg'),
        require('../img/banner@2x-6.jpg'),
        require('../img/banner@2x-7.jpg'),
        require('../img/banner@2x-8.jpg')
    ],
    startX: 0,
    startY: 0,
    slideStyle: 'slideLeft',
    banner:[{url:'/market'}]
    };
},
methods: {
play () {
    this.timer = setInterval(this.next, 3000);
},
stop () {
    clearInterval(this.timer);
},
prev () {
    let linodes= document.getElementById('productUl').childNodes;
    this.slideStyle = 'proHold';
    this.idx--;
    if (this.idx < 0) {
        this.idx = this.imgArray.length-1;
    };
     this.bannerlibg();
    linodes[this.idx].className="boxliarr";
},
next () {
    let linodes= document.getElementById('productUl').childNodes;
    this.slideStyle = 'proSlide';
    this.idx++;
    if (this.idx >this.imgArray.length-1) {
       this.idx = 0;
    };
    this.bannerlibg();
    linodes[this.idx].className="boxliarr";
},
touchStart(ev) {
    ev = ev || event;
    if (ev.touches.length === 1) {
        this.startX = ev.touches[0].clientX;
        this.startY = ev.touches[0].clientY;
    };
},
touchEnd(ev) {
    ev = ev || event;
    if (ev.changedTouches.length === 1) {
        var endX = ev.changedTouches[0].clientX;
        var endY = ev.changedTouches[0].clientY;
        this.stop();
        if(endY - this.startY <= 25 ) {
            if (endX < this.startX) {
                this.next();
            } else if (endX > this.startX) {
                this.prev();
            };
        };
    };
},
 toTab () {
this.$router.push({path: this.banner[0].url})
},
bannerbox(){

    for(var i=0;i<this.imgArray.length;i++){
        let liarr=document.createElement('li');
         document.getElementById('productUl').appendChild(liarr);
    }
        
},
bannerlibg(linum){
    let linodes= document.getElementById('productUl').childNodes;
     for(var i=0;i<linodes.length;i++){
            linodes[i].className='';
    }
}

},

mounted () {
    this.play()
    this.bannerbox()
}

}; 
        
</script>
<style>
    .banner-bg-boxmax{width: 100%; height: 100%; background-color: #f1edeb; overflow:hidden;}
    .banner-proSlide-enter-active,.proSlide-leave-active,.proHold-leave-active{transition:all 1s ease;-webkit-transition: all 1s ease;}
    .banner-proSlide-enter,.proHold-leave-to{transform: translate3d(100%,0,0);-webkit-transform: translate3d(100%,0,0);}
    .banner-pro_list2{ width: 100%; margin:0 auto; height:100vh;position: relative; overflow:hidden; background-size: cover; background-repeat: no-repeat;}
    .banner-pro_list2 .banner-imgarr{position: absolute;}
    .banner-pro_list2 .btn{width: 0.666667rem;height: 0.746667rem;background-size: 0.666667rem auto; top:50%; margin-top: -0.333333rem}
    .banner-imgarr{width: 100%;}
    .banner2-left-click{
        width: 16px;
        height: 30px;
        position: absolute;
        top: calc(50% - 15px);
        left: 10px;
    }
    .banner3-right-click{
        width: 16px;
        height: 30px;
        position: absolute;
        top: calc(50% - 15px);
        right: 10px;
    }
    .banner4-ul-align{
    position: absolute;
    bottom: 50px;
    text-align: center;
    width: 100%;}
    .banner4-ul-align li{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 5px;
    background: #777;
    display: inline-block;}
    .boxliarr{
        background-color:#fff !important;
    }
</style>