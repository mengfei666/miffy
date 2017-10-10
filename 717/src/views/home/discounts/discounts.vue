<template>
    <div class="discounts">
        <div class="discounts-more">
            <span><img src="../../../assets/tag_icon_03.png" alt=""><b>天天特惠</b>每天都有惊喜</span>
            <a href="javascript:;" class="more-link">更多<i class="iconfont icon-right"></i></a>    
        </div>
        <div class="discounts-goods">
            <div class="left">
                <img src="../../../assets/specialty1.jpg" alt="">
            </div>
            <div class="right">
                <img src="../../../assets/specialty2.jpg" alt="">
                <img src="../../../assets/specialty3.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .discounts{
        .discounts-more{
            margin: .1rem 0;
            background: #fff;
            position: relative;
            height: 0.8rem;
            line-height: .8rem;
            padding: 0 .3rem;
            span{
                font-size: .24rem;
                color: #ff7f20;
                b{
                    font-size: .32rem;
                    margin: 0 .1rem;
                }
                img{
                    width: 0.4rem;
                    transform: translate(0,.05rem)
                }
            }
        }
        .discounts-goods{
            display: flex;
            justify-content: space-between;
            .left{
                width: 49%;
                img{
                    width: 100%;
                }
            }
            .right{
                width: 49%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>
