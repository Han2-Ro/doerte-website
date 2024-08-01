<script>
    import ComingSoon from "$lib/components/ComingSoon.svelte";
    import ContactForm from "$lib/contact/ContactForm.svelte";
    import Hero from "$lib/contact/Hero.svelte";
    import Pictures from "$lib/contact/Pictures.svelte";
</script>

<svelte:head>
    <title>Kontakt</title>
    <meta name="description" content="Kontaktinformationen von Dörte Brügmann">
</svelte:head>
<Hero />
<ContactForm />
<Pictures />