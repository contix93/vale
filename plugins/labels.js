export default defineNuxtPlugin(async nuxtApp => {
    const labels = (await useLabels()).value;
    nuxtApp.provide('__', (s) => {
        return labels[s] ? labels[s] : s;
    });
})