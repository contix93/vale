<template lang="pug">
.backgroundVideo(ref="container")
    video(:src="props.video.filename" autoplay muted loop ref="video")
    video.cover(:src="props.video.filename" autoplay muted loop)
    cursor
</template>

<script setup>
const props = defineProps(['video']);
// const container = ref();
// const video = ref();
// onMounted(() => {
//     const copy = video.value.cloneNode(true);
//     copy.classList.add('cover');
//     copy.setAttribute('autoplay',false);
//     container.value.appendChild(copy);
//     console.log(copy);

// })

</script>

<style lang="scss">
.backgroundVideo{
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
</style>