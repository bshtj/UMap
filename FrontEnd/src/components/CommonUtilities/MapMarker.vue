<script setup name="MapMarker">

import { ref } from 'vue'
import { Location } from '@element-plus/icons-vue';
const showMapMarker = ref(false); // 是否显示常见问题
const openMapMarker = () => {
    showMapMarker.value = true;
}
</script>
<template>

    <el-space direction="horizontal">
        <el-button @click="openMapMarker" :icon="Location" circle size="large" />
        <p>地图标记</p>
    </el-space>
    <el-drawer v-model="showMapMarker" direction="ltr" size='20%' :modal="false">

    </el-drawer>
</template>

<style scoped></style>