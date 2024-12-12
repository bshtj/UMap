<script setup name="JiaDingMapContainer">
import { onMounted, onUnmounted } from "vue";
import { useSyncPlugins } from "@/hooks/useGaoDePlugins";
import AMapLoader from "@amap/amap-jsapi-loader";

const emit = defineEmits(); // 定义事件

let map = null;

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "84a5c415561ec7c4ee215e4a77fe15ec",
  };
  AMapLoader.load({
    key: "4ede47e3906dd5d8a2e45126b491b770", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.ToolBar", "AMap.Scale", "AMap.MouseTool"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        rotateEnable: true,//支持旋转
        pitchEnable: true,//支持倾斜
        viewMode: '2D', //默认使用 2D 模式
        zoom: 17, //地图级别
        center: [121.21416, 31.286012], //地图中心点
        resizeEnable: true,
      });
      // 加载同步插件(比例尺、工具条等)
      useSyncPlugins(map);

      // 地图加载成功后，向父组件传递信息，然后父组件才会加载侧边栏。
      emit('map-loaded', "地图加载成功");
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>
