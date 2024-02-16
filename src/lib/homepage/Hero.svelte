<script>
    import { fade } from "svelte/transition";
    let show_source = false;
</script>

<section
>
    <div
    class="h-[30rem] w-full bg-cover bg-center p-5 relative lg:pt-20"
    role="doc-cover"
    on:mouseenter={() => (show_source = true)}
    on:mouseleave={() => (show_source = false)}
    >
    {#if show_source}
        <p
        class="text-white py-1 px-2 bg-opacity-50 bg-black absolute bottom-0 right-0"
        transition:fade
        >
        Pixabay - von Max Mustermann
    </p>
    {/if}
    <div class="flex justify-center">
        <div
        class="p-5 max-w-[50rem] rounded-3xl bg-lime-900 absolute -bottom-16 text-white"
        >
        <p class="text-2xl">
            „Und der Tag kam, an dem das Risiko, fest in der geschlossenen
            Knospe zu bleiben, schmerzhafter wurde, als das Risiko, zu blühen.“
        </p>
        <p class="text-xl italic">- Anaïs Nin</p>
    </div>
</div>
</div>
</section>

<style>
    section {
        background-image: url($lib/assets/home-hero-bg-farn.webp);
    }
</style>
