<template lang="pug">
.modelContainer(:class="{visible:layout.contentVisible.value}" ref="modelContainer")
    
</template>

<script setup>
const layout = useLayout();
const modelContainer = ref();
const init = () => {
    const modelViewer = document.createElement('model-viewer');
    modelViewer.setAttribute('src','/ballerina.glb');
    modelViewer.setAttribute('camera-controls',true);
    modelViewer.setAttribute('shadow-intensity','1.34');
    modelViewer.setAttribute('exposure','2');
    modelViewer.setAttribute('environment-image','/spruit_sunrise_1k_HDR.hdr');

    modelContainer.value.appendChild(modelViewer);
}
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
    opacity: .2;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: stretch;
    > model-viewer{
        width: 100%;
        height: 100%;
    }
    &.visible{
        opacity: 1;
        pointer-events: all;
    }
}
</style>