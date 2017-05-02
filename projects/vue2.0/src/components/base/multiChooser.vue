<template>
  <div class="wrap">
    <span v-for="(version, index) in selections" class="ver-option" :class="{active: inArray(index)}" @click="choose(index)">
      {{version.label}}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      selections: {
        type: Array,
        default: {
          label: 'test',
          value: -1
        }
      }
    },
    data () {
      return {
        indexs: [0]
      }
    },
    methods: {
      choose (index) {
        let id = this.indexs.indexOf(index)
        if (id === -1) {
          this.indexs.push(index)
        } else if (id !== -1 && this.indexs.length > 1) {
          this.indexs.splice(id, 1)
        }
        this.$emit('on-change', ['multiChooser', this.indexs])
      },
      inArray (index) {
        if (this.indexs.indexOf(index) !== -1) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .ver-option {
    display: inline-block;
    padding: 5px 12px;
    margin-right: 4px;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
  }
  .ver-option.active {
    background-color: #4FC08D;
    color: #fff;
    border: 1px solid #4FC08D;
  }
</style>
