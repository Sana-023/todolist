<script>
    import Container from "$lib/components/Container.svelte";
    import Title from "$lib/components/Title.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
     

</script>
<Container class="flex flex-col gap-16" >
    <Title title="Projects" />
   

    <ProjectCard 
    title="Calculator "
     subtitle="Calculating simple equations" 
     imageSrc= "/project1.png">
    
     <ul class="list-disc ps-2  ">
        <li>
            Clear and simple design: Displays numbers and results in a clear and easy-to-read manner.
        </li>
        <li>
            The ability to perform basic operations such as addition, subtraction, multiplication, and division.

        </li>
        
        <li >
            No Complexity: Designed only for simple calculations. 
        </li>
    
     </ul>
     
     <a class=" text-4xl" href="https://velvety-cucurucho-698df7.netlify.app/" target="_blank" >
        <Button class=" rounded-2xl w-20">Try it!</Button>
    </a>

     

         
     

   

   
    </ProjectCard>


    

    <ProjectCard 
    title="To-Do List "
     subtitle="to write down daily tasks" 
     imageSrc= "/project2.png">
    
     <ul class="list-disc ps-2 ">
        <li>
            Task Addition: Provides a field for entering tasks and their details, such as titles, descriptions, and due dates.
        </li>
        <li>
            Task Editing and Deletion: Allows users to modify details or delete unnecessary or completed tasks.

        </li>
        
     </ul>

     <a class=" text-4xl" href="https://todolistsana.netlify.app/" target="_blank" >
        <Button class=" rounded-2xl w-20">Try it!</Button>
    </a>
    </ProjectCard>


</Container>



