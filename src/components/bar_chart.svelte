<script lang="ts">
	import Chart from 'chart.js/auto';
	import Card from './card.svelte';
	export let title = 'Placeholder';
	export let data: { technology: string; confidence: number }[] = [];

	const renderChart = (node: HTMLCanvasElement) => {
		new Chart(node, {
			type: 'bar',
			data: {
				labels: data.map((row) => row.technology),
				datasets: [
					{
						label: 'Confidence level',
						data: data.map((row) => row.confidence),
						barThickness: 'flex',
						backgroundColor: '#2E86AB'
					}
				]
			},
			options: {
				indexAxis: 'y',
				aspectRatio: 1.5,
				responsive: true,
				scales: {
					x: {
						grid: {
							display: false
						},
						max: 10,
						beginAtZero: true
					},
					y: {
						grid: {
							display: false
						}
					}
				}
			}
		});
	};
</script>

<Card {title}>
	<div class="flex itmes-center justify-center">
		<div
			class="relative w-[80vw] h-[33vh] md:w-[60vw] md:h-[50vh] lg:h-[40vh] lg:w-[40vw] xl:h-[29vh] xl:w-[25vw] flex items-center justify-center"
		>
			<canvas use:renderChart></canvas>
		</div>
	</div>
</Card>
