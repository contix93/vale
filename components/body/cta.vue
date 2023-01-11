<template lang="pug">
nuxtLink.cta(v-if="props.blok.link && props.blok.link.url" :to="props.blok.link.url" :target="props.blok.link.target")
    i(v-if="props.icon" :class="props.icon")
    span(v-html="blok.label")
</template>

<script setup>
const props = defineProps(['blok','icon']);

</script>

<style lang="scss">
.cta{
    background: $lightGrey;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    transition: background $dt $de;
    margin-bottom: mw(1);
    display: inline-flex;
    align-items: center;
    > i{
        font-size: 2rem;
        color: $grey;
        margin-right: 1rem;
    }
    > span{
        color: $grey;
    }
    &:hover{
        background: $pink;
    }
}

</style>