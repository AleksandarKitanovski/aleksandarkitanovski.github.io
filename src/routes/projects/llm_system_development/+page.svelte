<script>
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
</ProjectPage>
