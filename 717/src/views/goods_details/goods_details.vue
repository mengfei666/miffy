<template>
    <div class="details">
        <div class="detail-head">
            <div class="back" @click="go_back">
                <i class="iconfont icon-left"></i>
                <span>返回</span>
            </div>
            <div class="center">
                <b class="tab" :class="{active:tab=='shop'}" @click="change('shop')">商品</b>
                <b class="tab" :class="{active:tab=='detail'}" @click="change('detail')">详情</b>
            </div>
            <div class="msg">
                <i class="iconfont icon-message"></i>
            </div>
        </div>
        <shop v-if='show_shop' class="detail-content"></shop>
        <detail v-else class="detail-content"></detail>
        <div class="detail-foot">
            <div class="left">
                <dl>
                    <dt>
                        <i class="iconfont icon-server"></i>
                    </dt>
                    <dd>客服</dd>
                </dl>
                <dl>
                    <dt>
                        <i class="iconfont icon-cart"></i>
                        <span class="num">1</span>
                    </dt>
                    <dd>购物车</dd>
                </dl>
            </div>
            <div class="right">
                <span class="add-to-cart" style="background:#fe8282">加入购物车</span>
                <span class="buy-now" style="background:#fc4141">立即购买</span>
            </div>
        </div>
    </div>
</template>
<script>
import tip from '../../components/tip/tip.vue'
import shop from './shop/shop'
import detail from './detail/detail'
import axios from 'axios'
import store from '../../store/index'

export default {
    data() {
        return {
            goods_id:'',
            tab:'shop',
            show_shop:true
        }
    },
    methods:{
        change(tab){
            this.tab = tab;
            if(tab=='shop'){
                this.show_shop = true;
            }else{
                this.show_shop = false;
            }
        },
        go_back(){
            window.history.go(-1)
        }
    },
    components: {
        'tip': tip,
        'shop': shop,
        'detail': detail
    },
    beforeRouteEnter(to,from,next){
        let id = to.query.goods_id;
        axios.get('/service/goods_channel', {
            channel_id: 1
        }).then((res)=>{
            let data = res.data;
            data.forEach((item) => {
                item.data.data.forEach((val) => {
                    if (val.goods_id == id) {
                        store.state.goods = val;
                        next()
                    }
                })
            })
        })
    }
}
</script>
<style lang="scss" scoped>
.detail-content{
    flex: 1;
}
.detail-head {
    display: flex;
    justify-content: space-between;
    color: #333;
    .back {
        padding-left: .3rem;
        line-height: .88rem;
        .iconfont {
            font-size: .36rem;
        }
        span {
            font-size: .3rem;
        }
    }
    .center {
        .tab {
            display: inline-block;
            line-height: .88rem;
            font-size: .32rem;
            margin: 0 .45rem;
        }
        .active {
            border-bottom: 1px solid #333;
        }
    }
    .msg {
        padding-right: .3rem;
        line-height: .88rem;
        .iconfont {
            font-size: .36rem;
        }
    }
}

.detail-foot {
    height: 1.2rem;
    display: flex;
    .left {
        flex: 1;
        display: flex;
        justify-content: space-around;
        height: 1.2rem;
        align-items: center;
        dl {
            text-align: center;
            dt {
                position: relative;
                .iconfont {
                    font-size: .4rem;
                    color: #333;
                }
                span.num {
                    position: absolute;
                    width: 0.3rem;
                    height: 0.3rem;
                    background: #fc4141;
                    color: #fff;
                    font-size: .18rem;
                    text-align: center;
                    line-height: .3rem;
                    border-radius: 50%;
                    right: 0;
                    top: 0;
                }
            }
            dd {
                font-size: .24rem;
                color: #666;
            }
        }
    }
    .right {
        flex: 2;
        display: flex;
        span {
            flex: 1;
            height: 1.2rem;
            line-height: 1.2rem;
            text-align: center;
            color: #fff;
            font-size: .3rem;
        }
    }
}
</style>