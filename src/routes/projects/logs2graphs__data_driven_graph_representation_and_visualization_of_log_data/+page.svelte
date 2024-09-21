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
	<p slot="desc">
		The goal of this project was to develop a system which could create graph representations of
		system logs. These graph representations could then be used in logs anomaly detection, logs
		prediction, and root cause analysis guided by logs. Therefore in this paper, we present
		logs2graphs, an open-source system for the creation and visualization of such graph
		representations of log messages, which is compatible with several publicly available log sources
		and expandable to other log sources.
	</p>
	<div
		slot="tech"
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
	<RadarChart
		slot="skills"
		dataPoints={{
			labels: ['Network Science', 'Data Processing', 'Data Visualziation', 'Text Processing'],
			data: [7, 6, 8, 5]
		}}
	/>
</ProjectPage>
