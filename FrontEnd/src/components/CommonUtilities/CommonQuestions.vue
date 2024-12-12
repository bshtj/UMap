<script setup name="CommonQuestions">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue';
const showCommonQuestions = ref(false); // 是否显示常见问题
const openCommonQuestions = () => {
    showCommonQuestions.value = true;
}</script>

<template>
    <el-space direction="horizontal">
        <el-button @click="openCommonQuestions" :icon="Search" circle size="large" />
        <p>常见问题</p>
    </el-space>
    <el-drawer v-model="showCommonQuestions" direction="ltr" size='20%' :modal="false">

    </el-drawer>
</template>
