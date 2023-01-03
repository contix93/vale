export default defineNuxtRouteMiddleware((to, from) => {
    const layout = useLayout();
    layout.toggleContent(to.fullPath.includes('pages'))
  })