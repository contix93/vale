<template lang='pug'>
div.wrapper(ref="wrapper" :class="[className,{animate:animate,ready:ready}]")
    .bkg(v-if="animate" ref="bkg")
    img(
        ref="image"
        :src="singleSrc"
        
        :alt="data.alt ? data.alt : (data.name ? data.name : '')"
        :srcset="`${singleSrc} 1x,${doubleSrc} 2x`"
        :width="elW"
        :height="elH"
        loading="lazy"
    )
</template>

<script setup>
    const { gsap } = gsapModule();
    let props = defineProps({
        fitIn: {type: Boolean},
        onlyHeight: {type: Boolean},
        onlyWidth: {type: Boolean},
        smart: {type: Boolean},
        data: {type: Object},
        className: {type: String},
        size: {type: Object},
        quality: {type: Number},
        transparent: {type: Boolean, default: false},
        animate: {type: Boolean, default: false}
    })
    const inited = ref(false);
    const {width} = useWindow();
    const wrapper = ref();
    const image = ref();
    const bkg = ref();
    const ready = ref(false);
    var elH = ref(0);
    var elW = ref(0);
    if(props.size){
        elH.value = props.size.h;
        elW.value = props.size.w;
    }
    const isSvg = props.data.filename.split('.').pop() == 'svg';
    const singleSrc = ref();
    const doubleSrc = ref();

    
    onMounted(() => {
        if(!elH.value && !elW.value) {
            elW.value = wrapper.value.clientWidth;
            elH.value = wrapper.value.clientHeight;
        }
        singleSrc.value = calcUrl(props.data.filename);
        doubleSrc.value = calcUrl(props.data.filename, 2);

        if(props.animate){
            initGsap();
        }
    })
    watch(()=>props.data, (to, from) => {
        singleSrc.value = calcUrl(to.filename);
        doubleSrc.value = calcUrl(to.filename, 2);
    })

    watch(width, (to, from) => {
            if( elW.value !== wrapper.value.clientWidth){
                elW.value = wrapper.value.clientWidth;
                elH.value = wrapper.value.clientHeight;
                singleSrc.value= null;
                doubleSrc.value= null;
                singleSrc.value = calcUrl(props.data.filename);
                doubleSrc.value = calcUrl(props.data.filename, 2);
            }

    })


    const calcUrl = (url="", moltiplier = 1) =>{
        const filters = [props.quality ? 'quality('+ props.quality+')' : null, props.transparent ? 'fill(transparent)': null].filter((item)=> item!== null);
        const extra = !isSvg ? `${props.fitIn && (!props.onlyHeight || !props.onlyWidth ) ? 'fit-in/' : ''}${elH.value && elW.value ? ( props.onlyHeight ? '0' : elW.value*moltiplier) +'x'+( props.onlyWidth? '0' : elH.value*moltiplier) +'/': '' }${props.smart ? 'smart/' : ''}${filters.length > 0 ? 'filters:' + filters.join(':') : ''}` : ''
        const replaced = `${url}${(extra.length> 0 ? '/m/' + extra : '')}`;
        return replaced
    } 
    
    const initGsap = () => {
        var tl = gsap.timeline({
            scrollTrigger : {
                scroller: '#index',
                trigger: wrapper.value,
                start: 'top 40%'
            },
            onStart: () => {
                ready.value = true;
            }
        });
        tl.fromTo(bkg.value,{scaleY:0},{scaleY:1});
        tl.fromTo(image.value,{opacity:0},{opacity:1, delay: .2});
    }

</script>

<style lang="scss">
.wrapper {
    width:100%;
    height: 100%;
    position: relative;
    > .bkg{
        display: none;
    }
    &.animate{
        opacity: 0;
        > .bkg{
            width: 100%;
            height: 100%;
            position: absolute;
            background: $lightGrey;
            z-index: 1;
            top: 2rem;
            left: -2rem;
            display: block;
        }
        > img{
            position: relative;
            z-index: 2;
        }
    }
    &.ready{
        opacity: 1;
    }
}
</style>
