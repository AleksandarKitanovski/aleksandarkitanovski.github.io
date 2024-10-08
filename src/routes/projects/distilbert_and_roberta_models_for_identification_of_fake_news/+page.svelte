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
	<p slot="desc">
		The goal of this project was to fine-tune two transformer models, namely DistilBERT and RoBERTa,
		and compare their effectiveness in fake news detection. Both models were trained on a labelled
		dataset of news articles and evaluated on two datasets, comparing their performance in terms of
		accuracy, precision, recall and F1-score. The results of the experiments showed that both models
		perform well, with RoBERTa achieving slightly better results overall. This project resulted in a
		paper that was published at the MIPRO Convention in Croatia.
	</p>
	<div
		slot="tech"
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
	<RadarChart
		slot="skills"
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
</ProjectPage>
