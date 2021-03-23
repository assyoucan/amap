import Vue from 'vue'
import App from './App.vue'
// 引入vue-amap
import AMap from 'vue-amap'
Vue.use(AMap)

// 初始化vue-amap
AMap.initAMapApiLoader({
    // 申请的高德key
    key: 'YOUR_KEY',
    // 插件集合
    plugin: [
        'AMap.Autocomplete',
        //输入提示插件
        'AMap.PlaceSearch',
        //POI搜索插件
        'AMap.Scale',
        //右下角缩略图插件 比例尺
        'AMap.OverView',
        //地图鹰眼插件
        'AMap.ToolBar',
        //地图工具条
        'AMap.MapType',
        //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
        'AMap.PolyEditor',
        //编辑 折线多，边形
        'AMap.CircleEditor',
        //圆形编辑器插件
        'AMap.Geolocation',
        //定位控件，用来获取和展示用户主机所在的经纬度位置
    ],
})

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
