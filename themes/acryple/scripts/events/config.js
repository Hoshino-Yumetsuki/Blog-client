/**
 * Butterfly
 * 1. Merge CDN
 * 2. Capitalize the first letter of comment name
 */

'use strict'

const { version } = require('../../package.json')
const path = require('path')

hexo.extend.filter.register('before_generate', () => {
  const themeConfig = hexo.theme.config
  const { CDN, comments } = themeConfig

  /**
   * Merge CDN
   */

  const internalSrcCDN = {
    main_css: '/css/index.css',
    main: `https://registry.npmmirror.com/hexo-theme-butterfly/${version}/files/source/js/main.min.js`,
    utils: `https://registry.npmmirror.com/hexo-theme-butterfly/${version}/files/source/js/utils.min.js`,
    translate: `https://registry.npmmirror.com/hexo-theme-butterfly/${version}/files/source/js/tw_cn.min.js`,
    local_search: `https://registry.npmmirror.com/hexo-theme-butterfly/${version}/files/source/js/search/local-search.min.js`,
    algolia_js: `https://registry.npmmirror.com/hexo-theme-butterfly/${version}/files/source/js/search/algolia.min.js`,
  }

  const internalSrcLocal = {
    main_css: '/css/index.css',
    main: '/js/main.js',
    utils: '/js/utils.js',
    translate: '/js/tw_cn.js',
    local_search: '/js/search/local-search.js',
    algolia_js: '/js/search/algolia.js',
  }

  const thirdPartySrcCDN = {
    algolia_search_v4: 'https://registry.npmmirror.com/algoliasearch/4/files/dist/algoliasearch-lite.umd.js',
    instantsearch_v4: 'https://registry.npmmirror.com/instantsearch.js/4/files/dist/instantsearch.production.min.js',
    pjax: 'https://registry.npmmirror.com/pjax/latest/files/pjax.min.js',
    gitalk: 'https://registry.npmmirror.com/gitalk/latest/files/dist/gitalk.min.js',
    gitalk_css: 'https://registry.npmmirror.com/gitalk/latest/files/dist/gitalk.css',
    blueimp_md5: 'https://registry.npmmirror.com/blueimp-md5/latest/files/js/md5.min.js',
    valine: 'https://registry.npmmirror.com/valine/latest/files/dist/Valine.min.js',
    disqusjs: 'https://registry.npmmirror.com/disqusjs/1/files/dist/disqus.js',
    disqusjs_css: 'https://registry.npmmirror.com/disqusjs/1/files/dist/disqusjs.css',
    twikoo: 'https://registry.npmmirror.com/twikoo/latest/files/dist/twikoo.all.min.js',
    waline_js: 'https://jsd.anjiurine.top/npm/@waline/client/dist/waline.js',
    waline_css: 'https://jsd.anjiurine.top/npm/@waline/client/dist/waline.css',
    sharejs: 'https://jsd.anjiurine.top/gh/overtrue/share.js@master/dist/js/social-share.min.js',
    sharejs_css: 'https://jsd.anjiurine.top/npm/social-share.js/dist/css/share.min.css',
    mathjax: 'https://jsd.anjiurine.top/npm/mathjax@3/es5/tex-mml-chtml.js',
    katex: 'https://jsd.anjiurine.top/npm/katex@latest/dist/katex.min.css',
    katex_copytex: 'https://jsd.anjiurine.top/npm/katex@latest/dist/contrib/copy-tex.min.js',
    katex_copytex_css: 'https://jsd.anjiurine.top/npm/katex@latest/dist/contrib/copy-tex.css',
    mermaid: 'https://jsd.anjiurine.top/npm/mermaid/dist/mermaid.min.js',
    canvas_ribbon: 'https://jsd.anjiurine.top/npm/butterfly-extsrc@1/dist/canvas-ribbon.min.js',
    canvas_fluttering_ribbon: 'https://jsd.anjiurine.top/npm/butterfly-extsrc@1/dist/canvas-fluttering-ribbon.min.js',
    canvas_nest: 'https://jsd.anjiurine.top/npm/butterfly-extsrc@1/dist/canvas-nest.min.js',
    activate_power_mode: 'https://jsd.anjiurine.top/npm/butterfly-extsrc@1/dist/activate-power-mode.min.js',
    fireworks: 'https://jsd.anjiurine.top/npm/butterfly-extsrc@1/dist/fireworks.min.js',
    click_heart: 'https://jsd.anjiurine.top/npm/butterfly-extsrc@1/dist/click-heart.min.js',
    ClickShowText: 'https://jsd.anjiurine.top/npm/butterfly-extsrc@1/dist/click-show-text.min.js',
    lazyload: 'https://registry.npmmirror.com/vanilla-lazyload/latest/files/dist/lazyload.iife.min.js',
    instantpage: 'https://registry.npmmirror.com/instant.page/5/files/instantpage.min.js',
    typed: 'https://registry.npmmirror.com/typed.js/latest/files/dist/typed.umd.js',
    pangu: 'https://jsd.anjiurine.top/npm/pangu@4/dist/browser/pangu.min.js',
    fancybox_css_v4: 'https://jsd.anjiurine.top/npm/@fancyapps/ui/dist/fancybox.css',
    fancybox_v4: 'https://jsd.anjiurine.top/npm/@fancyapps/ui/dist/fancybox.umd.js',
    medium_zoom: 'https://jsd.anjiurine.top/npm/medium-zoom/dist/medium-zoom.min.js',
    snackbar_css: 'https://jsd.anjiurine.top/npm/node-snackbar/dist/snackbar.min.css',
    snackbar: 'https://jsd.anjiurine.top/npm/node-snackbar/dist/snackbar.min.js',
    fontawesomeV6: 'https://registry.npmmirror.com/@fortawesome/fontawesome-free/6/files/css/all.min.css',
    flickr_justified_gallery_js: 'https://jsd.anjiurine.top/npm/flickr-justified-gallery@2/dist/fjGallery.min.js',
    flickr_justified_gallery_css: 'https://jsd.anjiurine.top/npm/flickr-justified-gallery@2/dist/fjGallery.min.css',
    aplayer_css: 'https://jsd.anjiurine.top/npm/aplayer@1/dist/APlayer.min.css',
    aplayer_js: 'https://jsd.anjiurine.top/npm/aplayer@1/dist/APlayer.min.js',
    meting_js: 'https://jsd.anjiurine.top/gh/metowolf/MetingJS@1.2/dist/Meting.min.js',
    prismjs_js: 'https://jsd.anjiurine.top/npm/prismjs@1/prism.min.js',
    prismjs_lineNumber_js: 'https://jsd.anjiurine.top/npm/prismjs@1/plugins/line-numbers/prism-line-numbers.min.js',
    prismjs_autoloader: 'https://jsd.anjiurine.top/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js',
  }

  // delete null value
  const deleteNullValue = obj => {
    if (!obj) return
    for (const i in obj) {
      obj[i] === null && delete obj[i]
    }
    return obj
  }

  const defaultVal = (obj, choose) => {
    if (obj === 'internal') {
      if (choose === 'local') return internalSrcLocal
      else return internalSrcCDN
    }

    if (obj === 'external') {
      if (choose === 'local') {
        let result = {}
        try {
          const data = path.join(hexo.plugin_dir,'hexo-butterfly-extjs/plugins.yml')
          result = hexo.render.renderSync({ path: data, engine: 'yaml'})
          Object.keys(result).map(key => {
            result[key] = '/pluginsSrc/' + result[key]
          })
        } catch (e) {}
        return result
      } else return thirdPartySrcCDN
    }
  }

  themeConfig.asset = Object.assign(defaultVal('internal', CDN.internal_provider),
    defaultVal('external', CDN.third_party_provider), deleteNullValue(CDN.option))

  /**
   * Capitalize the first letter of comment name
   */

  let { use } = comments

  if (!use) return

  if (typeof use === 'string') {
    use = use.split(',')
  }

  const newArray = use.map(item => item.toLowerCase().replace(/\b[a-z]/g, s => s.toUpperCase()))

  themeConfig.comments.use = newArray
})
