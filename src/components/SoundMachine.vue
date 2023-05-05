<script setup>

import { usePlayerStore } from '../stores/player'
import { onMounted } from 'vue'
// write click handler function to play the files
const playerStore = usePlayerStore()
const playSound = (e) => {
    const name = e.target.name
    playerStore.setScreen(name)
    const audio = e.target.querySelector('audio')
    audio.crossOrigin = "anonymous";
    audio.load();
    audio.volume = playerStore.volume;
    audio.play()
}

onMounted(() => {
    console.log(`the component is now mounted.`)
    window.addEventListener('keydown', (e) => {
        const button = document.querySelector(`[keyCode="${e.key}"]`)
          if (button) {
            button.click()
          }
    });
})

</script>

<template>
    <div v-if="playerStore.bank === 'Heater Kit'" id="drum-machine" class="drum-machine">
        <button v-on:click="playSound" class="drumpad" name="Heater 1" id="Heater 1" keyCode="q">Q
            <audio src="./src/assets/samples/bank1/Heater-1.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Heater 2" id="Heater 2" keyCode="w">W
            <audio src="./src/assets/samples/bank1/Heater-2.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Heater 3" id="Heater 3" keyCode="e">E
            <audio src="./src/assets/samples/bank1/Heater-3.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Heater 4" id="Heater 4" keyCode="a">A
            <audio src="./src/assets/samples/bank1/Heater-4.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Clap" id="Clap" keyCode="s">S
            <audio src="./src/assets/samples/bank1/Heater-6.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Open HH" id="Open HH" keyCode="d">D
            <audio src="./src/assets/samples/bank1/Dsc_Oh.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Kick n' Hat" id="Kick n' Hat" keyCode="z">Z
            <audio src="./src/assets/samples/bank1/Kick_n_Hat.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Kick" id="Kick" keyCode="x">X
            <audio src="./src/assets/samples/bank1/RP4_KICK_1.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Closed HH" id="Closed HH" keyCode="c">C
            <audio src="./src/assets/samples/bank1/Cev_H2.mp3" className="clip" />
        </button>
    </div>
    <div v-if="playerStore.bank === 'Smooth Piano Kit'" id="drum-machine" class="drum-machine">
        <button v-on:click="playSound" class="drumpad" name="Chord 1" id="Chord 1" keyCode="q">Q
            <audio src="./src/assets/samples/bank2/Chord_1.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Chord 2" id="Chord 2" keyCode="w">W
            <audio src="./src/assets/samples/bank2/Chord_2.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Chord 3" id="Chord 3" keyCode="e">E
            <audio src="./src/assets/samples/bank2/Chord_3.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Shaker" id="Shaker" keyCode="a">A
            <audio src="./src/assets/samples/bank2/Give_us_a_light.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Open HH" id="Open HH" keyCode="s">S
            <audio src="./src/assets/samples/bank2/Dry_Ohh.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Closed HH" id="Closed HH" keyCode="d">D
            <audio src="./src/assets/samples/bank2/Bld_H1.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Punchy Kick" id="Punchy Kick" keyCode="z">Z
            <audio src="./src/assets/samples/bank2/punchy_kick_1.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Side Stick" id="Side Stick" keyCode="x">X
            <audio src="./src/assets/samples/bank2/side_stick_1.mp3" className="clip" />
        </button>
        <button v-on:click="playSound" class="drumpad" name="Snare" id="Snare" keyCode="c">C
            <audio src="./src/assets/samples/bank2/Brk_Snr.mp3" className="clip" />
        </button>
    </div>
    <div class="drumcontrols">
        <!-- <button class="drumpad" @click="">Bank</button> -->
        <div class="control py-4">
            <p>Bank</p>
            <div class="select" @click="playerStore.changeBank()">
                <div class="inner" :style="playerStore.float"></div>
            </div>
        </div>
        <div class="w-full text-center py-8">
            <p>Volume</p>
            <input class="w-[200px]" type="range" min="0" max="1" step="0.1" v-model="volume" @input="playerStore.changeVolume(volume)"
                @change="playerStore.changeVolume(volume)">
        </div>
        <div class="flex justify-center w-full py-4">
            <div id="display" class="screen">{{ playerStore.screen }}</div>
        </div>

    </div>
</template>


<style scoped>
.drum-machine {
    width: 450px;
    height: 450px;
    align-items: center;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    box-sizing: border-box;
    margin: 0;
    justify-items: center;
}

.drumcontrols {
    width: 350px;
    height: 450px;
}

.drumpad {
    width: 120px;
    height: 120px;
    font-size: larger;
    box-sizing: border-box;


    border: 3px solid;
    background: #bababa;
    flex-grow: 1;
    box-shadow: #ededed 0px 4px 0px inset, #7a7a7a 0px -4px 0px inset, #adadad 0px 3px 0px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #444;

}

.screen {
    /* position: absolute; */
    height: 4em;
    width: 20em;
    background: #bfeecc;
    left: 58.8%;
    top: 37%;
    box-shadow: #4a505a 0px 0px 0px 5px inset, #616976 0px 0px 0px 15px inset, 0px 4px lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.control {
    width: 100%;
    margin: auto;
    float: left;
    text-align: center;

}

.select {
    margin: auto;
    border: 1px solid black;
    width: 50px;
    height: 20px;
    padding: 1px;
    background-color: black;
}

.inner {
    width: 23px;
    height: 19px;
    background: blue;
    border: 1px solid black;
    box-sizing: border-box;
    cursor: pointer;
}</style>