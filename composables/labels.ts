import { useState } from '#app';
export const useLabels = async () => { 
  var labels = useState<any>('labels', () => null);
  var labelsRes:[any] = await $fetch('/api/storyblok/stories?starts_with=system/labels');
  var labelsObj: Record<string, string> = {};
  if(labelsRes){
    for(var story of labelsRes){
        if(story.content && story.content.items){
            for(var label of story.content.items){
                labelsObj[label.key] = label.text;
            }
        }
    }
  }
  
  labels.value = labelsObj;
  return labels
};