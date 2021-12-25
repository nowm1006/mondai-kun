<template>

  <template v-if="phase==='TITLE'">
    <h1 class="title main-word">問題くん</h1>
    <div class="sub">
      <div class="flex-container">
        <button class="btn" @click="courseSelect">スタート</button>
        <label for="course-select" class="label">コースを選択</label>
        <select v-if="isLoadedCourse" id="course-select" v-model="selectedCourse" class="input">
          <option v-for="course in courses" :key="course"> {{course}}</option>
        </select>
        <p v-else> Loading... </p>
      </div>
    </div>
    <div class="bottom">
      <div class="flex-container">
        <label for="timer-input" class="label">待ち時間(秒) </label>
        <input id="timer-input"  type="text" v-model="timer" class="input">
      </div>
    </div>
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
    <div>
    <button class="sub btn" @click="phase='TITLE'">もう一度</button>
    </div>
  </template>

</template>

<script>
import {ref, onMounted} from 'vue'
export default {

  setup() {
    let wordList=[]
    const word = ref('')
    const answer = ref('')
    const phase = ref('TITLE')
    const timer = ref(3)
    const courses = ref([])
    const selectedCourse = ref('')
    const isLoadedCourse = ref(false)

    onMounted(async ()=>{
      const response = await fetch(`https://script.google.com/macros/s/AKfycbyvHc6mRDa0coil3Qj8b4m9Kql44UJp1VkocBf-6ZrkCH0_ex8FHiWSzq7d-r2mbFY5/exec`)
      const data = await response.json()
      courses.value = data
      isLoadedCourse.value = true
    })
    const courseSelect = async () => {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbyvHc6mRDa0coil3Qj8b4m9Kql44UJp1VkocBf-6ZrkCH0_ex8FHiWSzq7d-r2mbFY5/exec?key=${selectedCourse.value}`)
      const data = await response.json()
      wordList = data
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
      await sleep(timer.value)
      showAnswer()
    }

    const showAnswer = () => {
      phase.value = 'ANSWER'
    }

    return {word,phase,courseSelect,noGood,moveNext,showAnswer,answer,timer,isLoadedCourse,courses,selectedCourse}
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
  margin: 0 auto;
}
.bottom {
  grid-area: bottom;
  margin: 0 auto;
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
  margin-top: 1rem;
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
.flex-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  align-items: center;
}
.btn {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: white;
  background-color: blue;
  border-radius: 0.5rem;
}
.input {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
}
</style>
