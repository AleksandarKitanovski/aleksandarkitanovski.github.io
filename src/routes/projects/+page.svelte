<script>
	import Project from '../../components/project.svelte';
</script>

<div class="m-3 mb-20 lg:grid lg:grid-cols-2 lg:gap-4 lg:auto-rows-fr xl:grid-cols-3">
	<Project
		title="AI-Powered Sales Call Analysis Software"
		duration="Ongoing (since 2024)"
		company="Ludotech"
		href="https://www.ludotech.co/en"
	>
		Worked od software for sales teams that automatically records calls, generates transcripts and
		summaries, and extracts key insights using AI. The system is integrated with CRM platforms and
		online meeting tools like Google Meet and Microsoft Teams to streamline workflow and improve
		data accessibility.
	</Project>
	<Project
		title="User Management Platform"
		duration="~6 months"
		company="Ludotech"
		href="https://www.ludotech.co/en"
	>
		Helped develop a user management platform for an analytics company, providing secure account
		creation, role-based access control, and team management features. Integrated the system with
		Power BI to deliver interactive dashboards, enabling users to directly access and explore
		analyst-created reports within the platform.
	</Project>
	<Project
		title="LLM-Powered Chatbot Platform"
		duration="~6 months"
		company="GrabIT"
		href="https://www.grabit.io"
	>
		Developed a next-generation chatbot to replace a legacy system, leveraging large language models
		for improved responses. Responsibilities included dataset preparation, fine-tuning and
		evaluating LLMs, and prompt engineering. Built the backend with FastAPI, containerized with
		Docker, and integrated MongoDB for conversation history. Implemented a vector database to enable
		Retrieval-Augmented Generation and applied zero-shot classification transformers for automated
		output evaluation.
	</Project>
	<Project
		title="Chatbot Development"
		duration="~1 year"
		company="GrabIT"
		href="https://www.grabit.io"
	>
		Helped develop a chatbot designed to reduce the workload of human agents by automating routine tasks.
		The project involved analyzing KPIs with Tableau and SQL, performing text analysis with Python,
		and fine-tuning Transformer models to improve response quality and coverage.
	</Project>
	<Project
		title="Time Series Anomaly Detection"
		duration="3 months"
		company="Init. (ex Nebb)"
		href="https://initgroup.com/"
	>
		Worked on a model to detect anomalies in time series data for use in a monitoring system.
		Analyzed and visualized datasets using Pandas, Statsmodels, and Seaborn, and built machine
		learning models for anomaly detection with Scikit-learn to identify unusual patterns and trends.
	</Project>
	<Project
		title="Detecting Malware in Android Applications using XGBoost"
		duration="2 months"
		company="FINKI"
		href="https://www.finki.ukim.mk"
		paper="https://repository.ukim.mk/handle/20.500.12188/27385"
	>
		Developed and evaluated machine learning models to detect malware in Android applications,
		focusing on maximizing precision and recall. Built and compared multiple XGBoost models using
		different feature sets, analyzing performance with F1 score, precision, recall, confusion
		matrices, and precision-recall curves. The most comprehensive model, leveraging all available
		features, achieved strong results in identifying malicious apps.
	</Project>
	<Project
		title="DistilBERT and RoBERTa Models for Identification of Fake News"
		duration="1 month"
		company="FINKI"
		href="https://www.finki.ukim.mk"
		paper="https://repository.ukim.mk/bitstream/20.500.12188/28593/1/MIPRO2023_Mirceva_fake_news.pdf"
	>
		Fine-tuned and compared DistilBERT and RoBERTa models for fake news detection using a labeled
		dataset of news articles. Evaluated model performance on multiple datasets with accuracy,
		precision, recall, and F1-score metrics, with RoBERTa achieving slightly superior results. The
		work culminated in a research paper published at the MIPRO Convention in Croatia.
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
		Helped develop an open-source system, Logs2Graphs, to create graph representations of system
		logs for anomaly detection, log prediction, and root cause analysis. The system supports
		multiple publicly available log sources and is designed to be easily extended to additional
		sources, enabling structured visualization and analysis of log data.
	</Project>
</div>
