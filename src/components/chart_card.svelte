<script>
	import Card from './card.svelte';
	export let title = '';
</script>

<Card {title}>
	<div class="flex itmes-center justify-center">
		<div
			class="relative w-[80vw] h-[33vh] md:w-[60vw] md:h-[50vh] lg:h-[40vh] lg:w-[40vw] xl:h-[29vh] xl:w-[25vw] flex items-center justify-center"
		>
			<slot />
		</div>
	</div>
</Card>
