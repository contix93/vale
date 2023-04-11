<template lang="pug">
a.simpleLogo(v-if="blok" :href="blok.url" target="_blank")
    img2x(:data="blok.image" :fitIn="true")
    span(v-html="blok.text")
</template>

<script setup>
const props = defineProps(['blok']);
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