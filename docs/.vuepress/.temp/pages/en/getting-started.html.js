import comp from "/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/en/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/en/getting-started.html\",\"title\":\"Start Up\",\"lang\":\"en\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. Start Process\",\"slug\":\"_1-start-process\",\"link\":\"#_1-start-process\",\"children\":[]},{\"level\":2,\"title\":\"2. To-Do Tasks\",\"slug\":\"_2-to-do-tasks\",\"link\":\"#_2-to-do-tasks\",\"children\":[]},{\"level\":2,\"title\":\"3. Followed Tasks\",\"slug\":\"_3-followed-tasks\",\"link\":\"#_3-followed-tasks\",\"children\":[]},{\"level\":2,\"title\":\"4. Reports\",\"slug\":\"_4-reports\",\"link\":\"#_4-reports\",\"children\":[]},{\"level\":2,\"title\":\"5. Forms\",\"slug\":\"_5-forms\",\"link\":\"#_5-forms\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"en/getting-started.md\"}")
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
