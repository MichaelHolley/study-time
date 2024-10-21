<script lang="ts">
	export let totalDuration;

	let progressBar: HTMLDivElement;

	$: {
		console.log(totalDuration);
	}
</script>

<div class="rounded-full bg-red-500 h-2 w-full">
	<div
		bind:this={progressBar}
		class="rounded-full bg-gray-200 h-2 progress-bar"
		style="animation-duration: {totalDuration}s;"
	></div>
</div>

<style>
	.progress-bar {
		animation-name: progressAnimation;
		animation-timing-function: linear;
	}

	@keyframes progressAnimation {
		from {
			width: 0px;
		}

		to {
			width: 100%;
		}
	}
</style>
