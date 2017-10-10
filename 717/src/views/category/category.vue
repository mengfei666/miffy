<template>
    <div class="list">
        <div class="list-head">
            <p>
                <router-link :to="{name:'search'}"><input type="text" placeholder="输入您要购买的商品"></router-link>
                <i class="icon iconfont icon-search"></i>
            </p>
            <i class="icon iconfont icon-message"></i>
        </div>
        <div class="list-section">
            <div class="list-item">
                <ul>
                    <router-link v-for="(item,ind) in category_list" :to="{name:'category',params:{index:ind}}" :key="item.cate_id" tag="li">
                        <i class="iconfont icon-store"></i>
                        <span>{{item.cate_name}}</span>
                    </router-link>
                </ul>
            </div>
            <div class="list-content">
                <dl v-for="(item,ind) in list_goods" :key="item.cate_id">
                    <dt><img :src="'http://www.lb717.com/'+item.cate_icon" alt=""></dt>
                    <dd>{{item.cate_name}}</dd>
                </dl>
            </div>
        </div>
        <loading v-show="isLoading"></loading>
    </div>
</template>
<script>
import loading from '../../components/loading/loading'

export default {
    data(){
        return{
            category_list:[],
            list_goods:[],
            isLoading:true
        }
    },
    beforeCreate(){
        let index = this.$route.params.index;
        this.$http.get('/h5/category',{cate_id:1}).then((res)=>{
            res.data().then((data)=>{
                this.category_list = [...data.data];
                this.list_goods = this.category_list[index].data;
                this.isLoading = false;
            })
        })
    },
    watch:{
        '$route':function(n){
            let index = n.params.index;
            this.list_goods = this.category_list[index].data;
        }
    },
    components:{
        loading:loading
    }
}
</script>
<style scoped lang="scss">
.list {
    height: 100%;
    width: 100%;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    background-color: #fff;
}
.list-head {
    height: .89rem;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.01rem solid #ccc;
    box-sizing: border-box;
    p {
        width: 80%;
        padding: 0 .2rem;
        position: absolute;
        input {
            width: 100%;
            border: none;
            background: #F6F6F6;
            height: .45rem;
            text-align: center;
            border-radius: 0.05rem;
        }
        i {
            position: absolute;
            left: 20%;
            top: .04rem;
            color: #999;
        }
    }
    & > i {
        position: absolute;
        right: .2rem;
    }
}

.list-section{
    -webkit-flex: 1;
    overflow-y: scroll;
}
.list-section {
    .list-item {
        width: 35%;
        background: #eee;
        float: left;
        height: 100%;
        ul {
            li {
                height: .72rem;
                display: -webkit-flex;
                align-items: center;
                justify-content: center;
                &.router-link-active{
                    border-left: .04rem solid #fc4141;
                    background-color: #fff;
                    color: #fc4141;
                }
                i {
                    font-size: .3rem;
                    color: #999;
                    margin-right: .1rem;
                }
                span {
                    font-size: .26rem;
                    color: #999;
                }
            }
        }
    }
    .list-content {
        width: 65%;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        dl {
            margin: .26rem .1rem;
            dt {
                width: 1.42rem;
                height: 1.42rem;
                background-color: #eee;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            dd {
                font-size: .24rem;
                text-align: center;
            }
        }
    }
}
</style>