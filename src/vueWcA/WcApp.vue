<template>
  <div class="container">
    <div class="test">regist vue in wc</div>
    <div>wctext: {{ text.value }}</div>
    <div>wcmyName: {{ myName }}</div>
    <div>wcmyData: {{ myData.name }}, {{ myData.number }}</div>
    <button @click="emitFnA">emitAClick</button>
    <input type="text" @input="emitFnB($event)">
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  myData: {
    type: Object,
    default: () => ({
      name: 'name',
      number: 0
    })
  }
})
const myName = computed(() => props.myData.name)

const emits = defineEmits(['emitA', 'emitB'])

const emitFnA = () => {
  console.log(props.myData)
  emits('emitA', 'emitA ok')
}

const emitFnB = (e) => {
  emits('emitB', e)
}
</script>