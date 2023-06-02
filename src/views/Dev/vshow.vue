<template>
    <div>
        <div class="common-style" v-show="show">
            TypescriptAxios.vue
        </div>
        <span v-show="show">span</span>
        <div class="common-style">
            <button @click="show=!show">show?</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";

const show = ref<boolean>(true)


</script>