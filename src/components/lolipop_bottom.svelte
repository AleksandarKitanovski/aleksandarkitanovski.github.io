<script lang="ts">
	export let title;
	export let date;
	export let border_color;
	export let bg_color;

	let hidden = true;
	const show_tooltip = () => {
		hidden = false;
	};

	// Holds for now, fix it later
	const calculate_position = (event: Event) => {
		const node = event.target as HTMLElement;
		const rect = node.getBoundingClientRect();
		if (rect !== undefined) {
			const tooltip = node.getElementsByTagName('div')[0];
			tooltip.style.top = 'auto';
			tooltip.style.left = 'auto';
			tooltip.style.right = 'auto';
			if (rect.width === 128) {
				tooltip.style.top = '-165px';
				if (rect.x < 800) tooltip.style.left = '70px';
				else tooltip.style.right = '70px';
			} else {
				tooltip.style.top = '-147px';
				if (rect.x < 450) tooltip.style.left = '42px';
				else tooltip.style.right = '42px';
			}
		}
	};
</script>

<div class="flex flex-col items-center w-24 xl:w-32 text-xs xl:text-sm">
	{date}
	<div class="h-36 xl:h-52 border-r {border_color}"></div>
	<div
		class="relative flex p-1 rounded-full border {border_color} {bg_color} bg-opacity-10 w-20 xl:w-32 h-20 xl:h-32 text-center items-center justify-center cursor-context-menu"
		role="tooltip"
		on:mouseenter={(event) => {
			show_tooltip();
			calculate_position(event);
		}}
		on:mouseout={() => (hidden = true)}
		on:blur={() => (hidden = false)}
	>
		{title}
		<div
			class="absolute rounded-md border {border_color} {bg_color} bg-opacity-20 p-0 top-24 xl:top-32 w-36 xl:w-56 h-fit text-[10px] xl:text-sm"
			{hidden}
		>
			<slot></slot>
			Playing Super Mario on a NES was my first introduction to gaming, and what originally drew me towards
			programming. This was also the time I got my first computer, and got even more curiosity - why
			not learn how to make games myself?
		</div>
	</div>
</div>
