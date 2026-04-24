import { useEffect, useState } from "react";

const links = [
  { href: "#proposta", label: "Proposta" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#projetos", label: "Projetos" },
  { href: "#admin", label: "Admin" },
  { href: "#visual", label: "Visual" },
];

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-border/60 bg-background/70 px-4 py-2.5 backdrop-blur-xl transition-all duration-500 sm:px-6 ${
          scrolled ? "shadow-[var(--shadow-float)]" : "shadow-[var(--shadow-soft)]"
        }`}
      >
        <a href="#topo" className="flex items-center gap-2 pl-1">
          <span
            aria-hidden
            className="inline-block h-7 w-7 rounded-full"
            style={{ background: "var(--gradient-sage)" }}
          />
          <span className="font-display text-lg leading-none tracking-tight">
            estúdio<span className="text-[color:var(--sage-deep)]">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-[13px] text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-all hover:bg-foreground/90"
        >
          Conversar
          <span aria-hidden>→</span>
        </a>
      </nav>
    </header>
  );
}
