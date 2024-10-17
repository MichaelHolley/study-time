<script lang="ts">
	import {
		getRemainingHours,
		getRemainingMinutes,
		getRemainingSeconds,
		toCompactDisplayFormat,
		transformToDisplay
	} from './utils/time-util';

	export let remainingInSec: number;

	$: hours = getRemainingHours(remainingInSec);
	$: minutes = getRemainingMinutes(remainingInSec);
	$: seconds = getRemainingSeconds(remainingInSec);
	$: timeDisplay = toCompactDisplayFormat(hours, minutes, seconds);
</script>

<div class="w-full flex flex-col gap-3 justify-center text-center font-bold text-7xl text-white">
	{#key hours}
		{#if !!hours && hours > 0}
			<div class="timer-value">{transformToDisplay(hours)}</div>
		{/if}
	{/key}
	{#key minutes}
		<div class="timer-value">{transformToDisplay(minutes)}</div>
	{/key}
	{#key seconds}
		<div class="timer-value">
			{transformToDisplay(seconds)}
		</div>
	{/key}
</div>

<svelte:head>
	<title>Study Time ⏲️ {timeDisplay}</title>
</svelte:head>

<style>
	.timer-value {
		text-shadow: 2px 2px 2px theme('colors.red.500');
	}
</style>
