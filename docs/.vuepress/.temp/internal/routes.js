export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Anasayfa - Timya/BPM"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Kurulum"} }],
  ["/getting-started.html", { loader: () => import(/* webpackChunkName: "getting-started.html" */"/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/getting-started.html.js"), meta: {"title":"Başlangıç"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Home Page - Timya/BPM"} }],
  ["/en/get-started.html", { loader: () => import(/* webpackChunkName: "en_get-started.html" */"/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/en/get-started.html.js"), meta: {"title":"SET UP"} }],
  ["/en/getting-started.html", { loader: () => import(/* webpackChunkName: "en_getting-started.html" */"/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/en/getting-started.html.js"), meta: {"title":"Start Up"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/uguryildiz/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
