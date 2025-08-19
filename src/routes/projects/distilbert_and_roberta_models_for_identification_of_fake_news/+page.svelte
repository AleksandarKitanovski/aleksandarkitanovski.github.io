<script>
	import DoughnutChart from '../../../components/doughnut_chart.svelte';
	import ProjectPage from '../../../components/project_page.svelte';
	import RadarChart from '../../../components/radar_chart.svelte';
</script>

<ProjectPage
	title="DistilBERT and RoBERTa Models for Identification of Fake News"
	company="FINKI"
	duration="2 months"
	href="https://www.finki.ukim.mk/"
	paper="https://repository.ukim.mk/bitstream/20.500.12188/28593/1/MIPRO2023_Mirceva_fake_news.pdf"
>
	{#snippet desc()}
		<p>
			Fine-tuned and compared DistilBERT and RoBERTa models for fake news detection using a labeled
			dataset of news articles. Evaluated model performance on multiple datasets with accuracy,
			precision, recall, and F1-score metrics, with RoBERTa achieving slightly superior results. The
			work culminated in a research paper published at the MIPRO Convention in Croatia.
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
					['Transformers', 4],
					['Scikit-learn', 3],
					['Pandas', 2],
					['Seaborn', 1],
					['Numpy', 1]
				]}
			/>
			<DoughnutChart
				title="Other software"
				data={[
					['Google Colab', 2],
					['LaTeX', 1]
				]}
			/>
		</div>
	{/snippet}
	{#snippet skills()}
		<RadarChart
			dataPoints={{
				labels: [
					'Text Processing',
					'Data Analysis',
					'Transformer Models',
					'Model Selection',
					'Imbalanced Data',
					'Fake News'
				],
				data: [8, 7, 10, 9, 7, 3]
			}}
		/>
	{/snippet}
</ProjectPage>
