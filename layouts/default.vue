<template lang='pug'>
#default
    mainHeader
    slot
    .content(v-if="content")
        backgroundVideo(v-if="content.video" :video="content.video")
</template>
<script setup>
const { data:story, pending, error } = await useFetch('/api/storyblok/stories/homepage');
const { content } = story.value;
</script>
<style lang="scss">
    #default{
        position: relative;
        display: block;
        width: vw(100);
        height: vh(100);
        overflow: hidden;
        > .content{

        }
        
    }
</style>