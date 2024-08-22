<script>
	export let title = '';
</script>

<div class="border-2 border-gray-800 rounded-md w-full m-2 p-4 lg:w-1/3 lg:h-96 overflow-auto">
	<h1 class="text-center mb-3 text-2xl text-orange-600">{title}</h1>
	<p class="text-justify">
		<slot />
	</p>
</div>
