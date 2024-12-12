// stores/user.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const username = ref('');
  const isLoggedIn = ref(false);

  const setUser = (user) => {
    username.value = user.username;
    isLoggedIn.value = true;
  };

  const logout = () => {
    username.value = '';
    isLoggedIn.value = false;
  };

  return {
    username,
    isLoggedIn,
    setUser,
    logout,
  };
});
