<template lang="pug">
section.simpleImage
    img2x(:data="props.blok.image")
</template>

<script setup>
const props = defineProps(['blok']);

</script>

<style lang="scss">

</style>