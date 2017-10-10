<template>
    <div class="loading">
        <img src="./loading.gif" alt="">
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    .loading{
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0,0,0,.6);
        img{
            width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>
