<template lang='pug'>
#default
    mainHeader
    slot
    .content(v-if="content")
        .video
            video(:src="content.video.filename" autoplay muted loop)
            video.cover(:src="content.video.filename" autoplay muted loop)
            cursor
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
            > .video{
                width: vw(100);
                height: vh(100);
                position: relative;
                z-index: 1;
                > video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 2;
                    clip-path: url(#cursor);
                    &.cover{
                        z-index: 1;
                        filter: grayscale(100);
                        clip-path: none;
                    }
                }
            }
        }
        
    }
</style>