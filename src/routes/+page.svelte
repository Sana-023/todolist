<script lang="ts">
	import dayjs from 'dayjs'

	let period = dayjs().format('a')=='pm'? 'evening':'morning';
</script>


<div class="p-16">
	<header class ="flex justify-between">
		<div>
			<h1 class="text-4xl mb-2">
				Good {period}
			</h1>
			<h2 class="text-surface-600/50">
				{dayjs().format(' dddd D MMMM YYYY')}
			</h2>
		</div>
		<div class="bg-white w-32 h-14"></div>
	</header>
</div>

