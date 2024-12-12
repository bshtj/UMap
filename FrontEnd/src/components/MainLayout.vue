<script setup name="MainLayout">
// import "../assets/drawer_lr.css";
// import "../assets/iconfont.css";
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import LoginOrSignup from '@/views/Login/LoginOrSignup.vue';
import { useinputContentStore } from '@/store/inputContent';
import { storeToRefs } from 'pinia';
const showDrawer = ref(true); // 默认展开drawer
const toggleDrawer = () => {
    showDrawer.value = !showDrawer.value;
}

const inputContentStore = useinputContentStore();
const { searchContent, isInputAnything } = storeToRefs(inputContentStore);



const router = useRouter();

const showSearchContent = () => {
    if (router.path != '/input') {
        router.push('/input');
    }

}

inputContentStore.$subscribe((mutate, state) => {
    if (state.searchContent && state.searchContent.trim() !== "") {
        isInputAnything.value = true;
    }
    else {
        isInputAnything.value = false;
    }
})


//默认加载utils页面
onMounted(() => {
    router.replace('/utils')
})
</script>

<template>
    <!-- <div class="content">
        <div class="menu-box">
            <input type="checkbox" id="menu-btn">
            <label for="menu-btn"><i class="iconfont icon-yemianfanhui"></i></label>
            <div class="menu">

            </div>
        </div>
    </div> -->

    <el-drawer v-model="showDrawer" direction="ltr" size='20%' :modal="false" :show-close="false" :with-header="false">
        <el-space :fill="true" direction="vertical" style="width: 100%" :fill-ratio="100" size="large">
            <!-- 搜索框和头像 -->
            <div class="input-avatar-container">
                <el-input id="input" @click="showSearchContent" v-model="searchContent" style="width: 80%" size="large"
                    placeholder="Please Input" :prefix-icon="Search" />
                <LoginOrSignup />
            </div>
            <router-view />
        </el-space>
        <el-button class="toggle-left-button" @click="toggleDrawer" circle>&lt;</el-button>

    </el-drawer>


    <el-button class="toggle-right-button " @click="toggleDrawer" circle>&gt;</el-button>

</template>



<style scoped>
.toggle-left-button {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    z-index: 1000;
    font-size: 24px;
    /* 调整箭头大小 */
    background: none;
    border: none;
    cursor: pointer;

}

.toggle-right-button {
    position: fixed;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    z-index: 1000;
    font-size: 24px;
    /* 调整箭头大小 */
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;

}

.input-avatar-container {
    display: flex;
    align-items: center;
    /* 垂直居中对齐 */
    width: 100%;
    /* 容器宽度 */
}



.el-input {
    margin-right: 10px;
    /* 输入框和头像之间的间距 */
}
</style>
