<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeArrow',
})
</script>

<script lang="ts" setup></script>

<template>
  <div class="arrow">
    <i class="i_cursor"></i>
    <i class="i_bd"></i>
  </div>
</template>

<style lang="scss" scoped>
.arrow {
  position: absolute;
  display: block;
  background-size: auto 0.47rem;
  border-radius: 50%;
  z-index: 99;
  padding: 0.12rem 0 0;
  bottom: 1.6rem;
  height: 4.5rem;
  width: 4.5rem;
  text-align: center;
  cursor: pointer;
  animation: arrow_float 2s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: arrow_rotate 6s 0s linear infinite;
  }

  i {
    display: block;
    background-size: cover;
    margin: 0 auto 0.06rem;
  }

  .i_cursor {
    width: 1.8rem;
    height: 2.7rem;
    background: url(../../../assets/images/cursor.png) 50% no-repeat;
  }

  .i_bd {
    width: 1.2rem;
    height: 1rem;
    background: url(../../../assets/images/down.png) 50% no-repeat;
  }
}

@keyframes arrow_rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes arrow_float {
  0% {
    transform: translateY(-4px);
  }
  50% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(-4px);
  }
}
</style>
