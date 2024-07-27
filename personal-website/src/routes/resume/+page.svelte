<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import ResumeCard from "$lib/components/ResumeCard.svelte";
    import Title from "$lib/components/Title.svelte";
    import Container from "$lib/components/Container.svelte";


</script>
   <Container >
    <Title title="Resume" />
    

     <div class="pt-16 flex flex-col gap-8">
           <div class="flex justify-between items-center">
            <span class="text-xl font-medium">Education</span>
            <Button class="rounded-3xl text-md"> Download CV</Button>
        </div>
        <ResumeCard 
        data="2023 - 2026" 
        title="Software Engineering Bachelor" 
        company="Umm Al-Qura University">

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti distinctio nemo eum. Sint, dolor praesentium porro ea pariatur amet similique, saepe adipisci, dolorum cum modi? Ut ipsam distinctio ipsa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti distinctio nemo eum.

        </ResumeCard> 

        

        </div>  
   </Container>
