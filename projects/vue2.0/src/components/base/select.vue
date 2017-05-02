<template>
  <div class="select-wrap">
    <div class="select-default" @click.stop="toggleList">{{selections[nowIndex].label}}</div>
    <ul class="options" v-if="isExpand">
      <li v-for="(product,index) in selections" @click.stop="select(index)">{{ product.label }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: -1
        }]
      }
    },
    data () {
      return {
        nowIndex: 0,
        isExpand: false
      }
    },
    watch: {
      nowIndex () {
        this.$emit('on-change', ['select', this.nowIndex])
      }
    },
    methods: {
      toggleList () {
        this.isExpand = !this.isExpand
      },
      select (index) {
        this.nowIndex = index
        this.close()
      },
      close (e) {
        this.isExpand = false
      }
    },
    mounted () {
      document.addEventListener('click', this.close, false)
    },
    beforeDestroy () {
      document.removeEventListener('click', this.close, false)
    }
  }
</script>

<style scoped>
  .select-wrap {
    position: relative;
  }
  .select-default {
    position: relative;
    border-radius: 3px;
  }
  .select-default,.options {
    border: 1px solid #ddd;
  }
  .select-default,.options li {
    padding: 4px 25px 4px 10px;
    cursor: pointer;
  }
  .select-default:after {
    position: absolute;
    display: inline-block;
    top: 10px;
    right: 8px;
    content: '';
    border: 5px solid transparent;
    border-top:5px solid #ddd;
  }
  .options {
    border-top: none;
    position: absolute;
    top: 26px;
    z-index: 5;
    background-color: #fff;
  }
  .options li:hover {
    background-color: #eee;
  }
</style>
