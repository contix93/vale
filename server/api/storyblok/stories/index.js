import StoryApi from "~~/server/utils/storyApi";
export default defineEventHandler(async(event) => {
    const storyApi = StoryApi;
    const query = getQuery(event)
    const stories = await storyApi.getStories({params : query});
    return stories
  })