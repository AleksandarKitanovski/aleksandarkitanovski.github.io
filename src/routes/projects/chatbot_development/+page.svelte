<script>
	import DoughnutChart from '../../../components/doughnut_chart.svelte';
	import ProjectPage from '../../../components/project_page.svelte';
</script>

<ProjectPage
	title="Chatbot Development"
	company="GrabIT"
	duration="About 1 year"
	href="https://www.grabit.io"
>
	<p slot="desc">
		The goal of this project was developing a chatbot which would lessen the workload of human
		agents doing the same job as the bot. The project included analyzing KPIs with Tableau and SQL,
		analyzing textual data with Python, as well as fine-tuning Transformer Models.
	</p>
	<div
		slot="tech"
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
</ProjectPage>
