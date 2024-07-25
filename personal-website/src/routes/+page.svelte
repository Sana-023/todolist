<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import SocialMedia from "$lib/components/SocialMedia.svelte";
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<div class="flex justify-end pb-[30rem] lg:pb-0">
    <div class="bg-secondary text-secondary-foreground  relative w-full lg:w-[60vw] min-h-[40vh] lg:min-h-[calc(100vh-10.5rem)] flex justify-center items-center pb-32">
        <div
            class=" bg-primary shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] h-[28rem]  w-[21rem] absolute  lg:start-10  lg:-translate-x-full  flex flex-col items-center justify-between pt-8 gap-2 self-bottom lg:self-start translate-y-[110%] lg:translate-y-[15%] max-w-[85vw] "
        >
            <img
                src="/favicon.png"
                class=" w-45 h-44 grayscale"
                alt="image profile"
            />

            <div class="flex flex-col items-center gap-8">
                <h1 class="font-bold text-3xl">Sana Meshal</h1>
                <hr class="w-24 border-2 border-background" />
                <h2 class="text-2xl">Software Engineering</h2>
            </div>
            <div class=" bg-background w-full flex justify-center p-1 mt-5">

                <SocialMedia />
                
            </div>
        </div>
        <div class="mx-10 max-w-[30rem] flex flex-col gap-8">
            <h1 class="text-8xl font-bold">
                Hello
            </h1>
            <h4 class="text-2xl">
                Here's who I am & what I do
            </h4>
            <div class="flex gap-2">
                <Button href="/resume" class="w-32 rounded-3xl">
                    Resume
                </Button>
                <Button href="/projects" variant="outline" class="w-32 rounded-3xl">
                    Projects
                </Button>

            </div>
            <div class="flex flex-col gap-3">
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur dolore, officia temporibus sunt a impedit rem ea aperiam minima odio mollitia. Aliquid facilis, tempore delectus quod dicta doloribus dolore.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quo saepe ullam aperiam iste quibusdam voluptatum est, delectus reiciendis dolorum eaque soluta recusandae, repudiandae, incidunt sit cupiditate minus commodi pariatur.
                </p>
            </div>
        </div>
    </div>
</div>
