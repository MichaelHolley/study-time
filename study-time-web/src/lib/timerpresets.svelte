<script lang="ts">
	import Button from './common/button.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const timerPresets = [
		{ label: '50 + 10', timers: [50 * 60, 10 * 60] },
		{ label: '25 + 5', timers: [25 * 60, 5 * 60] }
	];
</script>

<div class="flex space-x-4">
	{#each timerPresets as preset}
		<Button
			onClick={() => {
				dispatch('preset-selected', preset.timers);
			}}
		>
			{preset.label}
		</Button>
	{/each}
</div>
