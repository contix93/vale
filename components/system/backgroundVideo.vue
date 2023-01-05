<template lang="pug">
.backgroundVideo
    video(:src="props.video.filename" paused muted loop ref="video")
    canvas(ref="canvas")
    cursor
</template>

<script setup>
const props = defineProps(['video']);
const video = ref();
const canvas = ref();
onMounted(() => {
    init();
})

const init = () => {
    var imageToDraw = null;
    video.value.addEventListener('play', (vid) => {

        const loop = () => {            
            imageToDraw = vid.srcElement;
            imageToDraw.width = vid.srcElement.videoWidth;
            imageToDraw.height = vid.srcElement.videoHeight;

            canvas.value.width = video.value.clientWidth;
            canvas.value.height = video.value.clientHeight;

            const ctx = canvas.value.getContext('2d');
            
            drawImage(imageToDraw, ctx, 'cover')

            setTimeout(loop, 1000 / 30);
        }
        loop();
    })
    video.value.play();
}

const drawImage = (img, ctx, type = 'cover') => {
    // https://stackoverflow.com/questions/21961839/simulation-background-size-cover-in-canvas
    const imgRatio = img.height / img.width
    const canvasRatio = ctx.canvas.height / ctx.canvas.width
    if ((imgRatio < canvasRatio && type === 'contain') || (imgRatio > canvasRatio && type === 'cover')) {
        const h = ctx.canvas.width * imgRatio
        ctx.drawImage(img, 0, (ctx.canvas.height - h) / 2, ctx.canvas.width, h)
    }
    if ((imgRatio > canvasRatio && type === 'contain') || (imgRatio < canvasRatio && type === 'cover')) {
        const w = ctx.canvas.width * canvasRatio / imgRatio
        ctx.drawImage(img, (ctx.canvas.width - w) / 2, 0, w, ctx.canvas.height)
    }
}

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
        // &.cover{
        //     z-index: 1;
        //     filter: grayscale(100);
        //     clip-path: none;
        // }
    }
    > canvas{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        filter: grayscale(100);
        opacity: .5;
    }
}
</style>