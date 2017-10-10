<template>
    <div class="new-adr">
        <div class="newAdr-head">
            <div class="back" onclick="history.go(-1)">
                <i class="iconfont icon-left"></i>
            </div>
            <div class="newAdr-title">
                <span>收货人</span>
            </div>
        </div>
        <div class="newAdr-cont">
            <ul>
                <li class="recieve-name">
                    <input type="text" placeholder="收货人姓名">
                </li>
                <li class="phone">
                    <input type="telephone" placeholder="手机号">
                </li>
                <li class="city">
                    <div class="province">
                        <sel-comp></sel-comp>
                    </div>
                    <div class="town">
                        <sel-comp></sel-comp>
                    </div>
                </li>
                <li class="community">
                    <sel-comp></sel-comp>
                </li>
                <li class="detail-adr">
                    <input type="text" placeholder="详细地址">
                </li>
            </ul>
            <p>
                <b></b>
                <span>设为默认地址</span>
            </p>
            <div class="save">
                <button>保存</button>
            </div>
        </div>
    </div>
</template>
<script>
import select from './select/select'

export default {
    components: {
        'sel-comp': select
    }
}
</script>
<style lang="scss" scoped>
.new-adr {
    background: #f3f3f3;
}

.newAdr-head {
    height: 0.88rem;
    text-align: center;
    line-height: .88rem;
    position: relative;
    border-bottom: 1px solid #eee;
    background: #fff;
    .back {
        position: absolute;
        left: 0;
        top: 0;
        line-height: .88rem;
        padding: 0 .3rem;
        .iconfont {
            font-size: .32rem;
            color: #333;
        }
    }
    .newAdr-title span {
        font-size: .36rem;
    }
}

.newAdr-cont {
    padding: 0 .3rem;
    li {
        height: 0.9rem;
        margin-top: .3rem;
        input {
            width: 100%;
            padding: 0 .2rem;
            box-sizing: border-box;
            height: 100%;
            border: 0;
            &::-webkit-input-placeholder {
                color: #999;
            }
        }
        &.city {
            display: flex;
            justify-content: space-between;
            div {
                width: 3rem;
                height: 100%;
                background: #fff;
            }
        }
    }
    p {
        display: flex;
        align-items: center;
        font-size: .28rem;
        color: #666;
        padding: .25rem 0;
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
    }
    .save {
        margin-top: .7rem;
        text-align: center;
        button {
            width: 70%;
            height: 1rem;
            border: 0;
            background: #fc4141;
            color: #fff;
            font-size: .38rem;
            border-radius: .5rem;
        }
    }
}
</style>
