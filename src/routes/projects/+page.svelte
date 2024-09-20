<script>
	import Project from '../../components/project.svelte';
</script>

<div class="m-3 mb-20 lg:grid lg:grid-cols-2 lg:gap-4 lg:auto-rows-fr xl:grid-cols-3">
	<Project
		title="LLM System Development"
		duration="~6 months"
		company="GrabIT"
		href="https://www.grabit.io"
	>
		The goal of this project was developing a chatbot which utilized a Large Language Model which
		would replace an older chatbot system. The work on this project included analyzing and preparing
		datasets for fine-tuing LLMs, fine-tuinging and evaluatign LLMs, prompt engineering, backend
		development with FastAPI, continerization with Docker, setting up a vector database for
		Retreival Augmented Generation, setting up a MongoDB for keeping historical context, and using
		zero-shot classification transformers for evaluating the LLM output.
	</Project>
	<Project
		title="Chatbot Development"
		duration="~1 year"
		company="GrabIT"
		href="https://www.grabit.io"
	>
		The goal of this project was developing a chatbot which would lessen the workload of human
		agents doing the same job as the bot. The project included analyzing KPIs with Tableau and SQL,
		analyzing textual data with Python, as well as fine-tuning Transformer Models.
	</Project>
	<Project
		title="Time Series Anomaly Detection"
		duration="3 months"
		company="Init. (ex Nebb)"
		href="https://initgroup.com/"
	>
		The goal of this project was to develop a model for detecting anomalies in time series data,
		which would be used in a monitoring system. The project included analyzing and visualizing data
		with Pandas, Statsmodel and Seaborn, and building ML Models for anomaly detection using
		Scikit-learn.
	</Project>
	<Project
		title="Detecting Malware in Android Applications using XGBoost"
		duration="2 months"
		company="FINKI"
		href="https://www.finki.ukim.mk"
		paper="https://repository.ukim.mk/handle/20.500.12188/27385"
	>
		The omnipresence of Android devices and the amount of sensitive information kept in them makes
		detecting malware in Android applications crucial. In this paper, the efficacy of using machine
		learning models for the purpose of malware detection in Android applications was examined, and
		several XGBoost models were developed and compared - each with a distinct feature set. We used
		the f1 score, precision, recall, confusion matrices, and precision-recall curves to compare the
		models. Accuracy was not considered since we needed a balanced dataset. One of the models we
		developed, which used all the available features in the dataset, had encouraging results with
		high precision and recall.
	</Project>
	<Project
		title="DistilBERT and RoBERTa Models for Identification of Fake News"
		duration="1 month"
		company="FINKI"
		href="https://www.finki.ukim.mk"
		paper="https://repository.ukim.mk/bitstream/20.500.12188/28593/1/MIPRO2023_Mirceva_fake_news.pdf"
	>
		The goal of this project was to fine-tune two transformer models, namely DistilBERT and RoBERTa,
		and compare their effectiveness in fake news detection. Both models were trained on a labelled
		dataset of news articles and evaluated on two datasets, comparing their performance in terms of
		accuracy, precision, recall and F1-score. The results of the experiments showed that both models
		perform well, with RoBERTa achieving slightly better results overall. This project resulted in a
		paper that was published at the MIPRO Convention in Croatia.
	</Project>
	<Project
		title="logs2graphs: Data-driven graph representation and visualization of log data"
		duration="3 months"
		company="FINKI"
		href="https://www.finki.ukim.mk"
		paper="https://repository.ukim.mk/handle/20.500.12188/25690"
		repo="https://github.com/stefanandonov/log2graph"
		repo_name="log2graph"
	>
		The goal of this project was to develop a system which could create graph representations of
		system logs. These graph representations could then be used in logs anomaly detection, logs
		prediction, and root cause analysis guided by logs. Therefore in this paper, we present
		logs2graphs, an open-source system for the creation and visualization of such graph
		representations of log messages, which is compatible with several publicly available log sources
		and expandable to other log sources.
	</Project>
</div>
