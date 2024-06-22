<script lang="ts">
	import Progressbar from '$lib/progressbar.svelte';
	import Timer from '$lib/timer.svelte';
	import { onDestroy } from 'svelte';

	const timeWindowsMinutes = [50 * 60, 10 * 60];
	let currentTimeWindows = 0;

	let remaining = timeWindowsMinutes[currentTimeWindows];
	let timer;

	timer = setInterval(() => {
		if (remaining - 1 < 0) {
			currentTimeWindows = (currentTimeWindows + 1) % timeWindowsMinutes.length;
			remaining = timeWindowsMinutes[currentTimeWindows];
		} else {
			remaining -= 1;
		}
	}, 1000);

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<div class="flex flex-col items-center justify-center h-screen bg-red-400">
	<div class="flex flex-col items-center justify-center gap-3 w-2/5 md:w-1/5">
		<Timer remainingInSec={remaining} />
		<Progressbar progress={remaining / timeWindowsMinutes[currentTimeWindows]} />
	</div>
</div>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playwrite+ES:wght@100..400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
