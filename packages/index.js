import './scss/main.scss'

import Breadcrumb from './components/breadcrumb'
import {
    SdMenu,
    SdMenuItem,
    SdMenuItemGroup,
    SdSubmenu
} from './components/menu'

const components = {
  Breadcrumb,
  SdMenu,
  SdMenuItem,
  SdMenuItemGroup,
  SdSubmenu
}

const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach((key) => Vue.component(key, components[key]))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install
}
