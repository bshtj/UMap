<script setup name="Myschedule">
import { ref } from 'vue'
import { School } from '@element-plus/icons-vue';
const showMyschedule = ref(false); // 是否显示常见问题
const openMyschedule = () => {
    showMyschedule.value = true;
}
</script>

<template>
    <el-space direction="horizontal">
        <el-button @click="openMyschedule" :icon="School" circle size="large" />
        <p>我的课表</p>
    </el-space>
    <el-drawer v-model="showMyschedule" direction="ltr" size='20%' :modal="false">

    </el-drawer>
</template>