import { gsap, ScrollTrigger, SplitText} from 'gsap/all';
export default () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(SplitText);
    const defaultTriggerConfig = (trigger, start = "top 70%", end, scrub = false, markers = false)=>{
        start = window.innerWidth <= 520 ? 'top 90%' : start;

        return { 
            scroller: '#index',
            scrub,
            trigger,
            start,
            end,
            markers
        }
    }
    return { gsap, SplitText, ScrollTrigger, defaultTriggerConfig }
}