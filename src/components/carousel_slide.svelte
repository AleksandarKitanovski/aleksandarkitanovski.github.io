<script lang="ts">
	export let title: string;
	export let text: string;
	export let date: string;
</script>

<article
	class="mt-16 md:mt-0 w-11/12 sm:w-9/12 md:w-1/2 lg:w-1/3 bg-gray-800 bg-opacity-85 rounded-lg pt-5 pb-8 px-10 sm:px-7 sm:pt-3 sm:pb-5"
>
	<h1 class="text-center text-orange-600 font-bold text-xl md:text-2xl lg:text-4xl mb-2">
		{title}
	</h1>
	<p class="text-white text-justify leading-5 text-sm md:text-base lg:text-lg">
		{text}
	</p>
	<h2 class="text-zinc-400 text-center mt-2 text-sm lg:text-base">{date}</h2>
</article>
