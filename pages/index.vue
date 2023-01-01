<template lang='pug'>
#page(:class="{open:fullPath != '/'}")
    .heading 
        nuxtLink(:to="'/'") Close
    .loading(v-if="pending")
        h1 Loading 
    mainContent(v-else :story="story")
</template>
<script setup>
const { fullPath } = useRoute();
const { data:story, pending, error } = await useFetch('/api/storyblok/stories'+fullPath);



</script>
<style lang="scss">
#page{
    position: absolute;
    z-index: 2;
    height: vh(100);
    width: vw(50);
    background: $white;
    right: vw(-50);
    &.open{
        right: 0;
    }
    > .heading{
        display: flex;
        align-items: flex-end;
    }
}
</style>