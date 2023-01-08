<template lang="pug">
section.simpleText(v-html="richText(props.blok.text)")
</template>

<script setup>
const props = defineProps(['blok']);
const { richText } = richTextModule();

</script>

<style lang="scss">

</style>