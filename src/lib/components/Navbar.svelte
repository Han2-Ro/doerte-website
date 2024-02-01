<script>
    import { getAllPages } from "$lib/data/pages";
    import logo from "$lib/assets/logo.png";

    const pages = getAllPages();
</script>

<header class="bg-white w-full">
    <nav class="py-4 px-28 flex items-center justify-between">
        <a href="/" class="flex items-center">
            <img src={logo} alt="Logo" class="h-20" />
            <p class="text-xl">Dörte Brügmann</p>
        </a>
        <ul class="flex gap-8">
            {#each pages as page}
                <li>
                    <a href={page.url} class=" text-2xl">{page.name}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header>
