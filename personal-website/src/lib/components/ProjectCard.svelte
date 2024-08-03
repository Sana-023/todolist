<script lang="ts">

    
    export let title: string;
    export let subtitle: string;
    export let imageSrc: string;

     
 
 </script>
 
 
 
 <div class="bg-secondary text-secondary-foreground  shadow-xl flex flex-col sm:flex-row gap-4 justify-between" >
    <div class="flex flex-col gap-16 pt-6  ">
        <div class="flex flex-col min-w-32 border-s-8 border-primary ps-6 "> 
            <span class=" font-bold text-primary text-xl">  {title} </span>
            <span class=" font-light-semibold ">  {subtitle} </span>
           
    
        </div>
        <div class="ps-6 pb-8"> 
            <slot />
   
        </div>
    
    </div>
    <img src={imageSrc} alt="project image" class="w-auto sm:w-64 object-cover" />
    </div>

    