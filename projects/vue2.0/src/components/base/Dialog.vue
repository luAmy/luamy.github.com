<template>
  <div>
    <div class="dialog-bg" v-if="isShow" @click="close"></div>
    <transition name="drop">
      <div class="dialog-wrap" v-if="isShow">
        <div class="close" @click="close">x</div>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['isShow'],
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .drop-enter-active {
    transition:all .5s ease;
  }
  .drop-leave-active {
    transition:all .3s ease;
  }
  .drop-enter,.drop-leave-active {
    transform: translateY(-500px);
    opacity: 0.2;
  }
  .dialog-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;

    background-color: rgba(0,0,0,0.3);
  }
  .dialog-wrap {
    position: fixed;
    top: 25%;
    left: 50%;
    margin-left: -25%;
    width: 50%;
    min-height: 100px;
    padding: 10px;

    background-color: #fff;
    z-index: 1000;
  }
  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #ddd;
    cursor: pointer;
  }
</style>
