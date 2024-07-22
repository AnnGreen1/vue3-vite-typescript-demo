<template>
    <div>
        <h1>HTML Element Recording using RecordRTC</h1>

        <br>

        <button id="btn-start-recording" :disabled="adisabled" @click="start">
            Start Recording
        </button>
        <button id="btn-stop-recording" :disabled="bdisabled" @click="stop">
            Stop Recording
        </button>

        <hr>
        <div style="display: none">
            <video id="preview-video" controls autoplay playsinline />
        </div>
        <div id="element-to-record" style="
          border: 5px solid gray;
          border-radius: 5px;
          padding: 20px;
          margin: 20px;
          width: 480px;
          height: 360px;
        ">
            <video ref="video" src="./test.mp4" style="height: 200px" autoplay muted />
        </div>

        <canvas id="background-canvas" width="500" height="300"
            style="position: absolute; top: -99999999px; left: -9999999999px" />
        <footer style="margin-top: 120px"><small id="send-message" /></footer>
    </div>
</template>

<script>

import RecordRTC from 'recordrtc'
export default {

    data() {
        return {
            video: null,
            videoStart: false,
            canvas2d: null,
            context: null,
            recorder: null,
            isRecordingStarted: false,
            elementToRecord: '',
            interval: '',
            adisabled: false,
            bdisabled: true,
            requestId: ''
        }
    },
    computed: {
        playerRef() {
            return this.$refs.video
        }
    },
    mounted() {
        this.elementToRecord = document.getElementById('element-to-record')
        this.canvas2d = document.getElementById('background-canvas')
        this.context = this.canvas2d.getContext('2d')
        const w = window.innerWidth
        const h = (window.innerWidth / 16) * 9
        this.canvas2d.width = w
        this.canvas2d.height = h
    },
    methods: {
        looper() {
            const that = this
            if (!this.isRecordingStarted) {
                return setTimeout(this.looper, 500)
            }
            that.context.clearRect(0, 0, that.canvas2d.width, that.canvas2d.height)
            that.context.drawImage(
                that.playerRef,
                0,
                0,
                that.canvas2d.width,
                that.canvas2d.height
            )
            that.context.drawImage(
                that.playerRef,
                0,
                0,
                that.canvas2d.width,
                that.canvas2d.height
            )
            if (that.isStoppedRecording) {
                return
            }
            requestAnimationFrame(that.looper)
        },
        start() {
            console.log(this.playerRef)
            this.isStoppedRecording = false
            this.isRecordingStarted = true

            this.recorder = RecordRTC(this.canvas2d, {
                type: 'canvas'
            })
            this.recorder.startRecording()
            this.adisabled = true
            this.bdisabled = false
            document.getElementById('btn-stop-recording').disabled = false
            this.looper()
        },
        stop() {
            const _this = this
            this.recorder.stopRecording(function () {
                _this.isRecordingStarted = false
                _this.isStoppedRecording = true

                _this.bdisabled = true
                _this.adisabled = true
                var blob = _this.recorder.getBlob()
                document.getElementById('preview-video').src = URL.createObjectURL(
                    blob
                )
                document.getElementById('preview-video').parentNode.style.display =
                    'block'
                _this.elementToRecord.style.display = 'none'

                // window.open(URL.createObjectURL(blob));
            })
        }
    }
}
</script>
<style scoped>
video {
    width: auto;
    max-width: 100%;
}
</style>