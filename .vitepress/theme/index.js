// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'

import './custom.css'
import './tailwind.css'
export default {
    extends: DefaultTheme,
    // 使用注入插槽的包装组件覆盖 Layout
    Layout: CustomLayout
}
