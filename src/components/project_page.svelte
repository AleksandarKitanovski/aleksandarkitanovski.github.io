<script>
	export let title;
	export let href;
	export let company;
	export let duration;
	export let paper = '';
	export let repo = '';
	export let repo_name = '';
</script>

<div class="m-3">
	<h1 class="flex items-center mb-2">
		<a href="/projects" class="mr-2">
			<svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" />
				<path
					fill="#000000"
					d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
				/>
			</svg>
		</a>
		<span class="text-2xl text-orange-600">{title}</span>
	</h1>
	<hr class="border-gray-800" />
	<article class="mt-6">
		<h2 class="text-lg font-bold">Overview</h2>
		<div class="md:flex mb-3">
			<div
				class="text-justify pr-3 mr-3 border-b border-gray-800 md:border-b-0 md:w-3/5 md:border-r"
			>
				<slot name="desc" />
			</div>
			<div class="">
				<h2 class="text-base font-bold">Info:</h2>
				<div class="font-bold flex flex-col">
					<span>
						Company:
						<a {href} class="ml-1 font-normal text-orange-600 hover:text-orange-400"> {company} </a>
					</span>
					<span>Duration: <span class="font-normal">{duration}</span></span>
					{#if paper.length > 0}
						<span class="font-medium">
							Paper available <a class="text-orange-600 hover:text-orange-400" href={paper}>here</a>
						</span>
					{/if}
					{#if repo_name.length > 0}
						<span class="font-medium">
							Git repo:
							<a class="font-normal text-orange-600 hover:text-orange-400" href={repo}>
								{repo_name}
							</a>
						</span>
					{/if}
				</div>
			</div>
		</div>
	</article>
	<hr class="border-gray-800" />
	<article class="mt-6">
		<h2 class="text-lg font-bold">Technologies</h2>
		<slot name="tech" />
	</article>
	<hr class="border-gray-800" />
	<article class="mt-6 pb-12">
		<h2 class="text-lg font-bold">Areas of expertise</h2>
		<div class="flex justify-center items-center">
			<div class="flex items-center justify-center w-[100vw] h-[29vh] md:h-[50vh] lg:h-[33vh]">
				<slot name="skills" />
			</div>
		</div>
	</article>
</div>
