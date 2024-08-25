<script>
	import ProjectPage from '../../../components/project_page.svelte';
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
		The goal of this project was to fine-tune two transformer models, namely DistilBERT and RoBERTa,
		and compare their effectiveness in fake news detection. Both models were trained on a labelled
		dataset of news articles and evaluated on two datasets, comparing their performance in terms of
		accuracy, precision, recall and F1-score. The results of the experiments showed that both models
		perform well, with RoBERTa achieving slightly better results overall. This project resulted in a
		paper that was published at the MIPRO Convention in Croatia.
	</p>
</ProjectPage>
