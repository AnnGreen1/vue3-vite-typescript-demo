<template>
    <div ref="wrapper" class="w-full h-full bg-red flex flex-col items-center">
        <audio ref="audioEl" controls autoplay></audio>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const wrapper = ref<HTMLDivElement>();
const audioEl = ref();

async function checkCamera() {
    const navigator = window.navigator.mediaDevices;
    const devices = await navigator.enumerateDevices();
    if (devices) {
        const stream = await navigator.getUserMedia({
            audio: true,
        });
        console.log(stream);
        audioEl.value.srcObject = stream;

    }
}



onMounted(() => {
    checkCamera();
});
</script>
