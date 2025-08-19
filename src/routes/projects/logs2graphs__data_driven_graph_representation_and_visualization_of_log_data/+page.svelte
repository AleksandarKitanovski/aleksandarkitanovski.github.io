<script>
	import DoughnutChart from '../../../components/doughnut_chart.svelte';
	import ProjectPage from '../../../components/project_page.svelte';
	import RadarChart from '../../../components/radar_chart.svelte';
</script>

<ProjectPage
	title="logs2graphs: Data-driven graph representation and visualization of log data"
	company="FINKI"
	duration="2 months"
	href="https://www.finki.ukim.mk/"
	paper="https://repository.ukim.mk/handle/20.500.12188/25690"
	repo="https://github.com/stefanandonov/log2graph"
	repo_name="log2graph"
>
	{#snippet desc()}
		<p>
			Helped develop an open-source system, Logs2Graphs, to create graph representations of system
			logs for anomaly detection, log prediction, and root cause analysis. The system supports
			multiple publicly available log sources and is designed to be easily extended to additional
			sources, enabling structured visualization and analysis of log data.
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
					['NetworkX', 2],
					['Pandas', 1]
				]}
			/>
			<DoughnutChart
				title="Other software"
				data={[
					['Git', 2],
					['Latex', 2],
					['Google Colab', 1]
				]}
			/>
		</div>
	{/snippet}
	{#snippet skills()}
		<RadarChart
			dataPoints={{
				labels: ['Network Science', 'Data Processing', 'Data Visualziation', 'Text Processing'],
				data: [7, 6, 8, 5]
			}}
		/>
	{/snippet}
</ProjectPage>
