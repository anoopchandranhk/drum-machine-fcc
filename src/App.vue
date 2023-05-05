<script setup>
import SoundMachine from './components/SoundMachine.vue'
</script>

<template>
  <div class="machine-panel">
    <SoundMachine />
  </div>
</template>

<style scoped>
/* #app{
  text-align: center;
  margin: auto;
} */
.machine-panel{
  width: 800px;
  height: 600px;
  display: flex;
  background-color: #9CCCE2;
  align-items: center;
  border: 1px solid #3D657E;
}
</style>
