<script>
	import RadarChart from '../../components/radar_chart.svelte';
</script>

<div class="m-3 mb-20 lg:grid lg:grid-cols-2 lg:gap-4 lg:auto-rows-fr xl:grid-cols-3">
	<RadarChart
		title={'Overall'}
		dataPoints={{
			labels: ['Data', 'Math', 'Software', 'DevOps', 'Soft Skills'],
			data: [9, 8, 8, 4, 7]
		}}
	/>
	<RadarChart
		title={'Data'}
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
	<RadarChart
		title={'Math'}
		dataPoints={{
			labels: ['Statistics', 'Probability', 'Linear Algebra', 'Optimization', 'Calculus'],
			data: [7, 6, 5, 5, 8]
		}}
	/>
	<RadarChart
		title={'Software & Comp. Sci.'}
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
	<RadarChart
		title={'DevOps'}
		dataPoints={{
			labels: ['Linux', 'Cloud', 'Bash Scripting', 'Continerization', 'Orchestration'],
			data: [7, 4, 5, 4, 3]
		}}
	/>
	<RadarChart
		title={'Soft Skills'}
		dataPoints={{
			labels: ['Communication', 'Team work', 'Public Speaking', 'Time management', 'Leadership'],
			data: [7, 10, 7, 6, 3]
		}}
	/>
</div>
