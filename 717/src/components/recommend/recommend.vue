<template>
    <div class="recommend">
        <div class="tit">
            <img src="../../assets/recommend-icon1.png" alt="">
            <span>热门推荐</span>
            <img src="../../assets/recommend-icon2.png" alt="">
        </div>
        <div class="rec-goods">
            <div class="rec-content">
                <dl v-for="item in rec_list" :key="item.goods_id">
                    <dt><img :src="'http://www.lb717.com/'+item.obj_data" alt=""></dt>
                    <dd>
                        <p>{{item.goods_name}}</p>
                        <span>￥ {{item.discount_price}}</span>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
import IScroll from 'iscroll';

export default {
    data() {
        return {
            rec_list:[],
            rec_show: false,
            iscroll:null
        }
    },
    beforeCreate(){
        this.$http.get('/service/goods_channel',{
            channel_id:1
        }).then((res)=>{
            let length = res.data.length;
            let data = res.data[Math.floor(Math.random()*length)].data.data;
            for(let i=0;i<4;i++){
                let num = Math.floor(Math.random()*data.length);
                this.rec_list.push(...data.splice(num,1));
            }
        })
    },
    mounted(){
        this.iscroll = new IScroll('.rec-goods',{
            scrollY:false,
            scrollX:true
        })
    },
    watch:{
        'rec_list':function(n){
            if(n.length==4){
                this.iscroll.refresh();
            }
        }
    }
}
</script>
<style lang="scss">
.recommend {
    margin-top: .2rem;
    background: #fff;
    .tit {
        line-height: .68rem;
        text-align: center;
        span {
            font-size: .26rem;
            color: #333;
        }
        img {
            width: 0.36rem;
        }
    }
    .rec-goods {
        padding-left: .2rem;
        overflow: hidden;
        .rec-content{
            width: 8.4rem;
            &.after{
                display: block;
                content: "";
                clear: both;
            }
        }
        dl {
            text-align: center;
            width: 2rem;
            height: 3.3rem;
            float: left;
            margin-right: .1rem;
            dt {
                height: 2rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            dd {
                overflow: hidden;
                width: 100%;
                p {
                    display: -webkit-box;
                    -webkit-box-pack: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    font-size: .24rem;
                }
                span {
                    color: #fd2e2e;
                }
            }
        }
    }
}
</style>
