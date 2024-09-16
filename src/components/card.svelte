<script>
	export let title = '';
	export let width = 'full';
</script>

<div class="rounded-lg shadow-sm bg-white my-4 mx-auto p-4 xl:m-4 w-{width}">
	<h1 class="text-center mb-3 text-2xl text-orange-600">{title}</h1>
	<div class="text-justify">
		<slot />
	</div>
</div>
