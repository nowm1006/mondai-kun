<template>

  <template v-if="phase==='TITLE'">
    <h1>問題くん</h1>
    <img class="button" src=".\assets\drive_folder_upload_black_24dp.svg" @click="loadFile">
  </template>

  <template v-else-if="phase==='QUESTION' || phase==='ANSWER'">
    <p>問題</p>
    <h1>{{word}}</h1>

    <p>答え</p>
    <h1 v-if="phase==='ANSWER'">{{answer}}</h1>
    <h1 v-else>???</h1>

  <img class="button" src="./assets\skip_next_black_24dp.svg" v-if="phase==='QUESTION'" @click="showAnswer">
  <img class="button" src=".\assets\thumb_up_black_24dp.svg" v-if="phase==='ANSWER'" @click="moveNext">
  <img class="button" src=".\assets\thumb_down_black_24dp.svg" v-if="phase==='ANSWER'" @click="moveNext">
  </template>

  <template v-else>
    <h1>おしまい</h1>
  </template>

</template>

<script>
import {ref} from 'vue'
import yaml from 'js-yaml'
export default {

  setup() {
    let wordList=[]
    const word = ref('')
    const answer = ref('')
    const phase = ref('TITLE')
    const loadFile = async () => {
      let FileSystemHandles
      [FileSystemHandles] = await window.showOpenFilePicker();
      let file = await FileSystemHandles.getFile()
      let text = await file.text()
      wordList = yaml.load(text)
      moveNext()
    }
    const moveNext = async () => {
      word.value = wordList.pop()
      if (word.value) {
        phase.value = 'QUESTION'
      } else {
        phase.value = 'END'
      }

      let u = new SpeechSynthesisUtterance();
      u.lang = 'en-US';
      u.text = word.value? word.value : 'Good Job!';
      speechSynthesis.speak(u);

      const response = await fetch(`https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec?text=${word.value}&source=en&target=ja`)
      const data = await response.json()
      answer.value = data.text  
    }
    const showAnswer = () => {
      phase.value = 'ANSWER'
    }
    return {word,phase,loadFile,moveNext,showAnswer,answer}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  width: 200px;
}
</style>
