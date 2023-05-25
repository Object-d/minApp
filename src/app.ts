import { createApp } from 'vue'
import setNutUi from './nutui'
import './app.scss'
import './assets/iconfont.css';
import request from './utils/request';

const App = createApp({
  onShow () {},
  mounted () {
    request.post(`evo-apigw/evo-oauth/1.0.0/oauth/extend/token`, {
      "grant_type": "client_credentials",
      "client_id": "ZLXN",
      "client_secret": "c9ee95de-951e-42c1-80b1-0a2990a423ea"
    })
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
setNutUi(App)
export default App;
