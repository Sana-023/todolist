<script lang="ts">

   export let data: string;
   export let title: string;
   export let company: string;
    //let description: string;

</script>



<div class="bg-secondary p-8 shadow-xl flex flex-col sm:flex-row  gap-16" >
    <div class="flex flex-col min-w-48"> 
        <span class="text-primary font-bold"> {data} </span>
        <span class=" font-bold">  {title} </span>
        <span>{company} </span>

    </div>
    <div> 
        <slot />
      

    </div>

   </div>