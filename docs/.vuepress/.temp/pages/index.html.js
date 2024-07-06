import comp from "/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Anasayfa - Timya/BPM\",\"lang\":\"tr\",\"frontmatter\":{\"home\":true,\"title\":\"Anasayfa - Timya/BPM\",\"heroImage\":\"timya_bpm.png\",\"heroImageDark\":\"timya_bpm-dark.png\",\"heroAlt\":\" \",\"heroHeight\":50,\"heroText\":null,\"heroDesc\":null,\"actions\":[{\"text\":\"Başla\",\"link\":\"/get-started.md\",\"type\":\"primary\"},{\"text\":\"Hakkımızda\",\"link\":\"https://timyabilisim.com.tr/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Kolay Kullanım\",\"details\":\"Kolay kurulum, modern tasarım ve kullanım kolaylığı özellikleriyle beklentilerinizi eksiksiz bir şekilde karşılayabilirsiniz.\"},{\"title\":\"Responsive Arayüzler\",\"details\":\"PC, Mobil ve tabletlerde ekran boyutuna göre şekillenen tasarımlar sunar.\"},{\"title\":\"Daha Az Kodlama\",\"details\":\"Sürükle bırak özellikleri ile herhangi bir geliştirme aracına gerek duymadan süreç, form ve raporlarınızı geliştirebilirsiniz.\"}],\"footer\":\"Her hakkı saklıdır. © 2024 Timya Bilişim\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")
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
