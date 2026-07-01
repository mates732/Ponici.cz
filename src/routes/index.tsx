import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Trees,
  ShieldCheck,
  Heart,
  Sun,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Cake,
  GraduationCap,
  Tent,
  Award,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";

/* ---------- Structured data ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Ponici — Jezdecká škola pro děti",
  description:
    "Butiková jezdecká škola pro děti od 3 do 15 let na Císařském ostrově v Praze. Výuka, příměstské tábory, oslavy s poníky, příprava na ZZVJ.",
  telephone: "+420721208118",
  email: "monika.zamrazilova@seznam.cz",
  url: "https://www.ponici.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Císařský ostrov",
    addressLocality: "Praha",
    addressCountry: "CZ",
  },
  areaServed: "Praha",
  sport: "Horseback riding",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ponici — Jezdecká škola pro děti · Praha, Císařský ostrov" },
      {
        name: "description",
        content:
          "Butiková jezdecká škola v srdci Prahy. Výuka pro děti od 3 do 15 let, příměstské tábory, oslavy s poníky. Císařský ostrov & Stromovka.",
      },
      { property: "og:title", content: "Ponici — Jezdecká škola pro děti v Praze" },
      {
        property: "og:description",
        content: "Butiková jezdecká škola pro děti na Císařském ostrově a ve Stromovce.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
});

/* ---------- Reveal on scroll ---------- */
function Reveal({
  children,
  className = "",
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), obs.disconnect()),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
      }}
      className={`transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/75 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:grid-cols-[1fr_auto_1fr] md:px-10">
        <a href="#top" className="flex min-w-0 items-baseline gap-3">
          <span className="font-serif text-2xl tracking-tight text-foreground">Ponici</span>
          <span className="hidden text-[10px] uppercase tracking-[0.32em] text-muted-foreground sm:inline">
            Praha · Est. 2003
          </span>
        </a>
        <nav className="hidden items-center gap-10 text-[13px] text-foreground/75 md:flex md:justify-center">
          <a href="#about" className="transition-colors hover:text-foreground">Příběh</a>
          <a href="#services" className="transition-colors hover:text-foreground">Nabídka</a>
          <a href="#pricing" className="transition-colors hover:text-foreground">Ceník</a>
          <a href="#camps" className="transition-colors hover:text-foreground">Tábory</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Kontakt</a>
        </nav>
        <div className="flex items-center justify-end">
          <a
            href="tel:+420721208118"
            className="hidden items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-[13px] text-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" /> 721 208 118
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 will-change-transform motion-safe:animate-[heroZoom_24s_ease-out_forwards]">
        <img
          src={hero}
          alt="Dítě hladí poníka na louce nad Prahou při západu slunce"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/5 to-background/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl fade-up">
            <span className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-foreground/70">
              <span className="h-px w-8 bg-foreground/40" /> Praha · Císařský ostrov
            </span>
            <h1 className="font-serif text-[13.5vw] leading-[0.95] tracking-[-0.02em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              Kde se z&nbsp;dětství
              <br />
              stává <em className="italic font-light text-sage-deep">vzpomínka.</em>
            </h1>
            <p className="mt-7 max-w-md text-[15px] leading-[1.7] text-foreground/75 md:text-[17px]">
              Butiková jezdecká škola pro děti od 3&nbsp;do 15&nbsp;let. Poníci, klid Stromovky a&nbsp;lidé, kterým můžete své dítě svěřit.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[13px] tracking-wide text-background transition-transform duration-500 ease-out hover:-translate-y-0.5"
              >
                Rezervovat lekci
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-3.5 text-[13px] tracking-wide text-foreground transition-colors hover:bg-foreground/5"
              >
                Naše nabídka
              </a>
            </div>
          </div>
        </div>

        {/* trust row */}
        <div className="mx-auto mt-10 mb-8 w-full max-w-7xl px-6 md:mb-12 md:px-10">
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-foreground/10 pt-6 text-[10.5px] uppercase tracking-[0.28em] text-foreground/60 sm:grid-cols-4">
            <div className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5" /> Zkušení trenéři</div>
            <div className="flex items-center gap-2"><Trees className="h-3.5 w-3.5" /> V srdci Stromovky</div>
            <div className="flex items-center gap-2"><Heart className="h-3.5 w-3.5" /> Rodinný přístup</div>
            <div className="flex items-center gap-2"><Sun className="h-3.5 w-3.5" /> Děti od 3 let</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <img
              src={portrait}
              alt="Monika Zamrazilová se svým koněm"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_40px_80px_-50px_rgba(60,45,25,0.45)]"
            />
            <div className="absolute -bottom-8 -right-4 hidden max-w-[240px] rounded-xl border border-border bg-background/95 p-6 shadow-[0_30px_50px_-30px_rgba(60,45,25,0.4)] backdrop-blur md:block">
              <p className="font-serif text-lg italic leading-[1.35] text-foreground">
                „Vytěžujeme naše koníky jen tak, aby je práce s&nbsp;dětmi bavila.“
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Monika · manager
              </p>
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.32em] text-sage-deep">— O nás</span>
            <h2 className="mt-8 font-serif text-4xl leading-[1.02] tracking-[-0.02em] text-foreground md:text-6xl">
              Malá škola s&nbsp;velkým srdcem, ukrytá mezi stromy&nbsp;Trojského ostrova.
            </h2>
            <div className="mt-10 space-y-6 text-[16px] leading-[1.85] text-foreground/75 md:text-[17px]">
              <p>
                Učíme děti nejen jezdit — učíme je zpomalit, naslouchat a&nbsp;starat se o&nbsp;živou bytost. Naši trenéři a&nbsp;asistenti přinášejí dlouholeté zkušenosti; naši koníci znají své jméno, své děti, svůj klid.
              </p>
              <p>
                Nedaleko pražské ZOO, na Císařském ostrově a&nbsp;v&nbsp;bubenečské Stromovce, jsme vytvořili místo, kam se rodiny rády vrací. Bez spěchu, bez davů, bez kompromisů v&nbsp;bezpečí.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {[
                { n: "3–15", l: "let věku" },
                { n: "2", l: "písková kolbiště" },
                { n: "ZZVJ", l: "příprava na zkoušky" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-4xl tracking-tight text-foreground md:text-[2.75rem]">{s.n}</div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const services = [
  {
    icon: GraduationCap,
    kicker: "01 — Pravidelná výuka",
    title: "Jezdecký výcvik pro děti",
    body:
      "Zaměřujeme se na parkurové a&nbsp;drezurní ježdění. Vedeme od úplných začátků až po přípravu na ZZVJ — Zkoušky základního výcviku jezdce. K&nbsp;dispozici je kompletní zázemí včetně helmiček a&nbsp;vest.",
    meta: "Věk 3–15 let · Individuální i skupinově",
    img: g1,
  },
  {
    icon: Tent,
    kicker: "02 — Léto s poníky",
    title: "Příměstské tábory",
    body:
      "Týdenní turnusy Po–Pá, 9–15&nbsp;h. Ježdění na jízdárně i&nbsp;v&nbsp;terénu, péče o&nbsp;koně, hry a&nbsp;soutěže — celý svět koní v&nbsp;jednom týdnu.",
    meta: "Věk 5–15 let · Císařský ostrov",
    img: g4,
  },
  {
    icon: Cake,
    kicker: "03 — Vzpomínka na celý život",
    title: "Narozeninové oslavy",
    body:
      "Oslavte narozeniny v&nbsp;klidu Stromovky. Poníci, procházky a&nbsp;odpoledne, na které se nezapomíná. Termín rezervujte telefonicky.",
    meta: "Na vyžádání · Praha 7",
    img: g2,
  },
  {
    icon: Award,
    kicker: "04 — Pro pokročilé",
    title: "Zapůjčení koně na ZZVJ i závody",
    body:
      "Zapůjčení koně na ZZVJ nebo na jezdecké závody — hobby i&nbsp;oficiální. Kůň má platnou licenci ČJF.",
    meta: "Dle domluvy",
    img: g3,
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.32em] text-sage-deep">— Co nabízíme</span>
              <h2 className="mt-8 font-serif text-4xl leading-[1.02] tracking-[-0.02em] text-foreground md:text-6xl">
                Čtyři cesty, jak se
                <br /> spřátelit s&nbsp;poníkem.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
              Každá lekce, tábor i&nbsp;oslava jsou vedeny osobně. Nikdy ve velkých skupinách — a&nbsp;nikdy bez lásky k&nbsp;detailu.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reversed = i % 2 === 1;
            return (
              <Reveal key={s.title}>
                <article className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
                  <div className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}>
                    <div className="group overflow-hidden rounded-2xl">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                      />
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${reversed ? "md:order-1 md:pr-6" : "md:pl-6"}`}>
                    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-sage-deep">
                      <Icon className="h-3.5 w-3.5" /> {s.kicker}
                    </div>
                    <h3 className="mt-6 font-serif text-3xl leading-[1.08] tracking-[-0.02em] text-foreground md:text-[2.75rem]">
                      {s.title}
                    </h3>
                    <p
                      className="mt-5 text-[15.5px] leading-[1.85] text-foreground/75"
                      dangerouslySetInnerHTML={{ __html: s.body }}
                    />
                    <p className="mt-6 text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground">{s.meta}</p>
                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm text-foreground underline decoration-sage decoration-2 underline-offset-[10px] transition-colors hover:decoration-foreground"
                    >
                      Domluvit termín <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Manifest / Filosofie ---------- */
function Manifest() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.32em] text-sage-deep">— Naše filosofie</span>
          <p className="mt-10 font-serif text-3xl leading-[1.25] tracking-[-0.015em] text-foreground md:text-5xl md:leading-[1.2]">
            <em className="italic font-light">Šťastná zvířata,</em> šťastné děti.
            <br />
            Zábava spojená se získáváním
            <br className="hidden md:block" /> zodpovědnosti a&nbsp;péče o&nbsp;živou bytost.
          </p>
          <div className="mx-auto mt-12 h-px w-16 bg-border" />
          <p className="mt-10 text-[15px] leading-[1.85] text-foreground/70 md:text-[16px]">
            Vývoj fyzické i&nbsp;psychické kondice, zlepšování soustředění, koncentrace — a&nbsp;nezapomenutelné zážitky.
            Vaše dítě u&nbsp;nás najde trenéry a&nbsp;asistenty, kteří mají celoživotní zkušenosti a&nbsp;milují svoji práci.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
const priceRows = [
  { name: "Procházka", note: "30 minut", price: "500 Kč" },
  { name: "Lekce jízdy", note: "60 minut", price: "1 000 Kč" },
  { name: "3měsíční kurz", note: "Pondělí 15:30 – 17:00", price: "8 000 Kč" },
  { name: "Příměstský tábor", note: "Po–Pá 9–15 h · týdenní turnus", price: "6 500 Kč" },
];

function Pricing() {
  return (
    <section id="pricing" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.32em] text-sage-deep">— Ceník</span>
            <h2 className="mt-8 font-serif text-4xl leading-[1.02] tracking-[-0.02em] text-foreground md:text-5xl">
              Čistý ceník bez skrytých položek.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.8] text-foreground/70">
              V&nbsp;ceně je vždy péče instruktorů, koník i&nbsp;kompletní vybavení. Zrušení lekce prosíme nejméně 24&nbsp;hodin předem.
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {priceRows.map((r) => (
                <li
                  key={r.name}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-6 md:grid-cols-[1fr_2fr_auto] md:py-8"
                >
                  <div className="font-serif text-2xl text-foreground md:text-3xl">{r.name}</div>
                  <div className="col-span-2 text-[13.5px] text-muted-foreground md:col-span-1">{r.note}</div>
                  <div className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">{r.price}</div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Camps 2026 ---------- */
const campDates = {
  Červenec: ["6.–10.", "13.–17.", "20.–24.", "27.–31."],
  Srpen: ["10.–14.", "17.–21.", "24.–28."],
};

function Camps() {
  return (
    <section id="camps" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.32em] text-sage-deep">— Léto 2026</span>
            <h2 className="mt-8 font-serif text-4xl leading-[1.02] tracking-[-0.02em] text-foreground md:text-6xl">
              Turnusy
              <br /> příměstských táborů.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.85] text-foreground/70">
              Sedm týdnů plných koní, přírody a&nbsp;pohybu. Malé skupiny, zkušení instruktoři, bezpečné prostředí Císařského ostrova.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <img src={g5} alt="Ranní mlha nad loukou" loading="lazy" className="h-64 w-full object-cover md:h-80" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-10 md:col-span-7 md:pl-6">
            {Object.entries(campDates).map(([month, dates], mi) => (
              <Reveal key={month} delay={mi * 100}>
                <div className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="font-serif text-2xl text-foreground md:text-3xl">{month}</span>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">2026</span>
                </div>
                <ul className="mt-2 divide-y divide-border/70">
                  {dates.map((d, i) => (
                    <li key={d} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-5">
                      <span className="w-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-xl text-foreground md:text-2xl">{d} {month.toLowerCase()}</span>
                      <a
                        href="#contact"
                        className="text-[12px] uppercase tracking-[0.22em] text-sage-deep transition-colors hover:text-foreground"
                      >
                        Rezervovat
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal delay={200} className="mt-2 rounded-2xl border border-border bg-cream/60 p-6 text-[13.5px] leading-relaxed text-foreground/70">
              <span className="font-serif text-base text-foreground">6 500 Kč</span> / dítě / turnus. V&nbsp;ceně
              celodenní program 9–15&nbsp;h, péče instruktorů a&nbsp;kontakt s&nbsp;koňmi. Rezervace: <a href="tel:+420721208118" className="text-foreground underline decoration-sage underline-offset-4">721&nbsp;208&nbsp;118</a>.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] uppercase tracking-[0.32em] text-sage-deep">— Deník</span>
              <h2 className="mt-8 font-serif text-4xl leading-[1.02] tracking-[-0.02em] text-foreground md:text-6xl">
                Malé momenty,
                <br /> které zůstávají.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
              Vybrané okamžiky z&nbsp;našich dní. Bez filtrů, bez inscenace.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-8">
            <img src={g2} alt="" loading="lazy" className="h-64 w-full rounded-2xl object-cover md:h-[440px]" />
          </Reveal>
          <Reveal delay={80} className="col-span-6 md:col-span-4">
            <img src={g1} alt="" loading="lazy" className="h-64 w-full rounded-2xl object-cover md:h-[440px]" />
          </Reveal>
          <Reveal delay={40} className="col-span-6 md:col-span-4">
            <img src={g3} alt="" loading="lazy" className="h-56 w-full rounded-2xl object-cover md:h-[360px]" />
          </Reveal>
          <Reveal delay={120} className="col-span-6 md:col-span-4">
            <img src={g4} alt="" loading="lazy" className="h-56 w-full rounded-2xl object-cover md:h-[360px]" />
          </Reveal>
          <Reveal delay={160} className="col-span-12 md:col-span-4">
            <img src={g5} alt="" loading="lazy" className="h-56 w-full rounded-2xl object-cover md:h-[360px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.32em] text-sage-deep">— Kontakt</span>
            <h2 className="mt-8 font-serif text-4xl leading-[1.02] tracking-[-0.02em] text-foreground md:text-6xl">
              Zavolejte.
              <br />Rádi Vás uslyšíme.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.8] text-foreground/75">
              Odpovídáme osobně, obvykle týž den. Nejrychleji nás zastihnete telefonicky.
            </p>

            <dl className="mt-14 space-y-10">
              <div className="flex items-start gap-5">
                <Phone className="mt-2 h-4 w-4 text-sage-deep" />
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Telefon</dt>
                  <dd className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
                    <a href="tel:+420721208118" className="transition-colors hover:text-sage-deep">
                      +420 721 208 118
                    </a>
                  </dd>
                  <p className="mt-1 text-[13px] text-muted-foreground">Monika Zamrazilová · manager</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Mail className="mt-2 h-4 w-4 text-sage-deep" />
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">E-mail</dt>
                  <dd className="mt-2 font-serif text-2xl text-foreground md:text-[1.75rem]">
                    <a href="mailto:monika.zamrazilova@seznam.cz" className="transition-colors hover:text-sage-deep">
                      monika.zamrazilova@seznam.cz
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <MapPin className="mt-2 h-4 w-4 text-sage-deep" />
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Kde nás najdete</dt>
                  <dd className="mt-2 font-serif text-2xl leading-tight text-foreground md:text-3xl">
                    Císařský ostrov
                    <br />
                    <span className="text-lg text-foreground/70 md:text-xl">Praha, Česká republika</span>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mapa — Císařský ostrov, Praha"
                src="https://www.google.com/maps?q=C%C3%ADsa%C5%99sk%C3%BD%20ostrov%20Praha&output=embed"
                className="h-64 w-full grayscale-[15%] contrast-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7 md:pl-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const data = new FormData(f);
                const body = `Jméno: ${data.get("name")}\nTelefon: ${data.get("phone")}\n\n${data.get("message")}`;
                window.location.href = `mailto:monika.zamrazilova@seznam.cz?subject=Zpr%C3%A1va%20z%20webu%20Ponici&body=${encodeURIComponent(
                  body,
                )}`;
              }}
              className="rounded-3xl border border-border bg-cream p-8 md:p-12"
            >
              <h3 className="font-serif text-3xl text-foreground md:text-4xl">Napište nám</h3>
              <p className="mt-3 text-[14px] text-muted-foreground">Ozveme se Vám osobně.</p>

              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                {[
                  { name: "name", label: "Jméno", type: "text", required: true },
                  { name: "email", label: "E-mail", type: "email", required: true },
                  { name: "phone", label: "Telefon", type: "tel", required: false },
                ].map((fld) => (
                  <label key={fld.name} className="block">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{fld.label}</span>
                    <input
                      type={fld.type}
                      name={fld.name}
                      required={fld.required}
                      className="mt-3 w-full border-b border-border bg-transparent py-3 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-sage-deep focus:outline-none"
                    />
                  </label>
                ))}
                <label className="block md:col-span-2">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Zpráva</span>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-sage-deep focus:outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="group mt-12 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-[13px] tracking-wide text-background transition-transform duration-500 hover:-translate-y-0.5"
              >
                Odeslat zprávu
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl text-foreground">Ponici</div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              Butiková jezdecká škola pro děti. Praha, Císařský ostrov &amp; Stromovka. Est. 2003.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Rozcestník</div>
            <ul className="mt-5 space-y-2 text-[14px] text-foreground/75">
              <li><a href="#about" className="hover:text-foreground">Příběh</a></li>
              <li><a href="#services" className="hover:text-foreground">Nabídka</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Ceník</a></li>
              <li><a href="#camps" className="hover:text-foreground">Tábory 2026</a></li>
              <li><a href="#contact" className="hover:text-foreground">Kontakt</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Kontakt</div>
            <ul className="mt-5 space-y-2 text-[14px] text-foreground/75">
              <li><a href="tel:+420721208118" className="hover:text-foreground">+420 721 208 118</a></li>
              <li><a href="mailto:monika.zamrazilova@seznam.cz" className="hover:text-foreground break-all">monika.zamrazilova@seznam.cz</a></li>
              <li>Císařský ostrov, Praha</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Ponici · Vytvořeno s láskou v Praze</div>
          <div>Č.ú. 259229357 / 0300</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Manifest />
      <Pricing />
      <Camps />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}