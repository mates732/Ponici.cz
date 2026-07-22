import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Trees,
  ShieldCheck,
  Sun,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
} from "lucide-react";
import { Section } from "@/components/section";
import { Kicker, Heading } from "@/components/heading";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { Expandable } from "@/components/expandable";

const SITE_URL = "https://www.ponici.cz";

const img = (name: string) => `/images/ponici/${name}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Poníci — Jízdy pro děti i dospělé",
  description:
    "Jízdy na ponících, jezdecký výcvik a zážitky s koni pro děti i dospělé na Císařském ostrově v Praze.",
  telephone: "+420721208118",
  email: "monika.zamrazilova@seznam.cz",
  url: SITE_URL,
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
      { title: "Poníci | Jízdy pro děti i dospělé" },
      {
        name: "description",
        content:
          "Jízdy na ponících, jezdecký výcvik a zážitky s koni pro děti i dospělé na Císařském ostrově v Praze.",
      },
      { property: "og:title", content: "Poníci | Jízdy pro děti i dospělé" },
      {
        property: "og:description",
        content:
          "Jízdy na ponících, jezdecký výcvik a zážitky s koni pro děti i dospělé na Císařském ostrově v Praze.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
});

function Nav() {
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 24,
  );
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-16 md:h-20 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b border-border/60"
          : "backdrop-blur-sm bg-background/10 max-sm:bg-background/60"
      }`}
    >
      <div className="mx-auto grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 md:grid-cols-[1fr_auto_1fr] md:px-10">
        <a href="#top" className="flex min-w-0 items-center" aria-label="Poníci">
          <span className="text-2xl font-semibold text-foreground md:text-3xl">
            Poníci
          </span>
        </a>

        <nav className="hidden items-center gap-10 text-[13px] text-foreground/90 md:flex md:justify-center">
          {[
            { label: "O nás", href: "#about" },
            { label: "Programy", href: "#programy" },
                { label: "Jízdy", href: "#jizdy" },
            { label: "Výlety", href: "#vylety" },
            { label: "Stáj", href: "#staj" },
            { label: "Kontakt", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-sage-deep focus-visible:outline-offset-4"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <a
            href="tel:+420721208118"
            className="hidden items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-[13px] text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-sage-deep focus-visible:outline-offset-2 md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" /> 721 208 118
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden md:snap-start md:min-h-[100svh]"
    >
      <div className="absolute inset-0 will-change-transform motion-safe:animate-[heroZoom_24s_ease-out_forwards]">
        <img
          src={img("hero-skupina-deti-kone.jpg")}
          alt="Skupina dětí s poníky na louce u řeky v Praze"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_65%]"
        />
      </div>
      {/* Warm gradient at top for nav contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/25 via-transparent to-transparent pointer-events-none" />
      {/* Reading layer: warm cream from left for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(247,241,229,0.78) 0%, rgba(247,241,229,0.55) 30%, rgba(247,241,229,0.2) 50%, transparent 62%)",
        }}
      />
      {/* Subtle dark gradient at bottom for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col pt-16 md:pt-20 md:min-h-[100svh]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl fade-up">
            <span className="mt-4 mb-8 hidden sm:inline-flex items-center gap-2 text-micro uppercase tracking-kicker text-foreground/80">
              <span className="h-px w-8 bg-foreground/40" /> Praha ·
              Císařský ostrov
            </span>
            <span className="mb-8 hidden sm:inline-flex items-center gap-2 text-micro uppercase tracking-kicker text-foreground/60">
              <span className="h-px w-8 bg-foreground/30" /> Více než 20 let
              zkušeností
            </span>

            <Heading as="h1" size="xl">
              Jízdy na ponících
              <br />
              pro děti
              <br />i&nbsp;dospělé.
            </Heading>

            <p className="mt-7 max-w-md text-[15px] leading-[1.7] text-foreground/95 md:text-[17px]">
              Jízdy na ponících, jezdecký výcvik a&nbsp;zážitky
              s&nbsp;koněm na&nbsp;Císařském ostrově v&nbsp;Praze.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-10 md:gap-12">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="primary">
                Domluvit jízdu
              </Button>
              <Button
                href="#jizdy"
                variant="secondary"
                className="bg-cream/75 border-foreground/50"
              >
                Prozkoumat aktivity
              </Button>
            </div>
          </div>

          <div className="w-full border-t border-foreground/8 bg-cream/80 mt-auto mb-8 md:mb-12">
            <div className="mx-auto max-w-7xl px-6 py-5 md:px-10">
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-[10.5px] uppercase tracking-caption text-foreground sm:grid-cols-4">
                {[
                  { icon: Trees, text: "Císařský ostrov" },
                  { icon: ShieldCheck, text: "Výcvik v parkuru" },
                  { icon: Sun, text: "Tábory 5–15 let" },
                  { icon: GraduationCap, text: "Oslavy s poníky" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5" /> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <img
              src={img("objimani-kun.jpg")}
              alt="Osoba objímá bílého koně ve stáji"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_40px_80px_-50px_rgba(60,45,25,0.45)]"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <Kicker>— O nás</Kicker>
            <Heading className="mt-8">
              Jízdy, péče
              <br />a&nbsp;radost z&nbsp;pohybu.
            </Heading>

            <div className="mt-10 space-y-6 text-[16px] leading-[1.85] text-foreground/75 md:text-[17px]">
              <p>
                Poníci jsou místem, kde mohou lidé trávit čas venku, poznávat
                koně a získávat jistotu v sedle. Na Císařském ostrově v Praze
                nabízíme jízdy na ponících i jezdecký výcvik pro děti
                i&nbsp;dospělé.
              </p>
              <p>
                Jízdy na ponících provozujeme už více než 20 let. Za tu dobu
                jsme pomohli stovkám dětí i dospělých najít jistotu v sedle
                a&nbsp;klidný vztah ke koním.
              </p>
              <p>
                Začít může každý, kdo má chuť poznat poníky blíž. Někdo přijde
                za prvními kroky v sedle, jiný už míří ke skokovým lekcím nebo
                přípravě na ZZVJ. Společné ale zůstává radost z pohybu, pobyt
                venku a respekt ke koním.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-5 border-t border-border pt-10 md:grid-cols-4 md:gap-6">
              {[
                { n: "20+", l: "let zkušeností" },
                { n: "Císařský ostrov", l: "Praha" },
                { n: "Stromovka", l: "v okolí" },
                {
                  n: "Příprava na ZZVJ",
                  l: "Zkoušky základního výcviku jezdce",
                },
              ].map((s) => (
                <div key={s.n} className="rounded-xl bg-cream p-6 md:p-8">
                  <div className="text-2xl font-semibold text-foreground md:text-[2rem]">
                    {s.n}
                  </div>
                  <div className="mt-3 text-micro uppercase tracking-caption text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function PonyPortrait() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <div
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: "oklch(0.945 0.015 82)" }}
          >
            <img
              src={img("detail-tvar-ponika.jpg")}
              alt="Detailní portrét bílého poníka — jeho měkký čumák a zvědavé oči"
              width={1200}
              height={900}
              className="aspect-[3/4] w-full object-contain md:aspect-[4/5]"
            />
          </div>
        </Reveal>

        <Reveal delay={80} className="md:col-span-5">
          <Kicker>— Setkání</Kicker>
          <Heading className="mt-8" size="md">
            Každý poník má
            <br />
            svou povahu.
          </Heading>
          <p className="mt-6 text-[15.5px] leading-[1.85] text-foreground/75">
            Nejde jen o jízdy. Jde o vztah — o moment, kdy si člověk
            k&nbsp;poníkovi najde cestu sám. Poznává jeho povahu, učí se
            naslouchat a respektovat. Více než 20 let zkušeností nás naučilo,
            že každý poník i&nbsp;každý jezdec potřebuje svůj čas.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function Programy() {
  const photos = [
    {
      src: img("deti-kone-strom.jpg"),
      alt: "Skupina s koněm pod kvetoucím stromem na jaře",
      cols: "md:col-span-7",
      aspect: "aspect-[4/3]",
    },
    {
      src: img("portret-dite-kun-jizdarna.jpg"),
      alt: "Jezdec stojí vedle koně na jízdárně a hladí ho",
      cols: "md:col-span-5",
      aspect: "aspect-[3/4]",
    },
    {
      src: img("objimani-kun.jpg"),
      alt: "Osoba objímá bílého koně ve stáji",
      cols: "md:col-span-5",
      aspect: "aspect-[4/3]",
    },
    {
      src: img("zapad-slunce-dite.jpg"),
      alt: "Jezdec na poníkovi při západu slunce",
      cols: "md:col-span-7",
      aspect: "aspect-[4/3]",
    },
  ];

  return (
    <Section id="programy" background="cream">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Kicker>— Programy</Kicker>
            <Heading className="mt-8">
              Blízkost, která
              <br />
              zůstává.
            </Heading>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
            Nejkrásnější okamžiky se dějí, když člověk a poník najdou společnou
            řeč. Programy přizpůsobíme věku, zkušenostem i&nbsp;domluvě.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
        {photos.map((p, i) => (
          <Reveal
            key={p.alt}
            delay={i * 60}
            className={`overflow-hidden rounded-2xl ${p.cols}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className={`${p.aspect} w-full object-cover`}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const jizdy = [
  {
    icon: GraduationCap,
    kicker: "01",
    title: "Jízdy na ponících",
    body: "První i\u00A0další kroky v\u00A0sedle. Začínáme v\u00A0klidném tempu, postupně se buduje jistota a\u00A0rovnováha. Vhodné pro děti i\u00A0dospělé.",
    img: img("jizdarna-pohyb.jpg"),
  },
  {
    icon: ShieldCheck,
    kicker: "02",
    title: "Parkurový výcvik",
    body: "Výcvik v\u00A0parkuru. Od jednoduchých překážek po složitější parcours pod vedením zkušených lektorů. Podle věku a\u00A0zkušeností.",
    img: img("jizda-ponik-zepredu.jpg"),
  },
  {
    icon: Sun,
    kicker: "03",
    title: "Příprava na ZZVJ",
    body: "Pro jezdce, kteří se chtějí připravit na zkoušky základního výcviku jezdce. Systematická příprava na jízdárně i\u00A0v\u00A0teorii.",
    img: img("jizdarna-dve-jezdkyne.jpg"),
  },
];

function Jezdeni() {
  return (
    <Section id="jizdy">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Kicker>— Jízdy a výcvik</Kicker>
            <Heading className="mt-8">
              Jízdy na ponících
              <br />a&nbsp;jezdecký výcvik.
            </Heading>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
            Od prvních krůčků v sedle po přípravu na zkoušky základního výcviku
            jezdce.
          </p>
        </div>
      </Reveal>

      <div className="mt-20 space-y-24 md:space-y-32">
        {jizdy.map((s, i) => {
          const Icon = s.icon;
          const reversed = i % 2 === 1;

          return (
            <Reveal key={s.title}>
              <article className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
                <div
                  className={`md:col-span-7${reversed ? " md:order-2" : ""}`}
                >
                  <div className="group overflow-hidden rounded-2xl">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                    />
                  </div>
                </div>
                <div
                  className={`md:col-span-5${reversed ? " md:order-1 md:pr-6" : " md:pl-6"}`}
                >
                  <span className="inline-flex items-center gap-2 text-micro uppercase tracking-caption text-sage-deep">
                    <Icon className="h-3.5 w-3.5" /> {s.kicker}
                  </span>
                  <Heading as="h3" size="md" className="mt-6">
                    {s.title}
                  </Heading>
                  <p className="mt-5 text-[15.5px] leading-[1.85] text-foreground/75">
                    {s.body}
                  </p>
                  <Button href="#contact" variant="link" className="mt-8">
                    Domluvit jízdy
                  </Button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <Expandable className="mt-16">
          Každý začíná jinak. Proto u nás najdou prostor jak ti, kteří se
          s poníkem teprve seznamují, tak jezdci, kteří chtějí rozvíjet
          techniku a jistotu v sedle.
        </Expandable>
      </Reveal>
    </Section>
  );
}

function Vylety() {
  return (
    <Section id="vylety" background="cream">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Kicker>— Výlety a příroda</Kicker>
            <Heading className="mt-8">
              Vyjížďky lesem,
              <br />k&nbsp;řece i&nbsp;za město.
            </Heading>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
            Vyjížďky do přírody kolem Stromovky, podél Vltavy i&nbsp;lesními
            cestami.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-8 overflow-hidden rounded-2xl">
          <img
            src={img("vyjizdka-les-skupina.jpg")}
            alt="Skupina na koních projíždí lesem na vyjížďce"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={60} className="md:col-span-4 overflow-hidden rounded-2xl">
          <img
            src={img("vyjizdka-podzim.jpg")}
            alt="Podzimní vyjížďka lesem s barevným listím"
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={40} className="md:col-span-5 overflow-hidden rounded-2xl">
          <img
            src={img("reka-skupina-kone.jpg")}
            alt="Skupina s koněm u řeky"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 overflow-hidden rounded-2xl">
          <img
            src={img("deti-reka-ponici.jpg")}
            alt="Skupina s bílými poníky v řece"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}

function Staj() {
  return (
    <Section id="staj">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Kicker>— Stáj a péče</Kicker>
            <Heading className="mt-8">
              Vztah ke koním
              <br />
              začíná ve stáji.
            </Heading>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
            Nejen jízdy, ale i péče, naslouchání a trpělivost.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-7 overflow-hidden rounded-2xl">
          <img
            src={img("staj-dva-ponici.jpg")}
            alt="Dva bílí poníci vedle sebe ve stáji"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={60} className="md:col-span-5 overflow-hidden rounded-2xl">
          <img
            src={img("staj-ponik-dvere.jpg")}
            alt="Bílý poník nakukuje ze dveří stáje"
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={40} className="md:col-span-5 overflow-hidden rounded-2xl">
          <img
            src={img("staj-deti-ponik.jpg")}
            alt="Seznamování s poníkem ve stáji"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 overflow-hidden rounded-2xl">
          <img
            src={img("pece-kopyta.jpg")}
            alt="Čištění kopýtek koně"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
      </div>

      <Reveal>
        <Expandable className="mt-16">
          Péče o koně je stejně důležitá jako samotné jízdy. Učíme se
          starat se o zvíře, poznáváme jeho potřeby a získáváme zodpovědnost.
          Právě tady se rodí ten nejupřímnější vztah.
        </Expandable>
      </Reveal>
    </Section>
  );
}

const galleryGroups = [
  {
    title: "Jízdy a výcvik",
    photos: [
      { src: img("jizdarna-skupina.jpg"), alt: "Skupina jezdců na koních na jízdárně", span: "md:col-span-4", h: "h-56 md:h-[320px]" },
      { src: img("jizdarna-pohyb.jpg"), alt: "Hnědý kůň v pohybu na jízdárně", span: "md:col-span-8", h: "h-64 md:h-[320px]" },
    ],
  },
  {
    title: "Venku a v přírodě",
    photos: [
      { src: img("vyjizdka-podzim.jpg"), alt: "Podzimní vyjížďka lesní cestou", span: "md:col-span-5", h: "h-56 md:h-[360px]" },
      { src: img("reka-skupina-kone.jpg"), alt: "Skupina s koněm u řeky", span: "md:col-span-7", h: "h-56 md:h-[360px]" },
      { src: img("deti-reka-ponici.jpg"), alt: "Skupina s poníky v řece", span: "md:col-span-6", h: "h-56 md:h-[300px]" },
      { src: img("zapad-slunce-dite.jpg"), alt: "Jezdec na poníkovi při západu slunce", span: "md:col-span-6", h: "h-56 md:h-[300px]" },
    ],
  },
  {
    title: "Stáj a péče",
    photos: [
      { src: img("staj-dva-ponici.jpg"), alt: "Dva bílí poníci ve stáji", span: "md:col-span-6", h: "h-56 md:h-[320px]" },
      { src: img("pece-kopyta.jpg"), alt: "Péče o kopýtka koně", span: "md:col-span-3", h: "h-56 md:h-[320px]" },
      { src: img("staj-ponik-dvere.jpg"), alt: "Poník ve dveřích stáje", span: "md:col-span-3", h: "h-56 md:h-[320px]" },
    ],
  },
  {
    title: "Atmosféra",
    photos: [
      { src: img("detail-tvar-ponika.jpg"), alt: "Portrét bílého poníka", span: "md:col-span-4", h: "h-56 md:h-[340px]" },
      { src: img("vecerni-jizda.jpg"), alt: "Večerní jízda na koni", span: "md:col-span-4", h: "h-56 md:h-[340px]" },
      { src: img("zima-portret.jpg"), alt: "Zimní portrét jezdce s poníkem", span: "md:col-span-4", h: "h-56 md:h-[340px]" },
    ],
  },
];

function Gallery() {
  return (
    <Section id="gallery" background="cream">
      <Reveal>
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Kicker>— Galerie</Kicker>
            <Heading className="mt-8">
              Malé momenty,
              <br />
              které zůstávají.
            </Heading>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
            Vybrané okamžiky z&nbsp;našich dní. Bez filtrů, bez inscenace.
          </p>
        </div>
      </Reveal>

      <div className="space-y-10 md:space-y-14">
        {galleryGroups.map((group) => (
          <div key={group.title}>
            <Reveal>
              <h3 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
                {group.title}
              </h3>
            </Reveal>
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {group.photos.map((p, i) => (
                <Reveal
                  key={p.alt}
                  delay={i * 50}
                  className={`overflow-hidden rounded-2xl ${p.span}`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className={`${p.h} w-full object-cover`}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Parties() {
  return (
    <Section id="parties">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Kicker>— Oslavy</Kicker>
            <Heading className="mt-8">
              Narozeninové
              <br />
              oslavy s&nbsp;poníky.
            </Heading>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
            V krásném prostředí Stromovky.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal delay={80} className="md:order-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={img("deti-kone-strom.jpg")}
              alt="Děti s koněm pod kvetoucím stromem během oslavy"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="md:order-1">
          <p className="text-[16px] leading-[1.85] text-foreground/75 md:text-[17px]">
            Uspořádejte oslavu s poníky v krásném
            prostředí Stromovky.
          </p>

          <Expandable className="mt-6">
            Ozvěte se nám a společně domluvíme možnosti oslavy.
          </Expandable>

          <Button href="tel:+420721208118" variant="primary" className="mt-8">
            Zavolat a domluvit oslavu
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

function Faq() {
  return (
    <Section id="faq" background="cream">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <Kicker>— FAQ</Kicker>
          <Heading className="mt-8" size="sm">
            Často kladené otázky.
          </Heading>
        </Reveal>

        <Reveal delay={80} className="md:col-span-8">
          <dl className="divide-y divide-border">
            {[
              {
                q: "Kde vás najdeme?",
                a: "Na Císařském ostrově v Praze, v blízkosti Stromovky.",
              },
              {
                q: "Pro jaký věk jsou vaše programy?",
                a: "Pro děti i dospělé. Programy přizpůsobíme věku, zkušenostem a domluvě.",
              },
              {
                q: "Jak dlouho platí permanentka?",
                a: "Permanentka platí 3 měsíce od zakoupení.",
              },
              {
                q: "Do kdy je možné omluvit lekci?",
                a: "Lekci je potřeba omluvit nejpozději 24 hodin předem.",
              },
              {
                q: "Jak domluvit narozeninovou oslavu?",
                a: "Zavolejte na +420 721 208 118.",
              },
              {
                q: "Jak se přihlásit nebo získat více informací?",
                a: "Zavolejte nebo napište na uvedené kontakty.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[10rem_1fr] md:gap-8 md:py-8"
              >
                <dt className="text-xl font-semibold text-foreground md:text-2xl">
                  {q}
                </dt>
                <dd className="text-[15px] leading-[1.75] text-foreground/75">
                  {a}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <Kicker>— Kontakt</Kicker>
          <Heading className="mt-8">
            Kontaktujte
            <br />
            nás.
          </Heading>
          <p className="mt-8 max-w-md text-[15px] leading-[1.8] text-foreground/75">
            Pro informace o jízdy, táborech nebo narozeninových oslavách nám
            zavolejte nebo napište.
          </p>

          <dl className="mt-14 space-y-10">
            {[
              {
                icon: Phone,
                dt: "Telefon",
                dd: (
                  <dd className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                    <a
                      href="tel:+420721208118"
                      className="transition-colors hover:text-sage-deep focus-visible:outline-2 focus-visible:outline-sage-deep focus-visible:outline-offset-2"
                    >
                      +420 721 208 118
                    </a>
                  </dd>
                ),
              },
              {
                icon: Mail,
                dt: "E-mail",
                dd: (
                  <dd className="mt-2 text-2xl font-semibold text-foreground md:text-[1.75rem] break-all">
                    <a
                      href="mailto:monika.zamrazilova@seznam.cz"
                      className="transition-colors hover:text-sage-deep focus-visible:outline-2 focus-visible:outline-sage-deep focus-visible:outline-offset-2"
                    >
                      monika.zamrazilova@seznam.cz
                    </a>
                  </dd>
                ),
              },
              {
                icon: MapPin,
                dt: "Lokalita",
                dd: (
                  <dd className="mt-2 text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                    Císařský ostrov
                    <br />
                    <span className="text-lg text-foreground/70 md:text-xl">
                      Praha
                    </span>
                  </dd>
                ),
              },
            ].map(({ icon: Icon, dt, dd }) => (
              <div key={dt} className="flex items-start gap-5">
                <Icon className="mt-2 h-4 w-4 text-sage-deep" />
                <div>
                  <dt className="text-micro uppercase tracking-caption text-muted-foreground">
                    {dt}
                  </dt>
                  {dd}
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="tel:+420721208118" variant="primary">
              Zavolat
            </Button>
            <Button
              href="mailto:monika.zamrazilova@seznam.cz"
              variant="secondary"
            >
              Napsat e-mail
            </Button>
          </div>

          <Expandable className="mt-10">
            Máte otázku k jízdy, táborům nebo narozeninové oslavě? Zavolejte
            nám nebo napište. Rádi vám řekneme, jak to u nás funguje, a
            domluvíme další krok.
          </Expandable>
        </Reveal>

        <Reveal delay={80} className="md:col-span-7 md:pl-10">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Mapa — Císařský ostrov, Praha"
              src="https://www.google.com/maps?q=C%C3%ADsa%C5%99sk%C3%BD%20ostrov%20Praha&output=embed"
              className="h-64 w-full grayscale-[15%] contrast-[0.95] md:h-full md:min-h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center">
              <span className="text-3xl font-semibold text-foreground">Poníci</span>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              Jízdy na ponících pro děti i dospělé. Císařský ostrov, Praha.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-micro uppercase tracking-caption text-muted-foreground">
              Rozcestník
            </div>
            <ul className="mt-5 space-y-2 text-[14px] text-foreground/75">
              {[
                { label: "O nás", href: "#about" },
                { label: "Programy", href: "#programy" },
            { label: "Jízdy", href: "#jizdy" },
                { label: "Výlety", href: "#vylety" },
                { label: "Stáj", href: "#staj" },
                { label: "Galerie", href: "#gallery" },
                { label: "Kontakt", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-sage-deep focus-visible:outline-offset-4"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-micro uppercase tracking-caption text-muted-foreground">
              Kontakt
            </div>
            <ul className="mt-5 space-y-2 text-[14px] text-foreground/75">
              <li>
                <a
                  href="tel:+420721208118"
                  className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-sage-deep focus-visible:outline-offset-2"
                >
                  +420 721 208 118
                </a>
              </li>
              <li>
                <a
                  href="mailto:monika.zamrazilova@seznam.cz"
                  className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-sage-deep focus-visible:outline-offset-2 break-all"
                >
                  monika.zamrazilova@seznam.cz
                </a>
              </li>
              <li>Císařský ostrov, Praha</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-micro uppercase tracking-caption text-muted-foreground md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Poníci · Císařský ostrov, Praha
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <div>
        <Hero />
        <About />
        <PonyPortrait />
        <Programy />
        <Jezdeni />
        <Vylety />
        <Staj />
        <Parties />
        <Gallery />
        <Faq />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
