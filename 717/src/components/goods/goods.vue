<template>
    <dl class="goods" @click="to_detail(item)">
        <dt><img :src="'http://www.lb717.com/'+item['obj_data']" alt=""></dt>
        <dd>
            <p class="introduce">{{item.goods_name}}</p>
            <div class="price">
                <span>￥{{item.discount_price}}</span>
                <i class="iconfont icon-addcart" @click.stop="addCart(item)"></i>
            </div>
        </dd>
    </dl>
</template>
<script>
export default {
    props: ['item'],
    methods: {
        addCart(item) {
            if (this.$store.state.show_tip) return;
            let obj = {
                goods_id: item.goods_id,
                goods_name: item.goods_name,
                goods_price: item.discount_price,
                count: 1,
                pic:item.obj_data
            }
            this.$store.commit('add_to_cart',obj)
        },
        to_detail(item) {
            this.$store.state.goods = item;
            this.$router.push('/goods_details?goods_id=' + item.goods_id);
        }
    }
}
</script>
<style lang="scss" scoped>
dl.goods {
    width: 49%;
    margin-bottom: .1rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    dt {
        width: 100%;
        height: 3.7rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
    dd {
        overflow: hidden;
        padding-top: .15rem;
        padding: 0 .1rem;
        p.introduce {
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: .28rem;
            height: 0.72rem;
        }
        .price {
            height: 0.56rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                font-size: .26rem;
                color: #fc4141;
            }
            .iconfont {
                font-size: .46rem;
                color: #f00;
            }
        }
    }
}
</style>
