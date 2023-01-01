function useScroll () {
    const top = ref(0);
    
    const update = ()=>{
        top.value = document.querySelector("#mainContent").scrollTop;
    }
    onMounted(() => {
        document.querySelector("#mainContent").addEventListener('scroll', update);
        update();
    })
    onUnmounted(() => document.removeEventListener('scroll', update))
    return { top }
}
export { useScroll }