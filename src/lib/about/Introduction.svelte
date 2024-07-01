<script>
    import Portrait from "$lib/assets/portrait.webp";
</script>

<section class=" max-w-[80rem] mx-auto flex flex-col lg:flex-row-reverse py-xl">
    <div
        id="quote"
        class="lg:w-2/5 lg:flex flex-col-reverse hidden p-10 pb-20"
    >
        <div
            class=" p-5 rounded-3xl bg-[#292d38a2] text-white font-handwriting text-center"
        >
            <p class=" text-xl leading-relaxed pb-5">
                Stress is always an invitation, either to integrate unconscious
                material that creates difficulties in our life, or to develop
                new capacities. Stress is an opportunity to change, develop and
                grow.
            </p>
            <p class="text-lg">- Thomas Hübl</p>
        </div>
    </div>
    <div class="px-sm lg:w-3/5">
        <img
            class=" mr-sm float-left w-[10rem] lg:w-auto"
            src={Portrait}
            alt="Ein Portrait von Dörte Brügmann"
        />
        <h2 class=" pb-xs text-2xl font-handwriting italic text-logo-purple">
            Hallo, schön, dass Sie hier sind
        </h2>
        <p class="pb-sm">
            Ich bin Dörte Brügmann, Physiotherapeutin und Heilpraktikerin für
            Psychotherapie.
        </p>
        <p class="pb-sm">
            Ich bin verheiratet und habe drei inzwischen erwachsene Kinder.
        </p>
        <p class="pb-sm">
            Seit 1989 arbeite ich als Physiotherapeutin. In der Begleitung und
            Behandlung meiner Patienten habe ich immer wieder auch die
            wechselseitigen Beziehungen zwischen innerer Stimmung,
            Körperhaltung, Atemmustern und dem Zustand der Muskelspannung
            wahrnehmen können, wodurch mir schon früh der Zusammenhang zwischen
            emotionalem und körperlichem Leiden bewusst geworden ist.
        </p>
        <p class="pb-sm">
            Aufgrund meiner eigenen familiären Geschichte habe ich mich später
            für die Themen Kollektives und Transgenerationales Trauma
            interessiert, und dabei vor allem für den Aspekt, wie sich das auf
            unsere Beziehungen und unsere Beziehungsfähigkeit auswirkt.
        </p>
        <p class="pb-sm">
            In meiner Beschäftigung mit der Arbeit von Thomas Hübl, dem
            Begründer der „Transparenten Kommunikation“ und Pionier in der
            Arbeit mit Kollektivem Trauma, durfte ich erfahren, wie wertvoll und
            heilsam ein sicherer, urteilsfreier Raum mit eingestimmter Präsenz
            ist, in dem es sich sicher genug anfühlt, sich so zu zeigen, wie ich
            eben gerade bin, mit meiner Freude und Kraft genauso wie mit meiner
            Verletzlichkeit und Trauer oder Wut.
        </p>
        <p class="pb-sm">
            Diese Art der Achtsamkeit, der Bezogenheit und der empathischen
            Einstimmung, und das Verständnis darum, dass jeder Mensch so ist,
            wie er ist, weil er die Geschichte hat, die er hat, prägt auch meine
            berufliche Tätigkeit.
        </p>
        <p class="pb-sm">
            Auch im Somatic Experiencing (SE)®, der Traumaarbeit von Peter
            Levine, begegnete mir diese Wertschätzung des Menschen und des
            MenschSeins in all seinen Facetten und ich fühle mich in diesem
            körperlich-neurobiologisch orientierten Ansatz zur Behandlung und
            Lösung von traumatischem Stress therapeutisch „zu Hause“.
        </p>
        <p>
            Bei einem Zusammentreffen richte ich mich gerne nach Ihren Anliegen
            und Wünschen oder erforsche gemeinsam mit Ihnen, was dem
            authentischen Ausdruck Ihres Selbst im Wege steht und wie Sie sich
            wieder mit Ihrer natürlichen Lebendigkeit und Kraft verbinden
            können.
        </p>
    </div>
</section>

<style>
    #quote {
        background-image: url($lib/assets/blowball.webp);
        background-size: cover;
        background-position: right top;
    }
</style>
