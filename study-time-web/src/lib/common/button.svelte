<script lang="ts">
	export let onClick: () => void;
	export let disabled: boolean = false;
</script>

<button
	class="bg-red-500 border-4 border-red-500 text-white font-bold py-3 px-4 text-xs rounded-2xl hover:bg-red-600 hover:border-red-600 active:bg-red-700 active:border-red-700 transition-all duration-200"
	{disabled}
	on:click={onClick}
>
	<slot />
</button>
