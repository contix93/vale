<template lang="pug">
section.simpleVideo(ref="$el" v-if="props.blok.video && props.blok.video.filename" :class="{playing:playing}")
    .poster(v-if="props.blok.poster && props.blok.poster.filename" @click.prevent="playVideo()")
        i.ri-play-circle-line
        img2x(:data="props.blok.poster")
    .video 
        video(:src="props.blok.video.filename" controls ref="video")
    
</template>

<script setup>
const props = defineProps(['blok']);
const video = ref();
const playing = ref(false)
const playVideo = () => {    
    if(video){
        video.value.play();
        playing.value = true;
    } 
}
const { gsap, SplitText, defaultTriggerConfig } = gsapModule();
const $el = ref();

onMounted(() => {
    gsap.fromTo($el.value,
    {
        y: 10, 
        opacity: 0
    },
    {
        y:0, 
        opacity: 1,
        scrollTrigger: defaultTriggerConfig($el.value)
    });
})


</script>

<style lang="scss">
.simpleVideo{
    margin: 0 auto;
    width: mw(12);
    height: mw(7);
    display: flex;
    position: relative;
    > .poster{
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
        z-index: 2;
        opacity: 1;
        transition: opacity $dt $de;
        img{
            filter: grayscale(0.7);
            transition: filter $dt $de;
        }
        &:hover{
            img{
                filter: grayscale(0);
            }
        }
        > i{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 6rem;
            color: $blue;
            z-index: 2;
        }
    }
    > .video{
        width: 100%;
        height: 100%;
        z-index: 1;
        position: absolute;
        > video{
            width: 100%;
            height: 100%;
        }
    }
    &.playing{
        > .poster{
            opacity: 0;
            pointer-events: none;
        }
    }
}
</style>