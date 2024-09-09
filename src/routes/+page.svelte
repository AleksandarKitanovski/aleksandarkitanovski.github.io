<script lang="ts">
	import List from '../components/list.svelte';
	import ListItem from '../components/list_item.svelte';
	import Lolipop from '../components/lolipop.svelte';
	import LolipopBottom from '../components/lolipop_bottom.svelte';
	import LolipopChart from '../components/lolipop_chart.svelte';
	import LolipopSpacer from '../components/lolipop_spacer.svelte';
</script>

<div class="md:hidden">
	<List>
		<ListItem title="Sep, 1999 - Landed on Earth">
			Right before Krypton was destroyed, my parents loaded me up in an escape pod and sent me to
			Earth, along with my cousin Kal-El (you might know him as Clark Kent). While Clark decided to
			be Superman, I decided to be a super programmer.
		</ListItem>
		<ListItem title="Sep, 2005 - Started Elementary School">
			Playing Super Mario among other games on a NES was my first introduction to gaming, and what
			originally drew me towards programming as a career. This was also around the time I got my
			first computer, and with more games came more curiosity - why not learn how to make them
			myself one day?
		</ListItem>
		<ListItem title="Sep, 2010 - Started Middle School">
			During this time I got access to the internet, and started figuring out how to write batch
			scripts on Windows XP, after a while I discovered C++ and started teaching myself programming.
			I was having more fun than I could imagine.
		</ListItem>
		<ListItem title="Sep, 2014 - Started High School"></ListItem>
		<ListItem title="Oct, 2018 - Started College"></ListItem>
		<ListItem title="Jul, 2021 - Started an Internship at Nebb"></ListItem>
		<ListItem title="Mar, 2022 - Started Working at GrabIT"></ListItem>
		<ListItem title="Apr, 2023 - Graduated from college"></ListItem>
		<ListItem title="May, 2024 - Started Working at Ludotech"></ListItem>
	</List>
</div>
<LolipopChart>
	<div slot="top" class="flex justify-between mt-10 px-10">
		<Lolipop
			title="Landed on Earth"
			date="Sep, 1999"
			border_color="border-red-600"
			bg_color="bg-red-600"
		/>
		<LolipopSpacer />
		<Lolipop
			title="Started Middle School"
			date="Sep, 2010"
			border_color="border-red-300"
			bg_color="bg-red-300"
		/>
		<LolipopSpacer />
		<Lolipop
			title="Started College"
			date="Sep, 2018"
			border_color="border-yellow-500"
			bg_color="bg-yellow-500"
		/>
		<LolipopSpacer />
		<Lolipop
			title="Started Working at GrabIT"
			date="Mar, 2022"
			border_color="border-blue-400"
			bg_color="bg-blue-400"
		/>
		<LolipopSpacer />
		<Lolipop
			title="Started Working at Ludotech"
			date="May, 2024"
			border_color="border-blue-800"
			bg_color="bg-blue-800"
		/>
	</div>
	<div slot="bottom" class="flex justify-between mb-10 px-10">
		<LolipopSpacer />
		<LolipopBottom
			title="Started Elementary School"
			date="Sep, 2005"
			border_color="border-red-400"
			bg_color="bg-red-400"
		/>
		<LolipopSpacer />
		<LolipopBottom
			title="Started High School"
			date="Sep, 2014"
			border_color="border-yellow-300"
			bg_color="bg-yellow-300"
		/>
		<LolipopSpacer />
		<LolipopBottom
			title="Started an Internship at Nebb"
			date="Jul, 2021"
			border_color="border-yellow-300"
			bg_color="bg-yellow-300"
		/>
		<LolipopSpacer />
		<LolipopBottom
			title="Graduated from college"
			date="Apr, 2023"
			border_color="border-blue-600"
			bg_color="bg-blue-600"
		/>
		<LolipopSpacer />
	</div>
</LolipopChart>
