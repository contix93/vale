<template lang='pug'>
#index
    .heading 
        nuxtLink(:to="'/'") {{ $__('back') }} 
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