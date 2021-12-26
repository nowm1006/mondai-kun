<script>
    import {phase} from './store'

    const handleClick = () => {
        $phase = 'TITLE'
    }

</script>
<div class="container">
    <h1>よくできました</h1>
    <button on:click={handleClick}>もう一度</button>
</div>

<style>
    .container {
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    h1 {
        font-size: 6em;
    }
</style>