<template lang="pug">
#heading
    .title
        h1.grey(v-html="props.title")
    .subtitle    
        h2.secondaryColor(v-html="props.subtitle")
</template>
<script setup>
const props = defineProps(['title', 'subtitle']);
const { gsap, SplitText } = gsapModule();

onMounted(() => {
    var title = new SplitText('#heading > .title > h1', {type:'words'});
    var subtitle = new SplitText('#heading > .subtitle > h2', {type:'words'});

    console.log(title,subtitle)
    var tl = gsap.timeline();
    tl.fromTo(title.words,{y: 60, opacity: 0},{y:0, opacity: 1, stagger: 0.1});
    tl.fromTo(subtitle.words,{y: 60, opacity: 0},{y:0, opacity: 1, stagger: 0.1});
})

</script>
<style lang="scss">
#heading{
    margin-bottom: mw(2);
    > * {
        overflow: hidden;    
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
}
</style>