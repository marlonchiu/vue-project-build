import Vue from 'vue'
import {
  Tabbar,
  TabbarItem,
  Qrcode,
  Divider,
  Grid,
  GridItem,
  DatetimeView,
  XButton,
  Panel,
  Cell,
  Group,
  XInput,
  XTextarea,
  Toast,
  ToastPlugin
} from 'vux'

Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('qrcode', Qrcode)
Vue.component('divider', Divider)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('datetime-view', DatetimeView)
Vue.component('x-button', XButton)
Vue.component('panel', Panel)
Vue.component('cell', Cell)
Vue.component('group', Group)
Vue.component('x-input', XInput)
Vue.component('x-textarea', XTextarea)
Vue.component('toast', Toast)
Vue.use(ToastPlugin, { position: 'top' })
