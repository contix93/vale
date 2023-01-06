<template lang="pug">
.loading 
    .circle
    span(v-html="$__('loading')")


  
</template>

<script setup>
</script>
<style lang="scss">
@keyframes rotating {
    0% {
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg);
    }
}
.loading{
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: mw(5);
    height: mw(5);
    > .circle{
        position: absolute;
        border: 2px solid $grey;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        animation: rotating $dt * 3 $de infinite;
        &:before{
            content: "";
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translate(-50%, 0);
            width: 10px;
            height: 10px;
            background: $white;
        }
    }
    > span{
        font-size: 2rem;
        color: $grey;
        text-align: center;
        padding: 10px 20px;
        box-sizing: border-box;
    }
}
</style>