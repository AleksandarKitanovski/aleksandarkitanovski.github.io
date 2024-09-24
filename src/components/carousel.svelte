<script lang="ts">
	import CarouselSlide from './carousel_slide.svelte';

	let selected = 0;
	export let slides: { title: string; text: string; date: string; img: string }[] = [];
	let el: HTMLElement;

	function prev_slide() {
		if (selected > 0) {
			selected -= 1;
		} else {
			selected = slides.length - 1;
		}
	}

	function next_slide() {
		selected = (selected + 1) % slides.length;
	}
</script>

<div
	bind:this={el}
	class="relative flex items-start md:items-center justify-center carousel_slide"
	style="background-image: url({slides[selected].img}); transition: background-image 0.5s ease-out;"
>
	<button
		class="absolute transition-all h-auto w-auto bottom-28 left-10 lg:left-[20%] md:bottom-auto
		       bg-gray-800 bg-opacity-85 rounded-lg"
		on:click={prev_slide}
		type="button"
	>
		<svg
			class="stroke-orange-600 stroke-1 w-20 h-20
			       md:w-24 md:h-24
			       lg:w-28 lg:h-28 lg:stroke-2 hover:lg:stroke-[3]"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
		>
			<path d="M15 6L9 12L15 18" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
	<CarouselSlide
		title={slides[selected].title}
		text={slides[selected].text}
		date={slides[selected].date}
	/>
	<button
		class="absolute transition-all h-auto w-auto bottom-28 right-10 lg:right-[20%] md:bottom-auto
               bg-gray-800 bg-opacity-85 rounded-lg"
		on:click={next_slide}
		type="button"
	>
		<svg
			class="stroke-orange-600 stroke-1 w-20 h-20
			       md:w-24 md:h-24
				   lg:w-28 lg:h-28 lg:stroke-2 hover:lg:stroke-[3]"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M9 6L15 12L9 18" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
</div>

<style>
	.carousel_slide {
		height: calc(100vh - 48px);
		background-size: cover;
		background-position: center;
	}
</style>
