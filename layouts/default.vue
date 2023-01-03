<template lang='pug'>
#default
    mainHeader
    slot
    .content(v-if="content")
        video(v-if="content.video && content.video.filename" :src="content.video.filename" autoplay muted loop)
        | {{ content }}
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
            > video{
                width: vw(100);
                height: vh(100);
                object-fit: cover;
            }
        }
    }
</style>