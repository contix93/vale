<template lang="pug">
a.simpleLogo(ref="$el" v-if="blok" :href="blok.url" target="_blank")
    img2x(:data="blok.image" :fitIn="true")
    span(v-html="blok.text")
</template>

<script setup>
const props = defineProps(['blok']);
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
.simpleLogo{
    flex: 0 0 mw(4);
    text-align: center;
    > .wrapper{
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
        margin-bottom: 1rem;
    }
}
</style>