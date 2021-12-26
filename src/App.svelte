<script>
	import Title from './Title.svelte'
	import Question from './Question.svelte'
	import Ending from './Ending.svelte'
	import { phase } from './store'

</script>

<main>
	{#if $phase === 'TITLE'}
		<Title/>
	{:else if $phase === 'QUESTION'}
		<Question/>
	{:else if $phase === 'ENDING'}
		<Ending/>
	{:else}
		<p>Something wrong</p>
	{/if}
</main>

<style>
	main {
		padding: 0;
		margin: 0 auto;
		width: 100%;
		height: 100%;
	}
</style>