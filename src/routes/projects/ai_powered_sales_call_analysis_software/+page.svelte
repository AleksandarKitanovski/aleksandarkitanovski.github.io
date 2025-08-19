<script>
	import DoughnutChart from '../../../components/doughnut_chart.svelte';
	import ProjectPage from '../../../components/project_page.svelte';
	import RadarChart from '../../../components/radar_chart.svelte';
</script>

<ProjectPage
	title="AI-Powered Sales Call Analysis Software"
	company="Ludotech"
	duration="Ongoing (since 2024)"
	href="https://www.ludotech.co/en"
>
	{#snippet desc()}
		<p>
			Worked od software for sales teams that automatically records calls, generates transcripts and
			summaries, and extracts key insights using AI. The system is integrated with CRM platforms and
			online meeting tools like Google Meet and Microsoft Teams to streamline workflow and improve
			data accessibility.
		</p>
	{/snippet}
	{#snippet tech()}
		<div
			class="flex flex-col mt-3 mb-6 justify-evenly space-y-8 lg:space-y-0 lg:flex-row lg:space-x-4"
		>
			<DoughnutChart
				title="Programming Languages"
				data={[
					['Rust', 5],
					['HTML', 3],
					['JavaScript', 2],
					['SQL', 1],
					['Python', 1]
				]}
			/>
			<DoughnutChart
				title="Frameworks & Libraries"
				data={[
					['Actix', 5],
					['Dioxus', 2],
					['HTMX', 4],
					['Alpine.js', 3],
					['TailwindCSS', 3],
					['LangGraph', 1],
					['LangChain', 1],
					['FastAPI', 1]
				]}
			/>
			<DoughnutChart
				title="Other software"
				data={[
					['Docker', 1],
					['Honeycomb', 1],
					['Linear', 1],
					['GCP', 2],
					['Git', 3]
				]}
			/>
		</div>
	{/snippet}
	{#snippet skills()}
		<RadarChart
			dataPoints={{
				labels: ['Frontend', 'Backend', 'Databases', 'Cloud Computing', 'AI Engineering'],
				data: [8, 9, 5, 3, 4]
			}}
		/>
	{/snippet}
</ProjectPage>
