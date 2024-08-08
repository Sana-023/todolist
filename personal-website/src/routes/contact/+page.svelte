<script>
    import Container from "$lib/components/Container.svelte";
    import Title from "$lib/components/Title.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import  Input  from "$lib/components/ui/input/input.svelte";
    import  Label  from "$lib/components/ui/label/label.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
</script>

<Container class=" flex flex-col gap-16">
    <Title title="Let's Talk" />

   <form 
   action="https://formsubmit.co/snoo6586@gmail.com"
   method="POST"
   class=" bg-secondary text-secondary-foreground p-8 flex flex-col gap-8" >

    <div>
        <Label for="name">Full Name</Label>
        <Input required name="name" id="name" placeholder="write your name" />
    </div>
    <div>
        <Label for="email">Email</Label>
        <Input required type="email" name="email" id="email" placeholder="name@example.com" />
    </div>
    <div>
        <Label for="subject">Subject</Label>
        <Input required name="subject" id="subject" placeholder="Type the subject" />
    </div>
    <div>
        <Label for="message">Message</Label>
        <Textarea required name="message" id="message" placeholder="Enter your message here" />
    </div>

    <Button class="rounded-2xl max-w-32" type="submit"> 

       SEND

    </Button>

   </form>

</Container>