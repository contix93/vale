<template lang='pug'>
#default(:class="{inPage:layout.contentVisible.value}")
    mainHeader
    .heading 
        h1(v-if="story.content && story.content.title" v-html="story.content.title")
        .text(v-if="story.content.text" v-html="richText(story.content.text)")
    #page
        slot
    .content(v-if="story && story.content && !error")
        backgroundVideo(v-if="story.content && story.content.video" :video="story.content.video")
        modelContainer(:model="story.content.asset" :exposure="story.content.exposure" :shadow-intensity="story.content.shadowIntensity" :autorotate="story.content.autorotate")
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
        gsap.fromTo('#page',{ right: -(window.mw.value * 20) },{ right: 0 })
    }else{
        gsap.fromTo('#page',{ right: 0 },{ right: -(window.mw.value * 20) })
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
        &::after{
            content: "";
            width: 100%;
            height: 100%;
            background: rgb(26, 26, 26);
            opacity: 0;
            transition: opacity $dt $de;
            pointer-events: none;
            position: absolute;
            z-index: 4;
            top:0;
            left: 0;
        }
        &.inPage{
            &::after{
                opacity: 1;
            }
        }
        > .heading{
            position: absolute;
            top: mw(6);
            left: mw(4);
            z-index: 3;
            > h1{
                color: $grey;
            }
        }
        > #page{
            position: absolute;
            z-index: 5;
            height: vh(100);
            width: mw(20);
            background: $white;
            right: mw(-20);
        }
        
    }
</style>