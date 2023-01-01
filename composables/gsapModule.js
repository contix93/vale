import { gsap, ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin, ScrollToPlugin, MotionPathHelper } from 'gsap/all';
// import { SplitText } from 'gsap/SplitText';
export default () => {
    onMounted(() => {
        
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(SplitText);
        gsap.registerPlugin(DrawSVGPlugin);
        gsap.registerPlugin(MotionPathPlugin);
        gsap.registerPlugin(ScrollToPlugin);
        gsap.registerPlugin(MotionPathHelper);
    })

    return { gsap, SplitText, ScrollTrigger, DrawSVGPlugin, MotionPathHelper }
}