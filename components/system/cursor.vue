<template lang="pug">
svg#mask
    defs
        clipPath#cursor
            circle(:cx="mouse.x.value" :cy="mouse.y.value" :r="150")
  
</template>

<script setup>
const mouse = useMouse();

// watch(mouse.position,() => {
//     console.log('mouse.position', mouse.position.value.x, mouse.position.value.y)
// })
</script>
<style lang="scss">
#mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}
// #cursor{
    // position: absolute;
    // top:0;
    // left: 0;
    // pointer-events: none;
    // width: 100%;
    // height: 100%;
    // border-radius: 50%;
    // width: 70px;
    // height: 70px;
    // top: -35px;
    // left: -35px;
    // backdrop-filter: blur(10px) grayscale(0);
// }
</style>