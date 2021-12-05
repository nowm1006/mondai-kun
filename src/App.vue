<template>
  <button @click="loadFile">問題ファイルをロード</button>

  <p>問題</p>
  <h1>{{word}}</h1>
  <p>答え</p>
  <h1 v-if="isShown">{{answer}}</h1>

  <button v-if="!isShown" @click="showAnswer">答えを確認</button>
  <button v-if="isShown" @click="moveNext">次へ</button>

</template>

<script>
import {ref} from 'vue'
import yaml from 'js-yaml'
export default {

  setup() {
    let wordList=[]
    const word = ref('')
    const answer = ref('')
    const isShown = ref(false)
    const loadFile = async () => {
      let FileSystemHandles
      [FileSystemHandles] = await window.showOpenFilePicker();
      let file = await FileSystemHandles.getFile()
      let text = await file.text()
      wordList = yaml.load(text)
      word.value = wordList.pop()
    }
    const moveNext = async () => {
      word.value = wordList.pop()
      isShown.value = false     

      const response = await fetch(`https://script.google.com/macros/s/AKfycbzZtvOvf14TaMdRIYzocRcf3mktzGgXvlFvyczo/exec?text=${word.value}&source=en&target=ja`)
      const data = await response.json()
      answer.value = data.text  
    }
    const showAnswer = () => {
      isShown.value = true
    }
    return {word,isShown,loadFile,moveNext,showAnswer,answer}
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
</style>
