<template>
  <div class="search-result">
      <div class="search-head">
          <div class="back" @click="go_back"><i class="iconfont icon-left"></i></div>
          <div class="search-key">
              <i class="iconfont icon-search"></i><router-link :to="{name:'search'}"><input type="text" placeholder="搜索你想找的商品"></router-link>
          </div>
      </div>
      <nav class="sort-tab">
        <a href="javascript:;" :class="{active:ind==1}" @click="order_by(1)">综合</a>
        <a href="javascript:;" :class="{active:ind==2}" @click="order_by(2)">销量</a>
        <a href="javascript:;" :class="{active:ind==3}" @click="order_by(3)">价格</a>
      </nav>
      <div class="no-result" v-if="no_result">
          <div class="sorry-tip">
            <i class="iconfont icon-tip"></i>
            <p>抱歉，没有找到符合条件的商品！</p>
          </div>
          <recommend-copm></recommend-copm>
      </div>
      <div class="result" v-else>
        
      </div>
  </div>
</template>
<script>
import recommend from '../../components/recommend/recommend';

export default {
  data(){
    return{
      ind:1,
      no_result:true
    }
  },
  methods:{
    order_by(ind){
      this.ind = ind;
    },
    go_back(){
      history.go(-1);
    }
  },
  components:{
    'recommend-copm':recommend
  }
}
</script>
<style lang="scss" scoped>
.search-result{
  .search-head{
    height: 0.88rem;
    display: flex;
    align-items: center;
    .back{
      padding: 0 .3rem;
      line-height: .88rem;
      .iconfont{
        font-size: .42rem;
        color: #333;
      }
    }
    .search-key{
        width: 5.6rem;
        height: 0.6rem;
        background: #f6f6f6;
        border-radius: .12rem;
        line-height: .6rem;
        padding: 0 .1rem;
        display: flex;
        .iconfont{
            font-size: .3rem;
            color: #999;
            padding: 0 .1rem;
        }
        input{
            flex: 1;
            height: 100%;
            border: 0;
            background: none;
            &::-webkit-input-placeholder{
                color: #ccc;
            }
        }
      }
  }
  .sort-tab{
    height: 0.56rem;
    padding: 0 .3rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    a{
      font-size: .24rem;
      line-height: .56rem;
      color: #333;
      position: relative;
      &.active{
        color: #fc4141;
        &:after{
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          left: 30%;
          bottom: 0;
          border: .1rem solid transparent;
          border-bottom-color: #fc4141;
        }
      }
    }
  }
  .no-result{
    background: #eee;
    .sorry-tip{
      background: #fff;
      height: 6.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .iconfont{
        font-size: 1.4rem;
        color: #333;
      }
      p{
        font-size: .3rem;
        line-height: .42rem;
        color: #999;
      }
    }
  }
  .result{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
