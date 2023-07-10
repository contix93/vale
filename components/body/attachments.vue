<template lang="pug">
section.attachments(ref="$el" v-if="props.blok.assets && props.blok.assets.length > 0" :class="props.blok.align")
    .item(v-for="item in props.blok.assets" :key="item.id")
        cta.download(:blok="{link:{url:item.filename, target:'_blank'}, label:item.title}" :icon="'ri-file-download-line'")
</template>

<script setup>
const props = defineProps(['blok']);
const { gsap, SplitText, defaultTriggerConfig } = gsapModule();
const $el = ref();
onMounted(() => {
    const items = $el.value.querySelectorAll('.item')
    gsap.fromTo(items,
    {
        y: 10, 
        opacity: 0
    },
    {
        y:0, 
        opacity: 1,
        stagger: .2,
        scrollTrigger: defaultTriggerConfig($el.value)
    });
})


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