<template>
    <div class="startUP2-box-position">
      <div class="startUP14-box-ovflow">
      <p class="startUP3-top-position">
        <img class="startUP13-img-size" src="../assets/startUp@2x-1.png">
      </p>
      <p class="startUP4-top-position">
        <img class="startUP13-img-size" src="../assets/startUp@2x-3_03.png">
      </p>
      <p class="startUP5-top-position">
        <img class="startUP13-img-size" src="../assets/startUp@2x-3_06.png">
      </p>
      <p class="startUP6-top-position">
        <img class="startUP13-img-size" src="../assets/startUp@2x-3_10.png">
      </p>
      <p class="startUP7-top-position">
        <img class="startUP13-img-size" src="../assets/startUp@2x-3_14.png">
      </p>
      <p class="startUP8-top-position">
        <img class="startUP13-img-size" src="../assets/startUp@2x-3_19.png">
      </p>
      <p class="startUP9-top-position">
        <img class="startUP13-img-size" src="../assets/startUp@2x-3_21.png">
      </p>
      <p class="startUP10-top-position">
        <img class="startUP13-img-size" src="../assets/startUp@2x-3_22.png">
      </p>
    </div>
      <p class="startUP11-top-position">
        <img class="startUP13-img-size" src="../assets/startUp@2x-2.png">
      </p>
      <router-link to="/Home" class="startUP12-top-position">点击进入</router-link>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
      getParams() {

   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.startUP13-img-size{width: 100%; height: 100%;}
.startUP2-box-position{position: relative; height: 100%; background-color: #d1c0a5;}
.startUP3-top-position{position: absolute; width: 76%; height: 30%; left: calc(50% - 38%); top: -200px;
animation:boxmin8 1400s linear 1s 1; -moz-animation:boxmin8 1400s linear 1s 1; -webkit-animation:boxmin8 1400s linear 1s 1; -o-animation:boxmin8 1400s linear 1s 1;}
.startUP4-top-position{position: absolute; width: 15%; height: 10%; left: calc(50% + 7.5%); top: -100px;
animation:boxmin 10s linear 1s 1; -moz-animation:boxmin 10s linear 1s 1; -webkit-animation:boxmin 10s linear 1s 1; -o-animation:boxmin 10s linear 1s 1;}
.startUP5-top-position{position: absolute; width: 16%; height: 10%; left: calc(50% - 16%); top: -100px;
animation:boxmin2 9.8s linear 1s 1; -moz-animation:boxmin2 9.8s linear 1s 1; -webkit-animation:boxmin2 9.8s linear 1s 1; -o-animation:boxmin2 9.8s linear 1s 1;}
.startUP6-top-position{position: absolute; width: 15%; height: 10%; left: calc(50% + 7.5%); top: -100px;
animation:boxmin3 9s linear 1s 1; -moz-animation:boxmin3 9s linear 1s 1; -webkit-animation:boxmin3 9s linear 1s 1; -o-animation:boxmin3 9s linear 1s 1;}

.startUP7-top-position{position: absolute; width: 14.5%; height: 9%; left: calc(50% - 7%); top: -100px;
animation:boxmin4 8s linear 1s 1; -moz-animation:boxmin4 8s linear 1s 1; -webkit-animation:boxmin4 8s linear 1s 1; -o-animation:boxmin4 8s linear 1s 1;}

.startUP8-top-position{position: absolute; width: 17%; height: 11%; left: calc(50% - 20%); top: -100px;
animation:boxmin5 7.5s linear 1s 1; -moz-animation:boxmin5 7.5s linear 1s 1; -webkit-animation:boxmin5 7.5s linear 1s 1; -o-animation:boxmin5 7.5s linear 1s 1;}

.startUP9-top-position{position: absolute; width: 14.5%; height: 9%; left: calc(50% + 7%); top: -100px;
animation:boxmin6 7s linear 1s 1; -moz-animation:boxmin6 7s linear 1s 1; -webkit-animation:boxmin6 7s linear 1s 1; -o-animation:boxmin6 7s linear 1s 1;}

.startUP10-top-position{position: absolute; width: 14%; height: 8.5%; left: calc(50% - 22%); top: -100px;
animation:boxmin7 8.2s linear 1s 1; -moz-animation:boxmin7 8.2s linear 1s 1; -webkit-animation:boxmin7 8.2s linear 1s 1; -o-animation:boxmin7 8.2s linear 1s 1;}

.startUP11-top-position{position: absolute; width: 50%; height: 30%; left: calc(50% - 25%); top: calc(50%);}
.startUP12-top-position{position: absolute; height: 44px;  text-align: center; line-height: 44px; letter-spacing: 5px; border-radius: 10px; background:rgba(209,192,165,1); color:#d1c0a5; width: 50%; left: calc(50% - 25%); top: 85%; animation:boxmin9 2000s linear 1s 1; -moz-animation:boxmin9 2000s linear 1s 1;
  -webkit-animation:boxmin9 2000s linear 1s 1; -o-animation:boxmin9 2000s linear 1s 1; font-size: 16px;}
.startUP14-box-ovflow{overflow: hidden;}

@keyframes boxmin
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7.5%); top: 15%; display: block;}
100%{left: calc(50% - 5%); top: calc(45%); display: none;}
}
/*Firefox*/
@-moz-keyframes boxmin 
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7.5%); top: 15%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Safari 和 Chrome*/
@-webkit-keyframes boxmin
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7.5%); top: 15%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Opera*/
@-o-keyframes boxmin
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7.5%); top: 15%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}

@keyframes boxmin2
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 16%); top: 16%; display: block;}
100%{left: calc(50% - 5%); top: calc(45%); display: none;}
}
/*Firefox*/
@-moz-keyframes boxmin2 
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 16%); top: 16%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Safari 和 Chrome*/
@-webkit-keyframes boxmin2
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 16%); top: 16%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Opera*/
@-o-keyframes boxmin2
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 16%); top: 16%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}


@keyframes boxmin3
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7.5%); top: 25%; display: block;}
100%{left: calc(50% - 5%); top: calc(45%); display: none;}
}
/*Firefox*/
@-moz-keyframes boxmin3 
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7.5%); top: 25%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Safari 和 Chrome*/
@-webkit-keyframes boxmin3
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7.5%); top: 25%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Opera*/
@-o-keyframes boxmin3
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7.5%); top: 25%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}


@keyframes boxmin4
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 7%); top: 30%; display: block;}
100%{left: calc(50% - 5%); top: calc(45%); display: none;}
}
/*Firefox*/
@-moz-keyframes boxmin4 
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 7%); top: 30%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Safari 和 Chrome*/
@-webkit-keyframes boxmin4
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 7%); top: 30%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Opera*/
@-o-keyframes boxmin4
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 7%); top: 30%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}


@keyframes boxmin5
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 20%); top: 39%; display: block;}
100%{left: calc(50% - 55); top: calc(45%); display: none;}
}
/*Firefox*/
@-moz-keyframes boxmin5 
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 20%); top: 39%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Safari 和 Chrome*/
@-webkit-keyframes boxmin5
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 20%); top: 39%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}
/*Opera*/
@-o-keyframes boxmin5
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 20%); top: 39%; display: block;}
100%{left: calc(50% - 25%); top: calc(45%); display: none;}
}

@keyframes boxmin6
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7%); top: 40%; display: block;}
100%{left: calc(50% +5%); top: calc(45%); display: none;}
}
/*Firefox*/
@-moz-keyframes boxmin6 
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7%); top: 40%; display: block;}
100%{left: calc(50% +5%); top: calc(45%); display: none;}
}
/*Safari 和 Chrome*/
@-webkit-keyframes boxmin6
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7%); top: 40%; display: block;}
100%{left: calc(50% +5%); top: calc(45%); display: none;}
}
/*Opera*/
@-o-keyframes boxmin6
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% + 7%); top: 40%; display: block;}
100%{left: calc(50% +5%); top: calc(45%); display: none;}
}

@keyframes boxmin7
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 22%); top: 33%; display: block;}
100%{left: calc(50%); top: calc(45%); display: none;}
}
/*Firefox*/
@-moz-keyframes boxmin7 
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 22%); top: 33%; display: block;}
100%{left: calc(50%); top: calc(45%); display: none;}
}
/*Safari 和 Chrome*/
@-webkit-keyframes boxmin7
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 22%); top: 33%; display: block;}
100%{left: calc(50%); top: calc(45%); display: none;}
}
/*Opera*/
@-o-keyframes boxmin7
{
0% {top: -100px; left: 50%; display: block;}
50%{left: calc(50% - 22%); top: 33%; display: block;}
100%{left: calc(50%); top: calc(45%); display: none;}
}

@keyframes boxmin8
{
0% {top: -200px; left: calc(50% - 38%); display: block;}
0.9%{left: calc(50% - 30%); top: 15%; display: block;}
1%{left: calc(50% - 30%); top: 22%; display: block;}
100%{left: calc(50% - 30%); top: calc(20%);}
}
/*Firefox*/
@-moz-keyframes boxmin8 
{
0% {top: -200px; left: calc(50% - 38%); display: block;}
0.9%{left: calc(50% - 30%); top: 15%; display: block;}
1%{left: calc(50% - 30%); top: 22%; display: block;}
100%{left: calc(50% - 30%); top: calc(20%);}
}
/*Safari 和 Chrome*/
@-webkit-keyframes boxmin8
{
0% {top: -200px; left: calc(50% - 38%); display: block;}
0.9%{left: calc(50% - 30%); top: 15%; display: block;}
1%{left: calc(50% - 30%); top: 22%; display: block;}
100%{left: calc(50% - 30%); top: calc(20%);}
}
/*Opera*/
@-o-keyframes boxmin8
{
0% {top: -200px; left: calc(50% - 38%); display: block;}
0.9%{left: calc(50% - 30%); top: 15%; display: block;}
1%{left: calc(50% - 30%); top: 22%; display: block;}
100%{left: calc(50% - 30%); top: calc(20%);}
}

@keyframes boxmin9
{
0% {background:rgba(209,192,165,0); color:#d1c0a5;}
0.7%{background:rgba(209,192,165,0.1); color:#d1c0a5;}
1%{background:rgba(125,125,125,0.5); color:#777;}
100%{background:rgba(125,125,125,1); color:#777;}
}
/*Firefox*/
@-moz-keyframes boxmin9 
{
0% {background:rgba(209,192,165,0); color:#d1c0a5;}
0.7%{background:rgba(209,192,165,0.1); color:#d1c0a5;}
1%{background:rgba(125,125,125,0.5); color:#777;}
100%{background:rgba(125,125,125,1); color:#777;}
}
/*Safari 和 Chrome*/
@-webkit-keyframes boxmin9
{
0% {background:rgba(209,192,165,0); color:#d1c0a5;}
0.7%{background:rgba(209,192,165,0.1); color:#d1c0a5;}
1%{background:rgba(125,125,125,0.5); color:#777;}
100%{background:rgba(125,125,125,1); color:#777;}
}
/*Opera*/
@-o-keyframes boxmin9
{
0% {background:rgba(209,192,165,0); color:#d1c0a5;}
0.7%{background:rgba(209,192,165,0.1); color:#d1c0a5;}
1%{background:rgba(125,125,125,0.5); color:#777;}
100%{background:rgba(125,125,125,1); color:#777;}
}
</style>
<!-- animation: myfirst 5s; -->
<!-- -moz-animation: myfirst 5s; /* Firefox */ -->
<!-- -webkit-animation: myfirst 5s;  /* Safari 和 Chrome */ -->
<!-- -o-animation: myfirst 5s; /* Opera */ -->
<!-- transition: width 2s; -->
<!-- -moz-transition: width 2s;  /* Firefox 4 */ -->
<!-- -webkit-transition: width 2s; /* Safari 和 Chrome */ -->
<!-- -o-transition: width 2s;  /* Opera */ -->