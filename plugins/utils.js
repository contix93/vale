export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('testEmail', (s) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(s).toLowerCase());
    });
    nuxtApp.provide("formatPrice",p => {
        p = p == undefined || p == null ? 0 : p;
        p =  parseFloat(p);
        return (p).toLocaleString('en-EN', { style: 'currency', currency: 'usd', currencyDisplay: 'code'})
    })
    nuxtApp.provide('testEmpty', (s) => {
        return s == null || s == undefined || s == '';
    });
    nuxtApp.provide('testPhone', (s) => {
        var re = /^((00|\+)\d{2}[\. ]??)??3\d{2}[\. ]??\d{6,7}([\,\;]((00|\+)\d{2}[\. ]??)??3\d{2}[\. ]??\d{6,7})*$/;
        return re.test(s);
    })

    nuxtApp.provide('formatDate', (d,f) => {
        var moment = require('moment');
        moment.locale(route.params.lang);
        var data = new moment(d);
        return data ? data.format(f?f:'DD/MM/YYYY') : 'invalid date';
    })
    nuxtApp.provide('formatDateTime', (d,f) => {
        var moment = require('moment');
        moment.locale(route.params.lang);
        var data = new moment(d);
        return data ? data.format(f?f:'DD MMMM YYYY | LT') : 'invalid date';
    })
    nuxtApp.provide("formatPriceSpan",n => {
        if(isNaN(n)) return 'NAN';
        if(!(n).toLocaleString) return n;
        n = (n).toLocaleString('en-EN', { style: 'currency', currency: 'usd',  currencyDisplay: 'code'});
        n = n.split(",");
        return n[0] +'<span>,'+ n[1] +'</span>';
    })
    nuxtApp.provide("head",(storyInput) => {
        const { richText } = richTextModule();
        const story = storyInput.value
        var metadata = story.content.metadata;
        if(!metadata){
            metadata = {
              title : story.content.title ? story.content.title : null,
              description: story.content.text ? richText(story.content.text).substring(0, 156)+' ...' : null,
              follow: "follow",
              image: story.content.mainimage && story.content.mainimage.filename ? story.content.mainimage.filename : '',
            }
        }
        if(metadata){
            if(!metadata.title) metadata.title = story.name ? story.name : null;
            if(!metadata.description) metadata.description = story.content.text ? richText(story.content.text).substring(0, 156)+' ...' : null;
            if(!metadata.image) metadata.image = story.content.mainimage && story.content.mainimage.filename ? story.content.mainimage.filename : '';
            if(!metadata.follow) metadata.follow = 'follow';

            var title = metadata.title ? metadata.title.replace(/<\/?[^>]+(>|$)/g, "") : nuxtApp.$__('metaDefaultTitle');
            var description = metadata.description ? metadata.description.replace(/<\/?[^>]+(>|$)/g, "") : nuxtApp.$__('metaDefaultDescription');
            var robots = metadata.follow == 'follow' ? 'index, follow' : 'noindex, nofollow';
            return {
                title: title + " - " +  nuxtApp.$__('metaPostfixTitle'),
                meta: [
                    { hid: 'og:type', property: 'og:type', content: 'article' },
                    { hid: 'og:title', property: 'og:title', content: title + ' - ' + nuxtApp.$__('metaPostfixTitle')},
                    { hid: 'og:site_name', property: 'og:site_name', content: nuxtApp.$__('metaSiteName')},
                    { hid: 'description', name: 'description', content: description },
                    { hid: 'og:url', property: 'og:url', content: 'https://'+nuxtApp.$__('metaDomain')+'/'+story.full_slug.replace('homepage','')},
                    { hid: 'og:description', property: 'og:description', content: description },
                    { hid: 'og:image', property: 'og:image', content: metadata.image },
                    { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
                    { hid: 'og:image:height', property: 'og:image:height', content: '630' },
                    { hid : 'robots', name : 'robots', content : robots },
                    { rel: 'msapplication-square70x70logo', content: 'favicon/ms-icon-70x70.png' },
                    { rel: 'msapplication-square150x150logo', content: 'favicon/ms-icon-150x150.png' },
                    { rel: 'msapplication-square310x310logo', content: 'favicon/ms-icon-310x310.png' },
                ]
            }
        }
    })
}
)
