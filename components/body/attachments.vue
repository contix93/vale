<template lang="pug">
section.attachments(v-if="props.blok.assets && props.blok.assets.length > 0" :class="props.blok.align")
    .item(v-for="item in props.blok.assets" :key="item.id")
        cta.download(:blok="{link:{url:item.filename, target:'_blank'}, label:item.title}" :icon="'ri-file-download-line'")
</template>

<script setup>
const props = defineProps(['blok']);

</script>

<style lang="scss">
.attachments{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &.center{
        align-items: center;
    }
    &.right{
        align-items: flex-end;
    }
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