<template lang="pug">
#heading(:class="{ready:ready}")
    .title
        h1.grey(v-html="props.title")
    .subtitle    
        h2.secondaryColor(v-html="props.subtitle")
</template>
<script setup>
const props = defineProps(['title', 'subtitle']);
const { gsap, SplitText } = gsapModule();
const ready = ref(false);

onMounted(() => {
    var title = new SplitText('#heading > .title > h1', {type:'words'});
    var subtitle = new SplitText('#heading > .subtitle > h2', {type:'words'});

    var tl = gsap.timeline({
        onStart: () => {
            ready.value = true;
        }
    });
    if(title.words.length) tl.fromTo(title.words,{y: 10, opacity: 0},{y:0, opacity: 1, stagger: 0.05});
    if(subtitle.words.length) tl.fromTo(subtitle.words,{y: 10, opacity: 0},{y:0, opacity: 1, stagger: 0.05});
})

</script>
<style lang="scss">
#heading{
    margin-bottom: mw(2);
    opacity: 0;   
    > * {
        h1{
            margin-bottom: 10px;
            > * {
                opacity: 0;
            }
        }
        h2{
            margin-bottom: 0;
            > * {
                opacity: 0;
            }
        }
    }
    &.ready{
        opacity: 1;
    }
}
</style>