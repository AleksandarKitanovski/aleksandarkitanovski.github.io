<script>
	import DoughnutChart from '../../../components/doughnut_chart.svelte';
	import ProjectPage from '../../../components/project_page.svelte';
	import RadarChart from '../../../components/radar_chart.svelte';
</script>

<ProjectPage
	title="Time Series Anomaly Detection"
	company="Init (ex. Nebb)"
	duration="3 months"
	href="https://initgroup.com/"
>
	{#snippet desc()}
		<p>
			Worked on a model to detect anomalies in time series data for use in a monitoring system.
			Analyzed and visualized datasets using Pandas, Statsmodels, and Seaborn, and built machine
			learning models for anomaly detection with Scikit-learn to identify unusual patterns and
			trends.
		</p>
	{/snippet}
	{#snippet tech()}
		<div
			class="flex flex-col mt-3 mb-6 justify-evenly space-y-8 lg:space-y-0 lg:flex-row lg:space-x-4"
		>
			<DoughnutChart title="Programming Languages" data={[['Python', 1]]} />
			<DoughnutChart
				title="Frameworks & Libraries"
				data={[
					['Scikit-learn', 5],
					['Pandas', 4],
					['Seaborn', 4],
					['Statsmodel', 3],
					['Numpy', 1]
				]}
			/>
			<DoughnutChart
				title="Other software"
				data={[
					['Jupyter Notebooks', 5],
					['Git', 4],
					['Docker', 2],
					['MS Excel', 1]
				]}
			/>
		</div>
	{/snippet}
	{#snippet skills()}
		<RadarChart
			dataPoints={{
				labels: [
					'Time Series',
					'Data Processing',
					'Statistics',
					'Anomaly Detection',
					'Data Visualization',
					'Unsupervised Learning'
				],
				data: [10, 7, 6, 8, 5, 9]
			}}
		/>
	{/snippet}
</ProjectPage>
