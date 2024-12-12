<script setup name="LoginOrSignup">
import { ref } from 'vue'
// import { RouterView, useRouter } from 'vue-router';
import LoginIn from './LoginIn.vue';
import SignUp from './SignUp.vue';



// const router = useRouter();

const showLoginInDialogVisible = ref(false);
const loginOrSign = ref(true);
const showLoginInDialog = () => {
    showLoginInDialogVisible.value = true;
    loginOrSign.value = true;
    // router.push('/utils');
}


const changeLOS = () => {
    loginOrSign.value = !loginOrSign.value;
}

</script>

<template>
    <!-- 用户头像 -->
    <div class="avatar-container">
        <el-avatar @click="showLoginInDialog">user</el-avatar>
    </div>

    <el-dialog v-model="showLoginInDialogVisible" width="30%" align-center>

        <!-- <router-view name="LoginIn"></router-view> -->
        <LoginIn v-if="loginOrSign" @change-LOS="changeLOS" />
        <SignUp v-else-if="!loginOrSign" @change-LOS="changeLOS" />

    </el-dialog>
</template>

<style scoped>
.avatar-container {
    flex-grow: 1;
    /* 使头像容器占据剩余空间 */
    display: flex;
    justify-content: center;
    /* 水平居中 */
}
</style>