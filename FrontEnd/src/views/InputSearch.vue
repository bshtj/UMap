<script setup name="InputSearch">
import PlaceHolder from '@/components/InputSearch/PlaceHolder.vue';
import { usePlaceSearch } from '@/hooks/useGaoDePlugins';
import { useinputContentStore } from '@/store/inputContent';
import { storeToRefs } from 'pinia';
import { reactive, watch } from 'vue';
import { ArrowLeft, KnifeFork, Apple, Printer, Basketball, Shop } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';


const inputContentStore = useinputContentStore();
const { searchContent, isInputAnything } = storeToRefs(inputContentStore);


// 返回按钮
const router = useRouter();
function clickBlack() {
    router.push('/utils');
}

const poisList = reactive({
    pois: []
});

watch(searchContent, async (value) => {
    // 获取包含 pois 的对象
    const result = await usePlaceSearch(value);

    // 检查 result 是否为空对象
    if (Object.keys(result).length === 0) {
        poisList.pois = []; // 如果 result 为空，设置 poisList.pois 为一个空数组
    } else {
        // 将 pois 更新为前十个元素
        poisList.pois = result.poiList.pois.slice(0, 10).map(place => ({
            id: place.id,
            name: place.name,
            type: place.type,
            location: place.location,
            address: place.address,
        }));
    }

    // console.log("~~~pois", poisList.pois);
});

</script>

<template>

    <el-space fill wrap direction="vertical">
        <!-- 固定的功能，无论是否有搜索都会出现 -->
        <el-space wrap direction="horizontal">
            <el-button type="primary" plain @click="clickBlack">返回</el-button>
            <el-button type="success" plain>历史</el-button>
        </el-space>

        <!-- 其他选项,当联想没有产生时出现 -->
        <el-space fill direction="vertical" v-if="!isInputAnything">
            <el-card shadow="never"> <el-button size="large" type="primary" :icon="KnifeFork" circle /> <span
                    style="margin-left: 10px;">餐饮</span></el-card>
            <el-card shadow="never"> <el-button size="large" type="success" :icon="Apple" circle /> <span
                    style="margin-left: 10px;">水果</span></el-card>
            <el-card shadow="never"> <el-button size="large" type="info" :icon="Printer" circle /> <span
                    style="margin-left: 10px;">打印</span></el-card>
            <el-card shadow="never"> <el-button size="large" type="warning" :icon="Basketball" circle /> <span
                    style="margin-left: 10px;">运动</span></el-card>
            <el-card shadow="never"> <el-button size="large" type="danger" :icon="Shop" circle /> <span
                    style="margin-left: 10px;">超市</span></el-card>
        </el-space>
        <!-- 联想内容 -->
        <el-space fill wrap direction="vertical" v-if="isInputAnything">
            <el-card shadow="hover" v-for="p in poisList.pois" :key="p.id">
                {{ p.name }}
            </el-card>
        </el-space>

    </el-space>

</template>
