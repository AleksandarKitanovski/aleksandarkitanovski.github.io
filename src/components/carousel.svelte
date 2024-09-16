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
		class="absolute top-10 lg:top-auto lg:left-10 opacity-50 hover:opacity-100 stroke-black hover:stroke-gray-400 transition-all"
		on:click={prev_slide}
	>
		<svg
			class="hidden lg:inline"
			width="130px"
			height="130px"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
		>
			<path d="M15 6L9 12L15 18" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<svg
			class="lg:hidden"
			width="130px"
			height="130px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6 15L12 9L18 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
	<CarouselSlide
		title={slides[selected].title}
		text={slides[selected].text}
		date={slides[selected].date}
	/>
	<button
		class="absolute bottom-10 lg:bottom-auto lg:right-10 opacity-50 hover:opacity-100 stroke-black hover:stroke-gray-400 transition-all"
		on:click={next_slide}
	>
		<svg
			class="hidden lg:inline"
			width="130px"
			height="130px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M9 6L15 12L9 18" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<svg
			class="lg:hidden"
			width="130px"
			height="130px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6 9L12 15L18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
