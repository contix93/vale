<template lang="pug">
.modelContainer(:class="{visible:layout.contentVisible.value}" ref="modelContainer")
    
</template>

<script setup>
const props = defineProps(['model','exposure','shadow-intensity','autorotate']);
const layout = useLayout();
const modelContainer = ref();
var currentIndex = 0;
var cameraPositions = layout.cameraPositions.value;


const init = () => {
    if(props.model && props.model.filename){
        
        const defParams = {
            shadowIntensity: 1,
            exposure: 1
        }
        const modelViewer = document.createElement('model-viewer');

        modelViewer.setAttribute('id','modelViewer');
        modelViewer.setAttribute('src',props.model.filename);
        modelViewer.setAttribute('disable-zoom',true);
        
        modelViewer.setAttribute('shadow-intensity',props.shadowIntensity ?? defParams.shadowIntensity);
        modelViewer.setAttribute('exposure',props.exposure ?? defParams.exposure);
        modelViewer.setAttribute('auto-rotate',props.autorotate);
        modelViewer.setAttribute('interpolation-decay',200);
        modelViewer.setAttribute('environment-image','/spruit_sunrise_1k_HDR.hdr');

        modelContainer.value.appendChild(modelViewer);

        setInterval(() => {
            changeCameraPosition(currentIndex);
        }, 5000)
    }
    
}
const changeCameraPosition = (index) => {
    console.log(cameraPositions)
    if(index >= cameraPositions.length) currentIndex = 0;

    var orbit = cameraPositions[currentIndex].cameraX+'deg '+cameraPositions[currentIndex].cameraY+'deg '+cameraPositions[currentIndex].distance+'%';
    //modelViewer.cameraOrbit = orbit;

    currentIndex++;
}
watch(layout.cameraPositions,(to) => {
    cameraPositions = to.value;
    changeCameraPosition(0)
})
onMounted(() => {
    init();
})

</script>
<style lang="scss">
.modelContainer{
    position: absolute;
    left: 0;
    top: 0;
    width: mw(10);
    height: 100%;
    z-index: 5;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: stretch;
    transition: opacity $dt $de;
    opacity: 0;
    > model-viewer{
        width: 100%;
        height: 100%;
    }
    &.visible{
        opacity: 1;
        pointer-events: all;
        transition-delay: #{$dt} / 2;
    }
}
</style>