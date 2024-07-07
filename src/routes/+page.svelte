<script lang="ts">
	import Header from "$lib/Header.svelte";
	import {tasks} from "$lib/stores/tasks";
	import dayjs from "dayjs";

	let title="";

	function addTask(){
		tasks.update((currentTasks)=> {
			currentTasks.push({
				title,
				assignedDate:dayjs(),
				isDone: false,
			});
			
			return currentTasks;

		});
		title = "";
	}

</script>
 
<div class="p-16 flex flex-col gap-8">
	<Header/>
	<div class="input-group input-group-divider flex justify-between rounded-2xl">
		<input bind:value={title} class="flex-1" type="search" placeholder="Enter your tasks..." />
		<button on:click={addTask} class="variant-soft-secondary text-slate-100">Submit</button>
	</div>

</div>

