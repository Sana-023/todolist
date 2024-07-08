<script lang="ts">
  import Header from "$lib/Header.svelte";
  import TasksInput from "$lib/TasksInput.svelte";
  import TasksList from "$lib/TasksList.svelte";
</script>

<div
  class="p-2 sm:p-4 pt-8 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-8 max-w-screen-lg mx-auto"
>
  <Header />
  <TasksInput />
  <TasksList/>

  
</div>
