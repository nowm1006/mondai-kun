<template>

  <template v-if="phase==='TITLE'">
    <h1 class="title">問題くん</h1>
    <!--
    <img class="button" src=".\assets\drive_folder_upload_black_24dp.svg" @click="loadFile">
    -->
    <label for="file-selector"><img class="button" src=".\assets\drive_folder_upload_black_24dp.svg" ></label>
    <input id="file-selector" type="file" accept="*.yaml" @change="fileSelect">
  </template>

  <template v-else-if="phase==='QUESTION' || phase==='ANSWER'">
    <h2>問題</h2>
    <h1>{{word}}</h1>

    <h2>答え</h2>
    <h1 v-if="phase==='ANSWER'">{{answer}}</h1>
    <h1 v-else>???</h1>

  <img class="button" src="./assets\skip_next_black_24dp.svg" v-if="phase==='QUESTION'" @click="showAnswer">
  <div class="thumbs">
  <img class="button" src=".\assets\thumb_up_black_24dp.svg" v-if="phase==='ANSWER'" @click="moveNext">
  <img class="button" src=".\assets\thumb_down_black_24dp.svg" v-if="phase==='ANSWER'" @click="moveNext">
  </div>
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
//    const loadFile = async () => {
      //let FileSystemHandles
      //[FileSystemHandles] = await window.showOpenFilePicker();
      //let file = await FileSystemHandles.getFile()
      //let text = await file.text()
      //wordList = yaml.load(text)
      //moveNext()
    //}
    const fileSelect = async () => {
      const input = document.getElementById('file-selector')
      const file = input.files[0]
      const text = await file.text()
      wordList = yaml.load(text)
      moveNext()
    }
    const moveNext = async () => {
      word.value = wordList.pop()

      let u = new SpeechSynthesisUtterance();
      u.lang = 'en-US';
      u.text = word.value? word.value : 'Good Job!';
      speechSynthesis.speak(u);

      if (word.value) {
        phase.value = 'QUESTION'
      } else {
        phase.value = 'END'
        return
      }

      const response = await fetch(`https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec?text=${word.value}&source=en&target=ja`)
      const data = await response.json()
      answer.value = data.text  

      await sleep(1)

      showAnswer()
    }
    const showAnswer = () => {
      phase.value = 'ANSWER'
    }
    return {word,phase,fileSelect,moveNext,showAnswer,answer}
  }
}

function sleep(sec) {
  return new Promise(resolve => setTimeout(resolve, sec*1000));
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
  display: flex;
  flex-direction: column;
}
.button {
  width: 200px;
}
#file-selector {
  display: none;
}
.title {
  font-size: 4rem;
}
.thumbs {
  display: flex;
}
div.thumbs img {
  flex: 1;
}
</style>
