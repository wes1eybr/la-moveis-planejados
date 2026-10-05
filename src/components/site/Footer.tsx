import { useEffect, useState } from "react";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

import { brand } from "@/data/assets";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { openWhatsapp } from "@/utils/whatsapp";
import { requestQuote, scrollToSection } from "@/lib/quote-prefill";

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              {brand.logo && (
                <img src={brand.logo} alt={brand.alt} width={48} height={48} className="h-12 w-12" />
              )}
              <span className="font-display text-xl text-foreground">
                {siteConfig.companyName}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Projeto, marcenaria e instalação de móveis planejados sob medida para residências e
              espaços comerciais.
            </p>
            {contactConfig.address && (
              <a
                href={contactConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex max-w-sm items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{contactConfig.address}</span>
              </a>
            )}
            {contactConfig.whatsappDisplay && (
              <p className="mt-2 text-sm text-muted-foreground">
                WhatsApp: {contactConfig.whatsappDisplay}
              </p>
            )}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => openWhatsapp("Olá! Vim pelo site da LA Móveis Planejados.")}
                aria-label="Falar no WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
              {contactConfig.instagramUrl && (
                <a
                  href={contactConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {contactConfig.email && (
                <a
                  href={`mailto:${contactConfig.email}`}
                  aria-label="Enviar e-mail"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Ambientes">
            <h3 className="eyebrow text-muted-foreground">Ambientes</h3>
            <ul className="mt-5 space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() =>
                      requestQuote({
                        environment: service.title,
                        reference: `Rodapé — ${service.title}`,
                      })
                    }
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navegação">
            <h3 className="eyebrow text-muted-foreground">Navegação</h3>
            <ul className="mt-5 space-y-2">
              {[
                { id: "servicos", label: "Serviços" },
                { id: "projetos", label: "Projetos" },
                { id: "processo", label: "Processo" },
                { id: "sobre", label: "Sobre" },
                { id: "orcamento", label: "Orçamento" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} {siteConfig.copyright}
        </p>
      </div>
    </footer>
  );
}
