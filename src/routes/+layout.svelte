<script>
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
</script>

<Navbar />
<main>
    <slot />
</main>
<Footer />
