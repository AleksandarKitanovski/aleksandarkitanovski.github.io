<script lang="ts">
	import type { Snippet } from 'svelte';
	import Card from './card.svelte';

	interface Props {
		title: any;
		duration: any;
		company: any;
		href: any;
		paper?: string;
		repo?: string;
		repo_name?: string;
		children?: Snippet;
	}

	let {
		title,
		duration,
		company,
		href,
		paper = '',
		repo = '',
		repo_name = '',
		children
	}: Props = $props();

	let project_name = title.toLowerCase().replaceAll(/[^0-9a-z]/g, '_');
</script>

<Card {title}>
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
			Git repo:
			<a class="font-normal text-orange-600 hover:text-orange-400" href={repo}>
				{repo_name}
			</a>
		</h3>
	{/if}
	<div class="text-justify">
		{@render children?.()}
	</div>
</Card>
