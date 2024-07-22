<template>
    <div>
        <button @click="stop">stop</button>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import RecordRTC from "recordrtc"
let recorder: any;
onMounted(() => {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(async function (stream) {
        recorder = RecordRTC(stream, {
            type: 'video'
        });
        recorder.startRecording();

        const sleep = (m: any) => new Promise(r => setTimeout(r, m));
        await sleep(3000);


    });
})

function stop() {
    recorder.stopRecording(function () {
        let blob = recorder.getBlob();
        console.log(blob);


        // 下载视频
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob); //这里可以修改格式 比如我修改为mp4
        link.download = `视频-${new Date().getTime()}.mp4`; // 设置下载文件的文件名
        link.click();
    });
}
</script>

<style scoped></style>