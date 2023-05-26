<template>
  <div class="loader" :style="{ background: background }">
    <div>
      <div class="icon-loading"></div>
      <label class="text-loading">{{ text }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
export default defineComponent({
  props: {
    text: {
      type: String,
      default: "加载中...",
    },
    background: {
      type: String,
    },
  },
});
</script>

<style>
.loader{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.2);
}
.loader>div{
  width: 130px;
  height: 130px;
  border-radius: 15px;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loader .text-loading{
  color: #fff;
}
</style>
