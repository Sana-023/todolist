<script lang="ts">
  import dayjs from "dayjs";
  import {tasks} from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime"
  import TaskListItem from "$lib/TaskListItem.svelte";
    import { fade } from "svelte/transition";

  dayjs.extend(relativeTime);
</script>

{#if $tasks.length == 0}
<div class="flex items-center justify-center h-[50dvh] text-md text-surface-400">There are no tasks</div>

{:else}
{#if $tasks.filter((task) => !task.isDone).length > 0}
  
<ol transition:fade class="gap-2 flex flex-col">
    <h3> Remaining tasks: </h3>
   <TaskListItem doneTask={false}/>
</ol>

{/if}

{#if $tasks.filter((task) => task.isDone).length > 0}

<ol transition:fade class="gap-2 flex flex-col">
  <h3> Completed tasks:</h3>
  <TaskListItem doneTask={true}/>
</ol>

{/if}
{/if}
 




