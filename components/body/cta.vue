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
    padding: 10px 0;
    text-decoration: none;
    margin-bottom: mw(1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    > i{
        font-size: 2rem;
        color: $grey;
        margin-right: 1rem;
        border: 1px solid $grey;
        border-radius: 50%;
        display: inline-block;
        width: 30px;
        height: 30px;
        flex: 0 0 30px;
        text-align: center;
        line-height: 30px;
    }
    > span{
        color: $grey;
    }
    &.download{
        > i {   
            width: 40px;
            height: 40px; 
            flex: 0 0 40px;
            line-height: 40px;
        }
    }
}

</style>