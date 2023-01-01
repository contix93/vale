import axios from 'axios'
class StoryApi {

    constructor () {
        this.stories = {};
        this.axios = axios.create()
        this.axios.defaults.baseURL ='https://api.storyblok.com/v2/';
    }

    async getStories(options) {
        const runtimeConfig = useRuntimeConfig();
        try {
            const res = await  this.axios.get('cdn/stories', {
                params: {
                    version: runtimeConfig.env == 'development' ? 'draft' : 'published',
                    token: runtimeConfig.public.STORYBLOK_KEY,
                    ...options.params
                }
            })
            this.stories = res.data.stories
            return  this.stories
        }catch {
            return {}
        }
    }
    async getStory(slug, options) {
        const runtimeConfig = useRuntimeConfig();
        try {
            const res = await  this.axios.get(`cdn/stories/${slug}`, {
                params: {
                    version: runtimeConfig.env == 'development' ? 'draft' : 'published',
                    token: runtimeConfig.public.STORYBLOK_KEY,
                    ...options.params
                }
            })
           
            return res.data.story
        }catch {
            return {}
        }
    }
}
export default new StoryApi()