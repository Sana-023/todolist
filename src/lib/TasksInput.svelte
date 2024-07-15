<script lang="ts">
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";

  let title = "";
  let dataTime= dayjs().add(1,"hour").format('YYYY-MM-DDTHH:mm');

  function addTask() {
    tasks.update((currentTasks) => {
      currentTasks.push({
        title,
        assignedDate: dataTime,
        isDone: false,
      });

      return currentTasks.sort((a:Task, b:Task)=>{
       return dayjs(a.assignedDate).unix()- dayjs(b.assignedDate).unix();
      });
    });
    title="";
    
  }
</script>

<form 
  class="input-group input-group-divider flex flex-col sm:flex-row justify-between  ">
  <input
    bind:value={title}
    class="flex-1"
    type="search"
    placeholder="Enter your tasks..."
  />
  <input
  bind:value={dataTime}
  class="input sm:w-fit" title="Input (datetime-local)" type="datetime-local" 
  />
  <button type="submit" on:click={addTask} class="variant-soft-secondary text-slate-100 p-2"disabled={title.trim().length==0} >
    <span class="mx-auto" >Submit</span>

    </button>
  </form>
