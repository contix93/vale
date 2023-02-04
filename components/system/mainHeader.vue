<template lang="pug">
#mainHeader(v-if="!pending" :class="{visible:visible, showBack:layout.contentVisible.value}" ref="mainHeader")
    cta(:blok="{link:{url:'/'},label:$__('backToHome')}" :icon="'ri-arrow-left-s-line'")
    .menu(v-if="story && story.content && story.content.items")
        nuxtLink.item(v-for="i in story.content.items" :to="'/'+i.url.cached_url" :key="'item_'+i._uid")
            span {{i.label}}

</template>
<script setup>
    const { data:story, pending, error } = await useAsyncData(() => { return $fetch('/api/storyblok/stories/system/mainmenu') })
    var visible = ref(false);
    const layout = useLayout();

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
    z-index: 6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    max-width: mw(20);
    left: mw(10);
    padding: 0 6rem;
    
    > .cta{
        padding-left: 0;
        margin-bottom: 0;
        opacity: 0;
        pointer-events: none;
        transition: opacity $dt $de;
    }
    > .menu{
        > .item{
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity $dt $de, transform $dt $de;
            font-size: 1.5rem;
            color: $grey;
            text-decoration: none;
        }
    }
    &.visible{
        &.showBack{
            > .cta{
                opacity: 1;
                pointer-events: all;
            }
        }
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
                margin-right: 60px;
            }
        }
    }
}
</style>

