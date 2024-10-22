<script lang="ts">
	export let totalDuration: number;
	export let remaining: number;

	let progressBar: HTMLDivElement;

	$: {
		if (remaining === 0 && progressBar) {
			progressBar.classList.remove('progress-bar');
			progressBar.style.animationDuration = `0s`;
			progressBar.style.width = '100%';
		}

		if (remaining > 0 && progressBar && !progressBar.classList.contains('progress-bar')) {
			progressBar.classList.add('progress-bar');
			progressBar.style.animationDuration = `${totalDuration}s`;
		}
	}
</script>

<div class="rounded-full bg-red-500 h-2 w-full">
	<div bind:this={progressBar} class="w-0 rounded-full bg-gray-200 h-2"></div>
</div>

<style>
	:global(.progress-bar) {
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
