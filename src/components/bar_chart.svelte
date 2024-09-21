<script lang="ts">
	import Chart from 'chart.js/auto';
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

<canvas use:renderChart />
