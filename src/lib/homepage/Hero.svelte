<script>
    import { fade } from "svelte/transition";
    import Poppies from "$lib/assets/poppies.webp";

    let show_source = false;
</script>

<section
>
    <div
    class="h-[30rem] w-full bg-cover bg-center p-10 relative"
    role="doc-cover"
    on:mouseenter={() => (show_source = true)}
    on:mouseleave={() => (show_source = false)}
    >
    <div class=" h-full flex flex-col justify-center">
        <img src={Poppies} alt="orangefarbene Mohnblumen" class="absolute right-24 h-[25rem] rounded-[50%] border-4 border-dark-green">
    </div>
        <div
        class="p-5 border-2 border-light-green-20 max-w-[50rem] rounded-3xl bg-lime-900 absolute -bottom-16 text-white"
        >
        <p class="text-2xl text-center text-yellow-400">
            „Und der Tag kam, an dem das Risiko, fest in der geschlossenen
            Knospe zu bleiben, schmerzhafter wurde, als das Risiko, zu blühen.“
        </p>
        <p class="text-xl italic text-center text-yellow-400">- Anaïs Nin</p>
    </div>
</div>
</section>

<style>
    section {
        background-image: url($lib/assets/home-hero-bg-farn.webp);
    }
</style>
