<template lang='pug'>
#index
    .loading(v-if="!story")
        mainLoading
    mainContent(v-else :story="story")
</template>
<script setup>
definePageMeta({
  middleware: ['page']
})
const route = useRoute();
var story = ref(null);

if(route.fullPath.includes('pages')){
    const config = useRuntimeConfig();
    const res = await useAsyncStoryblok(route.fullPath, { version: config.public.storyblokVersion });
    story.value = res.value;
}
const layout = useLayout();
layout.setCameraPositions(story && story.value && story.value.content && story.value.content.cameraPositions && story.value.content.cameraPositions.length > 0 ? story.value.content.cameraPositions : null)



</script>
<style lang="scss">
#index{
    padding: mw(2) mw(2) mw(1) mw(2);
    box-sizing: border-box;
    overflow-y: scroll;
    height: vh(100);
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: $blue;
        border-radius: 10px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    > .loading{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
}
</style>