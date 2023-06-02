<template>
    <div>
        <div class="common-style">
            twicekey:{{ twicekey }}
        </div>
        <div class="common-style">
            key:{{ key }}
        </div>
        <div class="common-style">
            keyplus(2):{{ keyplus(2) }}
        </div>
        <div class="common-style">
           <button @click="key+=1">key++</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from "vue";

const key = ref(1)
const twicekey = computed(()=>{
    return key.value*2
})

const keyplus = computed((plus)=>{
    return key.value+plus
})
</script>