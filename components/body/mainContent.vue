<template lang="pug">
.content
    .heading
        h1.grey(v-html="props.story.content.title")
        h2.pink(v-html="props.story.content.subtitle")
    component(v-for="blok in props.story.content.body" :key="blok._uid" :is="formatName(blok.component)" :blok="blok")
</template>
<script setup>
const props = defineProps(['story']);
const formatName = (s) => {
    var str = s.replace('body','');
    return str.charAt(0).toLowerCase() + str.slice(1);
}

</script>
<style lang="scss">
.content{
    > .heading{
        margin-bottom: mw(2);
        h1{
            margin-bottom: 10px;
        }
        h2{
            margin-bottom: 0;
        }
    }
    
}

</style>