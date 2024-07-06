import comp from "/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"Home Page - Timya/BPM\",\"lang\":\"en\",\"frontmatter\":{\"home\":true,\"title\":\"Home Page - Timya/BPM\",\"heroImage\":\"timya_bpm.png\",\"heroImageDark\":\"timya_bpm-dark.png\",\"heroAlt\":\"Timya/BPM Logo\",\"heroHeight\":50,\"heroText\":null,\"heroDesc\":null,\"actions\":[{\"text\":\"Start\",\"link\":\"/get-started.md\",\"type\":\"primary\"},{\"text\":\"About Us\",\"link\":\"https://timyabilisim.com.tr/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Easy to Use\",\"details\":\"Fulfill  expectations with easy installation, modern design, and user-friendly features.\"},{\"title\":\"Responsive Interfaces\",\"details\":\"Designs that adapt to screen sizes on PC, mobile, and tablets.\"},{\"title\":\"Less Coding\",\"details\":\"Develop processes, forms, and reports without the need for any development tools using drag-and-drop features.\"}],\"footer\":\"All rights reserved. © 2024 Timya Bilişim\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"en/README.md\"}")
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
