<script>
    import {phase, selectedCourse, waitTime} from './store'

    const loadMenu = async () => {
        const res = await fetch('https://script.google.com/macros/s/AKfycbyvHc6mRDa0coil3Qj8b4m9Kql44UJp1VkocBf-6ZrkCH0_ex8FHiWSzq7d-r2mbFY5/exec')
        const data = await res.json()
        return data
    }

    const handleClick = () => {
        if ($selectedCourse) {
            $phase = 'QUESTION'
        } else {
            window.alert('問題を選んでください。')
        }
    }
</script>


<div class="container">

    <div class="center">
        <h1 class="title">問題くん</h1>
    </div>


    <div class="center">
        <button on:click={handleClick}>スタート</button>
    </div>


    <div class="center column">
        {#await loadMenu()}
            <p>Loading...</p>
        {:then items}
            <select id="course-select" bind:value={$selectedCourse}>
                {#each items as item (item)}
                    <option>{item}</option> 
                {/each}
            </select>
        {/await}

        <div>
            <label id="timer-label" for="timer">待ち時間(秒)</label>
            <input id="timer" type="text" bind:value={$waitTime}>
        </div>
    </div>


</div>

<style>
    .container {
        height: 100%;
        display: grid;
        grid-template-rows: 2fr 1fr 1fr;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .column {
        display: flex;
        flex-direction: column;
    }
    .title {
        font-size: 4rem;
    }
    #course-select {
        min-width: 10rem;
        margin-bottom: 2rem;
    }
    #timer-label {
        padding-right: 0.5rem;
        display: inline-block;
    }
    #timer {
        width: 2rem;
        display: inline-block;
    }
</style>