<template lang="pug">
section.gallery(v-if="props.blok.assets && props.blok.assets.length > 0")
    .wrapper
        .item(v-for="item in props.blok.assets" :key="item.id")
            img2x(:data="item")
</template>

<script setup>
const props = defineProps(['blok']);

</script>

<style lang="scss">
.gallery{
    width: 100%;
    height: mw(10);
    overflow: hidden;
    > .wrapper{    
        display: flex;
        align-items: stretch;
        justify-content: flex-start; 
        overflow-y: hidden;       
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        > .item{
            scroll-snap-align: start;
            flex: 0 0 mw(8);
            height: 100%;
            padding-bottom: 10px;
            box-sizing: border-box;
            &:not(:last-child){
                margin-right: mw(.5);
            }
        }
        &::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: $blue;
            border-radius: 10px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
    }
}

</style>