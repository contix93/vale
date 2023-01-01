export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('img', (src, width, height,fit,quality,smart)=> {
        var size = width || height ? `${width ? width : 0}x${height ? height : 0}` : '';
        fit = fit ? 'fit-in/' : '';
        quality = quality ? 'filters:quality('+ quality+')/' : '';
        smart = smart ? 'smart/' : '';
        return `${src.replace('https://a.storyblok.com/', '/proxy/')}/m/${size}${fit}${quality}${smart}`
    })     
    nuxtApp.provide('video', (src) => { return src.replace('https://a.storyblok.com/', '/proxy/') }) 
} 
)