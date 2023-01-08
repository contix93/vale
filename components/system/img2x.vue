<template lang='pug'>
div.wrapper(ref="wrapper" :class="className")
    img(
        v-if="singleSrc"
        :src="singleSrc"
        
        :alt="data.alt ? data.alt : (data.name ? data.name : '')"
        :srcset="`${singleSrc} 1x,${doubleSrc} 2x`"
        :width="elW"
        :height="elH"
        loading="lazy"
    )
</template>

<script setup>
    let props = defineProps({
        fitIn: {type: Boolean},
        onlyHeight: {type: Boolean},
        onlyWidth: {type: Boolean},
        smart: {type: Boolean},
        data: {type: Object},
        className: {type: String},
        size: {type: Object},
        quality: {type: Number},
        transparent: {type: Boolean, default: false}
    })
    const inited = ref(false);
    const {width} = useWindow();
    const wrapper = ref();
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


    const calcUrl= (url="", moltiplier = 1) =>{
        const filters = [props.quality ? 'quality('+ props.quality+')' : null, props.transparent ? 'fill(transparent)': null].filter((item)=> item!== null);
        const extra = !isSvg ? `${props.fitIn && (!props.onlyHeight || !props.onlyWidth ) ? 'fit-in/' : ''}${elH.value && elW.value ? ( props.onlyHeight ? '0' : elW.value*moltiplier) +'x'+( props.onlyWidth? '0' : elH.value*moltiplier) +'/': '' }${props.smart ? 'smart/' : ''}${filters.length > 0 ? 'filters:' + filters.join(':') : ''}` : ''
        const replaced = `${url}${(extra.length> 0 ? '/m/' + extra : '')}`;
        return replaced
    }   

</script>

<style lang="scss">
.wrapper {
    width:100%;
    height: 100%;

    /* > img {
        max-width: 100%;
        max-height: 100%;
    } */
}
</style>
