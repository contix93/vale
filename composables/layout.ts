
import { useState } from '#app';
function useLayout () {
    const contentVisible = useState<any>('contentVisible', () => { return false });
    const toggleContent = (bool:any) => {
        contentVisible.value = bool
    }
    return {
        contentVisible,
        toggleContent 
    }
}
export { useLayout }