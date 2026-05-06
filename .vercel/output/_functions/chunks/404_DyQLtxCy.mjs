import { c as createComponent } from './astro-component_Cxf7eJMB.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_l96xUXfy.mjs';
import { $ as $$Base } from './Base_DYyF8xRt.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page introuvable", "description": "La page que vous cherchez n'existe pas ou a été déplacée.", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-8 py-20 md:px-16 md:py-32"> <div class="mx-auto max-w-3xl text-center"> <p class="font-display text-7xl font-bold md:text-9xl">404</p> <h1 class="mt-6 font-display text-3xl font-bold md:text-4xl">
Page introuvable
</h1> <p class="mt-6 text-base md:text-lg">
La page que vous cherchez n'existe pas ou a été déplacée. Pas de panique,
        le devoir de mémoire continue.
</p> <div class="mt-10 flex flex-wrap justify-center gap-4"> <a href="/" class="inline-flex items-center justify-center rounded-sm bg-fortin-green-dark px-6 py-3 font-medium text-fortin-beige transition-opacity hover:opacity-80">
Retour à l'accueil
</a> <a href="/realisations" class="inline-flex items-center justify-center rounded-sm border border-fortin-green-dark px-6 py-3 font-medium text-fortin-green-dark transition-opacity hover:opacity-80">
Voir nos films
</a> </div> </div> </section> ` })}`;
}, "C:/Users/Matthias/documents_local/CODE/GIT/fortin_web/src/pages/404.astro", void 0);

const $$file = "C:/Users/Matthias/documents_local/CODE/GIT/fortin_web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
