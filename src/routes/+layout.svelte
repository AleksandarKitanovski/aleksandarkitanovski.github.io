<script lang="ts">
	import '../app.css';
	let hidden = true;
	function toggle_menu() {
		hidden = !hidden;
	}

	function close_menu() {
		hidden = true;
	}

	async function copyMail() {
		try {
			await navigator.clipboard.writeText('kitanovski.aleksandar@yahoo.com');
			alert('Mail copied! (kitanovski.aleksandar@yahoo.com)');
		} catch (error: unknown) {
			if (error instanceof Error) alert(error.message);
			else alert('Failed to copy mail! (kitanovski.aleksandar@yahoo.com)');
		}
	}
</script>

<nav class="bg-gray-800 text-white h-auto w-full sticky top-0 left-0 z-50">
	<ul class="md:flex relative">
		<div class="flex mr-auto">
			<a href="/" class="mr-auto" on:click={close_menu}>
				<li class="p-3 hover:bg-gray-700">Aleksandar Kitanovski</li>
			</a>
			<button type="button" class="md:hidden p-2 hover:bg-gray-700" on:click={toggle_menu}>
				{#if hidden}
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
				{:else}
					<svg
						width="32px"
						height="22px"
						viewBox="-0.5 0 25 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 21.32L21 3.32001"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M3 3.32001L21 21.32"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{/if}
			</button>
		</div>
		<div
			id="menu"
			class:hidden
			class="absolute bg-gray-800 w-full border-t border-gray-950 md:border-t-0 md:flex md:static md:w-auto"
		>
			<a on:click={close_menu} href="/skills">
				<li class="p-3 hover:bg-gray-700">Skills</li>
			</a>
			<a on:click={close_menu} href="/tech">
				<li class="p-3 hover:bg-gray-700">Technologies</li>
			</a>
			<a on:click={close_menu} href="/projects">
				<li class="p-3 hover:bg-gray-700">Projects</li>
			</a>
			<a on:click={close_menu} href="/about-me">
				<li class="p-3 hover:bg-gray-700">About Me</li>
			</a>
		</div>
	</ul>
</nav>

<slot />

<nav class="flex justify-end items-center gap-x-3 lg:gap-x-5 pr-5 pb-2 fixed bottom-0 w-full">
	<a
		href="https://github.com/AleksandarKitanovski"
		class="fill-white bg-gray-800 bg-opacity-80 rounded-2xl p-2 lg:p-3"
	>
		<svg
			class="w-7 h-7 lg:w-10 lg:h-10"
			viewBox="0 0 20 20"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<g id="Page-1" stroke-width="1">
				<g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
					<g id="icons" transform="translate(56.000000, 160.000000)">
						<path
							d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
							id="github-[#142]"
						>
						</path>
					</g>
				</g>
			</g>
		</svg>
	</a>
	<a
		href="https://www.linkedin.com/in/aleksandar-kitanovski/"
		class="fill-white bg-gray-800 bg-opacity-80 rounded-2xl p-2 lg:p-3"
	>
		<svg
			class="w-7 h-7 lg:w-10 lg:h-10"
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="-143 145 512 512"
			xml:space="preserve"
		>
			<path
				d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
	V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
	C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
	c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
	"
			/>
		</svg>
	</a>
	<button
		on:click={copyMail}
		class="cursor-copy fill-white bg-gray-800 bg-opacity-80 rounded-2xl p-2 lg:p-3"
	>
		<svg
			class="w-7 h-7 lg:w-10 lg:h-10"
			viewBox="0 -3.5 32 32"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<g id="Page-1" stroke-width="1">
				<g id="Icon-Set-Filled" transform="translate(-414.000000, -261.000000)">
					<path
						d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
						id="mail"
					>
					</path>
				</g>
			</g>
		</svg>
	</button>
</nav>
