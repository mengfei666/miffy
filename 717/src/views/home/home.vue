<template>
    <div>
        <div class="header">
            <div class="logo"><img src="../../assets/home-logo.png" alt=""></div>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <router-link :to="{name:'search'}"><input type="text" placeholder="请输入您要购买的商品"></router-link>
            </div>
            <div class="msg">
                <ul>
                    <li>
                        <i class="iconfont icon-store"></i>
                        <span>我的店铺</span>
                    </li>
                    <li>
                        <i class="iconfont icon-message"></i>
                        <span>消息</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container" ref="container" @scroll="load_goods">
            <div class="main">
                <div class="banner">
                    <div class="swiper-container banner-swiper">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide"><img src="../../assets/banner1.png" alt=""></li>
                            <li class="swiper-slide"><img src="../../assets/banner2.png" alt=""></li>
                            <li class="swiper-slide"><img src="../../assets/banner3.png" alt=""></li>
                            <li class="swiper-slide"><img src="../../assets/banner4.png" alt=""></li>
                        </ul>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="menu">
                    <home-category></home-category>
                    <div class="dynamic">
                        <div class="tit">
                            <span>商城动态</span>
                        </div>
                        <div class="info">
                            <div class="swiper-container dynamic-swiper">
                                <div class="swiper-wrapper">
                                    <p class="swiper-slide">绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心,健康第一，安全保证，确保蔬菜新鲜</p>
                                    <p class="swiper-slide">绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心,健康第一，安全保证，确保蔬菜新鲜</p>
                                    <p class="swiper-slide">绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心,健康第一，安全保证，确保蔬菜新鲜</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <discounts></discounts>
                <product-comp v-for="(goods,index) in goods_channel" :name="names[index]" :key="index" :goods="goods"></product-comp>
                <p class="loading" v-show="!can_request">{{info}}</p>
            </div>
        </div>
        <div class="back-top" v-show="can_backtop" @click="backToTop">
            <i class="iconfont icon-backtop"></i>
        </div>
    </div>
</template>
<script>
import home_category from './home-category/home-category';
import discounts from './discounts/discounts';
import product from './product/product'

export default {
    name: 'home',
    data() {
        return {
            goods_channel: [],
            goods_id: 0,
            names: ['家乡味道', '进口食品', '牛奶乳品', '休闲零食', '生鲜果蔬', '米面粮油', '调味调料', '酒水饮料'],
            can_request: true,
            info: '正在加载...',
            can_backtop:false
        }
    },
    created() {
        this.get_goods(0)
    },
    mounted() {
        new Swiper('.banner-swiper', {
            pagination: '.swiper-pagination',
            autoplay: 2000,
            loop: true
        })
        new Swiper('.dynamic-swiper', {
            autoplay: 2000,
            direction: 'vertical',
            loop: true
        })
    },
    components: {
        'home-category': home_category,
        'discounts': discounts,
        'product-comp': product
    },
    methods: {
        get_goods(id) {
            this.$http.get('/service/goods_channel', {
                channel_id: id
            }).then((res) => {
                this.goods_channel.push(res.data[id].data.data);
                this.can_request = true;
            })
        },
        load_goods() {
            let container = this.$refs.container;
            let max_height = container.querySelector('.main').offsetHeight - container.offsetHeight;
            let scrollTop = container.scrollTop;
            if(scrollTop>100){
                this.can_backtop = true;
            }else{
                this.can_backtop = false;
            }
            if (max_height - scrollTop < 10) {
                if (this.can_request) {
                    this.can_request = false;
                    this.goods_id++;
                    if (this.goods_id >= 8) {
                        this.info = '我是有底线的~';
                        return;
                    };
                    this.get_goods(this.goods_id)
                }
            }
        },
        backToTop(){
            this.$refs.container.scrollTop = 0;
        }
    }
}
</script>
<style lang="scss">
.header {
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        line-height: .88rem;
        padding: 0 .3rem;
        img {
            width: 0.9rem;
            vertical-align: middle;
        }
    }
    .search {
        width: 3.8rem;
        background: #f5f5f5;
        height: 0.6rem;
        border-radius: .1rem;
        display: flex;
        align-items: center;
        padding: 0 .3rem;
        box-sizing: border-box;
        .iconfont {
            font-size: .34rem;
            color: #999;
            padding: 0 .1rem;
        }
        input[type=text] {
            flex: 1;
            background: none;
            line-height: .6rem;
            border: none;
            &::-webkit-input-placeholder {
                font-size: .24rem;
                color: #999;
            }
        }
    }
    .msg {
        height: 100%;
        display: flex;
        align-items: center;
        ul {
            display: flex;
            li {
                height: 0.88rem;
                display: flex;
                flex-direction: column;
                color: #fc4141;
                padding: 0 .1rem;
                align-items: center;
                justify-content: center;
                .iconfont {
                    font-size: .4rem;
                }
                span {
                    font-size: .24rem;
                }
            }
        }
    }
}

.container {
    flex: 1;
    overflow-y: auto;
    background: #eee;
    .main {
        .banner {
            width: 100%;
            .swiper-container {
                width: 100%;
            }
            .swiper-pagination-bullet {
                background: #db99ab;
                opacity: 1;
            }
            .swiper-pagination-bullet-active {
                background: #fa6c04;
                opacity: 1;
            }
            .swiper-pagination {
                left: 2.5rem;
            }
            img {
                width: 100%;
            }
        }
        .menu {
            background: #fff;
            .menu_catagory {
                display: flex;
                flex-wrap: wrap;
                margin-top: .1rem;
                dl {
                    width: 25%;
                    text-align: center;
                    padding: .1rem 0;
                    dt {
                        img {
                            width: 0.88rem;
                        }
                    }
                    dd {
                        font-size: .22rem;
                        color: #333;
                    }
                }
            }
            .dynamic {
                padding: .2rem .3rem;
                display: flex;
                .tit {
                    line-height: .34rem;
                    span {
                        display: inline-block;
                        width: 0.58rem;
                        font-size: .28rem;
                        color: #ff6d00;
                    }
                }
                .info {
                    flex: 1;
                    border: 1px solid #e5e5e5;
                    border-radius: .1rem;
                    padding: 0 .15rem;
                    height: 0.66rem;
                    overflow: hidden;
                    box-sizing: border-box;
                    p {
                        height: 0.66rem;
                        font-size: .18rem;
                        line-height: .28rem;
                        color: #333;
                        padding-top: 1px;
                    }
                }
            }
        }
        .more-link {
            position: absolute;
            right: 0.3rem;
            font-size: .24rem;
            color: #000;
            top: 0;
        }
        .loading {
            line-height: .42rem;
            text-align: center;
        }
    }
}
.back-top{
    width: 0.8rem;
    height: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: .8rem;
    position: absolute;
    background: #fff;
    right: 0.4rem;
    bottom: 1.3rem;
    .iconfont{
        font-size: .5rem;
        color: #333;
    }
}
</style>

