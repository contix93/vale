<template lang="pug">
svg#mask
    defs
        clipPath#cursor
            circle(:cx="mouse.x.value" :cy="mouse.y.value" :r="150")
  
</template>
<script setup>
const mouse = useMouse();
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
</style>