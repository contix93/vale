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
        imageToDraw = vid.srcElement;

        const loop = () => {
            canvas.value.width = video.value.clientWidth;
            canvas.value.height = video.value.clientHeight;

            const ctx = canvas.value.getContext('2d');
            const imageWidth = vid.srcElement.videoWidth;
            const imageHeight = vid.srcElement.videoHeight;

            drawImageScaled(imageToDraw, imageWidth, imageHeight, ctx)
            setTimeout(loop, 1000 / 30);
        }
        loop();
    })
    video.value.play();
}

const drawImageScaled = function (img, imgWidth, imgHeight, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width  / imgWidth;
    var vRatio =  canvas.height / imgHeight;
    var ratio  = Math.min ( hRatio, vRatio );
    
    console.log(canvas.width, imgWidth, hRatio);

    var centerShift_x = ( canvas.width - imgWidth*ratio ) / 2;
    var centerShift_y = ( canvas.height - imgHeight*ratio ) / 2;  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img, 0,0, imgWidth, imgHeight, centerShift_x, centerShift_y, imgWidth*ratio, imgHeight*ratio);  
    // ctx.drawImage(img, 0,0, imgWidth, imgHeight);  
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
        // object-fit: cover;
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