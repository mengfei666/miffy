<template>
    <section>
        <div class="user">
            <span>路飞 138****8888</span>
        </div>
        <p>北京市海淀区唐家岭路八维研修学院</p>
        <div class="operate">
            <div class="default"><b></b>默认地址</div>
            <div class="edit">
                <span><i class="iconfont icon-edit"></i> 编辑</span>
                <span><i class="iconfont icon-delete"></i> 删除</span>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
section {
    padding: 0 .3rem;
    background: #fff;
    .user {
        line-height: .98rem;
        span {
            font-size: .32rem;
            color: #333;
        }
    }
    p{
        font-size: .28rem;
        color: #666;
    }
    .operate{
        margin-top: .24rem;
        height: .96rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #eee;
        .default{
            display: flex;
            align-items: center;
            font-size: .28rem;
            color: #666;
        }
        b {
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

        b.active {
            border-color: #fc4141;
            background-color: #fc4141;
            &:after {
                content: '✔';
                color: #fff;
            }
        }
        .edit{
            color: #666;
            .iconfont{
                font-size: .34rem;
            }
            span{
                font-size: .28rem;
            }
        }
    }
}



</style>
