export default defineNuxtRouteMiddleware((to, from) => {
  
    const layout = useLayout();
    layout.toggleContent(to.fullPath.includes('pages'))
    console.log('aaaa', to.fullPath.includes('pages'), layout.contentVisible.value)

    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // return navigateTo('/')
  })