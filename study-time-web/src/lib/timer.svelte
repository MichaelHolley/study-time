<script lang="ts">
	let timeInSeconds = 50 * 60;

	setInterval(() => {
		timeInSeconds -= 1;
	}, 1000);

	$: hours = Math.floor(timeInSeconds / 3600);
	$: minutes = Math.floor((timeInSeconds % 3600) / 60);
	$: seconds = timeInSeconds % 60;

	function transformToDisplay(number: number): string {
		if (number < 10) {
			return `0${number}`;
		} else {
			return `${number}`;
		}
	}
</script>

<span class="font-bold text-7xl text-white">
	{#if !!hours && hours > 0}<span>{transformToDisplay(hours)}</span><span>:</span>{/if}
	<span>{transformToDisplay(minutes)}</span>
	<span>:</span>
	<span>{transformToDisplay(seconds)}</span>
</span>
