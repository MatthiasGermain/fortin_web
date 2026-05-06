import { c as createComponent } from './astro-component_Cxf7eJMB.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_l96xUXfy.mjs';
import { $ as $$Base, a as $$Icon } from './Base_DYyF8xRt.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Contact;
  const tracks = [
    {
      title: "Témoignage",
      description: "Vous avez vécu, ou un de vos proches a vécu, un événement historique que vous souhaitez transmettre. Fortin recueille les paroles avant qu'elles ne s'effacent."
    },
    {
      title: "Archives",
      description: "Lettres, photographies, journaux intimes, films de famille, objets — toute trace du passé peut nourrir un projet. Nous numérisons, contextualisons, préservons."
    },
    {
      title: "Collaboration",
      description: "Vous portez un projet en lien avec la mémoire et l'histoire ? Association, institution, école, professionnel : parlons-en. Ensemble, on va plus loin."
    }
  ];
  const contacts = [
    {
      name: "Matthias Germain",
      email: "germain-mat25@orange.fr",
      phone: "06 02 32 17 20"
    },
    {
      name: "Thibaut Garcia",
      email: "thibautgarcia25300@gmail.com",
      phone: "06 37 69 17 68"
    }
  ];
  const socials = [
    { label: "Facebook", icon: "simple-icons:facebook", href: "https://www.facebook.com/profile.php?id=100085837425073" },
    { label: "Instagram", icon: "simple-icons:instagram", href: "https://www.instagram.com/fortin_projet/" },
    { label: "YouTube", icon: "simple-icons:youtube", href: "https://www.youtube.com/@fortin_projet" },
    { label: "TikTok", icon: "simple-icons:tiktok", href: "https://www.tiktok.com/@fortin_projet" },
    { label: "LinkedIn", icon: "simple-icons:linkedin", href: "https://www.linkedin.com/in/fortin-projet-572762296" },
    { label: "Vimeo", icon: "simple-icons:vimeo", href: "https://vimeo.com/user210486084" }
  ];
  const status = Astro2.url.searchParams.get("status");
  const isSuccess = status === "ok";
  const isError = status === "error";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Nous contacter", "description": "Contactez l'association Fortin : partagez un témoignage, des archives, ou une proposition de collaboration. Coordonnées directes des fondateurs.", "showFooter": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-fortin-green-dark px-8 py-16 text-fortin-beige md:px-16 md:py-24"> <div class="mx-auto max-w-5xl"> <h1 class="font-display text-4xl leading-tight font-bold md:text-6xl">
Échangeons
</h1> <p class="mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
Une histoire à raconter, des archives familiales à faire vivre, une
        collaboration à initier&nbsp;? Fortin accueille toutes les contributions
        au devoir de mémoire. Chaque récit compte, chaque trace mérite d'être
        préservée.
</p> </div> </section> <section class="px-8 py-16 md:px-16 md:py-24"> <div class="mx-auto max-w-7xl"> <h2 class="text-center font-display text-3xl font-bold md:text-4xl">
Quel projet souhaitez-vous partager&nbsp;?
</h2> <div class="mt-12 grid gap-10 md:grid-cols-3 md:gap-12"> ${tracks.map((track) => renderTemplate`<div class="border-t border-fortin-green-dark/30 pt-6"> <h3 class="font-display text-2xl font-bold">${track.title}</h3> <p class="mt-4 text-sm leading-relaxed md:text-base"> ${track.description} </p> </div>`)} </div> </div> </section> <section id="form" class="bg-fortin-green-dark px-8 py-16 text-fortin-beige md:px-16 md:py-24"> <div class="mx-auto max-w-3xl"> <h2 class="font-display text-3xl font-bold md:text-4xl">Écrivez-nous</h2> <p class="mt-4 text-base md:text-lg">
Remplissez le formulaire ci-dessous, nous reviendrons vers vous dans
        les meilleurs délais.
</p> ${isSuccess && renderTemplate`<div class="mt-8 rounded-sm border border-fortin-beige/40 bg-fortin-beige/10 px-5 py-4" role="status"> <p class="font-medium">Merci, votre message a bien été envoyé.</p> <p class="mt-1 text-sm opacity-80">
Nous reviendrons vers vous rapidement.
</p> </div>`} ${isError && renderTemplate`<div class="mt-8 rounded-sm border border-fortin-beige/40 bg-fortin-beige/10 px-5 py-4" role="alert"> <p class="font-medium">Oups, l'envoi a échoué.</p> <p class="mt-1 text-sm opacity-80">
Réessayez dans un instant, ou écrivez-nous directement (voir
            ci-dessous).
</p> </div>`} <form action="/api/contact" method="POST" class="mt-10 space-y-6"> <div class="grid gap-6 md:grid-cols-2"> <div> <label for="name" class="block text-sm font-medium">
Nom complet <span aria-label="requis">*</span> </label> <input type="text" id="name" name="name" required autocomplete="name" class="mt-2 w-full rounded-sm border border-fortin-beige/30 bg-fortin-beige/5 px-4 py-3 text-fortin-beige placeholder:text-fortin-beige/40 focus:border-fortin-beige focus:outline-none"> </div> <div> <label for="email" class="block text-sm font-medium">
Email <span aria-label="requis">*</span> </label> <input type="email" id="email" name="email" required autocomplete="email" class="mt-2 w-full rounded-sm border border-fortin-beige/30 bg-fortin-beige/5 px-4 py-3 text-fortin-beige placeholder:text-fortin-beige/40 focus:border-fortin-beige focus:outline-none"> </div> </div> <div> <label for="type" class="block text-sm font-medium">
Nature de votre projet
</label> <input type="text" id="type" name="type" placeholder="ex. témoignage, archives, collaboration…" class="mt-2 w-full rounded-sm border border-fortin-beige/30 bg-fortin-beige/5 px-4 py-3 text-fortin-beige placeholder:text-fortin-beige/40 focus:border-fortin-beige focus:outline-none"> </div> <div> <label for="message" class="block text-sm font-medium">
Votre message <span aria-label="requis">*</span> </label> <textarea id="message" name="message" rows="6" required placeholder="Décrivez votre projet, votre proposition ou les archives que vous souhaitez partager…" class="mt-2 w-full rounded-sm border border-fortin-beige/30 bg-fortin-beige/5 px-4 py-3 text-fortin-beige placeholder:text-fortin-beige/40 focus:border-fortin-beige focus:outline-none"></textarea> </div> <input type="text" name="company" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true"> <label class="flex items-start gap-3 text-sm"> <input type="checkbox" name="consent" required class="mt-1 accent-fortin-beige"> <span>
J'accepte que Fortin utilise les informations transmises pour me
            recontacter au sujet de ma proposition.
<span aria-label="requis">*</span> </span> </label> <button type="submit" class="inline-flex items-center justify-center rounded-sm bg-fortin-beige px-6 py-3 font-medium text-fortin-green-dark transition-opacity hover:opacity-80">
Envoyer ma proposition
</button> </form> </div> </section> <section class="px-8 py-16 md:px-16 md:py-24"> <div class="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16"> <div> <h2 class="font-display text-3xl font-bold md:text-4xl">
Coordonnées directes
</h2> <p class="mt-4 text-base md:text-lg">
Vous préférez nous écrire ou nous appeler&nbsp;?
</p> <div class="mt-10 space-y-8"> ${contacts.map((c) => renderTemplate`<div class="space-y-1"> <a${addAttribute(`mailto:${c.email}`, "href")} class="block font-medium underline underline-offset-2 transition-opacity hover:opacity-70"> ${c.email} </a> <p> ${c.name} : ${c.phone} </p> </div>`)} </div> <ul class="mt-10 flex flex-wrap gap-3"> ${socials.map((s) => renderTemplate`<li> <a${addAttribute(s.href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(s.label, "aria-label")} class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fortin-green-dark text-fortin-beige transition-opacity hover:opacity-80"> ${renderComponent($$result2, "Icon", $$Icon, { "name": s.icon, "class": "h-5 w-5" })} </a> </li>`)} </ul> </div> <div class="flex justify-center md:justify-end"> <img src="/logo-fortin.png" alt="Logo de l'association Fortin — fort Malher" class="w-full max-w-md"> </div> </div> </section> ` })}`;
}, "C:/Users/Matthias/documents_local/CODE/GIT/fortin_web/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Matthias/documents_local/CODE/GIT/fortin_web/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
