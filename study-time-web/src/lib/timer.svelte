<script lang="ts">
	export let remainingInSec: number;

	$: hours = Math.floor(remainingInSec / 3600);
	$: minutes = Math.floor((remainingInSec % 3600) / 60);
	$: seconds = remainingInSec % 60;

	function transformToDisplay(number: number): string {
		if (number < 10) {
			return `0${number}`;
		}

		return `${number}`;
	}
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

<style>
	.timer-value {
		text-shadow: 2px 2px 2px theme('colors.red.500');
	}
</style>
