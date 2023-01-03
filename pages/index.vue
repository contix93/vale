<template lang='pug'>
#page(:class="{open:true}")
    .heading 
        nuxtLink(:to="'/'") {{ $__('back') }} 
    .loading(v-if="pending")
        h1 Loading 
    mainContent(v-else :story="story")
</template>
<script setup>
definePageMeta({
  middleware: ['page']
})
const route = useRoute();
// const router = useRouter();

const { data:story, pending, error } = await useFetch('/api/storyblok/stories'+route.fullPath);

const layout = useLayout();
console.log('pages/index',layout.contentVisible.value)

// router.beforeEach((to, from) => {
//     console.log('to',to.path)
//     const bool = to.path.includes('pages');
//     open.value = bool;
//     return to.path;
// })



</script>
<style lang="scss">
#page{
    position: absolute;
    z-index: 2;
    height: vh(100);
    width: vw(50);
    background: green;
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