<script>
	export let progress;
</script>

<div class="rounded-full bg-red-500 h-2 w-full">
	<div class="rounded-full bg-gray-200 h-2" style="width: {progress * 100}%"></div>
</div>
