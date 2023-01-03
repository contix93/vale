<template lang='pug'>
#page(:class="{open:layout.contentVisible.value}")
    .heading 
        nuxtLink(:to="'/'") {{ $__('back') }} 
    .loading(v-if="!content")
        h1 Loading 
    mainContent(v-else :story="content")
</template>
<script setup>
definePageMeta({
  middleware: ['page']
})
const route = useRoute();
const layout = useLayout();
const content = ref(null);
if(route.fullPath.includes('pages')){
    const { data:story, pending, error } = await useFetch('/api/storyblok/stories'+route.fullPath);
    content.value = story;
}

</script>
<style lang="scss">
#page{
    position: absolute;
    z-index: 2;
    height: vh(100);
    width: vw(70);
    background: green;
    right: vw(-70);
    padding: mw(1) mw(2);
    box-sizing: border-box;
    
    &.open{
        right: 0;
    }
    > .heading{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
    }
}
</style>