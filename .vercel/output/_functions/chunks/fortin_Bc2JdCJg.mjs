import { c as createComponent } from './astro-component_Cxf7eJMB.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_l96xUXfy.mjs';
import { $ as $$Base } from './Base_DYyF8xRt.mjs';
import { $ as $$Image } from './_astro_assets_HdSQOe9c.mjs';

const rfStone = new Proxy({"src":"/_astro/RF.Cd8OKtBV.png","width":2880,"height":1800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Matthias/documents_local/CODE/GIT/fortin_web/src/assets/images/RF.png";
							}
							
							return target[name];
						}
					});

const histoireImg = new Proxy({"src":"/_astro/Histoire.B3OEG4su.jpg","width":3165,"height":4768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Matthias/documents_local/CODE/GIT/fortin_web/src/assets/images/Histoire.jpg";
							}
							
							return target[name];
						}
					});

const memoireImg = new Proxy({"src":"/_astro/Mémoire.BXPB_9iZ.png","width":842,"height":1261,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Matthias/documents_local/CODE/GIT/fortin_web/src/assets/images/Mémoire.png";
							}
							
							return target[name];
						}
					});

const $$Fortin = createComponent(($$result, $$props, $$slots) => {
  const themes = [
    {
      title: "Audiovisuel",
      alt: "Image du documentaire Tranchées du ciel"
    },
    {
      title: "Histoire",
      alt: "Image historique en noir et blanc",
      image: histoireImg
    },
    {
      title: "Mémoire",
      alt: "Vue aérienne d'un cimetière militaire",
      image: memoireImg
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Qu'est-ce que Fortin ?", "description": "Fortin, fondée en 2021, est une association audiovisuelle qui œuvre comme un rempart contre l'oubli. Découvrez son origine, ses objectifs et ses domaines d'action : audiovisuel, histoire, mémoire." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-fortin-green-dark px-8 py-16 text-fortin-beige md:px-16 md:py-24"> <div class="mx-auto max-w-7xl"> <h1 class="font-display text-3xl font-bold md:text-5xl">
Qu'est-ce Que Fortin Signifie&nbsp;?
</h1> <div class="mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-12"> <div class="aspect-4/3 w-full bg-fortin-beige/10" aria-label="Photographie d'une boussole posée sur des documents anciens"> <div class="flex h-full items-center justify-center p-8 text-center text-fortin-beige/60"> <p class="text-sm italic">[Photo à venir : boussole et documents anciens]</p> </div> </div> <div class="space-y-6 text-sm leading-relaxed md:text-base"> <p>
Fortin, bien que ce terme évoque instinctivement des images de
            remparts et de forteresses, prend une signification tout à fait
            différente dans le contexte de l'association. Fortin ne se dresse
            pas physiquement, mais plutôt comme un rempart contre l'oubli, un
            bastion de préservation de la mémoire collective.
</p> <p>
En se nourrissant des récits poignants de nos ancêtres et des
            témoins de l'histoire, l'association s'engage à tisser un lien
            indissoluble entre les générations, renforçant ainsi la trame
            vivante de notre passé commun.
</p> </div> </div> </div> </section> <section class="px-8 py-16 md:px-16 md:py-24"> <div class="mx-auto max-w-7xl"> <h2 class="font-display text-3xl font-bold md:text-5xl">
Origine de Fortin
</h2> <div class="mt-10 grid gap-10 md:grid-cols-[2fr_1fr] md:gap-16"> <p class="text-sm leading-relaxed md:text-base">
Le 25 août 2021, Thibaut Garcia, Gabin Parisot, Gwenvaël Le Faucheur
          et Ilhan Koken présentent le documentaire <em>Mémoire d'Appelé</em> à
          Houtaud. Entourés des anciens combattants du Doubs et des élus du
          département, cette projection a attiré le regard curieux aussi bien
          des jeunes que des anciens, laissant place à un échange entre les
          générations autour d'un vaste sujet connu de tous : la Guerre
          d'Algérie. Cette projection suscita alors chez les fondateurs de
          Fortin, Thibaut Garcia et Gabin Parisot, l'idée d'un projet plus
          ambitieux. L'idée d'une association qui lie le travail de mémoire et
          production audiovisuelle, ancrée dans un paysage culturel local tout
          en ayant une portée nationale. Fondée autour d'une amitié de longue
          date entre ses membres fondateurs, Fortin est ainsi née en 2021 et
          s'est agrandie par l'arrivée de membres portant la même volonté.
</p> <figure class="flex flex-col items-center justify-center text-center"> <hr class="w-full border-fortin-green-dark/30"> <blockquote class="my-6 font-display text-2xl italic md:text-3xl">
«&nbsp;On cherche à ne pas oublier&nbsp;»
</blockquote> <hr class="w-full border-fortin-green-dark/30"> </figure> </div> <div class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"> <div class="aspect-square bg-fortin-green-dark/15"> <div class="flex h-full items-center justify-center p-4 text-center text-fortin-green-dark/60"> <p class="text-xs italic">[Photo : tunnel]</p> </div> </div> <div class="col-span-1 row-span-2 aspect-1/2 bg-fortin-green-dark/15 md:col-span-2 md:aspect-auto"> <div class="flex h-full items-center justify-center p-4 text-center text-fortin-green-dark/60"> <p class="text-xs italic">[Photo : table avec cartes et documents]</p> </div> </div> <div class="aspect-square bg-fortin-green-dark/15"> <div class="flex h-full items-center justify-center p-4 text-center text-fortin-green-dark/60"> <p class="text-xs italic">[Photo : vue aérienne]</p> </div> </div> </div> </div> </section> <section class="bg-fortin-green-dark px-8 py-16 text-fortin-beige md:px-16 md:py-24"> <div class="mx-auto max-w-7xl"> <h2 class="font-display text-3xl font-bold md:text-5xl">
Objectifs de Fortin
</h2> <div class="mt-10 grid gap-10 md:grid-cols-2 md:items-center md:gap-12"> <div class="space-y-6 text-sm leading-relaxed md:text-base"> <p>
Depuis sa création, et à l'heure de la production de <em>Mémoire d'Appelé</em>, Fortin a toujours eu pour vocation de donner une voix aux témoins
            oubliés de cette petite histoire qui reflète la grande histoire.
            Notre objectif n'est pas simplement de filmer les anciens, mais
            surtout de permettre une compréhension plus profonde de ce que leur
            regard, forgé au fil du temps, peut nous enseigner. Fortin collecte,
            grâce aux moyens audiovisuels contemporains, les fragments d'un
            passé qui aurait pu être progressivement oublié.
</p> <p>
Bien que Fortin soit enraciné dans un territoire local, la
            Franche-Comté, notre influence et notre présence ne se limitent pas
            à ces simples frontières régionales, mais s'étendent à l'ensemble du
            territoire national. De Besançon à Rennes, de Lille à Bordeaux,
            partout en France existe une histoire passée que Fortin s'efforce de
            faire connaître et de préserver.
</p> </div> ${renderComponent($$result2, "Image", $$Image, { "src": rfStone, "alt": "Pierre gravée RF de l'ouvrage de Froideterre", "class": "aspect-video w-full object-cover", "width": 1600, "height": 900, "loading": "lazy" })} </div> </div> </section> <section class="px-8 py-16 md:px-16 md:py-24"> <div class="mx-auto max-w-7xl"> <div class="grid gap-8 md:grid-cols-3 md:gap-10"> ${themes.map((theme) => renderTemplate`<a href="/realisations" class="group block transition-opacity hover:opacity-80"> <h3 class="text-center font-display text-2xl font-bold md:text-3xl"> ${theme.title} </h3> ${theme.image ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": theme.image, "alt": theme.alt, "class": "mt-4 aspect-2/3 w-full object-cover", "width": 600, "height": 900, "loading": "lazy" })}` : renderTemplate`<div class="mt-4 aspect-2/3 w-full bg-fortin-green-dark"${addAttribute(theme.alt, "aria-label")}> <div class="flex h-full items-center justify-center p-6 text-center text-fortin-beige/60"> <p class="text-xs italic">[Image à venir]</p> </div> </div>`} </a>`)} </div> </div> </section> ` })}`;
}, "C:/Users/Matthias/documents_local/CODE/GIT/fortin_web/src/pages/fortin.astro", void 0);

const $$file = "C:/Users/Matthias/documents_local/CODE/GIT/fortin_web/src/pages/fortin.astro";
const $$url = "/fortin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Fortin,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
