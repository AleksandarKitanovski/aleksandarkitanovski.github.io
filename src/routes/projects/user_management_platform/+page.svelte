<script>
	import DoughnutChart from '../../../components/doughnut_chart.svelte';
	import ProjectPage from '../../../components/project_page.svelte';
	import RadarChart from '../../../components/radar_chart.svelte';
</script>

<ProjectPage
	title="User Management Platform"
	company="Ludotech"
	duration="About 6 Months"
	href="https://www.ludotech.co/en"
>
	{#snippet desc()}
		<p>
			Helped develop a user management platform for an analytics company, providing secure account
			creation, role-based access control, and team management features. Integrated the system with
			Power BI to deliver interactive dashboards, enabling users to directly access and explore
			analyst-created reports within the platform.
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
					['SQL', 1],
					['JavaScript', 1]
				]}
			/>
			<DoughnutChart
				title="Frameworks & Libraries"
				data={[
					['Actix', 5],
					['HTMX', 2],
					['TailwindCSS', 2],
					['Alpine.js', 1]
				]}
			/>
			<DoughnutChart
				title="Other software"
				data={[
					['Git', 4],
					['Kinde', 2],
					['Linear', 2],
					['Docker', 1]
				]}
			/>
		</div>
	{/snippet}
	{#snippet skills()}
		<RadarChart
			dataPoints={{
				labels: ['Frontend', 'Backend', 'Databases', 'Software Architecture'],
				data: [7, 9, 6, 5]
			}}
		/>
	{/snippet}
</ProjectPage>
