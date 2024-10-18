<script>
	export let totalDuration;
</script>

<div class="rounded-full bg-red-500 h-2 w-full">
	<div
		class="rounded-full bg-gray-200 h-2 progress-bar"
		style="animation-duration: {totalDuration}s;"
	></div>
</div>

<style>
	.progress-bar {
		animation-name: progressAnimation;
	}

	@keyframes progressAnimation {
		0% {
			width: 0%;
		}

		100% {
			width: 100%;
		}
	}
</style>
