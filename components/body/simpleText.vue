<template lang="pug">
section.simpleText(ref="$el" v-html="richText(props.blok.text)")
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

</style>