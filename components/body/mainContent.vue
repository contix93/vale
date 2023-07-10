<template lang="pug">
.content(v-if="props.story")
    contentHeading(:title="story.content.title" :subtitle="story.content.subtitle")
    component(v-for="blok in story.content.body" :key="blok._uid" :is="formatName(blok.component)" :blok="blok")
</template>
<script setup>
const props = defineProps(['story']);

const formatName = (s) => {
    var str = s.replace('body','');
    return str.charAt(0).toLowerCase() + str.slice(1);
}
</script>