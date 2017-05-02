<template>
  <div class="wrap">
    <span v-for="(time, index) in selections" class="time-option" :class="{active: index === nowIndex}" @click="choose(index)">
      {{time.label}}
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
        nowIndex: 0
      }
    },
    methods: {
      choose (index) {
        this.nowIndex = index
        this.$emit('on-change', ['chooser', index])
        // console.log(this.selections[index].value)
      }
    }
  }
</script>

<style scoped>
  .time-option {
    display: inline-block;
    padding: 5px 12px;
    margin-right: 4px;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
  }
  .time-option.active {
    background-color: #4FC08D;
    color: #fff;
    border: 1px solid #4FC08D;
  }
</style>
