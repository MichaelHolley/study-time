<script lang="ts">
	import Progressbar from '$lib/progressbar.svelte';
	import Timer from '$lib/timer.svelte';
	import Timerpresets from '$lib/timerpresets.svelte';
	import { floorTimeValues } from '$lib/utils/time-util';
	import { onDestroy } from 'svelte';

	let timeWindowsMinutes = floorTimeValues([25 * 60, 5 * 60]);
	let currentTimeWindows = 0;
	let optionsVisible = true;

	let remaining = timeWindowsMinutes[currentTimeWindows];
	const timer = setInterval(() => {
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

	const setNewTimer = (timers: number[]) => {
		timeWindowsMinutes = floorTimeValues(timers);
		currentTimeWindows = 0;
		remaining = timeWindowsMinutes[currentTimeWindows];
	};

	const toggleOptions = () => {
		optionsVisible = !optionsVisible;
	};
</script>

<div class="h-screen bg-red-400 flex flex-col">
	<div
		class="absolute left-0 right-0 text-white p-6 transform transition-transform duration-500"
		class:translate-y-0={optionsVisible}
		class:-translate-y-full={!optionsVisible}
	>
		<Timerpresets on:preset-selected={(e) => setNewTimer(e.detail)} />
	</div>

	<div class="flex-1 flex items-center justify-center">
		<div class="flex flex-col items-center justify-center gap-3 w-2/5 md:w-1/5">
			<Timer remainingInSec={remaining} />
			<Progressbar totalDuration={timeWindowsMinutes[currentTimeWindows]} {remaining} />
		</div>
	</div>
</div>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
