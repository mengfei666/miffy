<template>
    <div class="login-register">
        <div class="login" v-if="is_register">
            <div class="login-header">
                <span class="icon iconfont icon-left"></span>
                <span>登录717</span>
                <span @click="to_register">注册</span>
            </div>
            <div class="login-wraper">
                <div class="login-input">
                    <p>
                        <i class="icon iconfont icon-mine"></i>
                        <input type="text" name="" id="" placeholder="请输入您的手机号" v-model.trim="telephone">
                    </p>
                    <p>
                        <i class="icon iconfont icon-password"></i>
                        <input type="password" name="" id="" placeholder="请输入您的密码" v-model.trim="password">
                    </p>
                </div>
                <div class="login-btn">
                    <input type="button" name="" id="" value="立即登录" @click="login">
                    <p>
                        <a href="javascript:;">忘记密码?</a>
                    </p>

                </div>
                <div class="login-other">
                    <div>
                        <p>使用第三方账号登录</p>
                    </div>
                    <ul>
                        <li>
                            <img src="../../assets/wechat.png" alt="wechat">
                            <span>微信</span>
                        </li>
                        <li>
                            <img src="../../assets/qq.png" alt="qq">
                            <span>QQ</span>
                        </li>
                        <li>
                            <img src="../../assets/weibo.png" alt="weibo">
                            <span>微博</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="login" v-else>
            <div class="login-header">
                <span class="iconfont icon-left"></span>
                <span>注册717</span>
                <span @click="to_login">登录</span>
            </div>
            <div class="login-wraper">
                <div class="login-input">
                    <p>
                        <i class="iconfont icon-mine"></i>
                        <input type="telephone" name="" id="" placeholder="请输入您的手机号" v-model.trim="telephone">
                    </p>
                    <p>
                        <i class="iconfont icon-verify"></i>
                        <input type="text" name="" id="" placeholder="请输入验证码" v-model.trim="verifycode">
                        <span class="valid" @click="get_verify">获取验证码</span>
                    </p>
                    <p>
                        <i class="iconfont icon-password"></i>
                        <input type="password" name="" id="" placeholder="请输入您的密码" v-model.trim="password">
                    </p>
                </div>
                <div class="login-btn">
                    <input type="button" name="" id="" value="立即注册" @click="register">
                </div>
            </div>
        </div>
        <tip v-show="$store.state.show_tip"></tip>
    </div>
</template>
<script>
import tip from '../../components/tip/tip'
export default {
    data(){
        return{
            is_register: true,
            telephone:'',
            password:'',
            verifycode:''
        }
    },
    methods:{
        to_login(){
            this.is_register = true;
        },
        to_register(){
            this.is_register = false;
        },
        login(){
            let telReg = /^1(3|5|7|8)\d{9}$/;
            let pwdReg = /\w{6,20}/;
            if(telReg.test(this.telephone)&&pwdReg.test(this.password)){
                this.$http.post('/mine/login',{
                    telephone:this.telephone,
                    password:this.password
                }).then((res)=>{
                    this.$store.state.show_tip = true;
                    this.$store.state.tip_msg = res.data.msg;
                    if(res.data.code==1){
                        setTimeout(()=>{
                            this.$router.push({name:'mine'})
                        },1000)
                    }
                })
            } 
        },
        register(){
            let telReg = /^1(3|5|7|8)\d{9}$/;
            let pwdReg = /\w{6,20}/;
            if(telReg.test(this.telephone)&&pwdReg.test(this.password)){
                this.$http.post('/mine/register',{
                    telephone:this.telephone,
                    password:this.password
                }).then((res)=>{
                    this.$store.state.show_tip = true;
                    this.$store.state.tip_msg = res.data.msg;
                    if(res.data.code==1){
                        setTimeout(()=>{
                            this.is_register = true;
                            this.telephone = '';
                            this.password = '';
                            this.verifycode = '';
                        },1000)
                    }
                })
            }else{
                this.$store.state.show_tip = true;
                this.$store.state.tip_msg = '账号或密码输入错误，请重新输入';
            }
        },
        get_verify(){
            if(this.telephone.length!=11)return;
            this.$http.post('mine/verify',{
                tel:this.telephone
            }).then((res)=>{
                alert('您的验证码为'+res.data)
            })
        }
    },
    components:{
        tip:tip
    }
}
</script>
<style lang="scss" scoped>
@mixin paddingLR($left:.3rem, $right:.3rem) {
    padding-left: $left;
    padding-right: $right;
    box-sizing: border-box;
}
.login-register{
    width: 100%;
    height: 100%;
}

.login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f4f4f4;
}

.login-header{
    width: 100%;
    height: 0.9rem;
    border-bottom: .01rem solid #ccc;
    background-color: #fff;
    padding-top: .3rem;
    position: relative;
    margin-bottom: .2rem;
    span {
        font-size: .34rem;
        position: absolute;
        top: .4rem;
        &:first-child {
            left: .3rem;
        }
        &:last-child {
            right: .3rem;
            color: #fc4141;
        }
        &:nth-child(2) {
            width: 100%;
            text-align: center;
        }
    }
}

.login-wraper{
    flex: 1;
    overflow-y: auto;
}

.login-input{
    @include paddingLR;
    background-color: #fff;
    margin-bottom: 1.2rem;
    p {
        height: 1.2rem;
        position: relative;
        border-bottom: 1px solid #eee;
        i {
            position: absolute;
            left: 0;
            top: .36rem;
            font-size: .5rem;
        }
        input {
            width: 100%;
            height: 100%;
            border-width: 0;
            background: none;
            text-indent: .65rem;
        }
        .valid{
            position: absolute;
            top: .2rem;
            right: 0;
            width: 2.02rem;
            font-size: .3rem;
            line-height: 0.78rem;
            border-radius: 30px;
            border: .01rem solid #fc4141;
            text-align: center;
            color: #fc4141;
        }
    }
}

.login-btn{
    text-align: center;
    input {
        width: 5.54rem;
        line-height: 1.1rem;
        text-align: center;
        color: #fff;
        font-size: .3rem;
        border-radius: 30px;
        background-color: #fc4141;
        border-width: 0;
    }
    p {
        width: 5.5rem;
        margin: .3rem auto 0;
        text-align: right;
        a {
            font-size: .26rem;
            text-decoration: underline;
        }
    }
}

.login-other{
    margin-top: 2.6rem;
    @include paddingLR(.75rem, .75rem);
    div {
        border-bottom: .01rem solid #ccc;
        position: relative;
        p {
            width: 3.36rem;
            position: absolute;
            font-size: .3rem;
            text-align: center;
            background-color: #f4f4f4;
            top: -.2rem;
            left: 24%;
        }
    }
    ul {
        display: flex;
        @include paddingLR(.2rem, .2rem);
        li {
            width: 33.3%;
            height: 2.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            img {
                width: 1.2rem;
                height: 1.2rem;
            }
            span:last-child {
                font-size: .28rem;
                margin-top: .2rem;
            }
        }
    }
}
</style>


