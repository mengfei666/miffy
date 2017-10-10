<template>
  <div class="address">
      <header class="adr-head">
          <div class="back" onclick="history.go(-1)"><i class="iconfont icon-left"></i></div>
          <div class="adr-title"><span>新增地址</span></div>
      </header>
      <div class="adr-cont">
            <adr-item></adr-item>
      </div>
      <div class="add-adr">
          <router-link :to="{name:'newAdr'}" tag="button">＋ 新增地址</router-link>
      </div>
  </div>
</template>
<script>
import adr_item from './adr-item/adr-item'

export default {
  components:{
      'adr-item':adr_item
  }
}
</script>
<style lang="scss" scoped>
.address{
    background: #f3f3f3;
}
.adr-head{
    height: 0.88rem;
    text-align: center;
    line-height: .88rem;
    position: relative;
    border-bottom: 1px solid #eee;
    background: #fff;
    .back{
        position: absolute;
        left: 0;
        top: 0;
        line-height: .88rem;
        padding: 0 .3rem;
        .iconfont{
            font-size: .32rem;
            color: #333;
        }
    }
    .adr-title span{
        font-size: .36rem;
    }
}
section{
    margin-bottom: .2rem;
}
.add-adr{
    position: absolute;
    width: 100%;
    bottom: 0.4rem;
    left: 0;
    text-align: center;
    button{
        width: 70%;
        height: 1rem;
        border: 0;
        background: #fc4141;
        color: #fff;
        font-size: .38rem;
        border-radius: .5rem;
    }
}
</style>
