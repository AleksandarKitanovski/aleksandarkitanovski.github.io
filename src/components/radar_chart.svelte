<script lang="ts">
	import Chart from 'chart.js/auto';
	export let dataPoints: { labels: string[]; data: number[] } = { labels: [], data: [] };

	const data = {
		labels: dataPoints.labels,
		datasets: [
			{
				data: dataPoints.data,
				fill: true,
				backgroundColor: 'rgba(46, 134, 171, 0.2)',
				borderColor: '#2E86AB',
				pointBackgroundColor: '#2E86AB',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: '#2E86AB'
			}
		]
	};

	const renderChart = (node: HTMLCanvasElement) => {
		new Chart(node, {
			type: 'radar',
			data: data,
			options: {
				elements: {
					line: {
						borderWidth: 3
					}
				},
				plugins: {
					legend: {
						display: false
					}
				},
				scales: {
					r: {
						ticks: { display: false, count: 11 },
						min: 0,
						max: 10
					}
				},
				aspectRatio: 2
			}
		});
	};
</script>

<canvas use:renderChart />
