<template>
  <div class="container">
    <div class="test">vue create in litWcC</div>
    <div>{{ text }} no data</div>
    <button @click="emitFnA($event)">Test emit Click</button>
    <input type="text" @input="emitFnB($event)">
  </div>
</template>

<script setup>
// import {useStore} from 'vuex'
// const store = useStore()

const props = defineProps({
  myData: Object,
  text: String
})

const emits = defineEmits(['emitA', 'emitB'])

const emitFnA = (e) => {
  emits('emitA', e)
}

const emitFnB = (e) => {
  emits('emitB', e)
}
</script>