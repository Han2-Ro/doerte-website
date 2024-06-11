<script>
    import Poppies from "$lib/assets/poppies.webp";
</script>

<section class="w-full h-[25rem] mb-20">
    <div
        class=" max-w-[80rem] mx-auto flex items-center flex-col lg:flex-row-reverse px-sm pt-lg lg:p-lg relative"
    >
        <img
            src={Poppies}
            alt="orangefarbene Mohnblumen"
            class=" h-[15rem] w-[20rem] lg:h-[20rem] lg:w-[25rem] object-cover rounded-[50%] border-2 border-dark-green"
        />
        <div
            class="p-sm shadow-md shadow-black/50 lg:max-w-[50rem] rounded-3xl bg-lime-900 absolute -bottom-20 inset-x-sm lg:left-lg font-handwriting text-yellow-400"
        >
            <p class="text-lg lg:text-2xl text-center">
                „Und der Tag kam, an dem das Risiko, fest in der geschlossenen
                Knospe zu bleiben, schmerzhafter wurde, als das Risiko, zu
                blühen.“
            </p>
            <p class=" text-base lg:text-xl italic text-center">- Anaïs Nin</p>
        </div>
    </div>
</section>

<style>
    section {
        background-image: url($lib/assets/home-hero-bg-farn.webp);
        background-size: cover;
        background-position: center;
    }
</style>
