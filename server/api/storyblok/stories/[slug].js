import StoryApi from "~~/server/utils/storyApi"
export default defineEventHandler(async(event) => {
    const storyApi =  StoryApi;
    const query = getQuery(event);
    var endpoint = [];
    if(event.context.params.folder) endpoint.push(event.context.params.folder);
    if(event.context.params.slug) endpoint.push(event.context.params.slug);
    const story = await storyApi.getStory(endpoint.join("/") ,{params : query});
    return story
  })