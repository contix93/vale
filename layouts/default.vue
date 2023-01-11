<template lang='pug'>
#default
    mainHeader
    .heading 
        h1(v-if="story.content && story.content.title" v-html="story.content.title")
        .text(v-if="story.content.text" v-html="richText(story.content.text)")
    #page
        slot
    .content(v-if="story && !error")
        backgroundVideo(v-if="story.content && story.content.video" :video="story.content.video")
</template>
<script setup>
const { data:story, pending, error } = await useFetch('/api/storyblok/stories/homepage');
const { richText } = richTextModule();
const { gsap } = gsapModule();
const layout = useLayout();
const window = useWindow();
onMounted(() => {
    if(layout.contentVisible.value) handlePage(true)
})
watch(layout.contentVisible, (to,from) => {
    handlePage(to);
})

const handlePage = (open) => {
    if(open){
        gsap.fromTo('#page',{ right: -(window.mw.value * 22) },{ right: 0 })
    }else{
        gsap.fromTo('#page',{ right: 0 },{ right: -(window.mw.value * 22) })
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
        > .heading{
            position: absolute;
            top: mw(4);
            left: mw(4);
            z-index: 4;
            > h1{
                color: $grey;
            }
        }
        > #page{
            position: absolute;
            z-index: 5;
            height: vh(100);
            width: mw(22);
            background: $white;
            right: mw(-22);
        }
        
    }
</style>