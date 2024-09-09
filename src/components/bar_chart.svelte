<script lang="ts">
	import Chart from 'chart.js/auto';
	const renderChart = (node: HTMLCanvasElement) => {
		const data = [
			{ year: 2010, count: 10 },
			{ year: 2011, count: 20 },
			{ year: 2012, count: 15 },
			{ year: 2013, count: 25 },
			{ year: 2014, count: 22 },
			{ year: 2015, count: 30 },
			{ year: 2016, count: 28 }
		];
		new Chart(node, {
			type: 'bar',
			data: {
				labels: data.map((row) => row.year),
				datasets: [
					{
						label: 'Acquisitions by year',
						data: data.map((row) => row.count),

						barThickness: 'flex'
					}
				]
			},
			options: {
				indexAxis: 'y',
				aspectRatio: 1.5,
				responsive: true
			}
		});
	};
</script>

<canvas use:renderChart></canvas>
