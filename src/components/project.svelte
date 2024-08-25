<script>
	import Card from './card.svelte';
	export let title;
	export let duration;
	export let company;
	export let href;
</script>

<Card {title}>
	<h2 class="font-bold text-lg mb-3">Duration: <span class="font-normal">{duration}</span></h2>
	<h2 class="font-bold text-lg mb-3">
		Company: <a class="font-normal text-orange-600 hover:text-orange-400" {href}>{company}</a>
	</h2>
	<slot></slot>
</Card>
