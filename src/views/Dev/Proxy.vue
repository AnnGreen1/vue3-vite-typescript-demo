<template>
    <div>
        <div class="common-style">
            {{ date }}
        </div>
        <div class="common-style">
            {{ date2 }}
        </div>
        <div class="common-style">
            {{ set }}
        </div>
        <div class="common-style">
            <button @click="set.add(6)">Set add</button>
        </div>
        <div class="common-style">
            {{ array }}
        </div>
        <div class="common-style">
            <button @click="array.push(6)">Array push</button>
            <button @click="array[5]=7">array[5]=7</button>
            <button @click="array.pop()">Array pop</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const date = ref()
const date2 = ref()

setInterval(() => {
    let d = new Date();
    date.value = d.toLocaleString();
    date2.value = d;
    console.log(typeof date);
    console.log(typeof date.value);
    
}, 1000);

const set = ref(new Set([1, 2, 3, 4, 5]))

const array = ref([1,2,3,4,5])
</script>