<template>
  <div class="wrap">
    <span class="left" @click="sub">-</span>
    <input type="text" v-model="number"/>
    <span class="right" @click="add">+</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        number: 1,
        min: 1,
        max: 5
      }
    },
    watch: {
      number () {
        if (typeof this.number === 'string') {
          this.number = Number(this.number.replace(/\D/g, ''))
        } else if (this.number < this.min || this.number > this.max) {
          this.number = 1
        }
        this.$emit('on-change', ['counter', this.number])
      }
    },
    methods: {
      sub () {
        if (this.number <= this.min) {
          return
        }
        this.number--
      },
      add () {
        if (this.number >= this.max) {
          return
        }
        this.number++
      }
    }
  }
</script>

<style scoped>
  .wrap {
    border: 1px solid #ddd;
    height: 25px;
    line-height: 25px;
  }
  .left,.right {
    display: inline-block;
    width: 25px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
  }
  .left:hover,.right:hover {
    background-color: #4FC08D;
    color: #fff;
  }
  .left {
    border-right: 1px solid #ddd;
  }
  .right {
    border-left: 1px solid #ddd;
  }
  input {
    padding: 0;
    width: 20px;
    text-align: center;
    border: none;
    outline: none;
  }
</style>
