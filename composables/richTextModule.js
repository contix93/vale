import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.cjs.js'
export default () => {
    const resolver = new RichTextResolver()
    const richText = data => resolver.render(data)
    return { richText }
}