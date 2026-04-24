import { useEffect, useState } from "react";
import logoGiovanna from "@/assets/logo-giovanna.png";

const links = [
  { href: "#proposta", label: "Proposta" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#projetos", label: "Projetos" },
  { href: "#admin", label: "Gestão" },
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
          <img
            src={logoGiovanna}
            alt="Giovanna Caires — Arquitetura e Interiores"
            className="h-7 w-auto object-contain"
          />
          <span className="sr-only">Giovanna Caires</span>
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

        <span
          aria-hidden
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-[color:var(--bone)] px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          Apresentação de proposta
        </span>
      </nav>
    </header>
  );
}
