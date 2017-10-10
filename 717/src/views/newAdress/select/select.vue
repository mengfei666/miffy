<template>
    <div class="select">
        <p class="selected selected-open">北京<i class="iconfont icon-right"></i></p>
        <ul class="options">
            <li class="opt-item">

            </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.select{
    width: 100%;
    height: 100%;
    position: relative;
}
.select{ 
    .selected{
        width: 100%;
        height: 100%;
        position: absolute;
        background: #fff;
        left: 0;
        top: 0;
        line-height: .9rem;
        text-indent: .2rem;
        cursor: pointer;
        font-size: .32rem;
        .iconfont{
            position: absolute;
            right: 0.15rem;
            font-size: .3rem;
            transform: rotate(90deg);
            top: -.1rem;
        }
    }
    .selected-open{
        .iconfont{
            transform: rotate(-90deg)
        }
    }
}
.options{
    width: 100%;
    position: absolute;
    top: 30px;
    left: 0;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    transition:all .5s;
    height: 0;
    overflow: hidden;
}
.opt-item{
    line-height: .42rem;
    border-bottom: 1px solid #ccc;
    text-indent: .2rem;
    cursor: pointer;
    background: #fff;
    font-size: .3rem;
}
.opt-item:hover{
    background: #ccc;
}
</style>
