<script>
    import Poppies from "$lib/assets/poppies.webp";

    let show_source = false;
</script>

<section class="flex items-center flex-col w-full h-[25rem] p-5 mb-20 relative">
    <img
        src={Poppies}
        alt="orangefarbene Mohnblumen"
        class=" h-[15rem] w-[20rem] object-cover rounded-[50%] border-2 border-dark-green"
    />
    <div
        class="p-5 border-0 shadow-md shadow-black/50 border-light-green-20 max-w-[50rem] rounded-3xl bg-lime-900 absolute -bottom-20 inset-x-5 font-handwriting text-yellow-400"
    >
        <p class="text-lg lg:text-2xl text-center">
            „Und der Tag kam, an dem das Risiko, fest in der geschlossenen
            Knospe zu bleiben, schmerzhafter wurde, als das Risiko, zu blühen.“
        </p>
        <p class="text-xl italic text-center">- Anaïs Nin</p>
    </div>
</section>

<style>
    section {
        background-image: url($lib/assets/home-hero-bg-farn.webp);
        background-size: cover;
    }
</style>
