<template>
    <div>
        <router-view class="entry"></router-view>
        <ul class="nav">
            <router-link :to="{name: 'home'}" tag="li"><i class="iconfont icon-home"></i><span>首页</span></router-link>
            <router-link :to="{name: 'category',params:{index:0}}" tag="li"><i class="iconfont icon-category"></i><span>分类</span></router-link>
            <router-link :to="{name: 'cart'}" tag="li"><i class="iconfont icon-cart"></i><span>购物车</span></router-link>
            <router-link :to="{name: 'mine'}" tag="li"><i class="iconfont icon-mine"></i><span>我的</span></router-link>
        </ul>
        <tip v-show="$store.state.show_tip"></tip>
    </div>
</template>
<script>
import tip from '../../components/tip/tip.vue'

export default {
  data(){
      return{
          show_tip:false
      }
  },
  components:{
      'tip':tip
  }
}
</script>
<style lang="scss" scoped>
.entry{
    flex: 1;
    display: flex;
    flex-direction: column;
}
.nav{
    height: 0.98rem;
    border-top: 1px solid #e5e5e5;
    display: flex;
    li{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #333;
        .iconfont{
            font-size: .44rem;
        }
        span{
            font-size: .28rem;
        }
        &.router-link-active{
            color: #fc4141;
        }
    }
}
</style>
