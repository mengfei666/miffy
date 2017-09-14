<template>
    <div class="result">
        <div class="aside"><img src="../../imgs/seal.png" alt=""></div>
        <h2>{{info.name}}</h2>
        <div class="subject"><b>主修课程 : </b><span>{{info.majors}}</span></div>
        <div class="special"><b>课程特色 : </b><span>{{info.character}}</span></div>
        <div class="btns">
            <a href="javascript:;"><img src="../../imgs/btn-intr.png" alt=""></a href="javascript:;">
            <a href="javascript:;"><img src="../../imgs/btn-share.png" alt=""></a href="javascript:;">
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return{
                info:{}
            }
        },
        created:function(){
            this.$http.get('./src/js/school_list.json').then((result)=>{
                var idx=Math.ceil((Math.random()*11-1)+1);
                if(idx<10){
                    idx='0'+idx
                };
                this.info=result.data['school'+idx]
            })
        }
    }
</script>
<style lang="scss">
.result{
    width: 100%;
    height: 100%;
    margin: auto;
    background: url("../../imgs/bg-matriculate.png") center 42px no-repeat;
    background-size: 328px 385px;
    position: relative;
    padding-top:170px;
    box-sizing:border-box;
    .aside{
        position: absolute;
        top: 42px;
        right: 13px;
        img{
            width: 130px;
            height: 130px;
        }
    }
    h2{
        font-size: 22px;
        color: #333;
        font-weight: 400;
        width: 100%;
        text-align: center;   
    }
    .subject{
        width: 254px;
        margin: 6px auto 0;
        b{
            font-size: 14px;
            color: #333;
        }
        span{
            color: #393939;
            font-size: 14px;
        }
    }
    .special{
        width: 254px;
        margin: 6px auto 0;
        b{
            font-size: 14px;
            color: #333;
        }
        span{
            color: #393939;
            font-size: 14px;
        }
    }
    .btns{
        width: 305px;
        margin: 50px auto 0;
        display: flex;
        justify-content: space-between;
        img{
            width: 140px;
            height: 60px;
        }    
    }
}
</style>
