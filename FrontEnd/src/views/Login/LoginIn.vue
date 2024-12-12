<script setup name="LoginIn">
import axios from 'axios';
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/store/user'; // 引入 Pinia Store



const userStore = useUserStore(); // 使用 Pinia Store
const username = ref('');
const password = ref('');

const login = async () => {
    try {
        const response = await axios.post('/api/login', {
            username: username.value,
            password: password.value,
        });
        console.log('登录成功:', response.data);
        userStore.setUser({ username: username.value }); // 更新用户状态
        // 在这里执行其他操作，比如重定向到主页
    } catch (error) {
        ElMessage.error('登录失败，请检查用户名和密码'); // 使用 Element Plus 的弹窗
        console.error('登录错误:', error);
    }
};

// 如果没有账号，先注册
const emit = defineEmits(['change-LOS']);

</script>


<template>

    <div class="header">Login</div>
    <form @submit.prevent="login" class="form-wrapper">
        <input type="text" v-model="username" name="username" placeholder="username" class="input-item">
        <input type="password" v-model="password" name="password" placeholder="password" class="input-item">
        <button type="submit" class="btn">Login</button>
    </form>
    <div class="msg">
        Don't have account?
        <a @click="emit('change-LOS')">Sign up</a>
    </div>
</template>

<style scoped>
@import url("../../assets/login.css");
</style>