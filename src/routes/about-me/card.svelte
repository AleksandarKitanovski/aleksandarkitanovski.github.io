<script>
	export let title = '';
</script>

<div class="border-2 border-gray-800 rounded-md w-full my-4 mx-auto p-4 xl:w-1/3 xl:m-4">
	<h1 class="text-center mb-3 text-2xl text-orange-600">{title}</h1>
	<p class="text-justify">
		<slot />
	</p>
</div>
