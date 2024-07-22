<template>
    <div>
        <h2>视频截取</h2>
        <el-button @click="startRecording">开始</el-button>
        <el-button @click="stopRecording">结束</el-button>
        <el-button @click="handleCapture">截图</el-button>
        <br />
        <h2>video playing</h2>
        <video ref="video" controls autoplay src="./test.mp4" muted />
        <div class="capture-wrap">
            <div>
                <h2>canvas</h2>
                <canvas ref="canvas" style="border: 1px solid" />
            </div>
            <div>
                <h2>result video</h2>
                <video ref="resultVideo" controls autoplay loop />
            </div>
            <!-- gif -->
            <div>
                <h1 />
                <img ref="resultImage" />
            </div>
        </div>
        <h1>这个quality参数的范围不知道是什么，现在存在的问题是，录制的Gif会丢帧</h1>
        <pre>
        this.recorder = RecordRTC(canvas, {
          type: 'gif',
          frameRate: 200,
          quality: 10,
          onGifRecordingStarted: function() {
            document.querySelector('h1').innerHTML = 'Gif 录制开始'
          },
          onGifPreview: function(gifURL) {
            image.src = gifURL
          }
        })
      </pre>
    </div>
</template>

<script>
import RecordRTC from 'recordrtc'
export default {
    data() {
        return {
            recorder: null,
            startTimeCutVideo: null,
            endTImeCutVideo: null
        }
    },
    methods: {
        blobToDataURL(blob, callback) {
            var reader = new FileReader()
            reader.onload = function (e) {
                callback(e.target.result)
            }
            reader.readAsDataURL(blob)
        },

        saveFile(data, filename) {
            var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
            save_link.href = data
            save_link.download = filename

            var event = document.createEvent('MouseEvents')
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            save_link.dispatchEvent(event)
        },

        upload(blob) {
            const formData = new FormData()
            formData.append('file', blob)
            for (const [a, b] of formData) {
                console.log(a, b)
            }
        },

        startRecording() {
            this.startTimeCutVideo = new Date().getTime()

            const canvas = this.$refs.canvas
            const image = this.$refs.resultImage
            this.recorder = RecordRTC(canvas, {
                type: 'gif',
                frameRate: 200,
                quality: 10,
                onGifRecordingStarted: function () {
                    document.querySelector('h1').innerHTML = 'Gif 录制开始'
                },
                onGifPreview: function (gifURL) {
                    image.src = gifURL
                }
            })
            this.recorder.startRecording() // 开始录制
            // 循环绘制canvas
            this.looper()
        },
        stopRecording() {
            this.recorder.stopRecording(this.stopRecordingCallback)
        },
        looper() {
            this.endTImeCutVideo = new Date().getTime()
            if ((this.endTImeCutVideo - this.startTimeCutVideo) / 1000 > 6) {
                this.stopRecording()
                return
            } else {
                this.drawMedia() // 刷新canvas
                requestAnimationFrame(this.looper)
            }
        },
        stopRecordingCallback() {
            console.log('数据', this.recorder.getBlob())

            // 输出格式为video时，用vedio标签惊醒预览
            // const video = this.$refs.resultVideo
            // video.src = video.srcObject = null
            // video.src = URL.createObjectURL(this.recorder.getBlob())

            document.querySelector('h1').innerHTML = 'Gif 录制完成.'
            const image = this.$refs.resultImage
            image.src = URL.createObjectURL(this.recorder.getBlob())

            // 保存到本地:mkv格式，视频只有3s不知道那地方出了问题
            // 1
            // this.blobToDataURL(this.recorder.getBlob(), dataUrl => {
            //   this.saveFile(dataUrl, 'capture.mp4')
            // })

            // 2
            // this.saveFile(video.src, 'capture.mp4')

            // 上传到服务器
            this.upload(this.recorder.getBlob())

            this.recorder.destroy()
            this.recorder = null
        },
        handleCapture() {
            console.log('handle capture')
            this.drawMedia()
        },
        drawMedia() {
            const canvas = this.$refs.canvas
            const ctx = canvas.getContext('2d')
            const video = this.$refs.video
            canvas.setAttribute('width', video.videoWidth)
            canvas.setAttribute('height', video.videoHeight)
            ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
        }
    }
}
</script>

<style scoped>
.capture-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>