<script>
    import SocialMedia from "./SocialMedia.svelte";

</script>
<footer class=" bg-secondary text-secondary-foreground py-2 px-6">
    <div class=" max-w-screen-2xl flex justify-between items-center mx-auto ">
        <span>
            © {(new Date()).getFullYear()} 
        </span>

       <div class="flex gap-16">
        <span class="flex flex-col items-center">
            <span class="font-bold">Call</span> 
            <a href="tel:0599916010">0599916010</a> 
         </span>
         <span class="flex flex-col items-center">
             <span class="font-bold">Email</span> 
             <a href="mailto:snoo6586@gmail.com">snoo6586@gmail.com</a> 
          </span>
          <span class="flex items-end " >            
             <SocialMedia />
          </span>
       </div>
    </div>
</footer>