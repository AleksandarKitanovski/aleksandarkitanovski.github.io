<script>
	import ChartCard from '../../components/chart_card.svelte';
	import RadarChart from '../../components/radar_chart.svelte';
</script>

<div class="m-3 mb-20 lg:grid lg:grid-cols-2 lg:gap-4 lg:auto-rows-fr xl:grid-cols-3">
	<ChartCard title={'Overall'}>
		<RadarChart
			dataPoints={{
				labels: ['Data', 'Math', 'Software', 'DevOps', 'Soft Skills'],
				data: [9, 8, 8, 4, 7]
			}}
		/>
	</ChartCard>
	<ChartCard title="Data">
		<RadarChart
			dataPoints={{
				labels: [
					'Data Engineering',
					'Data Science',
					'Data Analysis',
					'Machine Learning',
					'MLOps',
					'Databases'
				],
				data: [7, 8, 9, 8, 6, 6]
			}}
		/>
	</ChartCard>
	<ChartCard title="Math">
		<RadarChart
			dataPoints={{
				labels: ['Statistics', 'Probability', 'Linear Algebra', 'Optimization', 'Calculus'],
				data: [7, 6, 5, 5, 8]
			}}
		/>
	</ChartCard>
	<ChartCard title="Software & Comp. Sci.">
		<RadarChart
			dataPoints={{
				labels: [
					'Back-end',
					'Front-end',
					'Desing Patterns',
					'Algorithms',
					'Data Structures',
					'CS Theory'
				],
				data: [8, 6, 2, 6, 7, 6]
			}}
		/>
	</ChartCard>
	<ChartCard title="DevOps">
		<RadarChart
			dataPoints={{
				labels: ['Linux', 'Cloud', 'Bash Scripting', 'Continerization', 'Orchestration'],
				data: [7, 4, 5, 4, 3]
			}}
		/>
	</ChartCard>
	<ChartCard title="Soft Skills">
		<RadarChart
			dataPoints={{
				labels: ['Communication', 'Team work', 'Public Speaking', 'Time management', 'Leadership'],
				data: [7, 10, 7, 6, 3]
			}}
		/>
	</ChartCard>
</div>
