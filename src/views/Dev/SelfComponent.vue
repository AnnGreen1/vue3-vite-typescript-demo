<template>
    <div>
        <Loader v-if="!loading" text="真的正在加载中text" background="pink"></Loader>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Loader from './components/Loader.vue'

const loading = ref(false)

setTimeout(()=>{
    loading.value = true;
    alert('加载完成！')
    },5000)
</script>