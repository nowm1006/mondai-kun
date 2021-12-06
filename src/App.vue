<template>

  <template v-if="phase==='TITLE'">
    <h1 class="title main-word">問題くん</h1>
    <label class="sub" for="file-selector"><img class="button" src=".\assets\drive_folder_upload_black_24dp.svg" ></label>
    <input id="file-selector" type="file" accept="*.yaml" @change="fileSelect">
  </template>

  <template v-else-if="phase==='QUESTION' || phase==='ANSWER'">
    <h1 class="word main-word">{{word}}</h1>

    <h1 class="title sub" v-if="phase==='ANSWER'">{{answer}}</h1>

    <div class="thumbs bottom">
      <img class="button" src=".\assets\thumb_up_black_24dp.svg" v-if="phase==='ANSWER'" @click="moveNext">
      <img class="button" src=".\assets\thumb_down_black_24dp.svg" v-if="phase==='ANSWER'" @click="noGood">
    </div>
  </template>

  <template v-else>
    <h1 class="title">おしまい</h1>
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
    const fileSelect = async () => {
      const input = document.getElementById('file-selector')
      const file = input.files[0]
      const text = await file.text()
      wordList = yaml.load(text)
      moveNext()
    }
    const noGood = () => {
      wordList = [word.value, ...wordList]
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
    return {word,phase,fileSelect,noGood,moveNext,showAnswer,answer}
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
  padding-top: 60px;
  padding-bottom: 60px;
  height: calc(100vh - 140px);
  display: grid;
  grid-template:
    "main-word" 3fr
    "sub"  1fr
    "bottom" 200px /
    auto;
  align-items: center;
}
.main-word {
  grid-area: main-word;
}
.sub {
  grid-area: sub;
}
.bottom {
  grid-area: bottom;
}
.button {
  width: 200px;
  height: 200px;
}
#file-selector {
  display: none;
}
.title {
  font-size: 4rem;
}
.label {
  font-size: 2rem;
}
.word {
  font-size: 6rem;
}
.thumbs {
  display: flex;
  justify-content: center;
}
div.thumbs img {
  flex: 0;
}
</style>
