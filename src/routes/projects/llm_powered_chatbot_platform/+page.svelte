<script>
	import DoughnutChart from '../../../components/doughnut_chart.svelte';
	import ProjectPage from '../../../components/project_page.svelte';
	import RadarChart from '../../../components/radar_chart.svelte';
</script>

<ProjectPage
	title="LLM-Powered Chatbot Platform"
	company="GrabIT"
	duration="About 6 months"
	href="https://www.grabit.io"
>
	{#snippet desc()}
		<p>
			Developed a next-generation chatbot to replace a legacy system, leveraging large language
			models for improved responses. Responsibilities included dataset preparation, fine-tuning and
			evaluating LLMs, and prompt engineering. Built the backend with FastAPI, containerized with
			Docker, and integrated MongoDB for conversation history. Implemented a vector database to
			enable Retrieval-Augmented Generation and applied zero-shot classification transformers for
			automated output evaluation.
		</p>
	{/snippet}
	{#snippet tech()}
		<div
			class="flex flex-col mt-3 mb-6 justify-evenly space-y-8 lg:space-y-0 lg:flex-row lg:space-x-4"
		>
			<DoughnutChart
				title="Programming Languages"
				data={[
					['Python', 6],
					['MongoDB QL', 2],
					['SQL', 1]
				]}
			/>
			<DoughnutChart
				title="Frameworks & Libraries"
				data={[
					['FastAPI', 3],
					['Llama.cpp', 3],
					['Transformers', 2],
					['Pandas', 1]
				]}
			/>
			<DoughnutChart
				title="Other software"
				data={[
					['Docker', 4],
					['MongoDB', 3],
					['ChromaDB', 3],
					['Git', 2],
					['Jupyter Notebooks', 1]
				]}
			/>
		</div>
	{/snippet}
	{#snippet skills()}
		<RadarChart
			dataPoints={{
				labels: [
					'Large Language Models',
					'Backend Programming',
					'Model Evaluation',
					'NoSQL Databases',
					'RAG',
					'Chatbots'
				],
				data: [10, 7, 6, 8, 9, 10]
			}}
		/>
	{/snippet}
</ProjectPage>
