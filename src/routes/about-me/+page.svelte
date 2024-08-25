<script>
	import Card from '../../components/card.svelte';
	function copyMail() {
		navigator.clipboard.writeText('kitanovski.aleksandar@yahoo.com');
		alert('Mail coppied');
	}
</script>

<div class="m-3 xl:flex xl:justify-between xl:mt-10">
	<Card title="Career Summary">
		I have a bachelors degree in Computer Science from FCSE, and 2 years work experience as a Data
		Scientist. I love to learn and apply my knowledge, I like working in collaborative environments
		and I am a great team player. The focus of my studies was mostly Data Science and Applied
		Mathematics, while my work experience includes chat-bot development and data analysis (at
		GrabIT) and developing systems for time series anomaly detection (at Nebb). During my studies at
		FCSE I also published three research papers, two of them at the CiiT Conference in Macedonia,
		and one at the MIPRO Convention in Croatia.
	</Card>
	<Card title="Hobbies">
		I have several hobbies that keep life exciting and fulfilling. I'm an avid gamer, immersing
		myself in virtual worlds and challenging adventures. I also love reading, which offers an escape
		into captivating narratives and thought-provoking ideas. Chess is something I've loved to play
		ever since I was a child, I'm not very good at it, but the game is very dear to me. Programming
		is both a profession and a passion, ever since I wrote my first "Hello, world!" more than 10
		years ago.
	</Card>
	<Card title="Contact">
		You can contact me by E-mail or LinkedIn, also feel free to look around my github:
		<ul class="flex flex-col p-3 m-3 list-disc">
			<li class="m-3">
				LinkedIn: <a
					href="https://www.linkedin.com/in/aleksandar-kitanovski/"
					class="text-orange-600 hover:text-orange-400">Aleksandar Kitanovski</a
				>
			</li>
			<li class="m-3">
				Github: <a
					href="https://github.com/AleksandarKitanovski"
					class="text-orange-600 hover:text-orange-400">AleksandarKitanovski</a
				>
			</li>
			<li class="m-3">
				E-mail:
				<button class="text-orange-600 hover:text-orange-400" on:click={copyMail}>
					kitanovski.aleksandar@yahoo.com
				</button>
			</li>
		</ul>
	</Card>
</div>
