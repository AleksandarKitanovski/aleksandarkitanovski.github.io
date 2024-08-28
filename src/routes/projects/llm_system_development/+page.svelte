<script>
	import DoughnutChart from '../../../components/doughnut_chart.svelte';
	import ProjectPage from '../../../components/project_page.svelte';
</script>

<ProjectPage
	title="LLM System Development"
	company="GrabIT"
	duration="About 6 months"
	href="https://www.grabit.io"
>
	<p slot="desc">
		The goal of this project was developing a chatbot which utilized a Large Language Model which
		would replace an older chatbot system. The work on this project included analyzing and preparing
		datasets for fine-tuing LLMs, fine-tuinging and evaluatign LLMs, prompt engineering, backend
		development with FastAPI, continerization with Docker, setting up a vector database for
		Retreival Augmented Generation, setting up a MongoDB for keeping historical context, and using
		zero-shot classification transformers for evaluating the LLM output.
	</p>
	<div
		slot="tech"
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
</ProjectPage>
