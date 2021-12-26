<script>
    import {selectedCourse, phase, waitTime} from './store'
    import {onMount} from 'svelte'

    let questions = []
    let question = {word:'',answer:''}
    let isLoading = true
    let showAnswer = false

    const noGood = () => {
        questions = [question, ...questions]
        goNext()
    }
    const goNext = async () => {
        showAnswer = false
        question = questions.pop()
        if (!question){
            question = {word:'Good Job!',answer:'よくできました'}
            $phase = 'ENDING'
        }
        
        let u = new SpeechSynthesisUtterance();
        u.lang = 'en-US';
        u.text = question.word
        speechSynthesis.speak(u);
        
        await sleep($waitTime)
        showAnswer = true
    }

    onMount(async () => {
        const res = await fetch(`https://script.google.com/macros/s/AKfycbyvHc6mRDa0coil3Qj8b4m9Kql44UJp1VkocBf-6ZrkCH0_ex8FHiWSzq7d-r2mbFY5/exec?key=${$selectedCourse}`)
        const data = await res.json()
        questions = data
        isLoading = false
        goNext()
    })
    
    function sleep(sec) {
        return new Promise(resolve => setTimeout(resolve, sec*1000));
    }
</script>

<div class="container">
    <div class="word center">
        <h1>{question.word? question.word : '読み込み中...'}</h1>
    </div>
    <div class="answer center">
        {#if showAnswer}
            <h1>{question.answer? question.answer : ''}</h1>
        {/if}
    </div>
    <div class="thumbs center">
        <button on:click={goNext}>OK</button>
        <button on:click={noGood} style="background-color: red;">NG</button>
    </div>
</div>

<style>
    .container {
        display: grid;
        height: 100%;
        grid-template-rows: 2fr 1fr 1fr;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .word  {
        font-size: 4rem;
    }
    .answer {
        font-size: 2rem;
    }
    .thumbs {
        gap: 10px;
    }
</style>