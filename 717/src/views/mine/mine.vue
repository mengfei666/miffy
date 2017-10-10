<template>
    <div class="user">
        <div class="user-header">
            <span class="iconfont icon-setting"></span>
            <span>我的717商城</span>
            <span class="iconfont icon-message"></span>
        </div>
        <div class="user-wraper">
            <div class="user-banner">
                <img src="../../assets/user.png" alt="">
                <span>路飞</span>
            </div>
            <div class="user-shop">
                <p>
                    <span class="iconfont icon-store"></span>
                    <span>我的店铺</span>
                </p>
                <span>></span>
            </div>
            <div class="user-nav">
                <ul>
                    <li>
                        <span class="iconfont icon-unpay"></span>
                        <span>待付款</span>
                    </li>
                    <li>
                        <span class="iconfont icon-shipment"></span>
                        <span>待发货</span>
                    </li>
                    <li>
                        <span class="iconfont icon-untake"></span>
                        <span>待收货</span>
                    </li>
                    <li>
                        <span class="iconfont icon-saled"></span>
                        <span>售后</span>
                    </li>
                    <li>
                        <span class="iconfont icon-order"></span>
                        <span>我的订单</span>
                    </li>
                </ul>
                <span><i class="iconfont icon-right"></i></span>
            </div>
            <div class="user-list">
                <ul>
                    <li>
                        <span class="iconfont icon-building"></span>
                        <p>
                            <span>我的社区</span>
                            <span><i class="iconfont icon-right"></i></span>
                        </p>
                    </li>
                    <li>
                        <span class="iconfont icon-balance"></span>
                        <p>
                            <span>账户余额</span>
                            <span><i class="iconfont icon-right"></i></span>
                        </p>
                    </li>
                    <router-link :to="{name:'address'}" tag="li">
                        <span class="iconfont icon-address"></span>
                        <p>
                            <span>地址管理</span>
                            <span><i class="iconfont icon-right"></i></span>
                        </p>
                    </router-link>
                    <li>
                        <span class="iconfont icon-server"></span>
                        <p>
                            <span>我的客服</span>
                            <span><i class="iconfont icon-right"></i></span>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="user-limit">到底了噢！ </div>
        </div>

    </div>
</template>
<script>
export default {
    beforeRouteEnter(to,from,next){
        let cookie = document.cookie;
        if(cookie.indexOf('telephone')!=-1){
            next()
        }else{
             next('/login')
        }
    }
}
</script>
<style lang="scss" scoped>
@mixin paddingLR($left:.3rem, $right:.3rem) {
    padding-left: $left;
    padding-right: $right;
    box-sizing: border-box;
}

.user {
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
    position: relative;
}

.user-header {
    height: 0.9rem;
    @include paddingLR;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    span {
        position: absolute;
        top: .24rem;
        font-size: .45rem;
        &:first-child {
            left: .3rem;
        }
        &:last-child {
            right: .3rem;
        }
        &:nth-child(2) {
            width: 92%;
            text-align: center;
            font-size: .32rem;
        }
    }
}

.user-wraper {
    overflow-y: auto;
}

.user-banner {
    height: 1.96rem;
    padding-top: .9rem; 
    background: url('../../assets/user-bg.png') no-repeat 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 1.22rem;
        height: 1.22rem;
    }
    span {
        font-size: .3rem;
        color: #fff;
        margin-top: .1rem;
    }
}

.user-shop {
    height: 1.7rem;
    background-color: #fff;
    border-bottom: .01rem solid #ccc;
    @include paddingLR;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fc4141;
    p{
        span{
            &:first-child{
                font-size: .76rem;
                margin-right: .16rem;
            }
            &:last-child{
                font-size: .36rem;
                position: relative;
                top: -.12rem;
            }
        }
    }
    & > span{
        font-size: .36rem;
    }
}
.user-nav{
    position: relative;
    margin-bottom: .2rem;
    ul{
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        li{
            height: 1.48rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span{
                font-size: .28rem;
                &:first-child{
                    margin-bottom: .18rem;
                    font-size: .4rem;
                }
            }
        }
    }
    & > span{
        position: absolute;
        right: 0rem;
        bottom: .26rem;
        font-size: .26rem;
    }
}
.user-list{
    background-color: #fff;
    margin-bottom: .2rem;
    ul{
        li{
            height: 1rem;
            display: flex;
            align-items: center;
            & > span{
                padding-left: .3rem;
                box-sizing: border-box;
                font-size: .36rem;
                margin-right: .13rem;
            }
            p{
                height: 100%;
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-right: .3rem;
                box-sizing: border-box;
                border-bottom: .01rem solid #e5e5e5;
                span{
                    font-size: .3rem;
                }
            }
        }
    }
}
.user-limit{
    line-height: 1.06rem;
    font-size: .26rem;
    text-align: center;
}
</style>
