<template>
  	<div class='box'>
    <div class="exam"></div>
    <div class="select"></div>
      <router-link :to="{path:'/question/1',query:{type:0}}"><div class='science'></div></router-link>
      <router-link :to="{path:'/question/1',query:{type:1}}"><div class='arts'></div></router-link>
      <div class="left-hand"></div>
      <div class="right-hand"></div>
      <div class="yes"></div>
      <div class="no"></div>
    </div>
    
</template>
<script>
export default {
}
</script>
<style lang="scss">
.box{
  width:80%;
  height:450px;
  background:url('../../imgs/home-pepole.png') no-repeat;
  margin:0 auto;
  background-size:contain;
  position:relative;
}
.exam{
  width:100%;
  height:70px;
  position:absolute;
  top:35px;
  background:url(../../imgs/home-title.png) center no-repeat;
  background-size:contain; 
}
.select{
  position:absolute;
  top: 210px;
  width: 100%;
  height: 22px;
  left: 0;
  background: url(../../imgs/f-select.png) center no-repeat;
  background-size: 190px 20px;
}
.arts,.science{
  width:35%;
  height:60px;
  position:absolute;
  top:240px;
}
.arts{
  background:url('../../imgs/f-wenke.png') no-repeat;
  background-size:contain;
  left:11%;
}
.science{
  background:url('../../imgs/f-like.png') no-repeat;
  background-size:contain;
  right:5%;
}
.left-hand{
  position:absolute;
  width: 35px;
  height: 50px;
  background:url('../../imgs/home-left-hand.png') no-repeat;
  background-size: cover;
  left: -37px;
  top: 300px; 
}
.right-hand{
  position:absolute;
  width: 35px;
  height: 50px;
  background:url('../../imgs/home-right-hand.png') no-repeat;
  background-size: cover;
  right: -37px;
  top: 300px; 

}
.yes{
  position: absolute;
  width: 40px;
  height: 40px;
  top: 484px;
  background: url(../../imgs/home-icon-1.png) no-repeat;
  left: 20%;
  background-size: contain;
}
.no{
  position: absolute;
  width: 40px;
  height: 40px;
  top: 484px;
  background: url(../../imgs/home-icon-2.png) no-repeat;
  right: 20%;
  background-size: contain;
}
</style>