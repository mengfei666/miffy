<template>
  <div class="tip">
      <span>{{$store.state.tip_msg}}</span>
  </div>
</template>
<script>
export default {
    watch:{
        '$store.state.show_tip':function(n,o){
            if(n){
                setTimeout(()=>{
                    this.$store.state.show_tip = false;
                },1000)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .tip{
        width: 80%;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        height: 0.8rem;
        background: rgba(0,0,0,.7);
        color: #fff;
        text-align: center;
        border-radius: .4rem;
        font-size: .32rem;
        line-height: .8rem;
    }
</style>