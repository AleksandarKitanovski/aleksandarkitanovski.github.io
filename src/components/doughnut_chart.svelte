<script lang="ts">
	import Chart from 'chart.js/auto';
	export let title: string;
	export let data: [string, number][];

	const colors = ['#2E86AB', '#92C9B1', '#A2FAA3', '#FFC857', '#E5625E'];

	let bg_colors: string[] = [];
	for (let d = 0; d < data.length; d++) {
		bg_colors.push(colors[d % 5]);
	}

	let labels: string[] = [];
	let dataset: number[] = [];
	for (let [key, val] of data) {
		labels.push(key);
		dataset.push(val);
	}

	const renderChart = (node: HTMLCanvasElement) => {
		const data = {
			labels: labels,
			datasets: [
				{
					data: dataset,
					backgroundColor: bg_colors,
					hoverOffset: 10
				}
			]
		};
		new Chart(node, {
			type: 'doughnut',
			data: data,
			options: {
				indexAxis: 'y',
				aspectRatio: 1,
				maintainAspectRatio: false,
				responsive: true,
				plugins: {
					title: {
						display: true,
						text: title
					},

					legend: {
						display: true
					}
				},
				borderColor: '#f3f4f6'
			}
		});
	};
</script>

<div class="relative w-[95vw] h-[30vh] md:h-[50vh] lg:h-[30vh] lg:w-[30vw]">
	<canvas use:renderChart></canvas>
</div>
