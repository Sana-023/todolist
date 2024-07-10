<script lang="ts">
    import dayjs from "dayjs";
    import {tasks} from "$lib/stores/tasks";
    import relativeTime from "dayjs/plugin/relativeTime"
    import { getModalStore } from '@skeletonlabs/skeleton';
    import { slide } from 'svelte/transition';
			                   
    dayjs.extend(relativeTime);
    const modalStore = getModalStore();

    
    


    export let doneTask:boolean;
    function confirmDelete(task:Task){
        const modal: ModalSettings = {
	type: 'confirm',
	title: 'Are you sure you want to delete it?',
	body: 'The task will be deleted',
	
	response: (r: boolean) => {
      if(r){
        tasks.update((currentTasks)=>{
            let index = currentTasks.indexOf(task);
           currentTasks.splice(index,1);
            return currentTasks;

        });
      }  
    },
  };
    modalStore.trigger(modal);

    }
  </script>

{#each $tasks as task }
{#if task.isDone==doneTask}

<li 
transition:slide
class="bg-white p-2 lg:p-4 rounded-md flex justify-between items-center">
    <div>
      <input bind:checked={task.isDone} class="checkbox" type="checkbox" />
      <span class=" ml-2">{task.title}</span>
    </div>
    <div class="flex gap-1">
      <button class="btn bg-surface-100">
        {dayjs().to(dayjs(task.assignedDate))}
      </button>
      <button on:click={()=>confirmDelete(task)} 
      class="btn bg-surface-100 p-[0.7rem]">
        <svg
        class="w-5 h-5 text-surface-400-500-token"
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
         /></svg>
      </button>
    </div>
  </li>
 
{/if}    
 {/each}


