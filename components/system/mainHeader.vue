<template lang="pug">
#mainHeader(v-if="!pending" :class="{visible:visible}" ref="mainHeader")
    .logo
    
    .menu
        nuxtLink.item(v-for="i in story.content.items" :to="'/'+i.url.cached_url" :key="'item_'+i._uid")
            span {{i.label}}


</template>
<script setup>
    const { data:story, pending, error } = await useAsyncData(() => { return $fetch('/api/storyblok/stories/system/mainmenu') })
    var visible = ref(false);
    onMounted(() =>{
        setTimeout(() => {
            visible.value = true;
        }, 1000);
    })
</script>
<style lang="scss">
#mainHeader{
    position: absolute;
    top: 3rem;
    left: 6rem;
    right: 6rem;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background: purple;
    > .logo{
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity $dt $de, transform $dt $de;
        width: 150px;
        height: 70px;
        background: red;
    }
    > .menu{
        > .item{
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity $dt $de, transform $dt $de;
            font-size: 1.5rem;
        }
    }
    &.visible{
        > .logo{
            opacity: 1;
            transform: translateY(0px);
            transition: opacity $dt $de, transform $dt $de;
        }
        > .menu{
            > .item{
                opacity: 1;
                transform: translateY(0px);
                @for $i from 1 through 10 {
                    &:nth-child(#{$i}){
                        transition-delay: $i * .05s;
                    }
                }
            }
        }
    }
    > .menu{
        display: flex;
        align-items: center;
        > .item{
            cursor: pointer;
            &:not(:last-child){
                margin-right: mw(1);
            }
            &:last-child{
                box-sizing: border-box;
                border-radius: 30px;
                font-weight: 700;  
            }
        }
    }
}
</style>

