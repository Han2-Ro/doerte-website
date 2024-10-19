<section
    class="flex flex-col lg:flex-row gap-md max-w-[80rem] mx-auto px-xs lg:px-sm lg:pl-xl py-2xl"
>
    <div>
        <h1 class=" text-xl font-bold mb-md">Kontakt</h1>
        <p class="mb-sm">Dörte Brügmann</p>
        <a
            class="flex gap-xs mb-sm"
            href="https://maps.app.goo.gl/pyJ6VsstLssM5WvH9"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#8f2068"
                ><path
                    d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z"
                />
            </svg>
            <p class="underline hover:no-underline">
                Drausnickstr. 8 • 91052 Erlangen
            </p>
        </a>
        <div class="flex gap-xs mb-sm">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#8f2068"
                ><path
                    d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
                /></svg
            >
            <p>01515 - 9178819</p>
        </div>
        <a class="flex gap-xs mb-sm" href="mailto:kontakt@praxis-bruegmann.de">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#8f2068"
                ><path
                    d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
                /></svg
            >
            <p class="underline hover:no-underline">
                kontakt@praxis-bruegmann.de
            </p>
        </a>
    </div>
    <div class=" hidden lg:block h-[28rem] border-l-2 border-logo-purple"></div>
    <div>
        <p>
            Schreiben Sie mir gerne, wenn Sie Fragen haben oder ein
            Erstegespräch ausmachen wollen
        </p>
        <form
            id="contactForm"
            class=" px-md pt-lg flex flex-col"
            action="https://api.staticforms.xyz/submit"
            method="post"
        >
            <input
                class="input-field"
                type="hidden"
                name="accessKey"
                value="581f061f-3033-4a65-a18a-98a3cb32d908"
            />
            <input type="hidden" name="replyTo" value="@" />
            <input type="text" name="honeypot" style="display: none;" />
            <div class="flex flex-col lg:flex-row gap-md">
                <div>
                    <label for="name">Name *</label>
                    <input
                        class="input-field"
                        type="text"
                        name="name"
                        required
                    />
                </div>
                <div>
                    <label for="phone">Telefon</label>
                    <input class="input-field" type="tel" name="phone" />
                </div>
            </div>
            <label class="pt-md" for="email">E-Mail *</label>
            <input
                id="email"
                class="input-field"
                type="email"
                name="email"
                required
            />
            <label class="pt-md" for="message">Nachricht *</label>
            <textarea class="input-field" name="message" required></textarea>
            <div>
                <input type="checkbox" name="checkbox" required />
                <label class=" text-sm" for="checkbox"
                    >* Ich willige ein, dass diese Website meine übermittelten
                    Informationen speichert, sodass meine Anfrage beantwortet
                    werden kann.</label
                >
            </div>
            <!-- Change this for prod -->
            <input
                type="hidden"
                name="redirectTo"
                value="https://preview.praxis-bruegmann.de/contact/success/"
            />
            <input type="hidden" name="subject" value="Kontakt Formular" />
            <input
                class="mt-md w-28 p-xs bg-[#afc8fd] rounded-full border-2 border-slate-600"
                type="submit"
                value="Senden"
            />
        </form>
    </div>
</section>

<style>
    .input-field {
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>
