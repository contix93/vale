function useLayout () {
    const contentVisible = ref(false);

    const toggleContent = (bool) => {
        contentVisible.value = bool
    }
    return {
        contentVisible,
        toggleContent 
    }
}
export { useLayout }