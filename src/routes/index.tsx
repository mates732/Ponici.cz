import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trees, ShieldCheck, Sun, MapPin, Phone, Mail, GraduationCap, Award } from "lucide-react";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import { Section } from "@/components/section";
import { Kicker, Heading } from "@/components/heading";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { Expandable } from "@/components/expandable";

const SITE_URL = "https://www.ponici.cz";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Poníci — Jezdecká školička",
  description:
    "Jezdecká školička pro děti v srdci Prahy. Ježdění na ponících, jezdecký výcvik a zážitky s poníky na Císařském ostrově u Stromovky.",
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
      { title: "Poníci | Jezdecká školička" },
      {
        name: "description",
        content:
          "Jezdecká školička pro děti v srdci Prahy. Ježdění na ponících, jezdecký výcvik a zážitky s poníky na Císařském ostrově u Stromovky.",
      },
      { property: "og:title", content: "Poníci | Jezdecká školička" },
      {
        property: "og:description",
        content:
          "Jezdecká školička pro děti v srdci Prahy. Ježdění na ponících, jezdecký výcvik a zážitky s poníky na Císařském ostrově u Stromovky.",
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
        <a href="#top" className="flex min-w-0 items-baseline gap-3">
          <span className="font-serif text-2xl tracking-tight text-foreground">Poníci</span>
          <span className="hidden text-micro uppercase tracking-kicker text-muted-foreground sm:inline">
            Jezdecká školička
          </span>
        </a>

        <nav className="hidden items-center gap-10 text-[13px] text-foreground/90 md:flex md:justify-center">
          {[
            { label: "O nás", href: "#about" },
            { label: "Ježdění", href: "#sluzby" },
            { label: "Tábory", href: "#camps" },
            { label: "Oslavy", href: "#parties" },
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
    <section id="top" className="relative w-full overflow-hidden md:snap-start md:min-h-[100svh]">
      <div className="absolute inset-0 will-change-transform motion-safe:animate-[heroZoom_24s_ease-out_forwards]">
        <img
          src={hero}
          alt="Dítě hladí poníka na louce nad Prahou při západu slunce"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
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
              <span className="h-px w-8 bg-foreground/40" /> Praha · Císařský ostrov
            </span>

            <Heading as="h1" size="xl">
              Jezdecká školička
              <br />
              pro děti
              <br />
              v&nbsp;srdci Prahy.
            </Heading>

            <p className="mt-7 max-w-md text-[15px] leading-[1.7] text-foreground/95 md:text-[17px]">
              Ježdění na ponících, jezdecký výcvik a&nbsp;zážitky s&nbsp;poníky na&nbsp;Císařském
              ostrově u&nbsp;Stromovky.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-10 md:gap-12">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="primary">
                Domluvit ježdění
              </Button>
              <Button href="#camps" variant="secondary" className="bg-cream/75 border-foreground/50">
                Prozkoumat tábory
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
              { icon: Award, text: "Oslavy s poníky" },
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
              src={portrait}
              alt="Monika Zamrazilová se svým koněm"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_40px_80px_-50px_rgba(60,45,25,0.45)]"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <Kicker>— O nás</Kicker>
            <Heading className="mt-8">
              Poníci, ježdění
              <br />
              a&nbsp;radost z&nbsp;pohybu.
            </Heading>

            <div className="mt-10 space-y-6 text-[16px] leading-[1.85] text-foreground/75 md:text-[17px]">
              <p>
                Poníci jsou místem, kde mohou děti trávit čas venku, poznávat koně a získávat
                jistotu v sedle. Na Císařském ostrově v Praze nabízíme ježdění na ponících i
                jezdecký výcvik pro děti.
              </p>
              <p>
                Začít může každý, kdo má chuť poznat poníky blíž. Někdo přijde za prvními kroky v
                sedle, jiný už míří ke skokovým lekcím nebo přípravě na ZZVJ. Společné ale zůstává
                radost z pohybu, pobyt venku a respekt ke koním.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-5 border-t border-border pt-10 md:grid-cols-3 md:gap-6">
              {[
                { n: "Císařský ostrov", l: "Praha" },
                { n: "Stromovka", l: "v okolí" },
                { n: "Příprava na ZZVJ", l: "Zkoušky základního výcviku jezdce" },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-xl bg-cream p-6 md:p-8"
                >
                  <div className="font-serif text-2xl tracking-tight text-foreground md:text-[2rem]">
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

const services = [
  {
    icon: GraduationCap,
    kicker: "01",
    title: "Ježdění na ponících",
    body: "První i\u00A0další kroky v\u00A0sedle. Děti se učí jezdit v\u00A0klidném tempu, postupně získávají jistotu a\u00A0rovnováhu.",
    img: g1,
  },
  {
    icon: Award,
    kicker: "02",
    title: "Parkurový výcvik",
    body: "Výcvik dětí v\u00A0parkuru. Od jednoduchých překážek po složitější parcours pod vedením zkušených lektorů.",
    img: g4,
  },
  {
    icon: ShieldCheck,
    kicker: "03",
    title: "Skokové lekce",
    body: "Rozvoj jezdeckých dovedností zaměřený na skokovou techniku a\u00A0správné vedení koně před překážkou i\u00A0přes ni.",
    img: g3,
  },
  {
    icon: Sun,
    kicker: "04",
    title: "Příprava na ZZVJ",
    body: "Pro jezdce, kteří se chtějí připravit na zkoušky základního výcviku jezdce. Systematická příprava na jízdárně i\u00A0v\u00A0teorii.",
    img: g2,
  },
];

function Services() {
  return (
    <Section id="sluzby" background="cream">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Kicker>— Ježdění a výcvik</Kicker>
            <Heading className="mt-8">
              Ježdění na ponících
              <br /> a&nbsp;jezdecký výcvik.
            </Heading>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
            Od prvních krůčků v sedle po přípravu na zkoušky základního výcviku jezdce.
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
                <div className={`md:col-span-7${reversed ? " md:order-2" : ""}`}>
                  <div className="group overflow-hidden rounded-2xl">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                    />
                  </div>
                </div>
                <div className={`md:col-span-5${reversed ? " md:order-1 md:pr-6" : " md:pl-6"}`}>
                  <span className="inline-flex items-center gap-2 text-micro uppercase tracking-caption text-sage-deep">
                    <Icon className="h-3.5 w-3.5" /> {s.kicker}
                  </span>
                  <Heading as="h3" size="md" className="mt-6">
                    {s.title}
                  </Heading>
                  <p className="mt-5 text-[15.5px] leading-[1.85] text-foreground/75">{s.body}</p>
                  <Button href="#contact" variant="link" className="mt-8">
                    Domluvit ježdění
                  </Button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <Expandable className="mt-16">
          Každé dítě začíná jinak. Proto u nás najdou prostor jak ti, kteří se s poníkem teprve
          seznamují, tak jezdci, kteří chtějí rozvíjet techniku a jistotu v sedle.
        </Expandable>
      </Reveal>
    </Section>
  );
}

function Camps() {
  return (
    <Section id="camps" background="cream">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Kicker>— Tábory</Kicker>
            <Heading className="mt-8">
              Příměstské
              <br /> tábory.
            </Heading>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
            Pro děti od 5 do 15 let. Císařský ostrov.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={g4}
              alt="Děti na ponících během tábora"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[16px] leading-[1.85] text-foreground/75 md:text-[17px]">
            Příměstské prázdninové tábory Trojský ostrov na ponících jsou určené dětem od 5 do 15
            let.
          </p>

          <Expandable className="mt-6">
            Čas venku, pohyb, poníci a prázdninová atmosféra na Císařském ostrově. Informace o
            aktuálních termínech a přihlášení vám rádi sdělíme telefonicky nebo e-mailem.
          </Expandable>

          <Button href="#contact" variant="primary" className="mt-8">
            Přihlásit se na tábor
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

const gallery = [
  {
    src: g2,
    alt: "Dítě na poníkovi při odpolední procházce",
    cols: "col-span-12 md:col-span-8",
    h: "h-64 md:h-[440px]",
    delay: 0,
  },
  {
    src: g1,
    alt: "Dítě se učí čistit poníka",
    cols: "col-span-6 md:col-span-4",
    h: "h-64 md:h-[440px]",
    delay: 80,
  },
  {
    src: g3,
    alt: "Dítě na poníkovi při výcviku na jízdárně",
    cols: "col-span-6 md:col-span-4",
    h: "h-56 md:h-[360px]",
    delay: 40,
  },
  {
    src: g4,
    alt: "Skupina dětí na ponících během příměstského tábora",
    cols: "col-span-6 md:col-span-4",
    h: "h-56 md:h-[360px]",
    delay: 120,
  },
  {
    src: g5,
    alt: "Ranní mlha nad loukou s poníky",
    cols: "col-span-12 md:col-span-4",
    h: "h-56 md:h-[360px]",
    delay: 160,
  },
];

function Gallery() {
  return (
    <Section id="gallery" background="cream">
      <Reveal>
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Kicker>— Deník</Kicker>
            <Heading className="mt-8">
              Malé momenty,
              <br /> které zůstávají.
            </Heading>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-foreground/70">
            Vybrané okamžiky z&nbsp;našich dní. Bez filtrů, bez inscenace.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {gallery.map((img) => (
          <Reveal key={img.alt} delay={img.delay} className={img.cols}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`${img.h} w-full rounded-2xl object-cover`}
            />
          </Reveal>
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
              <br /> oslavy s&nbsp;poníky.
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
              src={g2}
              alt="Dítě na poníkovi během oslavy"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="md:order-1">
          <p className="text-[16px] leading-[1.85] text-foreground/75 md:text-[17px]">
            Uspořádejte dítěti narozeninovou oslavu s poníky v krásném prostředí Stromovky.
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
                q: "Pro jaký věk jsou tábory?",
                a: "Pro děti od 5 do 15 let.",
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
                <dt className="font-serif text-xl text-foreground md:text-2xl">{q}</dt>
                <dd className="text-[15px] leading-[1.75] text-foreground/75">{a}</dd>
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
            Pro informace o ježdění, táborech nebo narozeninových oslavách nám zavolejte nebo
            napište.
          </p>

          <dl className="mt-14 space-y-10">
            {[
              {
                icon: Phone,
                dt: "Telefon",
                dd: (
                  <dd className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
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
                  <dd className="mt-2 font-serif text-2xl text-foreground md:text-[1.75rem] break-all">
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
                  <dd className="mt-2 font-serif text-2xl leading-tight text-foreground md:text-3xl">
                    Císařský ostrov
                    <br />
                    <span className="text-lg text-foreground/70 md:text-xl">Praha</span>
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
            <Button href="mailto:monika.zamrazilova@seznam.cz" variant="secondary">
              Napsat e-mail
            </Button>
          </div>

          <Expandable className="mt-10">
            Máte otázku k ježdění, táborům nebo narozeninové oslavě? Zavolejte nám nebo napište.
            Rádi vám řekneme, jak to u nás funguje, a domluvíme další krok.
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
            <div className="font-serif text-3xl text-foreground">Poníci</div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              Jezdecká školička pro děti. Císařský ostrov, Praha.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-micro uppercase tracking-caption text-muted-foreground">
              Rozcestník
            </div>
            <ul className="mt-5 space-y-2 text-[14px] text-foreground/75">
              {[
                { label: "O nás", href: "#about" },
                { label: "Ježdění", href: "#sluzby" },
                { label: "Tábory", href: "#camps" },
                { label: "Oslavy", href: "#parties" },
                { label: "FAQ", href: "#faq" },
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
          <div>© {new Date().getFullYear()} Poníci · Císařský ostrov, Praha</div>
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
        <Services />
        <Camps />
        <Parties />
        <Gallery />
        <Faq />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
