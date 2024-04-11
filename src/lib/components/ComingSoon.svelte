<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        document.title = 'Coming Soon';
    });

    export let title: string;
</script>

<section>
    <div class="container mx-auto px-4 py-12">
        <h2 class="text-4xl font-bold text-center">{title}</h2>
        <p class="mt-3 text-xl text-center">Coming soon...</p>
    </div>
</section>