import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play, MapPin, GraduationCap, Menu, X } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { Icon, Counter, Section, FadeIn } from "./Shared.jsx";
import * as D from "../data/content.js";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest-deep/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="font-display text-lg font-black tracking-tight text-white">
          KORA <span className="text-gold">LAB</span>
        </a>
        <ul className="hidden gap-6 text-sm font-medium text-white/85 lg:flex">
          {D.NAV.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="hover:text-gold">{label}</a></li>
          ))}
        </ul>
        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-forest-deep px-5 pb-4 lg:hidden">
          {D.NAV.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-white/90">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-forest-deep text-white">
      <img src={D.IMG.hero} alt="Green hills and farmland near Musanze, Rwanda" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/20" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-40">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="mb-4 text-base font-semibold text-white/90">E-Lab Challenge 6 · Musanze District, Rwanda</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(4rem,16vw,11rem)] font-black leading-[0.85]">KORA<br />LAB</motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
          <p className="mt-8 max-w-2xl font-display text-2xl font-bold sm:text-3xl">Turning Musanze's Fertile Ground into Youth Opportunity</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
            We are building an agribusiness group that turns local produce into marketable products, and into jobs for educated young people.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solution" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-ink hover:bg-white">
              <ArrowDown className="h-4 w-4" /> Our Solution
            </a>
            <a href={D.CONTACT.youtube} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 font-semibold transition-all hover:border-red-500 hover:bg-red-500 hover:text-white">
              <FaYoutube className="h-4 w-4 transition-transform group-hover:scale-110" /> Watch Our Pitch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="We are KORA LAB, a think tank for youth work in agribusiness"
      intro="Five students at African Leadership University, studying how Musanze's farms can become a source of dignified jobs for young people.">
      <div className="mb-10 flex flex-wrap gap-x-8 gap-y-3 font-medium text-ink/80">
        <span className="inline-flex items-center gap-2"><MapPin className="h-5 w-5 text-forest" /> Musanze District, Rwanda</span>
        <span className="inline-flex items-center gap-2"><GraduationCap className="h-5 w-5 text-forest" /> E-Lab, African Leadership University</span>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {D.TEAM.map((m, i) => (
          <FadeIn key={m.name} delay={i * 0.06}>
            <li className="list-none overflow-hidden rounded-2xl border border-forest/15 bg-white shadow-sm">
              <div className="aspect-square w-full overflow-hidden bg-forest/10">
                <img src={m.photo} alt={m.name} className="h-full w-full object-cover object-top" />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-sm font-bold leading-tight">{m.name}</h3>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}

export function Problem() {
  return (
    <Section id="problem" title="The jobs are in farming. The young people are not." dark>
      <p className="max-w-3xl text-lg leading-relaxed text-white/85">{D.PROBLEM_TEXT}</p>
      <dl className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
        {D.STATS.map((s) => (
          <div key={s.label} className="bg-forest-deep p-6">
            <dd className="font-display text-4xl font-extrabold text-gold"><Counter value={s.value} decimals={s.decimals} suffix={s.suffix} /></dd>
            <dt className="mt-2 font-semibold">{s.label}</dt>
            <p className="mt-1 text-sm text-white/65">{s.note}</p>
          </div>
        ))}
      </dl>
      <h3 className="mt-16 text-2xl font-bold">Four root causes</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {D.CAUSES.map((c) => (
          <div key={c.title} className="border-t-2 border-gold pt-4">
            <Icon name={c.icon} className="h-7 w-7 text-gold" />
            <h4 className="mt-3 text-lg font-bold">{c.title}</h4>
            <p className="mt-2 text-white/75">{c.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Solution() {
  return (
    <Section id="solution" title="One integrated agribusiness group, two divisions"
      intro="Farmers supply the raw material. Our processing division turns it into products people buy. Both create roles for educated youth.">
      <div className="grid gap-6 md:grid-cols-2">
        {D.DIVISIONS.map((d) => (
          <FadeIn key={d.title}>
            <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10">
              <img src={D.IMG[d.img]} alt="" loading="lazy" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-forest"><Icon name={d.icon} /> {d.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/75">{d.text}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <h3 className="mt-16 text-2xl font-bold">The value chain, from field to shelf</h3>
      <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {D.CHAIN.map((c, i) => (
          <motion.li key={c.label} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="relative flex flex-col items-center rounded-xl bg-forest px-3 py-5 text-center text-white">
            <Icon name={c.icon} className="h-7 w-7 text-gold" />
            <span className="mt-2 text-sm font-semibold">{c.label}</span>
          </motion.li>
        ))}
      </ol>

      <div className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {D.FEATURES.map((f) => (
          <div key={f.title} className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-forest"><Icon name={f.icon} /></span>
            <div>
              <h4 className="font-bold">{f.title}</h4>
              <p className="mt-1 text-ink/70">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Impact() {
  return (
    <section id="impact" className="bg-gold text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <h2 className="max-w-3xl text-3xl font-extrabold sm:text-5xl">What changes in Musanze by 2028</h2>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {D.IMPACT.map((i) => (
            <div key={i.label}>
              <p className="font-display text-6xl font-black text-forest-deep"><Counter value={i.value} suffix={i.suffix} /></p>
              <p className="mt-2 font-semibold leading-snug">{i.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-3xl border-l-4 border-forest-deep pl-5 text-lg leading-relaxed">
          Rwanda aims to create 849,000 agrifood jobs by 2029 through its National Strategy for Youth Employment in Agrifood Systems. Our targets are the Musanze share of that national goal.
        </p>
      </div>
    </section>
  );
}

export function Pestle() {
  const [active, setActive] = useState(0);
  const cur = D.PESTLE[active];
  return (
    <Section id="pestle" title="PESTLE: the environment we are building in"
      intro="Policy, markets, society, technology, law and land all point the same way: Rwanda is ready for youth-led agribusiness.">
      <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
        <div role="tablist" aria-label="PESTLE factors" className="flex gap-2 overflow-x-auto lg:flex-col">
          {D.PESTLE.map((p, i) => (
            <button key={p.key} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
              className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left font-semibold transition-colors ${active === i ? "bg-forest text-white" : "bg-white text-ink ring-1 ring-forest/15 hover:bg-forest/5"}`}>
              <Icon name={p.icon} className="h-5 w-5" /> {p.key}
            </button>
          ))}
        </div>
        <motion.div key={cur.key} role="tabpanel" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          className="rounded-2xl bg-white p-7 ring-1 ring-forest/15">
          <h3 className="text-2xl font-bold text-forest">{cur.key}</h3>
          <ul className="mt-5 space-y-4">
            {cur.points.map((pt) => (
              <li key={pt} className="flex gap-3 text-lg leading-snug">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />{pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

export function Budget() {
  const fmt = (n) => "$" + n.toLocaleString("en-US");
  return (
    <Section id="budget" title="$10,000 of seed capital, and where it goes"
      intro="Over half the budget goes to equipment and raw materials, because that is where jobs and products come from.">
      <ul className="space-y-6">
        {D.BUDGET.map((b) => (
          <li key={b.item}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-bold">{b.item}</h3>
              <p className="font-display font-bold text-forest">{b.pct}% · {fmt((D.TOTAL_BUDGET * b.pct) / 100)}</p>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-forest/10" role="progressbar" aria-valuenow={b.pct} aria-valuemin={0} aria-valuemax={100} aria-label={b.item}>
              <motion.div className="h-full rounded-full bg-forest" initial={{ width: 0 }} whileInView={{ width: `${b.pct * 2.5}%` }}
                viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }} style={{ maxWidth: "100%" }} />
            </div>
            <p className="mt-2 text-ink/70">{b.why}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Journey() {
  return (
    <Section id="journey" title="Our journey from Week 1 to the final pitch" dark>
      <ol className="relative ml-4 border-l-2 border-gold/60 pl-8">
        {D.JOURNEY.map((j) => (
          <FadeIn key={j.week} className="relative pb-12 last:pb-0">
            <li className="list-none">
              <span className="absolute -left-[3.2rem] flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display font-extrabold text-ink">{j.week}</span>
              <p className="text-sm font-semibold text-gold">Week {j.week}</p>
              <h3 className="text-xl font-bold">{j.title}</h3>
              <p className="mt-2 max-w-xl leading-relaxed text-white/80">{j.text}</p>
            </li>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}

export function FloatingPitch() {
  return (
    <motion.a
      href={D.CONTACT.youtube}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-600/40 transition-colors hover:bg-red-700"
      aria-label="Watch our pitch on YouTube"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>
      <FaYoutube className="h-5 w-5" />
      <span className="hidden sm:inline">Watch Pitch</span>
    </motion.a>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-3xl font-black">KORA <span className="text-gold">LAB</span></p>
          <p className="mt-2 text-white/70">E-Lab Challenge 6 — African Leadership University</p>
        </div>
        <div className="flex gap-4">
          <a href={D.CONTACT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-red-500">
            <FaYoutube className="h-7 w-7" />
          </a>
          <a href={D.CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-gold">
            <FaInstagram className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}