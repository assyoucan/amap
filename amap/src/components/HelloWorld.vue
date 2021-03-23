<template>
    <div class="amp-demo">
        <el-amap vid="amap" :zoom="zoom" :zooms="zooms" :center="center" class="amap-demo" v-if="reFresh">
            <!-- 点坐标  -->
            <el-amap-marker v-for="item in markers" :position="item.position" :key="item.id"></el-amap-marker>
            <!-- <el-amap-bezier-curve :path="bezierCurvePath"></el-amap-bezier-curve> -->
            <el-amap-polygon
                :path="polygonSetting.path"
                :zIndex="polygonSetting.zIndex"
                :strokeColor="polygonSetting.strokeColor"
                :strokeWeight="polygonSetting.strokeWeight"
                :strokeOpacity="polygonSetting.strokeOpacity"
                :fillColor="polygonSetting.fillColor"
                :fillOpacity="polygonSetting.fillOpacity"
            ></el-amap-polygon>
            <el-amap-text>
                v-for="(item, index) in textMarkers" :position="item.position" :key="index" :text="item.text"
                ></el-amap-text
            >
            <el-amap-marker :position="circleSetting.center"></el-amap-marker>
            <el-amap-circle
                :center="circleSetting.center"
                :radius="circleSetting.radius"
                :fillColor="circleSetting.fillColor"
                :strokeColor="circleSetting.strokeColor"
                :strokeWeight="circleSetting.strokeWeight"
                :fillOpacity="circleSetting.fillOpacity"
            ></el-amap-circle>
        </el-amap>
    </div>
</template>

<script>
export default {
    name: 'demo',
    data() {
        return {
            reFresh: true,
            zoom: 12,
            // 地图的缩放大小，1是最大，能看到亚洲
            zooms: [5, 15],
            // 缩放区间
            center: [116.3972282409668, 39.90960456049752],
            // 经纬度，以这个为中心点
            markers: [
                { id: 'fgfd1', position: [116.3972282409668, 39.90960456049752], text: 'AAA' },
                { id: 'fgfd2', position: [116.4072282409668, 39.92960456049752], text: 'BBB' },
                { id: 'fgfd3', position: [116.382282409668, 39.94960456049752], text: 'CCC' },
            ],
            textMarkers: [
                { position: [116.3972282409668, 39.90960456049752], text: 'AAA' },
                { position: [116.4072282409668, 39.92960456049752], text: 'BBB' },
                { position: [116.382282409668, 39.94960456049752], text: 'CCC' },
            ],
            bezierCurvePath: [
                [116.3972282409668, 39.90960456049752],
                [116.4072282409668, 39.92960456049752],
            ],
            polygonSetting: {
                path: [
                    [116.3972282409668, 39.90960456049752],
                    [116.4072282409668, 39.92960456049752],
                    [116.382282409668, 39.94960456049752],
                    [116.342282409668, 39.91960456049752],
                ],
                strokeColor: '#FF33FF',
                strokeWeight: 6,
                strokeOpacity: 0.2,
                fillOpacity: 0.4,
                fillColor: '#1791fc',
                zIndex: 50,
            },
            circleSetting: {
                center: [116.39, 39.87], // 圆心位置
                radius: 2000, // 圆半径
                fillColor: '#1791fc', // 圆形填充颜色
                strokeColor: '#fff', // 描边颜色
                fillOpacity: 0.4,
                strokeWeight: 2, // 描边宽度
            },
        }
    },
    methods: {},
    mounted() {
        console.log('123')
    },
}
</script>
<style scoped>
.amap-demo {
    width: 100%;
    height: 800px;
}
/deep/ .amap-copyright,
/deep/ .amap-logo {
    display: none !important;
}
</style>
