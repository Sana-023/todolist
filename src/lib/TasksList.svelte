<script lang="ts">
  import dayjs from "dayjs";
  import {tasks} from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime"
  import TaskListItem from "$lib/TaskListItem.svelte";

  dayjs.extend(relativeTime);
</script>

<ol class="gap-2 flex flex-col">
    <h3> Remaining tasks: </h3>
   <TaskListItem doneTask={false}/>
</ol>

<ol class="gap-2 flex flex-col">
    <h3> Completed tasks:</h3>
    <TaskListItem doneTask={true}/>
</ol>
