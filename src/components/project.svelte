<script>
	import Card from './card.svelte';
	export let title;
	export let duration;
	export let company;
	export let href;
	export let width;
	export let paper = '';
	export let repo = '';
	export let repo_name = '';

	let project_name = title.toLowerCase().replaceAll(/[^0-9a-z]/g, '_');
</script>

<Card {title} {width}>
	<div class="flex justify-between">
		<div>
			<h2 class="font-bold text-lg mb-1">Duration: <span class="font-normal">{duration}</span></h2>
			<h2 class="font-bold text-lg mb-1">
				Company: <a class="font-normal text-orange-600 hover:text-orange-400" {href}>{company}</a>
			</h2>
		</div>
		<div>
			<a
				href="/projects/{project_name}"
				class="bg-gray-800 hover:bg-gray-700 text-white rounded-md p-2 text-xs sm:text-base"
			>
				Project details
			</a>
		</div>
	</div>
	{#if paper.length > 0}
		<h3 class="font-semibold mb-1">
			Paper available <a class="text-orange-600 hover:text-orange-400" href={paper}>here</a>
		</h3>
	{/if}
	{#if repo_name.length > 0}
		<h3 class="font-semibold mb-1">
			Git repo: <a class="text-orange-600 hover:text-orange-400" href={repo}>{repo_name}</a>
		</h3>
	{/if}
	<slot></slot>
</Card>
