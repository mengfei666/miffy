<template>
    <dl class="cart-item">
        <dt>
            <span :class="{'active':selected}" @click="check"></span>
            <div><img :src="'http://www.lb717.com/'+item.pic" alt=""></div>
        </dt>
        <dd>
            <p class="item-title">
                {{item.goods_name}}
            </p>
            <div class="price-count">
                <div class="price-left">
                    <p>x {{item.count}}</p>
                    <p>￥{{(item.goods_price*item.count).toFixed(2)}}</p>
                </div>
                <div class="count-right">
                    <span class="minus" @click="desc">-</span>
                    <span class="count">{{item.count}}</span>
                    <span class="plus" @click="inc">+</span>
                </div>
            </div>
        </dd>
    </dl>
</template>
<script>
export default {
    props: ['item', 'selectAll'],
    data(){
        return{
            selected:false
        }
    },
    methods:{
        check(){
            this.selected = !this.selected;
            this.$emit('del',{
                id:this.item.goods_id,
                selected:this.selected
            })
            if(!this.selected){
                this.$emit('not-all',false)
            }
        },
        inc(){
            this.item.count++;
            this.sum_money()
        },
        desc(){
            if(this.item.count<=1)return false;
            this.item.count--;
            this.sum_money()
        },
        sum_money(){
            if(this.selected){
                this.$store.commit('sum',{
                    id:this.item.goods_id,
                    price:this.item.goods_price*this.item.count
                })
            }else{
                this.$store.commit('sum',{
                    id:this.item.goods_id,
                    price:0
                })
            }
        }
    },
    watch: {
        'selectAll': function(n) {
            this.selected = n;
        },
        'selected':function(){
            this.sum_money();
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

.cart-item {
    height: 2.64rem;
    margin-bottom: .2rem;
    display: -webkit-flex;
    align-items: center;
    @include paddingLR(.2rem, .3rem);
    background-color: #fff;
    dt {
        display: -webkit-flex;
        align-items: center;
        margin-right: .2rem;
        &>span {
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
        &>div {
            width: 2.02rem;
            height: 2.02rem;
            border: .01rem solid #ccc;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    dd {
        height: 2.02rem;
        .item-title {
            font-size: .26rem;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .price-count {
            margin-top: .5rem;
            display: -webkit-flex;
            justify-content: space-between;
            .price-left {
                p:first-child {
                    font-size: .2rem;
                    color: #666;
                    position: relative;
                    left: .06rem;
                    margin-bottom: .15rem;
                }
                p:last-child {
                    font-size: .24rem;
                    color: #fc4141;
                }
            }
            .count-right {
                .minus,
                .plus {
                    display: inline-block;
                    width: 0.56rem;
                    line-height: 0.6rem;
                    text-align: center;
                    font-size: .36rem;
                    border: .01rem solid #ccc;
                }
                .minus {
                    border-top-left-radius: .04rem;
                    border-bottom-left-radius: .04rem;
                }
                .plus {
                    border-top-right-radius: .04rem;
                    border-bottom-right-radius: .04rem;
                }
                .count {
                    display: inline-block;
                    width: 0.98rem;
                    line-height: 0.6rem;
                    text-align: center;
                    font-size: .36rem;
                    border-top: .01rem solid #ccc;
                    border-bottom: .01rem solid #ccc;
                }
            }
        }
    }
    span.active {
        border-color: #fc4141;
        background-color: #fc4141;
        &:after {
            content: '✔';
            color: #fff;
        }
    }
}
</style>
