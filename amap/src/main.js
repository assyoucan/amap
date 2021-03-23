import Vue from 'vue'
import App from './App.vue'
// 引入vue-amap
import VueAMap from 'vue-amap'

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
    key: 'your amap key',
    plugin: [
        'AMap.Autocomplete',
        'AMap.PlaceSearch',
        'AMap.Scale',
        'AMap.OverView',
        'AMap.ToolBar',
        'AMap.MapType',
        'AMap.PolyEditor',
        'AMap.CircleEditor',
    ],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4',
})

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
