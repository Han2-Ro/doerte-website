<script>
    import { getAllPages } from "$lib/data/pages";
    import logo from "$lib/assets/logo.png";

    const pages = getAllPages();

    let menuOpen = false;

    const openMenu = () => {
        menuOpen = !menuOpen;
    };

    const closeMenu = () => {
        menuOpen = false;
    };
</script>

<header class=" sticky top-0 z-20 bg-white w-full">
    <nav class=" py-1 px-md flex items-center justify-between">
        <a href="/" class=" mr-10 flex gap-sm items-center">
            <img src={logo} alt="Logo" class="h-10 lg:h-20" />
            <div>
                <p class="text-xl font-handwriting text-logo-purple">Dörte Brügmann</p>
                <p class="text-sm text-logo-purple">Praxis für Körperarbeit und Traumatherapie</p>
            </div>
        </a>
        <!-- Desktop menu -->
        <ul class="hidden lg:flex gap-md">
            {#each pages as page}
                <li>
                    <a href={page.url} class=" ">{page.name}</a>
                </li>
            {/each}
        </ul>
        <!-- Mobile menu -->
        <div class="flex lg:hidden">
            <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-green"
                on:click={openMenu}
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
        </div>
        {#if menuOpen}
            <div
                class="lg:hidden fixed inset-y-0 right-0 z-10 p-5 overflow-y-auto bg-white shadow-xl"
            >
                <button type="button" on:click={closeMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <ul class="">
                    {#each pages as page}
                        <li class="text-2xl mt-sm">
                            <a
                                href={page.url}
                                on:click={closeMenu}
                                >{page.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </nav>
</header>
