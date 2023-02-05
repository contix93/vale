
import { useState } from '#app';
function useLayout () {
    const contentVisible = useState<any>('contentVisible', () => { return false });
    const cameraPositions = useState<any>('cameraPosition', () => { return []});

    const setCameraPositions = (arr:any) => {
        cameraPositions.value = arr && arr.length > 0 ? arr : []; 
    }
    const toggleContent = (bool:any) => {
        contentVisible.value = bool
    }
    return {
        contentVisible,
        toggleContent,

        cameraPositions,
        setCameraPositions
    }
}
export { useLayout }