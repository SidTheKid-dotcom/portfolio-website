"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* Swap this for the real address. Used by the "email" action. */
const CONTACT_EMAIL = "hello@example.com";

const principles = [
  {
    title: "Learn by entering",
    icon: "enter",
    tone: "blue",
    body: "I build fluency by shipping inside unfamiliar systems, not by studying them from the outside. Real results, early, with limited resources.",
    foot: "Regulatory science, TB epidemiology, adaptive browsers",
  },
  {
    title: "Talk to the users",
    icon: "chat",
    tone: "teal",
    body: "I test reality instead of theorizing about it: customer interviews, demos, signups. Doubt is data, so I write it down before it disappears.",
    foot: "Validated learning beats a polished pitch",
  },
  {
    title: "Creative thinking > code",
    icon: "spark",
    tone: "violet",
    body: "When execution is cheap, judgment is the scarce resource. The hard part is seeing what should exist; code just makes it real.",
    foot: "The idea has to be right before the build matters",
  },
  {
    title: "Distribution is the product",
    icon: "broadcast",
    tone: "amber",
    body: "Writing, demos, and launches are not afterthoughts. They decide whether anything you build is ever found.",
    foot: "Demos, reels, and posts are how ideas survive contact",
  },
];

const PRINCIPLE_ICONS = {
  enter: "M13 3 h7 v18 h-7 M3 12 h11 M10 8 l4 4 l-4 4",
  spark: "M12 2 l2.2 7.8 L22 12 l-7.8 2.2 L12 22 l-2.2-7.8 L2 12 l7.8-2.2 Z",
  chat: "M4 5 h16 v11 h-11 l-5 4 Z M8 10 h0.01 M12 10 h0.01 M16 10 h0.01",
  broadcast: "M6 13 a8 8 0 0 1 7 7 M6 7.5 a13.5 13.5 0 0 1 12.5 12.5",
};

function PrincipleIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={PRINCIPLE_ICONS[name]} />
      {name === "broadcast" && <circle cx="5.5" cy="18.5" r="1.6" className="fill" />}
    </svg>
  );
}

const systems = [
  {
    code: "01",
    title: "Froncort.AI",
    kind: "Healthcare AI · current",
    desc: "Joined as an intern, became Lead Engineer, now Product Manager, in about 12 months. I run 3 product teams across live, enterprise healthcare-AI products.",
    metric: "Led 9 engineers and the technical direction",
    products: [
      {
        title: "RegDoc",
        kind: "Regulatory agents",
        desc: "FDA and EU-MDR-aligned domain agents that turn manual regulatory templating into compliance-ready documents.",
        metric: "Cut regulatory documentation from weeks to minutes",
      },
      {
        title: "AI NETRA",
        kind: "Public-health AI",
        desc: "Agentic and geospatial inference for TB outbreak prediction and supply allocation. Built with FIND, backed by Google.org; demoed at the India AI Impact Summit 2026.",
        metric: "Cut TB screening effort by about 55%",
      },
    ],
  },
  {
    code: "02",
    title: "Mirage",
    kind: "Adaptive web · co-founder",
    desc: "Browser interfaces that reshape any website around the person using it, with agents at the core. 400-person waitlist, MVP in progress.",
    metric: "Into the 16VC Summer Fellowship",
  },
  {
    code: "03",
    title: "Distribution",
    kind: "Founder-led",
    desc: "Demos, launch videos, and short-form loops used as product proof, including a post that reached 600K views.",
    metric: "One post, 600K views",
  },
];

const builds = [
  { type: "Adaptive browser interfaces", title: "Mirage", kind: "reshape", res: "Working demos, 400 waitlist, 16VC Fellowship.", href: "https://x.com/trymirageapp" },
  { type: "Regulatory documentation", title: "RegDoc", kind: "doc", res: "Compliance-ready FDA / EU-MDR docs in minutes.", href: null },
  { type: "TB outbreak prediction", title: "AI NETRA", kind: "geo", res: "Demoed at the India AI Impact Summit 2026.", href: "https://www.linkedin.com/posts/froncortai_aiabrnetra-precisionpublichealth-tb-activity-7429159194530017280-nK0J" },
  { type: "Enterprise knowledge RAG", title: "MercuryAI", kind: "graph", res: "1st place, IIT Bombay TechFest AI Quest.", href: "https://www.youtube.com/watch?v=l1pXpls1Vro" },
  { type: "City event detection", title: "Urban Eye AI", kind: "scan", res: "Real-time civic alerts on ESP32 edge devices.", href: "https://github.com/urban-eye-ai/Hub-Backend" },
  { type: "Campus social network", title: "Oasis", kind: "network", res: "1,200+ organic users, zero marketing.", href: "https://github.com/SidTheKid-dotcom/oasis-deploy-test" },
  { type: "Multiplayer strategy", title: "Steal or Share", kind: "exchange", res: "Live at a college club, 200+ concurrent players, game theory in the wild.", href: "https://github.com/SidTheKid-dotcom/EDC-Share-Steal" },
  { type: "Distribution experiment", title: "sid.breaks.prod", kind: "growth", res: "0 to 1,000 followers in 6 weeks.", href: "https://www.instagram.com/sid.breaks.prod/" },
];

const notes = [
  { label: "X Article", title: "The next UI is intent", body: "Static software starts to crack once agents understand intent and context.", img: "/notes/article-1.jpeg", href: "https://x.com/Siddhant_Vishnu/status/2060035404158648541" },
  { label: "X Article", title: "Distribution is product", body: "Demos, writing, and launch artifacts are not afterthoughts. They are the work.", img: "/notes/article-2.jpeg", href: "https://x.com/Siddhant_Vishnu/status/2062450564538241054" },
  { label: "Build note", title: "Notes from Mirage", body: "What I am learning while turning the web from fixed pages into personal workflows.", img: "/notes/mirage-board.jpeg", href: "https://x.com/trymirageapp" },
];

const commands = [
  { label: "CV", meta: "Resume (PDF)", href: "/Siddhant_Vishnu_CV.pdf" },
  { label: "X / Twitter", meta: "@Siddhant_Vishnu", href: "https://x.com/Siddhant_Vishnu" },
  { label: "LinkedIn", meta: "siddhant-vishnu", href: "https://www.linkedin.com/in/siddhant-vishnu-832296280/" },
  { label: "GitHub", meta: "SidTheKid-dotcom", href: "https://github.com/SidTheKid-dotcom" },
  { label: "Instagram", meta: "@sid.breaks.prod", href: "https://www.instagram.com/sid.breaks.prod/" },
];

function isExternal(href) {
  return href?.startsWith("http");
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useAtmosphere() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--mx", (e.clientX / window.innerWidth - 0.5).toFixed(4));
        root.style.setProperty("--my", (e.clientY / window.innerHeight - 0.5).toFixed(4));
      });
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll", max > 0 ? (window.scrollY / max).toFixed(4) : "0");
    };

    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

/* ---------- hero SVG: a mind draws in, then transforms into stacked iso layers ---------- */

// --- brain line-art (intro): outline + folds + central fissure ---
const BRAIN_OUTLINE =
  "M240 118 C212 96 168 104 154 140 C120 138 98 178 116 210 C92 232 100 278 134 290 C128 326 168 356 208 344 C222 366 258 366 272 344 C312 356 352 326 346 290 C380 278 388 232 364 210 C382 178 360 138 326 140 C312 104 268 96 240 118 Z";
const BRAIN_FISSURE = "M240 124 C256 160 224 196 244 232 C262 266 226 300 240 340";
const FOLDS_LEFT = ["M168 170 C200 162 210 196 178 210", "M150 232 C186 226 200 260 166 274", "M182 296 C206 290 216 314 190 322"];
const FOLDS_RIGHT = ["M312 170 C280 162 270 196 302 210", "M330 232 C294 226 280 260 314 274", "M298 296 C274 290 264 314 290 322"];
const BRAIN_NODES = [[192, 184, ""], [166, 248, "alt"], [240, 180, ""], [206, 318, "alt"], [314, 184, "alt"], [300, 248, ""], [244, 300, "alt"], [280, 318, ""]];
// clean, recognisable brain (Lucide "brain", ISC-licensed), drawn on a 24x24 grid
const LUCIDE_BRAIN = [
  "M12 18V5",
  "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",
  "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
  "M17.997 5.125a4 4 0 0 1 2.526 5.77",
  "M18 18a4 4 0 0 0 2-7.464",
  "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
  "M6 18a4 4 0 0 1-2-7.464",
  "M6.003 5.125a4 4 0 0 0-2.526 5.77",
];

// --- isometric stack (final state), ~20% larger than the brain ---
const SW = 178, SH = 75, ST = 14, SCX = 235, SCENTER = 320;
const STACK = [
  { cy: 152, label: "learn by entering" },
  { cy: 264, label: "talk to the users" },
  { cy: 376, label: "creative thinking > code" },
  { cy: 488, label: "distribution is product" },
];
const LABEL_Y = STACK.map((l) => l.cy);

function iso(cx, cy, u, v) { return [cx + (u - v) * SW, cy - SH + (u + v) * SH]; }
const pt = (p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`;
function tilePath(cy) {
  return `M${pt(iso(SCX, cy, 0, 0))} L${pt(iso(SCX, cy, 1, 0))} L${pt(iso(SCX, cy, 1, 1))} L${pt(iso(SCX, cy, 0, 1))} Z`;
}
function slabPath(cy) {
  const r = iso(SCX, cy, 1, 0), b = iso(SCX, cy, 1, 1), l = iso(SCX, cy, 0, 1);
  return `M${pt(l)} L${l[0].toFixed(1)} ${(l[1] + ST).toFixed(1)} L${b[0].toFixed(1)} ${(b[1] + ST).toFixed(1)} L${r[0].toFixed(1)} ${(r[1] + ST).toFixed(1)} L${pt(r)}`;
}
function layerDetail(i, cy) {
  const I = (u, v) => iso(SCX, cy, u, v);
  const line = (u1, v1, u2, v2, k, alt) => (
    <path key={k} className={alt ? "st-line alt" : "st-line"} d={`M${pt(I(u1, v1))} L${pt(I(u2, v2))}`} />
  );
  if (i === 0) {
    return <>{[0, 1, 2].map((n) => { const p = I(0.16 + n * 0.06, 0.16); return <circle key={n} className="st-dot" cx={p[0]} cy={p[1]} r="3" />; })}{line(0.22, 0.5, 0.74, 0.5, "a")}{line(0.22, 0.66, 0.56, 0.66, "b", true)}</>;
  }
  if (i === 1) {
    const g = [];
    for (let n = 1; n <= 3; n++) { g.push(line(n * 0.25, 0.18, n * 0.25, 0.82, `v${n}`)); g.push(line(0.18, n * 0.25, 0.82, n * 0.25, `h${n}`, true)); }
    return <>{g}</>;
  }
  if (i === 2) {
    return <>{line(0.22, 0.34, 0.76, 0.34, "c", true)}{line(0.22, 0.52, 0.58, 0.52, "d")}{line(0.22, 0.7, 0.7, 0.7, "e")}</>;
  }
  const c = I(0.5, 0.5);
  return <><circle className="st-core" cx={c[0]} cy={c[1]} r="9" /><ellipse className="st-orbit" cx={c[0]} cy={c[1]} rx={SW * 0.42} ry={SH * 0.42} /></>;
}

function HeroMind() {
  const ref = useRef(null);
  const [morphed, setMorphed] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setMorphed(true); return; }
    let t;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          t = setTimeout(() => setMorphed(true), 800);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <svg ref={ref} className={`engine-svg ${morphed ? "morphed" : ""}`} viewBox="0 0 640 600" role="img"
      aria-label="A mind that resolves into a stacked system: learn by entering, creative thinking over code, talk to the users, distribution is product.">
      {/* intro: a clean brain (no labels). The morph opens it to reveal how it works. */}
      <g className="brain-stage">
        <g className="lucide-brain" transform="translate(161 192) scale(9.5)">
          {LUCIDE_BRAIN.map((d, i) => <path key={i} d={d} className={i === 0 ? "lb-mid" : ""} />)}
        </g>
      </g>

      {/* final: isometric stack. Painted bottom-to-top so layer 1 (top) sits
          IN FRONT of layer 2's top edge; opacity recedes going down. */}
      <g className="stack-stage">
        {STACK.map((layer, i) => ({ layer, i })).reverse().map(({ layer, i }) => (
          <g key={i} className="stack-layer" style={{ "--fx": "40px", "--fy": `${320 - layer.cy}px`, "--ld": `${i * 150}ms` }}>
            <path className="slab" d={slabPath(layer.cy)} />
            <path className="tile" d={tilePath(layer.cy)} />
            {layerDetail(i, layer.cy)}
            <path className="synapse st-leader" d={`M${SCX + SW} ${layer.cy} L${SCX + SW + 16} ${LABEL_Y[i]} L${SCX + SW + 28} ${LABEL_Y[i]}`} />
          </g>
        ))}
        <g className="stack-labels">
          {STACK.map((layer, i) => (
            <text key={i} className="leader-text" x={SCX + SW + 36} y={LABEL_Y[i] + 4} style={{ "--ld": `${500 + i * 110}ms` }}>{layer.label}</text>
          ))}
        </g>
      </g>
    </svg>
  );
}

function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.meta.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const go = (cmd) => {
    if (!cmd) return;
    onClose();
    if (isExternal(cmd.href) || cmd.href.startsWith("mailto:") || cmd.href.endsWith(".pdf")) {
      window.open(cmd.href, isExternal(cmd.href) ? "_blank" : "_self", "noopener,noreferrer");
    } else {
      document.querySelector(cmd.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    if (e.key === "Enter") { e.preventDefault(); go(results[active]); }
  };

  if (!open) return null;

  return (
    <div className="cmd-overlay" role="dialog" aria-modal="true" aria-label="Command palette">
      <button className="cmd-backdrop" aria-label="Close" onClick={onClose} />
      <div className="cmd-panel">
        <div className="cmd-input">
          <span className="prompt">›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKey}
            placeholder="Find a profile or the CV…"
            aria-label="Search"
          />
          <kbd>esc</kbd>
        </div>
        <div className="cmd-list">
          {results.length === 0 && <div className="cmd-empty">No matches.</div>}
          {results.map((c, i) => (
            <button
              key={c.label}
              className={`cmd-item ${i === active ? "active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => go(c)}
            >
              <span className="ci-key">↵</span>
              <span className="ci-label">{c.label}</span>
              <span className="ci-meta">{c.meta}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// pointy-top hexagon path (for the AI NETRA H3-style heatmap)
function hexPath(cx, cy, r) {
  let p = "";
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 90);
    p += (i ? "L" : "M") + (cx + r * Math.cos(a)).toFixed(1) + " " + (cy + r * Math.sin(a)).toFixed(1) + " ";
  }
  return p + "Z";
}

// AI NETRA honeycomb: rows of hexes, coloured by TB risk
const NETRA_HEX = (() => {
  const r = 15, dx = Math.sqrt(3) * r, dy = 1.5 * r;
  const rows = [
    { y: 22, xs: [61, 87, 113, 139], risk: ["low", "med", "med", "low"] },
    { y: 22 + dy, xs: [48, 74, 100, 126, 152], risk: ["med", "high", "high", "high", "med"] },
    { y: 22 + 2 * dy, xs: [61, 87, 113, 139], risk: ["low", "med", "med", "low"] },
  ];
  const cells = [];
  rows.forEach((row) => row.xs.forEach((x, j) => cells.push({ x, y: row.y, risk: row.risk[j], r })));
  return { cells, dx };
})();

function BuildVisual({ kind }) {
  switch (kind) {
    case "reshape": // Mirage — a real site reshaped, the blob flooding the change
      return (
        <div className="bv-reshape">
          <img className="bv-shot bv-before" src="/builds/mirage-before.jpeg" alt="" loading="lazy" />
          <img className="bv-shot bv-after" src="/builds/mirage-after.jpeg" alt="" loading="lazy" />
          <span className="bv-mirblob" aria-hidden="true" />
        </div>
      );
    case "doc": // RegDoc — thousands of source docs compiled into one review-ready report
      return (
        <svg className="bvis-svg bv-regdoc" viewBox="0 0 200 100" aria-hidden="true">
          {/* a deep stack of source documents */}
          {[5, 4, 3, 2, 1, 0].map((i) => (
            <rect key={i} className="bv-srcdoc" style={{ "--i": `${i * 0.12}s` }} x={20 + i * 3.5} y={26 - i * 2.2} width="40" height="50" rx="3" />
          ))}
          <text className="bv-tag" x="40" y="90">1,000s of docs</text>
          {/* fed through the agent into a single compiled report */}
          <line className="bv-flowline" x1="66" y1="50" x2="120" y2="50" />
          <circle className="bv-flow" r="2.6" style={{ offsetPath: "path('M66 50 L120 50')" }} />
          <rect className="bv-stroke" x="126" y="20" width="54" height="60" rx="4" />
          <line className="bv-soft" x1="134" y1="32" x2="172" y2="32" /><line className="bv-soft" x1="134" y1="42" x2="166" y2="42" />
          <path className="bv-check" pathLength="1" d="M137 60 l9 9 l18 -22" />
          <text className="bv-tag accent" x="153" y="92">FDA · EU-MDR</text>
        </svg>
      );
    case "geo": // AI NETRA — H3 hex heatmap, one cell flagged as a high-alert TB cluster
      return (
        <svg className="bvis-svg bv-netra" viewBox="0 0 200 100" aria-hidden="true">
          {NETRA_HEX.cells.map((c, i) => (
            <path key={i} className={`bv-hex risk-${c.risk} ${i === 6 ? "alert" : ""}`} style={{ "--i": `${(i % 5) * 0.18}s` }} d={hexPath(c.x, c.y, c.r - 1.5)} />
          ))}
          {/* the flagged cluster */}
          <circle className="bv-ping red" cx="100" cy="44.5" r="18" />
          <text className="bv-hexcount" x="100" y="48">27</text>
          <g className="bv-alert">
            <path className="bv-alert-leader" d="M112 37 L118 21" />
            <rect className="bv-alert-pill" x="116" y="11" width="78" height="19" rx="9.5" />
            <text className="bv-alert-text" x="155" y="23.6">HIGH ALERT</text>
          </g>
        </svg>
      );
    case "graph": { // MercuryAI — one brain for your company, wired to every source
      const sources = [
        { x: 34, y: 30, label: "codebase" },
        { x: 206, y: 30, label: "wikis" },
        { x: 34, y: 82, label: "doc repos" },
        { x: 206, y: 82, label: "tickets" },
      ];
      return (
        <svg className="bvis-svg bv-mercury" viewBox="0 0 240 112" aria-hidden="true">
          {sources.map((s, i) => {
            const right = s.x > 120;
            const d = `M${s.x} ${s.y} L120 56`;
            return (
              <g key={i}>
                <path className="bv-mflowline" d={d} />
                <circle className="bv-msrc" cx={s.x} cy={s.y} r="4.5" />
                <circle className="bv-mpkt" r="2.4" style={{ offsetPath: `path('${d}')`, "--i": `${i * 0.5}s` }} />
                <text className={`bv-mlabel ${right ? "r" : "l"}`} x={right ? s.x - 9 : s.x + 9} y={s.y + 3}>{s.label}</text>
              </g>
            );
          })}
          <g className="bv-mbrain" transform="translate(92.4 25) scale(2.3)">
            {LUCIDE_BRAIN.map((d, i) => <path key={i} d={d} className={i === 0 ? "lb-mid" : ""} />)}
          </g>
          <text className="bv-mtag" x="120" y="106">your company&apos;s brain</text>
        </svg>
      );
    }
    case "scan": // Urban Eye — a feed scanned, flagging civic events
      return (
        <svg className="bvis-svg bv-urban" viewBox="0 0 200 100" aria-hidden="true">
          <rect className="bv-stroke" x="24" y="16" width="152" height="68" rx="6" />
          {Array.from({ length: 5 }).map((_, i) => <line key={i} className="bv-grid" x1={24 + (i + 1) * 25} y1="16" x2={24 + (i + 1) * 25} y2="84" />)}
          <rect className="bv-scan" x="24" y="16" width="3" height="68" />
          <g className="bv-reticle"><path className="bv-stroke" d="M86 44 h-10 v-8 M114 44 h10 v-8 M86 64 h-10 v8 M114 64 h10 v8" /></g>
          {["RIOT", "SPEEDING", "LITTERING"].map((t, i) => (
            <g key={t} className="bv-evt" style={{ "--i": `${i * 1.5}s` }}>
              <path className="bv-evt-leader" d="M44 28 L96 50" />
              <circle className="bv-evt-dot" cx="40" cy="28" r="2.8" />
              <text className="bv-evt-text" x="48" y="31.5">{t}</text>
            </g>
          ))}
        </svg>
      );
    case "network": // Oasis — a neon, cyberpunk campus network
      return (
        <div className="bv-oasis">
          <svg className="bvis-svg" viewBox="0 0 200 100" aria-hidden="true">
            {/* synthwave horizon grid */}
            <g className="bv-synth">
              {[-90, -55, -28, -10, 10, 28, 55, 90].map((k, i) => <line key={`v${i}`} x1="100" y1="60" x2={100 + k} y2="104" />)}
              {[64, 72, 82, 94].map((y, i) => <line key={`h${i}`} x1="0" y1={y} x2="200" y2={y} />)}
            </g>
            {[[44, 26], [156, 28], [34, 66], [166, 70], [78, 84], [128, 82], [70, 22], [136, 20]].map(([x, y], i) => (
              <line key={i} className="bv-neon-edge" style={{ "--i": `${i * 0.22}s` }} x1="100" y1="50" x2={x} y2={y} />
            ))}
            {[[44, 26], [156, 28], [34, 66], [166, 70], [78, 84], [128, 82], [70, 22], [136, 20]].map(([x, y], i) => (
              <circle key={i} className={`bv-neon-node ${i % 2 ? "mag" : "cyan"}`} style={{ "--i": `${i * 0.22}s` }} cx={x} cy={y} r="3.4" />
            ))}
          </svg>
          <img className="bv-oasis-logo" src="/builds/oasis.png" alt="" loading="lazy" />
        </div>
      );
    case "exchange": // Steal or Share — the split-or-steal dilemma, live at a college club
      return (
        <svg className="bvis-svg bv-game" viewBox="0 0 200 100" aria-hidden="true">
          {/* the shared pot of coins */}
          <g className="bv-pot-wrap">
            <ellipse className="bv-coin" cx="100" cy="44" rx="22" ry="7.5" />
            <ellipse className="bv-coin" cx="100" cy="39.5" rx="22" ry="7.5" />
            <ellipse className="bv-coin" cx="100" cy="35" rx="22" ry="7.5" />
            <ellipse className="bv-coin top" cx="100" cy="30.5" rx="22" ry="7.5" />
            <text className="bv-coin-mark" x="100" y="34">$</text>
          </g>
          <path className="bv-link" d="M58 64 L88 46" /><path className="bv-link" d="M142 64 L112 46" />
          <g className="bv-choice split">
            <rect x="24" y="64" width="62" height="22" rx="11" />
            <text x="55" y="78.5">SPLIT</text>
          </g>
          <g className="bv-choice steal">
            <rect x="114" y="64" width="62" height="22" rx="11" />
            <text x="145" y="78.5">STEAL</text>
          </g>
        </svg>
      );
    default: // sid.breaks.prod — distribution compounding
      return (
        <svg className="bvis-svg" viewBox="0 0 200 100" aria-hidden="true">
          <line className="bv-soft" x1="28" y1="82" x2="172" y2="82" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} className="bv-bar" style={{ "--i": `${i * 0.18}s` }} x={42 + i * 26} y="34" width="14" height="48" rx="2" />
          ))}
          <path className="bv-check" pathLength="1" d="M40 70 L70 60 L96 50 L122 36 L160 22" />
        </svg>
      );
  }
}

function BuildRail({ builds }) {
  const railRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [thumb, setThumb] = useState(0.3);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setThumb(el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nudge = (dir) => {
    const el = railRef.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 360), behavior: "smooth" });
  };

  return (
    <div className="rail-outer" data-reveal>
      <div className="rail-viewport">
        <div className={`rail-fade left ${atStart ? "hide" : ""}`} aria-hidden="true" />
        <div className={`rail-fade right ${atEnd ? "hide" : ""}`} aria-hidden="true" />
        <div className="rail" ref={railRef} onScroll={update}>
          {builds.map((b) => {
            const Tag = b.href ? "a" : "div";
            return (
              <Tag
                className="card build"
                key={b.title}
                href={b.href || undefined}
                target={isExternal(b.href) ? "_blank" : undefined}
                rel={isExternal(b.href) ? "noreferrer" : undefined}
              >
                <span className="btype">{b.type}</span>
                <h3>{b.title}</h3>
                <p className="bres">{b.res}</p>
                <span className={`bvis bvis-${b.kind}`}><BuildVisual kind={b.kind} /></span>
                <span className={`blink ${b.href ? "" : "blink-muted"}`}>{b.href ? "open ↗" : "internal build"}</span>
              </Tag>
            );
          })}
        </div>
      </div>
      <div className="rail-foot">
        <div className="rail-track" aria-hidden="true">
          <i style={{ width: `${Math.max(thumb, 0.12) * 100}%`, marginLeft: `${progress * (1 - Math.max(thumb, 0.12)) * 100}%` }} />
        </div>
        <span className="rail-cue">drag to explore</span>
        <div className="rail-arrows">
          <button className="rail-arrow" onClick={() => nudge(-1)} disabled={atStart} aria-label="Scroll left">←</button>
          <button className="rail-arrow" onClick={() => nudge(1)} disabled={atEnd} aria-label="Scroll right">→</button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false);
  useAtmosphere();
  useReveal();

  useEffect(() => {
    const onKey = (e) => {
      if ((e.key === "/" || (e.key === "k" && (e.metaKey || e.ctrlKey))) && !cmdOpen) {
        const tag = document.activeElement?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        e.preventDefault();
        setCmdOpen(true);
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cmdOpen]);

  return (
    <main className="site">
      <div className="bg-paper" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true" />
      <div className="progress-rail" aria-hidden="true" />

      <nav className="nav">
        <a href="#top" className="mark">Siddhant<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#thinking">Thinking</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="nav-cmd" onClick={() => setCmdOpen(true)}>
          Socials <kbd>/</kbd>
        </button>
      </nav>

      {/* ---------- hero ---------- */}
      <header className="hero wrap" id="top">
        <div className="hero-text">
          <p className="hero-eyebrow" data-enter style={{ "--d": "120ms" }}>
            <span>Founder</span>
            <span className="dot">·</span>
            <span>Product engineer</span>
            <span className="dot">·</span>
            <span>Systems thinker</span>
            <span className="live"><i />open to build</span>
          </p>

          <h1>
            <span className="line"><span>Siddhant</span></span>
            <span className="line"><span>Vishnu</span></span>
          </h1>

          <p className="hero-thesis" data-enter style={{ "--d": "240ms" }}>
            I enter unfamiliar systems, find the leverage, and build{" "}
            <b>what should have existed.</b>
          </p>
          <p className="hero-sub" data-enter style={{ "--d": "320ms" }}>
            I&apos;m 21, leading engineering and product at a healthcare-AI startup,
            co-founding Mirage, and studying Computer Engineering, all at once.
            I learn unfamiliar domains from first principles and ship before the
            opportunity is obvious.
          </p>

          <div className="hero-cta" data-enter style={{ "--d": "400ms" }}>
            <a className="btn btn-primary" href="#work">
              See the systems <span className="arr">↓</span>
            </a>
            <button className="btn btn-ghost" onClick={() => setCmdOpen(true)}>
              Socials <kbd style={{ marginLeft: 2 }}>/</kbd>
            </button>
          </div>

          <ul className="hero-stats" data-enter style={{ "--d": "480ms" }}>
            <li><b>16VC</b> Fellow</li>
            <li><b>600K</b> views</li>
            <li><b>9</b> eng led</li>
            <li><b>YC</b> SS India</li>
          </ul>
        </div>

        <div className="hero-visual" data-enter style={{ "--d": "300ms" }}>
          <HeroMind />
        </div>
      </header>

      {/* ---------- operating system ---------- */}
      <section className="panel wrap" id="thinking">
        <div className="head" data-reveal>
          <p className="eyebrow"><span className="idx">A /</span> Operating system</p>
          <h2>How I think<br />before I build.</h2>
          <p className="lead">Four operating rules. Different domains, same approach: enter the unknown, find what it responds to, and ship something that changes behavior.</p>
        </div>
        <div className="principles">
          {principles.map((p, i) => (
            <article className={`card principle tone-${p.tone}`} key={p.title} data-reveal style={{ "--d": `${i * 80}ms` }}>
              <div className="ptitle">
                <h3>{p.title}</h3>
                <span className="picon"><PrincipleIcon name={p.icon} /></span>
              </div>
              <p>{p.body}</p>
              <span className="pfoot">{p.foot}</span>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- systems entered ---------- */}
      <section className="panel wrap" id="work">
        <div className="head" data-reveal>
          <p className="eyebrow"><span className="idx">B /</span> Systems entered</p>
          <h2>The dossier.</h2>
          <p className="lead">Each one was unfamiliar terrain. Each one shipped into reality with measurable impact.</p>
        </div>
        <div className="dossier">
          {systems.map((s, i) => (
            <div className="entry-group" key={s.title} data-reveal style={{ "--d": `${i * 60}ms` }}>
              <div className="entry">
                <span className="ec">{s.code}</span>
                <span>
                  <span className="et">{s.title}</span>
                  <span className="ek">{s.kind}</span>
                </span>
                <span className="ed">{s.desc}</span>
                <span className="em-metric">{s.metric}</span>
              </div>
              {s.products && (
                <div className="products">
                  {s.products.map((p) => (
                    <div className="entry sub" key={p.title}>
                      <span className="ec" aria-hidden="true">↳</span>
                      <span>
                        <span className="et">{p.title}</span>
                        <span className="ek">{p.kind}</span>
                      </span>
                      <span className="ed">{p.desc}</span>
                      <span className="em-metric">{p.metric}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- selected builds ---------- */}
      <section className="panel wrap" id="builds">
        <div className="head" data-reveal>
          <p className="eyebrow"><span className="idx">C /</span> Selected builds</p>
          <h2>Things shipped.</h2>
          <p className="lead">A gallery of things built, shipped, tested, or used to learn a system from the inside.</p>
        </div>
        <BuildRail builds={builds} />
      </section>

      {/* ---------- field notes ---------- */}
      <section className="panel wrap" id="writing">
        <div className="head" data-reveal>
          <p className="eyebrow"><span className="idx">D /</span> Field notes</p>
          <h2>Thinking in public.</h2>
          <p className="lead">I write to sharpen what I'm building. Distribution and product are the same job.</p>
        </div>
        <div className="notes">
          {notes.map((n, i) => (
            <a className="card note" key={n.title} href={n.href} target="_blank" rel="noreferrer" data-reveal style={{ "--d": `${i * 80}ms` }}>
              <span className={`nthumb ${n.img ? "" : "nthumb-blank"}`}>
                {n.img ? <img src={n.img} alt="" loading="lazy" /> : <i aria-hidden="true" />}
              </span>
              <span className="ninfo">
                <span className="nlabel">{n.label}</span>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
                <span className="nopen">read ↗</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- contact / command finale ---------- */}
      <section className="panel wrap finale" id="contact">
        <div data-reveal>
          <p className="eyebrow">Open the system</p>
          <h2>Let&apos;s build<br />something inevitable.</h2>
          <p className="lead">Founder fellowships, collaborators, or anyone reshaping how software should work. The door is open.</p>
          <div className="finale-cta">
            <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
              Get in touch <span className="arr">↗</span>
            </a>
            <button className="btn btn-ghost" onClick={() => setCmdOpen(true)}>
              Socials <kbd style={{ marginLeft: 2 }}>/</kbd>
            </button>
          </div>
        </div>
        <div className="finale-foot">
          <span>Siddhant Vishnu · {new Date().getFullYear()}</span>
          <span>Designed and built from first principles.</span>
        </div>
      </section>

      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </main>
  );
}
