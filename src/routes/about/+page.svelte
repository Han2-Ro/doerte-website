<script>
    import Education from "$lib/about/Education.svelte";
    import Hero from "$lib/about/Hero.svelte";
    import Introduction from "$lib/about/Introduction.svelte";
    import Logo from "$lib/assets/logo-with-txt.png";
</script>

<svelte:head>
    <title>Über mich</title>
</svelte:head>
<Hero />
<Introduction />
<img class=" px-sm max-h-[15rem] mx-auto" src={Logo} alt="Logo" />
<Education />
