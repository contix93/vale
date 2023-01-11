<template lang="pug">
section.attachments(v-if="props.blok.assets && props.blok.assets.length > 0")
    .item(v-for="item in props.blok.assets" :key="item.id")
        cta(:blok="{link:{url:item.filename, target:'_blank'}, label:item.title}" :icon="'ri-file-download-line'")
</template>

<script setup>
const props = defineProps(['blok']);

</script>

<style lang="scss">
.attachments{
    .item{
        margin-bottom: 20px;
        &:last-child{
            margin-bottom: 0;
        }
        > * {
            margin-bottom: 0;
        }
    }
}
</style>