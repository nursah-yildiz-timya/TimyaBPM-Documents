import comp from "/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/getting-started.html\",\"title\":\"Başlangıç\",\"lang\":\"tr\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. İş Başlat\",\"slug\":\"_1-is-baslat\",\"link\":\"#_1-is-baslat\",\"children\":[]},{\"level\":2,\"title\":\"2. Yapılacak İşler\",\"slug\":\"_2-yapılacak-isler\",\"link\":\"#_2-yapılacak-isler\",\"children\":[]},{\"level\":2,\"title\":\"3. Takip Edilen İşler\",\"slug\":\"_3-takip-edilen-isler\",\"link\":\"#_3-takip-edilen-isler\",\"children\":[]},{\"level\":2,\"title\":\"4. Raporlar\",\"slug\":\"_4-raporlar\",\"link\":\"#_4-raporlar\",\"children\":[]},{\"level\":2,\"title\":\"5. Formlar\",\"slug\":\"_5-formlar\",\"link\":\"#_5-formlar\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"getting-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
