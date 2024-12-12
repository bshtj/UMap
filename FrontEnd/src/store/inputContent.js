import { defineStore } from "pinia";
import {ref} from 'vue';

export const useinputContentStore = defineStore('inputContent',()=>{
    const searchContent = ref(''); // 搜索框内容
    const isInputAnything = ref(false); //是否输入框中输入了一些内容
    return{
        searchContent,isInputAnything
    }
})