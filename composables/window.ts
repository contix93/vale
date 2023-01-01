function useWindow () {
    const width = ref(0);
    const height = ref(0);
    const mw = ref(0)
    const { ScrollTrigger } = gsapModule();
    function update() {
        width.value = window.innerWidth
        height.value = window.innerHeight
        mw.value = width.value / 30;
        ScrollTrigger.refresh();
    }
    
    onMounted(() => {
        window.addEventListener('resize', update);
        update();
    })
    onUnmounted(() => window.removeEventListener('resize', update))
    return {
        width,
        height,
        mw
    }
}
export { useWindow }