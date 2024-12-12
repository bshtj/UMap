<script setup name="CommmonUtilities">
import { ref, onMounted } from 'vue';

const buttonSpaceSize = ref(20); // 按钮间距
import CommonQuestions from '@/components/CommonUtilities/CommonQuestions.vue';
import MySchedule from '@/components/CommonUtilities/MySchedule.vue';
import MapMarker from '@/components/CommonUtilities/MapMarker.vue';
import DailyWeather from '@/components/CommonUtilities/DailyWeather.vue';


</script>

<template>
    <div>
        <p>常用功能</p>
        <el-card>
            <el-space wrap direction="vertical" :size="buttonSpaceSize">
                <!-- 常见问题 -->
                <CommonQuestions />
                <!-- 我的课表 -->
                <MySchedule />
                <!-- 地图标记 -->
                <MapMarker />
                <!-- 今日天气 -->
                <DailyWeather />
            </el-space>
        </el-card>


    </div>
</template>

<style scoped>
/* 在这里添加您的样式 */
</style>
