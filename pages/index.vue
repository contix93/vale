<template lang='pug'>
#index
    .heading
        cta(:blok="{link:{url:'/'},label:$__('back')}" :icon="'ri-arrow-left-s-line'")
    .loading(v-if="pending")
        mainLoading
    mainContent(v-else :story="story")
</template>
<script setup>
definePageMeta({
  middleware: ['page']
})
const route = useRoute();
var story = ref(null);
var pending = ref(true);
var error = ref(false);

if(route.fullPath.includes('pages')){
    const fetchRes = await useFetch('/api/storyblok/stories'+route.fullPath);
    story = fetchRes.data;
    pending = fetchRes.pending;
    error = fetchRes.error;
}

</script>
<style lang="scss">
#index{
    padding: mw(1) mw(2);
    box-sizing: border-box;
    overflow-y: scroll;
    height: vh(100);
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: $pink;
        border-radius: 10px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    > .heading{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
    }
    > .loading{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
}
</style>