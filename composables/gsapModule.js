import { gsap, SplitText, ScrollTrigger } from 'gsap/all';
export default () => {
    onMounted(() => {
        gsap.registerPlugin(SplitText);
        gsap.registerPlugin(ScrollTrigger)
        /* gsap.registerPlugin(DrawSVGPlugin);
        gsap.registerPlugin(MotionPathPlugin);
        gsap.registerPlugin(ScrollToPlugin);
        gsap.registerPlugin(MotionPathHelper); */
    })
    return { gsap, SplitText, ScrollTrigger }
}