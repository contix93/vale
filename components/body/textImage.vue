<template lang="pug">
section.textImage(ref="$el" :class="{reverse:props.blok.align == 'right'}")
    .text(v-html="richText(props.blok.text)")
    .image(v-if="props.blok.image")
        img2x(:data="props.blok.image")
</template>

<script setup>
const props = defineProps(['blok']);
const { richText } = richTextModule();
const { gsap, SplitText, defaultTriggerConfig } = gsapModule();
const $el = ref();

onMounted(() => {
    gsap.fromTo($el.value,
    {
        y: 10, 
        opacity: 0
    },
    {
        y:0, 
        opacity: 1,
        scrollTrigger: defaultTriggerConfig($el.value)
    });
})


</script>

<style lang="scss">
.textImage{
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    &.reverse{
        flex-direction: row-reverse;
    }
    > .text{
        flex: 0 1 100%;
        padding: mw(1) mw(1) 0 0;
    }
    > .image{
        flex: 0 0 mw(8);
        font-size: 0;
    }
}
</style>