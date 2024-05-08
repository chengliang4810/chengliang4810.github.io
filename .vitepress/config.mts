import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "LayJava",
    base: '/',
    lang: "zh-CN",
    locales: {
        root: { label: "简体中文", lang: "zh-CN" },
    },
    description: "layjava、layjava-admin、layjava管理系统",
    head: [
        ['link', {href: '/favicon.ico'}],
        ['meta', {name: 'baidu-site-verification', content: 'codeva-e2PPznBxmF'}],
    ],
    ignoreDeadLinks: true, // 忽略死链接
    lastUpdated: true,
    sitemap: {
        hostname: 'https://docs.layjava.com'
    },
    metaChunk: true, // 当设置为 true 时，将页面元数据提取到单独的 JavaScript 块中，而不是内联在初始 HTML 中。这使每个页面的 HTML 负载更小，并使页面元数据可缓存，从而当站点中有很多页面时可以减少服务器带宽。
    markdown: {
        lineNumbers: true, // 代码块显示行号
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true
        }
    },
    themeConfig: {
        externalLinkIcon: true, // 是否在 markdown 中的外部链接旁显示外部链接图标。
        outline: {
            label: '文章导航'
        },
        logo: '/favicon.ico',
        // 搜索功能
        search: {
            provider: 'local'
            // provider: 'algolia',
            // options: {
            //     appId: '31QO4R75GT',
            //     apiKey: '5468a95d7327ac1fce9a242a809c576e',
            //     indexName: 'docs'
            // }
        },
        // 文档最后的更改时间
        lastUpdated: {
            text: '更新时间',
            formatOptions: {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
            }
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '🔥首页', link: '/'},
            {
                text: '🍪指南',
                items: [
                    {
                        text: '介绍', items: [
                            {text: '前言', link: '/guide/'},
                        ]
                    },
                    {
                        text: '使用', items: [
                            {text: '前言', link: '/guide/use'},
                        ]
                    },
                ]
            },
            {text: '🛞Solon', link: '/solon/'},
            {text: '🧩uni-app', link: '/uni-app/'},
            {text: '🦁团队', link: '/team/'}
        ],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        darkModeSwitchLabel: '浅/深色模式切换',
        darkModeSwitchTitle: '切换到深色模式',
        lightModeSwitchTitle: '切换到浅色模式',
        sidebar: {
            // 当用户位于 `guide` 目录时，会显示此侧边栏
            '/solon/': [
                {
                    text: 'Solon',
                    items: [
                        {text: '简介', link: '/solon/'},
                        {text: '集成MybatisPlusGenerator', link: '/solon/mybatis-plus-generator'},
                        {text: '无需注解生成接口文档', link: '/solon/openapi2-javadoc'},
                        {text: 'docs文档辅助插件', link: '/solon/doc-docket'},
                    ]
                }
            ],
            '/uni-app/': [
                {
                    text: 'uni-app',
                    items: [
                        {text: '简介', link: '/uni-app/'},
                    ]
                }
            ],
        },

        footer: {
            message: '打造适合打工人的Admin框架.',
            copyright: 'Copyright © 2024 LayJava'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/chengliang4810/chengliang4810.github.io'},
            {
                icon: {svg: '<svg t="1710470546803" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1442" width="200" height="200"><path d="M512 512m-494.933333 0a494.933333 494.933333 0 1 0 989.866666 0 494.933333 494.933333 0 1 0-989.866666 0Z" fill="#C71D23" p-id="1443"></path><path d="M762.538667 457.045333h-281.088a24.4736 24.4736 0 0 0-24.439467 24.405334v61.098666c-0.034133 13.5168 10.922667 24.439467 24.405333 24.439467h171.1104c13.5168 0 24.439467 10.922667 24.439467 24.439467v12.219733a73.3184 73.3184 0 0 1-73.3184 73.3184h-232.209067a24.439467 24.439467 0 0 1-24.439466-24.439467v-232.174933a73.3184 73.3184 0 0 1 73.3184-73.3184h342.152533c13.482667 0 24.405333-10.922667 24.439467-24.439467l0.034133-61.098666a24.405333 24.405333 0 0 0-24.405333-24.439467H420.352a183.296 183.296 0 0 0-183.296 183.296V762.538667c0 13.482667 10.922667 24.439467 24.405333 24.439466h360.516267a164.9664 164.9664 0 0 0 165.000533-165.000533v-140.526933a24.439467 24.439467 0 0 0-24.439466-24.439467z" fill="#FFFFFF" p-id="1444"></path></svg>'},
                link: 'https://chengliang4810.gitee.io/'
            }
        ]

    }
})
