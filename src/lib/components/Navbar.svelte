<script>
    import { getAllPages } from "$lib/data/pages";

    const pages = getAllPages();
</script>

<header>
    <nav class="p-10 pr-32">
        <ul class="flex justify-end gap-8">
            {#each pages as page}
                <li>
                    <a href={page.url} class=" text-2xl">{page.name}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header>
