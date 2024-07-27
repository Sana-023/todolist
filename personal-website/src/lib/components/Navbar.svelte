<script>
    import Button from "./ui/button/button.svelte";
    import { page } from "$app/stores";
    import * as Sheet from "$lib/components/ui/sheet";
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import Title from "$lib/components/Title.svelte";

    const links = [
        {
            text: "About me",
            href: "/",
        },
        {
            text: "Resume",
            href: "/resume",
        },
        {
            text: "Projects",
            href: "/projects",
        },
        {
            text: "Contact",
            href: "/contact",
        },
    ];

    let isSheetOpen = false;
</script>

<header class=" bg-secondary text-secondary-foreground py-8 px-6">
    <nav class=" max-w-screen-2xl flex justify-between items-center mx-auto ">
        <a href="/" class="flex items-center gap-2">
           
            <div class="flex items-end gap-1">
                <Title title="Sana Meshal " class="text-3xl" />
                <span class="text-xl uppercase hidden sm:flex"> / Student </span>
            </div>
        </a>

        <div class="flex">
             <ThemeSwitch/>

            <!-- Large screen -->
            <div class="uppercase hidden lg:flex">
                {#each links as link}
                    <Button
                        class=" {$page.url.pathname == link.href &&
                            'text-primary'}"
                        href={link.href}
                        variant="link">{link.text}</Button
                    >
                {/each}
            </div>

            <!--Small screen  -->
            <Sheet.Root bind:open={isSheetOpen}>
                <Sheet.Trigger class="flex lg:hidden">
                    <Button variant="ghost" size="icon">
                        <svg
                            class="h-6 w-6 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            ><path
                                fill="currentColor"
                                d="M7 5h14v2H7zm0 8v-2h14v2zM4 4.5A1.5 1.5 0 0 1 5.5 6A1.5 1.5 0 0 1 4 7.5A1.5 1.5 0 0 1 2.5 6A1.5 1.5 0 0 1 4 4.5m0 6A1.5 1.5 0 0 1 5.5 12A1.5 1.5 0 0 1 4 13.5A1.5 1.5 0 0 1 2.5 12A1.5 1.5 0 0 1 4 10.5M7 19v-2h14v2zm-3-2.5A1.5 1.5 0 0 1 5.5 18A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18A1.5 1.5 0 0 1 4 16.5"
                            /></svg
                        >
                    </Button>
                </Sheet.Trigger>
                <Sheet.Content class="flex flex-col justify-center ">
                    {#each links as link}
                        <Button
                            class="text-md {$page.url.pathname == link.href &&
                                'text-primary'}"
                            href={link.href}
                            variant="link"
                            on:click={() => (isSheetOpen = false)}
                            >{link.text}
                        </Button>
                    {/each}
                </Sheet.Content>
            </Sheet.Root>

           
        </div>
    </nav>
</header>
