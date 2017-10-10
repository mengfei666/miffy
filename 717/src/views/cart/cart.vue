<template>
  <div class="cart">
    <div class="cart-header">
      <span class="iconfont icon-left" @click="go_back()"></span>
      <span>购物车</span>
      <span @click="edit">{{!cart_empty?is_edit?'完成':'编辑':''}}
        <i class="iconfont icon-message" @click.stop></i>
      </span>
    </div>
    <div class="cart-empty" v-if="cart_empty">
      <dl>
        <dt>
          <i class="iconfont icon-cart"></i>
        </dt>
        <dd>
          购物车为空
        </dd>
      </dl>
      <a href="javascript:;">去逛逛</a>
    </div>
    <div class="cart-wraper" v-else>
      <cart-goods v-for="(item,ind) in $store.state.cart_list" :key="item.goods_id" :item="item" :select-all="select_all" @not-all="not_all" @del='del'>
      </cart-goods>
      <div class="cart-limit">到底了噢！</div>
      <div class="cart-footer">
        <div class="select-all">
          <span :class="{'active':select_all&&checked}" @click="select"></span>
          <span @click="select">全选</span>
        </div>
        <div class="total-price">
          <div class="sum">
            <p>合计：
              <span>￥{{$store.state.total_money.toFixed(2)}}</span>
            </p>
            <p>(运费：￥0.00)</p>
          </div>
          <div class="sumBtn" @click="del_item">{{is_edit?'删除':'结算'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cart_goods from './cart-goods/cart-goods'

export default {
  data() {
    return {
      cart_empty: true,
      select_all: false,
      checked: false,
      is_edit: false,
      edit_list:[]
    }
  },
  mounted() {
    if (this.$store.state.cart_list.length != 0) {
      this.cart_empty = false;
    }
  },
  methods: {
    select() {
      if (!this.checked) {
        this.select_all = false;
      }
      this.checked = !this.select_all;
      setTimeout(() => {
        this.select_all = !this.select_all;
      }, 0)
    },
    not_all(flag) {
      this.checked = flag;
    },
    go_back() {
      history.go(-1)
    },
    edit() {
      this.is_edit = !this.is_edit;
    },
    del(obj) {
      this.edit_list = this.edit_list.filter((val)=>{
        if(val.id!=obj.id){
          return val;
        }
      })
      if(obj.selected){
        this.edit_list.push(obj);
      }
    },
    del_item(){
      if(this.is_edit){
        this.$store.commit('del_item',this.edit_list);
      }
    }
  },
  components: {
    'cart-goods': cart_goods
  }
}
</script>
<style lang="scss" scoped>
@mixin paddingLR($left:.3rem, $right:.3rem) {
  padding-left: $left;
  padding-right: $right;
  box-sizing: border-box;
}

.cart {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  background-color: #eeeeee;
  span.active {
    border-color: #fc4141;
    background-color: #fc4141;
    &:after {
      content: '✔';
      color: #fff;
    }
  }
}

.cart-header {
  height: 0.9rem;
  padding-top: .3rem;
  box-sizing: border-box;
  @include paddingLR;
  position: relative;
  background-color: #fafafb;
  border-bottom: .01rem solid #ccc;
  span {
    font-size: .33rem;
    position: absolute;
    top: .3rem;
    &:first-child {
      left: 0;
      top: 0;
      padding: 0 .3rem;
      line-height: .9rem;
    }
    &:last-child {
      right: .3rem;
    }
    &:nth-child(2) {
      width: 80%;
      left: 10%;
      text-align: center;
    }
  }
}

.cart-empty {
  height: 6.2rem;
  padding-top: 1.2rem;
  box-sizing: border-box;
  text-align: center;
  dt {
    width: 1.4rem;
    height: 1.4rem;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: 1.4rem;
    .iconfont {
      font-size: .74rem;
      color: #999;
    }
  }
  dd {
    font-size: .28rem;
    color: #999;
    line-height: .7rem;
    margin-bottom: .15rem;
  }
  a {
    padding: .12rem .3rem;
    color: #fc4141;
    border: 1px solid #fc4141;
    border-radius: .1rem;
    font-size: .28rem;
  }
}

.cart-wraper {
  -webkit-flex: 1;
  overflow-y: scroll;
  margin-bottom: .9rem;
}

.cart-limit {
  width: 100%;
  line-height: .6rem;
  font-size: .28rem;
  text-align: center;
}

.cart-footer {
  width: 100%;
  height: 0.9rem;
  background-color: #fff;
  border-top: .01rem solid #ccc;
  border-bottom: .01rem solid #ccc;
  position: fixed;
  bottom: .98rem;
  left: 0;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  .select-all {
    padding-left: .2rem;
    box-sizing: border-box;
    display: -webkit-flex;
    align-items: center;
    span:first-child {
      display: inline-block;
      width: 0.44rem;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      font-size: .24rem;
      border-radius: 50%;
      border: .01rem solid #ccc;
      margin-right: .1rem;
    }
    span:last-child {
      font-size: .28rem;
    }
  }
  .total-price {
    display: -webkit-flex;
    align-items: center;
    .sum {
      margin-right: .26rem;
      p:first-child {
        font-size: .28rem;
        color: #333;
        span {
          color: #fc4141;
        }
      }
      p:last-child {
        font-size: .24rem;
      }
    }
    .sumBtn {
      width: 2.54rem;
      line-height: .9rem;
      text-align: center;
      background-color: #fc4141;
      color: #fff;
      font-size: .32rem;
    }
  }
}
</style>