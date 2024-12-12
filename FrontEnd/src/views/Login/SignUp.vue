<script setup name="SignUp">
import axios from 'axios';
import { ref } from 'vue'
import { ElMessage } from 'element-plus';


const username = ref('');
const password = ref('');
const confirmPassword = ref(''); // 新增确认密码字段

const register = async () => {
    if (password.value !== confirmPassword.value) {
        ElMessage.error('两次输入的密码不一致');
        return;
    }

    try {
        const response = await axios.post('/api/register', { // 修改为注册API
            username: username.value,
            password: password.value,
        });
        console.log('注册成功:', response.data);
        ElMessage.success('注册成功，请登录'); // 提示用户注册成功
        // 在这里可以执行其他操作，比如重定向到登录页
    } catch (error) {
        ElMessage.error('注册失败，请检查用户名或密码'); // 使用 Element Plus 的弹窗
        console.error('注册错误:', error);
    }
};


// 如果有账号，就登录
const emit = defineEmits(['change-LOS']);
</script>

<template>
    <div class="header">Sign Up</div>
    <form @submit.prevent="register" class="form-wrapper">
        <input type="text" v-model="username" name="username" placeholder="Username" class="input-item" required>
        <input type="password" v-model="password" name="password" placeholder="Password" class="input-item" required>
        <input type="password" v-model="confirmPassword" name="confirm-password" placeholder="Confirm Password"
            class="input-item" required> <!-- 新增确认密码输入 -->
        <button type="submit" class="btn">Sign Up</button> <!-- 修改按钮文本 -->
    </form>
    <div class="msg">
        Already have an account?
        <a @click="emit('change-LOS')">Login</a> <!-- 更新为登录链接 -->
    </div>
</template>

<style scoped>
@import url("../../assets/login.css");
</style>
