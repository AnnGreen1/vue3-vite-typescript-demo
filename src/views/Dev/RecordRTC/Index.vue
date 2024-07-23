<template>
    <div>
        <video id="carmera-video"></video>
        <canvas id="carmera-canvas"></canvas>
    </div>
</template>

<script setup>
/**
 * 1、拍照
 * 2、录制视频
 * 3、录制音频
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    videoVisible: {
        type: Boolean,
        default: true
    },
    canvasVisible: {
        type: Boolean,
        default: true
    },
    width: {
        type: Number,
        default: 180
    },
    height: {
        type: Number,
        default: 120
    },
    usbState: {
        type: Boolean,
        default: false
    }
})

const stream = ref(null)

//访问用户媒体设备的兼容方法
function getUserMedia(constraints) {
    if (navigator?.mediaDevices?.getUserMedia) {
        //最新的标准API
        navigator?.mediaDevices?.getUserMedia(constraints).then(success).catch(error)
    } else if (navigator?.webkitGetUserMedia) {
        //webkit核心浏览器
        navigator?.webkitGetUserMedia(constraints, success, error)
    } else if (navigator?.mozGetUserMedia) {
        //firfox浏览器
        navigator?.mozGetUserMedia(constraints, success, error)
    } else if (navigator?.getUserMedia) {
        //旧版API
        navigator?.getUserMedia(constraints, success, error)
    }
}

//成功回调
function success(stream) {
    const video = document.getElementById('carmera-video')
    stream.value = stream
    video.srcObject = stream.value
    video.play()
}

//失败回调
function error(error) {
    console.log('usb失败', error)
}

// canvas获取base64图片
function drawCanvasImage() {
    const video = document.getElementById('carmera-video')
    const canvas = document.getElementById('carmera-canvas')
    canvas.width = props.width
    canvas.height = props.height

    const context = canvas.getContext('2d')
    context.drawImage(video, 0, 0, props.width, props.height, 0, 0, props.width, props.height)
    // 获取图片，数据格式为base64
    return canvas.toDataURL('image/png')
}

import RecordRTC from 'recordrtc'
// 录制视频
let videoRecorder
function startRecordVideo() {
    navigator.mediaDevices
        .getUserMedia({
            video: true,
            audio: true
        })
        .then(async function (stream) {
            videoRecorder = RecordRTC(stream, {
                type: 'video'
            })
            videoRecorder.startRecording()
        })
}

function stopRecordVideo() {
    videoRecorder.stopRecording(function () {
        let blob = videoRecorder.getBlob()
        console.log(blob)
        getSeekableBlob(blob, 'video/mp4')
    })
}

// 录制音频
let audioRecorder
function startRecordAudio() {
    navigator.mediaDevices
        .getUserMedia({
            audio: true
        })
        .then(async function (stream) {
            audioRecorder = RecordRTC(stream, {
                type: 'audio'
            })
            audioRecorder.startRecording()
        })
}

function stopRecordAudio() {
    audioRecorder.stopRecording(function () {
        let blob = audioRecorder.getBlob()
        console.log(blob)
        getSeekableBlob(blob, 'audio/mpeg')
    })
}

import * as EBML from 'ts-ebml'
import { Buffer } from 'buffer'
window.Buffer = Buffer // ts-ebml 最新版依赖了这个库，需要我们自己外部引入

/**
 * @param {Blob} file - File or Blob object.
 * @param {function} callback - Callback function.
 * @example
 * getSeekableBlob(blob or file, callback);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function getSeekableBlob(inputBlob, type) {
    // EBML.js copyrights goes to: https://github.com/legokichi/ts-ebml
    if (typeof EBML === 'undefined') {
        throw new Error('Please link: https://www.webrtc-experiment.com/EBML.js')
    }

    var reader = new EBML.Reader()
    var decoder = new EBML.Decoder()
    var tools = EBML.tools

    var fileReader = new FileReader()
    fileReader.onload = function (e) {
        var ebmlElms = decoder.decode(this.result)
        ebmlElms.forEach(function (element) {
            reader.read(element)
        })
        reader.stop()
        var refinedMetadataBuf = tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues)
        var body = this.result.slice(reader.metadataSize)
        var newBlob = new Blob([refinedMetadataBuf, body], {
            type: type
        })

        // 下载视频
        var link = document.createElement('a')
        link.href = URL.createObjectURL(newBlob) //这里可以修改格式 比如我修改为mp4
        link.download = `视频-${new Date().getTime()}.mp4` // 设置下载文件的文件名
        link.click()

        // callback(newBlob);
    }
    fileReader.readAsArrayBuffer(inputBlob)
}

onMounted(() => {
    getUserMedia({
        video: true,
        audio: true
    })
})

defineExpose({
    drawCanvasImage,
    startRecordVideo,
    stopRecordVideo,
    startRecordAudio,
    stopRecordAudio
})
</script>

<style lang="scss" scoped></style>