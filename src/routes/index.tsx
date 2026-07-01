import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
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
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ---------- Reveal on scroll ---------- */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), obs.disconnect()),
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
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
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-foreground">Ponici</span>
          <span className="hidden text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:inline">Est. Praha</span>
        </a>
        <nav className="hidden items-center gap-10 text-sm text-foreground/80 md:flex">
          <a href="#about" className="hover:text-foreground">Příběh</a>
          <a href="#services" className="hover:text-foreground">Nabídka</a>
          <a href="#parents" className="hover:text-foreground">Rodiče</a>
          <a href="#gallery" className="hover:text-foreground">Galerie</a>
          <a href="#contact" className="hover:text-foreground">Kontakt</a>
        </nav>
        <a
          href="tel:+420721208118"
          className="hidden items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" /> 721 208 118
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Dítě hladí poníka na louce nad Prahou při západu slunce"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* very soft cream wash — no black */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl fade-up">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-foreground/70 backdrop-blur">
              <Sparkles className="h-3 w-3" /> Praha · Císařský ostrov
            </span>
            <h1 className="font-serif text-[13vw] leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Kde se z&nbsp;dětství
              <br />
              stává <em className="italic text-sage-deep">vzpomínka.</em>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/75 md:text-lg">
              Butiková jezdecká škola pro děti od 3 do 15 let. Poníci, klid stromovky a lidé, kterým můžete své dítě svěřit.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                Rezervovat lekci
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground/5"
              >
                Naše nabídka
              </a>
            </div>
          </div>
        </div>

        {/* trust row */}
        <div className="mx-auto mt-10 mb-8 w-full max-w-7xl px-6 md:mb-10 md:px-10">
          <div className="grid grid-cols-2 gap-6 border-t border-foreground/10 pt-6 text-xs uppercase tracking-[0.22em] text-foreground/60 sm:grid-cols-4">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> 20+ let praxe</div>
            <div className="flex items-center gap-2"><Trees className="h-4 w-4" /> V srdci Stromovky</div>
            <div className="flex items-center gap-2"><Heart className="h-4 w-4" /> Rodinný přístup</div>
            <div className="flex items-center gap-2"><Sun className="h-4 w-4" /> Děti od 3 let</div>
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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <img
              src={portrait}
              alt="Monika Zamrazilová se svým poníkem"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_30px_60px_-40px_rgba(60,45,25,0.35)]"
            />
            <div className="absolute -bottom-8 -right-6 hidden max-w-[220px] rounded-xl border border-border bg-background/95 p-5 shadow-[0_20px_40px_-30px_rgba(60,45,25,0.4)] backdrop-blur md:block">
              <p className="font-serif text-lg italic leading-snug text-foreground">
                „Nejde o&nbsp;to naučit dítě jezdit. Jde o&nbsp;to naučit ho vnímat.“
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Monika · zakladatelka</p>
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.28em] text-sage-deep">— O nás</span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
              Malá škola s&nbsp;velkým srdcem, ukrytá mezi stromy Trojského ostrova.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.8] text-foreground/75 md:text-[17px]">
              <p>
                Přes dvě desetiletí učíme děti nejen jezdit — učíme je zpomalit, naslouchat a&nbsp;starat se o&nbsp;živou bytost. Naši poníci znají své jméno, své děti, svůj klid.
              </p>
              <p>
                Nedaleko pražské ZOO, na Císařském ostrově a&nbsp;v&nbsp;bubenečské Stromovce, jsme si postavili místo, kam se rodiny rády vrací. Bez spěchu. Bez davů. Bez kompromisů v&nbsp;bezpečí.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {[
                { n: "20+", l: "let s dětmi" },
                { n: "3–15", l: "let věku" },
                { n: "1:1", l: "individuální péče" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-4xl text-foreground md:text-5xl">{s.n}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
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
    body: "Trpělivá výuka od úplných začátků. Dítě se učí sedu, rovnováhu a&nbsp;především důvěru — ke koni i&nbsp;k sobě.",
    img: g1,
  },
  {
    icon: Tent,
    kicker: "02 — Léto s poníky",
    title: "Příměstské tábory",
    body: "Prázdninové dny v&nbsp;přírodě Trojského ostrova. Ráno vyzvednutí, večer doma — mezi tím celý svět koní.",
    img: g4,
  },
  {
    icon: Cake,
    kicker: "03 — Vzpomínka na celý život",
    title: "Narozeninové oslavy",
    body: "Oslavte narozeniny v&nbsp;klidu Stromovky. Poníci, hry a&nbsp;odpoledne, na které se nezapomíná.",
    img: g2,
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.28em] text-sage-deep">— Co nabízíme</span>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
                Tři cesty, jak se
                <br />
                spřátelit s&nbsp;poníkem.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-foreground/70">
              Každá lekce, tábor i&nbsp;oslava jsou vedeny osobně. Nikdy ne ve velkých skupinách — a nikdy bez lásky k&nbsp;detailu.
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
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${reversed ? "md:order-1 md:pr-4" : "md:pl-4"}`}>
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-sage-deep">
                      <Icon className="h-3.5 w-3.5" /> {s.kicker}
                    </div>
                    <h3 className="mt-5 font-serif text-3xl leading-[1.1] text-foreground md:text-5xl">{s.title}</h3>
                    <p
                      className="mt-5 text-base leading-[1.8] text-foreground/75"
                      dangerouslySetInnerHTML={{ __html: s.body }}
                    />
                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm text-foreground underline decoration-sage decoration-2 underline-offset-8 transition-colors hover:decoration-foreground"
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

/* ---------- Why parents ---------- */
const testimonials = [
  {
    q: "Naše dcera se z&nbsp;plaché holčičky proměnila v&nbsp;sebevědomé dítě. Za rok u&nbsp;Ponici.",
    a: "Kateřina · maminka Emy (7)",
  },
  {
    q: "Konečně místo, kde není spěch. Přijedete a&nbsp;zpomalí se vám dech.",
    a: "Jakub · tatínek Tobiáše (5)",
  },
  {
    q: "Monika ke koním i&nbsp;k dětem přistupuje s&nbsp;úctou, kterou dnes hledáte marně.",
    a: "Petra · maminka Anny (9)",
  },
];

function WhyParents() {
  return (
    <section id="parents" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.28em] text-sage-deep">— Proč rodiče volí Ponici</span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-5xl">
              Důvěra se nedá koupit. Musí se získat — den za dnem.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/70">
              Neslibujeme kariéru jezdců. Slibujeme dětem hodinu klidu, přítomnosti a&nbsp;laskavosti — každý týden.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:col-span-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.a} delay={i * 100} className={i === 1 ? "md:mt-16" : ""}>
                <figure className="h-full rounded-2xl border border-border bg-cream p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(60,45,25,0.35)]">
                  <div className="font-serif text-3xl leading-none text-sage-deep">"</div>
                  <blockquote
                    className="mt-4 font-serif text-xl leading-snug text-foreground md:text-2xl"
                    dangerouslySetInnerHTML={{ __html: t.q }}
                  />
                  <figcaption className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t.a}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={200} className="md:col-span-2">
              <div className="overflow-hidden rounded-2xl">
                <img src={g5} alt="Mlhavé ráno v pražské Stromovce" loading="lazy" className="h-64 w-full object-cover md:h-80" />
              </div>
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
              <span className="text-[11px] uppercase tracking-[0.28em] text-sage-deep">— Deník</span>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
                Malé momenty,
                <br /> které zůstávají.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-foreground/70">
              Vybrané okamžiky z&nbsp;našich dní. Bez filtrů, bez inscenace.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-8">
            <img src={g2} alt="" loading="lazy" className="h-64 w-full rounded-2xl object-cover md:h-[420px]" />
          </Reveal>
          <Reveal delay={80} className="col-span-6 md:col-span-4">
            <img src={g1} alt="" loading="lazy" className="h-64 w-full rounded-2xl object-cover md:h-[420px]" />
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
            <span className="text-[11px] uppercase tracking-[0.28em] text-sage-deep">— Kontakt</span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
              Zavolejte. Rádi Vás uslyšíme.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/75">
              Odpovídáme osobně, obvykle týž den. Nejrychleji nás zastihnete telefonicky.
            </p>

            <dl className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-sage-deep" />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Telefon</dt>
                  <dd className="mt-1 font-serif text-2xl text-foreground">
                    <a href="tel:+420721208118" className="hover:text-sage-deep">+420 721 208 118</a>
                  </dd>
                  <p className="mt-1 text-sm text-muted-foreground">Monika Zamrazilová · manager</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-sage-deep" />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Email</dt>
                  <dd className="mt-1 font-serif text-2xl text-foreground">
                    <a href="mailto:monika.zamrazilova@seznam.cz" className="hover:text-sage-deep">
                      monika.zamrazilova@seznam.cz
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-sage-deep" />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Kde nás najdete</dt>
                  <dd className="mt-1 font-serif text-2xl leading-tight text-foreground">
                    Císařský ostrov
                    <br />
                    <span className="text-lg text-foreground/70">Praha, Česká republika</span>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mapa — Císařský ostrov, Praha"
                src="https://www.google.com/maps?q=C%C3%ADsa%C5%99sk%C3%BD%20ostrov%20Praha&output=embed"
                className="h-64 w-full grayscale-[20%] contrast-[0.95]"
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
                window.location.href = `mailto:monika.zamrazilova@seznam.cz?subject=Zpr%C3%A1va%20z%20webu%20Ponici&body=${encodeURIComponent(body)}`;
              }}
              className="rounded-3xl border border-border bg-cream p-8 md:p-12"
            >
              <h3 className="font-serif text-2xl text-foreground md:text-3xl">Napište nám</h3>
              <p className="mt-2 text-sm text-muted-foreground">Ozveme se Vám osobně.</p>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  { name: "name", label: "Jméno", type: "text", required: true },
                  { name: "email", label: "E-mail", type: "email", required: true },
                  { name: "phone", label: "Telefon", type: "tel", required: false },
                ].map((f) => (
                  <label key={f.name} className={`block ${f.name === "phone" ? "" : ""}`}>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {f.label}
                    </span>
                    <input
                      type={f.type}
                      name={f.name}
                      required={f.required}
                      className="mt-3 w-full border-b border-border bg-transparent py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-sage-deep focus:outline-none"
                    />
                  </label>
                ))}
                <label className="block md:col-span-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Zpráva</span>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-sage-deep focus:outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                Odeslat zprávu
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="font-serif text-3xl text-foreground">Ponici</div>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Butiková jezdecká škola pro děti. Praha, Císařský ostrov &amp; Stromovka.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground/70">
            <a href="#about" className="hover:text-foreground">Příběh</a>
            <a href="#services" className="hover:text-foreground">Nabídka</a>
            <a href="#gallery" className="hover:text-foreground">Galerie</a>
            <a href="#contact" className="hover:text-foreground">Kontakt</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Ponici · Vytvořeno s láskou v Praze</div>
          <div>+420 721 208 118 · monika.zamrazilova@seznam.cz</div>
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
      <WhyParents />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
