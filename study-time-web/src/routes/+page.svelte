<script lang="ts">
	import Timer from '$lib/timer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Playwrite+ES:wght@100..400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen bg-red-400">
	<Timer></Timer>
</div>

<style>
	* {
		font-family: 'Playwrite ES';
	}
</style>
