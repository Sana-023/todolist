<script lang="ts">
	import Header from "$lib/Header.svelte";
	import {name} from "$lib/stores/name";

	name.update((name:string)=>{
		return name + "1";
	});

	console.log($name);

</script>
 
<div class="p-16 flex flex-col gap-8">
	<Header/>
	<div class="input-group input-group-divider flex justify-between rounded-2xl">
		<input class="flex-1" type="search" placeholder="Enter your tasks..." />
		<button class="variant-soft-secondary text-slate-100">Submit</button>
	</div>

</div>

