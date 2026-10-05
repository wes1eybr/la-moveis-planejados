import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { brand } from "@/data/assets";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { requestQuote, scrollToSection } from "@/lib/quote-prefill";

const navItems = [
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "processo", label: "Processo" },
  { id: "sobre", label: "Sobre" },
  { id: "orcamento", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5 text-onDark",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-10">
        <button
          onClick={() => go("topo")}
          className="flex items-center gap-3"
          aria-label={`${siteConfig.companyName} — ir para o topo`}
        >
          {brand.logo && (
            <img
              src={brand.logo}
              alt={brand.alt}
              width={44}
              height={44}
              className={cn("transition-all duration-500", scrolled ? "h-9 w-9" : "h-11 w-11")}
            />
          )}
          <span className="hidden flex-col leading-tight sm:flex">
            <span className={cn("font-display text-lg tracking-wide", scrolled ? "text-foreground" : "text-onDark")}>
              LA Móveis
            </span>
            <span className={cn("eyebrow text-[9px]", scrolled ? "text-muted-foreground" : "text-onDark/70")}>
              Planejados
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={cn(
                "relative text-sm transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                scrolled ? "text-foreground/75 hover:text-foreground" : "text-onDark/85 hover:text-onDark",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => requestQuote({ reference: "Menu — Solicitar orçamento" })}
            className={cn(
              "hidden rounded-full px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all sm:inline-flex",
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-gold text-graphite hover:bg-gold/90",
            )}
          >
            Solicitar orçamento
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              scrolled ? "border-border text-foreground" : "border-onDark/35 text-onDark",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="border-b border-border/60 py-4 text-left font-display text-2xl text-foreground last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                requestQuote({ reference: "Menu mobile — Solicitar orçamento" });
              }}
              className="my-4 rounded-full bg-primary px-6 py-3 text-xs font-medium tracking-widest text-primary-foreground uppercase"
            >
              Solicitar orçamento
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
