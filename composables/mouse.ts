
import { useState } from '#app';
function useMouse () {
    const x = useState<any>('x', () => { return 0 });
    const y = useState<any>('y', () => { return 0 });

    const updateMouse = (clientX:any, clientY:any) => {
        x.value = clientX;
        y.value = clientY
    }
    const handleMouse = (e:any) => {
        updateMouse(e.clientX, e.clientY)
    }
    onMounted(() => {
        document.onmousemove = handleMouse
    })

    return {
        x, y 
    }
}
export { useMouse }