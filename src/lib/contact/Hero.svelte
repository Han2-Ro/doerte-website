<script>
    import Poppies from "$lib/assets/swan.png";
</script>

<section class="w-full h-[25rem] mb-20">
    <div
        class=" max-w-[80rem] h-full mx-auto flex items-center flex-col lg:flex-row-reverse p-lg relative"
    >
        <img
            src={Poppies}
            alt="orangefarbene Mohnblumen"
            class=" h-[15rem] w-[20rem] lg:h-[20rem] lg:w-[25rem] object-cover rounded-[50%] border-4 border-[#c1d1ec]"
        />
        <div
            class="p-sm shadow-md shadow-black/50 lg:max-w-[50rem] rounded-3xl bg-lime-900 absolute -bottom-20 inset-x-sm lg:left-lg font-handwriting text-yellow-400"
        >
            <p class="text-lg lg:text-2xl text-center">
                “Safety is much more than the absence of threat, safety is the
                presence of connection.”
            </p>
            <p class=" text-base lg:text-xl italic text-center">- Stephen Porges</p>
        </div>
    </div>
</section>

<style>
    section {
        background-image: url($lib/assets/water.webp);
        background-size: cover;
        background-position: center;
    }
</style>
