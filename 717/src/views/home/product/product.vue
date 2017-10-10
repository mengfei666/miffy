<template>
  <div class="product">
        <div class="tit">
            <h2><span></span><b><img src="../../../assets/home_icon_hometown.jpg" alt="">{{name}}</b><span></span></h2>
            <a href="javascript:;" class="more-link">更多<i class="iconfont icon-right"></i></a> 
        </div>
        <div class="goods-list">
            <dl is="goods" v-for="item in goods" :key="item.id" :item="item"></dl>
        </div>
    </div>
</template>
<script>
import goods from '../../../components/goods/goods';
export default {
  props:['name','goods'],
  components:{
      goods:goods
  }
}
</script>
<style lang="scss" scoped>
.product{
    margin-top: .2rem;
    .tit{
        background: #fff;
        position: relative;
        line-height: 1rem;
        margin-bottom: .1rem;
        h2{
            height: 1rem;
            width: 60%;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: .32rem;
            color: #f5803f;
            span{
                width: 0.45rem;
                border-top: 1px solid #f5803f;
            }
            img{
                width: 0.45rem;
                vertical-align: middle;
                margin-right: .06rem;
            }
        }
    }
}
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
