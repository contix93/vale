<template lang="pug">
.componentsList(v-if="blok && blok.items")
    component(v-for="item in blok.items" :key="item._uid" :is="formatName(item.component)" :blok="item")
</template>

<script setup>
const props = defineProps(['blok']);

const formatName = (s) => {
    var str = s.replace('body','');
    return str.charAt(0).toLowerCase() + str.slice(1);
}

</script>
<style lang="scss">
.componentsList{
    display: flex;
    flex-wrap: wrap;
    gap: mw(1.5)
}
</style>