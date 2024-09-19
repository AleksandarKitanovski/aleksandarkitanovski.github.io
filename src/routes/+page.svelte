<script lang="ts">
	import Carousel from '../components/carousel.svelte';
</script>

<Carousel
	slides={[
		{
			title: 'Landed on Earth',
			text: `Right before my home planet was destroyed,
			my parents put me in an escape pod and sent me to Earth.
			I'm not a super hero tho, that's Kal-El, he was my neighbour
			on Krypton - and like every good neighbour's kid he always has
			to one up me...`,
			date: 'September, 1999',
			img: '/space.png'
		},
		{
			title: 'Elementary School',
			text: `Playing Super Mario among other games on a NES was my first introduction to gaming, and what
    		originally drew me towards programming as a career. This was also around the time I got my
    		first computer, and with more games came more curiosity - why not learn how to make them
    		myself one day?`,
			date: 'September, 2005 - June, 2010',
			img: '/elementary.jpg'
		},
		{
			title: 'Middle School',
			text: `During this time I got access to the internet, and started figuring out how to write batch
			scripts on Windows XP, after a while I discovered C++ and started teaching myself programming.
			I was having more fun than I could imagine.`,
			date: 'September, 2010 - June, 2014',
			img: '/middle.jpg'
		},
		{
			title: 'High School',
			text: `As I was getting more serious about programming, I found out I'll need to learn math. The
			more math I learned the more I wanted to learn, I loved it. I also went on a few programming competitions
			and found out how much more there was to learn about algorithms, data structures and whatnot...`,
			date: 'September, 2014 - June, 2018',
			img: '/high.jpg'
		},
		{
			title: 'College',
			text: `I studied Computer Science at FINKI, taking every math elective I could get my hands on. Naturally
			my focus was mostly on applied math, data science and artificial intelligence. My graduating thesis was
			"Comparison of turbo codes with random codes based on quasigroups for transmission through a Gaussian channel".`,
			date: 'October, 2018 - April, 2023',
			img: '/college.jpg'
		},
		{
			title: 'Internship at Nebb',
			text: `I did a three month Machine Learning internship at Nebb (now called Init.). The project I worked on
			was anomaly detection on time series data using unsupervised machine learning models. This was the first time
			I got to apply my skills in real world settings.`,
			date: 'July, 2021 - October , 2023',
			img: '/nebb.jpg'
		},
		{
			title: 'Joined GrabIT',
			text: `I got my first job at GrabIT, where I worked for around 2 years as a data scientist. Most of the
			work I did here was in chat-bot development, at first using Transformer models and text classification, and
			then we upgraded to Large Language Models.`,
			date: 'March, 2022 - April, 2024',
			img: '/grabit.jpg'
		},
		{
			title: 'Joined Ludotech',
			text: `When the time to change pace came, I decided to try my hand at something different entirely - I
			started working at Ludotech as a web developer, where I make websites using Rust, HTMX and TailwindCSS.`,
			date: 'May, 2024 - Present',
			img: '/ludotech.jpg'
		}
	]}
/>
