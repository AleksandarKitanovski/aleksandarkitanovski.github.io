<script>
	import '../app.css';
	let hidden = true;
	function toggle_menu() {
		hidden = !hidden;
	}

	function close_menu() {
		hidden = true;
	}
</script>

<nav class="bg-gray-800 text-white h-auto w-full">
	<ul class="xl:flex relative">
		<div class="flex mr-auto">
			<a href="/" class="mr-auto"><li class="p-3 hover:bg-gray-700">Aleksandar Kitanovski</li></a>
			<button type="button" class="xl:hidden p-2 hover:bg-gray-700" on:click={toggle_menu}>
				<svg
					width="32px"
					height="30px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					stroke="white"
				>
					<path d="M4 18L20 18" stroke-width="2" stroke-linecap="round" />
					<path d="M4 12L20 12" stroke-width="2" stroke-linecap="round" />
					<path d="M4 6L20 6" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>
		</div>
		<div id="menu" class:hidden class="absolute bg-gray-800 w-full xl:flex xl:static xl:w-auto">
			<a on:click={close_menu} href="/skills"><li class="p-3 hover:bg-gray-700">Skills</li></a>
			<a on:click={close_menu} href="/tech"><li class="p-3 hover:bg-gray-700">Technologies</li></a>
			<a on:click={close_menu} href="/projects"><li class="p-3 hover:bg-gray-700">Projects</li></a>
			<a on:click={close_menu} href="/about-me"><li class="p-3 hover:bg-gray-700">About Me</li></a>
		</div>
	</ul>
</nav>

<slot />
