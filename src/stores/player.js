import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const volume = ref(0.5)
  const playing = ref(false)
  const bank = ref('Heater Kit')
  const screen =  ref('')
  const float =  ref('float:left')

  const getVolume = computed(() => volume.value)
  const changeVolume = (value) => {
    // console.log(value, "value from changeVolume");
    volume.value = value
    // console.log(volume.value, "volume.value from changeVolume");
  }
  const setScreen = (value) => {
    screen.value = value
  }
   const changeBank = () => {
    bank.value = bank.value === 'Heater Kit' ? 'Smooth Piano Kit' : 'Heater Kit'
    screen.value = bank.value
    float.value = float.value === 'float:left' ? 'float:right' : 'float:left'

    console.log(bank.value, "bank.value from changeBank");
  }

  return { volume, bank, screen, playing, getVolume, changeVolume, changeBank, setScreen, float }
})
