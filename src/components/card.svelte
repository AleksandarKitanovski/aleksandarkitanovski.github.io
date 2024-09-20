<script>
	export let title = '';
</script>

<div class="rounded-lg shadow-sm bg-white my-4 mx-auto p-4 xl:m-4 w-auto md:w-2/3 lg:w-auto">
	<h1 class="text-center mb-3 text-2xl text-orange-600">{title}</h1>
	<slot />
</div>
