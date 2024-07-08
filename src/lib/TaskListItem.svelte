<script lang="ts">
    import dayjs from "dayjs";
    import {tasks} from "$lib/stores/tasks";
    import relativeTime from "dayjs/plugin/relativeTime"
    
    dayjs.extend(relativeTime);

    export let doneTask:boolean;
  </script>

{#each $tasks as task }
{#if task.isDone==doneTask}

<li class="bg-white p-2 lg:p-4 rounded-md flex justify-between items-center">
    <div>
      <input bind:checked={task.isDone} class="checkbox" type="checkbox" />
      <span class=" ml-2">{task.title}</span>
    </div>
    <div class="flex gap-1">
      <button class="btn bg-surface-100">
        {dayjs().to(dayjs(task.assignedDate))}
      </button>
      <button class="btn bg-surface-100 p-[0.7rem]">
        <svg
          class="w-5 h-5 rotate-90 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
          /></svg
        >
      </button>
    </div>
  </li>
 
{/if}    
 {/each}


