<template lang='pug'>
#default
    mainHeader
    #page
        slot
    .content(v-if="story && !error")
        backgroundVideo(v-if="story.content.video" :video="story.content.video")
</template>
<script setup>
const { data:story, pending, error } = await useFetch('/api/storyblok/stories/homepage');
const { gsap } = gsapModule();
const layout = useLayout();
onMounted(() => {
    if(layout.contentVisible.value) handlePage(true)
})
watch(layout.contentVisible, (to,from) => {
    handlePage(to);
})

const handlePage = (open) => {
    if(open){
        gsap.fromTo('#page',{ right: '-70%' },{ right: '0%' })
    }else{
        gsap.fromTo('#page',{ right: '0%' },{ right: '-70%' })
    }
}
</script>
<style lang="scss">
    #default{
        position: relative;
        display: block;
        width: vw(100);
        height: vh(100);
        overflow: hidden;
        > #page{
            position: absolute;
            z-index: 2;
            height: vh(100);
            width: 70%;
            background: green;
            right: -70%;
        }
        
    }
</style>