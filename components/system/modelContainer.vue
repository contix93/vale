<template lang="pug">
.modelContainer(:class="{visible:layout.contentVisible.value}" ref="modelContainer")
    
</template>

<script setup>
const props = defineProps(['model','exposure','shadow-intensity','autorotate']);
const layout = useLayout();
const modelContainer = ref();
var currentIndex = 0;
var cameraPositions = layout.cameraPositions.value;
var intervalHolder = null;


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
        if(props.autorotate) modelViewer.setAttribute('auto-rotate',props.autorotate);
        modelViewer.setAttribute('interpolation-decay',200);
        modelViewer.setAttribute('environment-image','/spruit_sunrise_1k_HDR.hdr');

        modelContainer.value.appendChild(modelViewer);

        changeCameraPosition(0)
        startInterval()
    }
    
}
const startInterval = () => {
    intervalHolder = setInterval(() => {
        changeCameraPosition(currentIndex);
    }, 10000)
}
const changeCameraPosition = (index) => {
    if(cameraPositions && cameraPositions.length > 0){
        if(!isNaN(index)) currentIndex = index;

        modelViewer.autoRotate = cameraPositions[currentIndex].autorotate ?? false;

        if(cameraPositions[currentIndex].cameraX && cameraPositions[currentIndex].cameraY && cameraPositions[currentIndex].distance){
            var orbit = cameraPositions[currentIndex].cameraX+'deg '+cameraPositions[currentIndex].cameraY+'deg '+cameraPositions[currentIndex].distance+'%';
            modelViewer.cameraOrbit = orbit;
        }

        var targetX = cameraPositions[currentIndex].targetX ? cameraPositions[currentIndex].targetX+'cm' : 'auto'
        var targetY = cameraPositions[currentIndex].targetY ? cameraPositions[currentIndex].targetY+'cm' : 'auto'
        var targetZ = cameraPositions[currentIndex].targetZ ? cameraPositions[currentIndex].targetZ+'cm' : 'auto'
        var target = targetX+' '+targetY+' '+targetZ;

        modelViewer.cameraTarget = target;

        currentIndex++;

        if(currentIndex >= cameraPositions.length) currentIndex = 0;
    }
    
}
onBeforeUnmount(() => {
    if(intervalHolder) clearInterval(intervalHolder);
})
watch(layout.cameraPositions,(to) => {
    if(intervalHolder) clearInterval(intervalHolder);
    cameraPositions = to;
    changeCameraPosition(0);
    startInterval();
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