<script>
	import DoughnutChart from '../../../components/doughnut_chart.svelte';
	import ProjectPage from '../../../components/project_page.svelte';
	import RadarChart from '../../../components/radar_chart.svelte';
</script>

<ProjectPage
	title="Chatbot Development"
	company="GrabIT"
	duration="About 1 year"
	href="https://www.grabit.io"
>
	{#snippet desc()}
		<p>
			Helped develop a chatbot designed to reduce the workload of human agents by automating routine
			support tasks. The project involved analyzing KPIs with Tableau and SQL, performing text
			analysis with Python, and fine-tuning Transformer models to improve response quality and
			coverage.
		</p>
	{/snippet}
	{#snippet tech()}
		<div
			class="flex flex-col mt-3 mb-6 justify-evenly space-y-8 lg:space-y-0 lg:flex-row lg:space-x-4"
		>
			<DoughnutChart
				title="Programming Languages"
				data={[
					['Python', 2],
					['SQL', 1]
				]}
			/>
			<DoughnutChart
				title="Frameworks & Libraries"
				data={[
					['Rasa', 3],
					['Pandas', 2],
					['SpaCy', 1]
				]}
			/>
			<DoughnutChart
				title="Other software"
				data={[
					['Botario', 4],
					['Tableau', 3],
					['Excel', 2],
					['Jupyter Notebooks', 1],
					['Git', 1]
				]}
			/>
		</div>
	{/snippet}
	{#snippet skills()}
		<RadarChart
			dataPoints={{
				labels: [
					'Chatbots',
					'Transformer Models',
					'Data Analysis',
					'Text Processing',
					'Text Classification'
				],
				data: [10, 8, 6, 5, 7]
			}}
		/>
	{/snippet}
</ProjectPage>
