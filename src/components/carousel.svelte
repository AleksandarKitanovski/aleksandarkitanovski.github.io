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
	class="relative flex items-center justify-center carousel_slide"
	style="background-image: url({slides[selected].img}); transition: background-image 0.5s ease-out;"
>
	<button
		class="absolute left-0 w-1/3 h-full transition-all
		       lg:h-auto lg:w-auto lg:left-10"
		on:click={prev_slide}
		type="button"
	>
		<svg
			class="hidden lg:inline stroke-black stroke-[3] opacity-70 hover:stroke-[4]"
			width="130px"
			height="130px"
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
		class="absolute right-0 w-1/3 h-full transition-all
               lg:h-auto lg:w-auto lg:right-10"
		on:click={next_slide}
		type="button"
	>
		<svg
			class="hidden lg:inline stroke-black stroke-[3] opacity-70 hover:stroke-[4]"
			width="130px"
			height="130px"
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
