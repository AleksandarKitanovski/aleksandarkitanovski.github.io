<script lang="ts">
	export let title: string;
	export let text: string;
	export let date: string;
</script>

<article class="w-11/12 md:w-1/2 lg:w-1/3 bg-gray-800 bg-opacity-85 rounded-lg pt-5 pb-8 px-10">
	<h1 class="text-center text-orange-600 font-bold text-2xl lg:text-4xl mb-2">{title}</h1>
	<p class="text-white text-justify leading-5 text-base lg:text-lg">
		{text}
	</p>
	<h2 class="text-zinc-400 text-center mt-2 text-sm lg:text-base">{date}</h2>
</article>
