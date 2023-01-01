function useContent () {
    const urlContent = ref();
    const open = ref(false);
    
    const updateContent = (path) => {
        urlContent.value = path;
        open.value = true;
    }

    const toggleContent = (bool) => {
        open.value = bool
    }
    return { urlContent, open, updateContent, toggleContent }
}
export { useContent }