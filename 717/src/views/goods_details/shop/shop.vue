<template>
    <div class="detail-center">
        <div class="detail-banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img :src="'http://www.lb717.com/'+$store.state.goods['obj_data']" alt=""></div>
                    <div class="swiper-slide"><img :src="'http://www.lb717.com/'+$store.state.goods['obj_data']" alt=""></div>
                    <div class="swiper-slide"><img :src="'http://www.lb717.com/'+$store.state.goods['obj_data']" alt=""></div>
                    <div class="swiper-slide"><img :src="'http://www.lb717.com/'+$store.state.goods['obj_data']" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>

        </div>
        <div class="goods-msg">
            <p>{{$store.state.goods.goods_name}}</p>
            <div class="price"><span>￥</span><b>{{$store.state.goods.discount_price}}</b><em>￥998.00</em><button class="query-btn">溯源查询</button></div>
            <div class="freight"><span>(运费:￥8.00)</span></div>
            <div class="shop-discount">
                <span>店铺优惠</span>满三件包邮
            </div>
        </div>
        <div class="shop">
            <dl>
                <dt><img :src="$store.state.goods.store_logo" alt=""></dt>
                <dd>
                    <h4>{{$store.state.goods.store_name}}</h4>
                    <p>店主：HZR1501032</p>
                    <button class="enter-shop">进入店铺</button>
                </dd>
            </dl>
        </div>
        <recommend></recommend>
    </div>
</template>
<script>
import recommend from '../../../components/recommend/recommend'

export default {
    data() {
        return {
            goods: null
        }
    },
    components:{
        recommend:recommend
    },
    mounted() {
        new Swiper('.detail-banner .swiper-container', {
            autoplay: 1500,
            pagination: '.swiper-pagination',
            loop:true
        })
    }
}
</script>
<style lang="scss">
.detail-center{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    background: #eee;
}
.detail-banner {
    height: 7.5rem;
    background: #fff;
    width: 100%;   
    .swiper-container {
        .swiper-slide {
            height: 7.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                height: 4.2rem;
            }
        }
        .swiper-pagination-bullets{
            line-height: .65rem;
            .swiper-pagination-bullet {
                margin: 0 .1rem;
                width: 0.2rem;
                height: 0.2rem;
            }
            .swiper-pagination-bullet-active {
                background: #fc4141;
            }
        }
    }
}
.goods-msg{
    padding: 0 .3rem;
    background: #fff;
    p{
        font-size: .26rem;
        color: #333;
    }
    .price{
        margin-top: .15rem;
        position: relative;
        line-height: .7rem;
        background: #fff;
        .query-btn{
            position: absolute;
            top: 0;
            right: 0.3rem;
            width: 2rem;
            height: 0.8rem;
            color: #ffffff;
            font-size: .3rem;
            background: #4f99f2;
            border-radius: .1rem;
            border: 0;
        }
        span{
            font-size: .18rem;
            color: #fc4141;
        }
        b{
            font-size: .26rem;
            color: #fc4141;
            margin: 0 .1rem;
        }
        em{
            font-style: normal;
            font-size: .18rem;
            color: #999;
            text-decoration: line-through;
        }
    }
    .freight{
        font-size: .22rem;
        color: #666;
        background: #fff;
    }
    .shop-discount{
        font-size: .24rem;
        color: #666;
        margin-top: .2rem;
        line-height: .72rem;
        background: #fff;
        span{
            padding: .06rem;
            border: 1px solid #fc4141;
            color: #fc4141;
            font-size: .2rem;
            border-radius: .06rem;
            margin-right: .1rem;
        }
    }
}
.shop{
    background: #fff;
    margin-top: .2rem;
    dl{
        display: flex;
        padding: 0 .3rem;
        height: 1.16rem;
        align-items: center;
        dt{
            img{
                width: 0.66rem;
            }
        }
        dd{
            position: relative;
            flex: 1;
            padding-left: .1rem;
            h4{
                font-size: .26rem;
                color: #333;
            }
            p{
                font-size: .22rem;
                color: #666;
                margin-top: .1rem;
            }
            .enter-shop{
                position: absolute;
                right: 0.3rem;
                top: 0;
                width: 1.85rem;
                height: 0.72rem;
                border: 1px solid #666;
                border-radius: .1rem;
                background: #fff;
                font-size: .28rem;
            }
        }
    }
}
</style>
