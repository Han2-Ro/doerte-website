<script>
    import Swan from "$lib/assets/swan.webp";
</script>

<section class="w-full h-[25rem] mb-20">
    <div
        class=" max-w-[80rem] h-full mx-auto flex items-center flex-col lg:flex-row p-lg relative"
    >
        <img
            src={Swan}
            alt="Ein Schwan mit einem Schwanenküken auf dem Rücken"
            class=" h-[15rem] w-[20rem] lg:h-[20rem] lg:w-[25rem] object-cover rounded-[50%] border-4 border-[#c1d1ec]"
        />
        <div
            class="p-sm shadow-md shadow-black/50 lg:max-w-[40rem] rounded-3xl bg-[#afc8fd] absolute -bottom-20 lg:right-lg font-handwriting"
        >
            <p class="text-lg lg:text-2xl text-center">
                “Safety is much more than the absence of threat, safety is the
                presence of connection.”
            </p>
            <p class=" text-base lg:text-xl italic text-center">
                - Stephen Porges
            </p>
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
