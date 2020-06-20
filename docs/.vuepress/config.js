const { resolve } = require("path");
const r = path => resolve(__dirname, path);
module.exports = {
  title: "驯兽师联盟文档库",
  description: "Tamers Union Docs",
  theme: 'antdocs',
  markdown: {
    lineNumbers: true,
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo_tamersunion_v1.png"
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@img": r("img")
      }
    }
  },
  plugins: ["@vuepress/back-to-top"],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "驯兽师联盟",
    }
  },
  themeConfig: {
    logo: "/logo_tamersunion_v1.png",
    displayAllHeaders: true,
    sidebar: "auto",
    nextLinks: true,
    prevLinks: true,
    lastUpdated: "最后更新",
    sidebar: {
      "/specification/":["", "recording", "translation", "timeline", "stylesheet", "fileformat"],
      "/archive-guide/":["", "login", "files", "text", "office", "mutimedia", "sharing", "settings", "apps", "upload"],
      "/software-guide/":["", "asscode", "smartcutter", "utorrent", "qbittorrent", "certificate"],
      "/terms/": ["", "copyright", "contents", "repost", "tracker", "privacy"],
      "/about/": ["", "websites", "media", "contact"],
    },
    editLinkText: "编辑此页",
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    nav: [
      {
        text: "制作规范",
        link: "/specification/",
      },
      {
        text: "档案库指南",
        link: "/archive-guide/",
      },
      {
        text: "软件指南",
        link: "/software-guide/",
      },
      {
        text: "协议条款",
        link: "/terms/",
      },
      {
        text: "关于我们",
        link: "/about/",
      }
    ],
    docsRepo: "tamersunion/tamersunion.github.io",
    docsBranch: "source",
    docsDir: "docs",
    editLinks: true,
  }
};
