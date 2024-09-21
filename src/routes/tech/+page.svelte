<script>
	import BarChart from '../../components/bar_chart.svelte';
	import ChartCard from '../../components/chart_card.svelte';
</script>

<div class="m-3 mb-20 lg:grid lg:grid-cols-2 lg:gap-4 lg:auto-rows-fr xl:grid-cols-3">
	<ChartCard title="Programming Languages">
		<BarChart
			data={[
				{ technology: 'Python', confidence: 10 },
				{ technology: 'JavaScript', confidence: 8 },
				{ technology: 'TypeScript', confidence: 7 },
				{ technology: 'Rust', confidence: 6 },
				{ technology: 'HTML & CSS', confidence: 5 },
				{ technology: 'C/C++', confidence: 4 },
				{ technology: 'Clojure', confidence: 3 }
			]}
		/>
	</ChartCard>
	<ChartCard title="Frameworks & Libraries">
		<BarChart
			data={[
				{ technology: 'Scikit Learn (Python)', confidence: 9 },
				{ technology: 'FastAPI (Python)', confidence: 8 },
				{ technology: 'TailwindCSS (CSS)', confidence: 8 },
				{ technology: 'HTMX (HTML)', confidence: 7 },
				{ technology: 'Pytorch (Python)', confidence: 6 },
				{ technology: 'Svelte (JS/TS)', confidence: 5 },
				{ technology: 'Actix (Rust)', confidence: 4 }
			]}
		/>
	</ChartCard>
	<ChartCard title="Databases">
		<BarChart
			data={[
				{ technology: 'PostgreSQL', confidence: 8 },
				{ technology: 'MongoDB', confidence: 8 },
				{ technology: 'MariaDB', confidence: 7 },
				{ technology: 'ChromaDB', confidence: 6 },
				{ technology: 'Neo4J', confidence: 5 },
				{ technology: 'Transact-SQL', confidence: 4 }
			]}
		/>
	</ChartCard>
	<ChartCard title="BI Tools">
		<BarChart
			data={[
				{ technology: 'Tableau', confidence: 9 },
				{ technology: 'PowerBI', confidence: 5 },
				{ technology: 'Apache Superset', confidence: 3 }
			]}
		/>
	</ChartCard>
	<ChartCard title="Data Engineering Tools">
		<BarChart
			data={[
				{ technology: 'Mage AI', confidence: 6 },
				{ technology: 'Apache Airflow', confidence: 5 },
				{ technology: 'Apache Spark', confidence: 3 },
				{ technology: 'Apache Flink', confidence: 2 }
			]}
		/>
	</ChartCard>
	<ChartCard title="Other">
		<BarChart
			data={[
				{ technology: 'Git', confidence: 7 },
				{ technology: 'Docker', confidence: 6 },
				{ technology: 'Bash', confidence: 5 },
				{ technology: 'Powershell', confidence: 4 },
				{ technology: 'Kubernetes', confidence: 2 }
			]}
		/>
	</ChartCard>
</div>
