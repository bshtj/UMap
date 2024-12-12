<script setup name="DailyWeather">
import { ref } from 'vue';
import { Sunny } from '@element-plus/icons-vue';

const showDailyWeather = ref(false); // 是否显示每日天气抽屉

const openDailyWeather = () => {
    showDailyWeather.value = true;
};

// 加载天气插件
const loadWeatherWidget = () => {
    // 检查是否已加载脚本，避免重复加载
    if (!document.getElementById('weather-widget-script')) {
        const script = document.createElement('script');
        script.src = "https://app3.weatherwidget.org/js/?id=ww_f42b6ef83c036";
        script.async = true;
        script.id = 'weather-widget-script'; // 为脚本添加一个 ID 以便查找
        document.body.appendChild(script);
    }
};

const onDrawerOpened = () => {
    loadWeatherWidget(); // 在抽屉打开时加载天气插件
};
</script>

<template>
    <el-space direction="horizontal">
        <el-button @click="openDailyWeather" :icon="Sunny" circle size="large" />
        <p>每日天气</p>
    </el-space>
    <el-dialog title="每日天气" v-model="showDailyWeather" @opened="onDrawerOpened">
        <div>
            <!-- 天气插件容器 -->
            <div id="ww_f42b6ef83c036" v='1.3' loc='id'
                a='{"t":"responsive","lang":"zh","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>
                <a href="https://weatherwidget.org/" id="ww_f42b6ef83c036_u" target="_blank">Weather widget</a>
            </div>
        </div>
    </el-dialog>
</template>

<style scoped>
/* 在这里添加您的样式 */
</style>
