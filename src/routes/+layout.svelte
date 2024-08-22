<script>
	import '../app.css';
</script>

<body class="flex lg:inline">
	<nav class="bg-gray-800 text-white w-28 h-dvh min-h-full lg:h-auto lg:w-full">
		<ul class="lg:flex">
			<a href="/" class="lg:mr-auto"><li class="p-3 hover:bg-gray-700">Aleksandar Kitanovski</li></a
			>
			<a href="/skills"><li class="p-3 hover:bg-gray-700">Skills</li></a>
			<a href="/technologies"><li class="p-3 hover:bg-gray-700">Technologies</li></a>
			<a href="/projects"><li class="p-3 hover:bg-gray-700">Projects</li></a>
			<a href="/about-me"><li class="p-3 hover:bg-gray-700">About Me</li></a>
		</ul>
	</nav>

	<slot />
</body>
