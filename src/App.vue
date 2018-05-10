<template>
    <div id="app">
        <router-view></router-view>
       <div class="app13-bottom-righ"  draggable="true">
          <audio id="audio" src="./static/audio/bjjsxh.mp3"  loop></audio>
          <img class="app2-img-size" @click="onclick()" :class="box" src="./img/publice@2x-1.png" alt="">
       </div>
   
    </div>
</template>
<script src="../js/jquery.js"></script>
<script src="../js/swiper-3.4.0.jquery.min.js"></script>
<script src="./js/script.js"></script>
<script>
export default {
   
data () {
    return {
        number1:1,
        box:'',
        isPlaying:false
    };
},
methods: {
    onclick(){
        this.number1++
        if(this.number1%2==0){
        this.play();
        this.box='app14-play-music'
        }else{
        this.stop();
        this.box=''}
    },

    play(){
        var audio =document.querySelector('#audio');
        if(this.isPlaying==false){
            audio.play();
            this.isPlaying = true;
        }
    },

    stop(){
        var audio =document.querySelector('#audio');
        if(this.isPlaying==true){
            audio.pause();
            this.isPlaying = false;
            audio.currentTime = 0;
        }
    }
},

mounted () {
    this.onclick();
}

};
</script>
