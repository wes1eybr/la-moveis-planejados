import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, MessageCircle } from "lucide-react";

import { contactConfig } from "@/config/contact";
import { services } from "@/data/services";
import { buildWhatsappMessage, openWhatsapp } from "@/utils/whatsapp";
import { onQuotePrefill } from "@/lib/quote-prefill";
import { cn } from "@/lib/utils";

const stages = ["Ainda pesquisando", "Obra em andamento", "Pronto para instalar"] as const;
const timelines = ["O quanto antes", "Em 1 a 3 meses", "Em 3 a 6 meses", "Sem data definida"] as const;

const schema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  phone: z.string().min(10, "Informe um telefone com DDD"),
  city: z.string().optional(),
  environments: z.array(z.string()).min(1, "Selecione ao menos um ambiente"),
  stage: z.string().min(1, "Selecione a etapa do projeto"),
  timeline: z.string().min(1, "Selecione um prazo"),
  message: z.string().optional(),
  reference: z.string().optional(),
});

type QuoteForm = z.infer<typeof schema>;

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground";

export function QuoteSection() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<QuoteForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      environments: [],
      stage: "",
      timeline: "",
      message: "",
      reference: "",
    },
  });

  const environments = watch("environments");
  const stage = watch("stage");
  const timeline = watch("timeline");

  useEffect(
    () =>
      onQuotePrefill((prefill) => {
        if (prefill.environment) {
          const current = watch("environments");
          if (!current.includes(prefill.environment)) {
            setValue("environments", [...current, prefill.environment], { shouldValidate: true });
          }
        }
        if (prefill.reference) setValue("reference", prefill.reference);
      }),
    [setValue, watch],
  );

  const toggleEnvironment = (title: string) => {
    const current = environments ?? [];
    setValue(
      "environments",
      current.includes(title) ? current.filter((c) => c !== title) : [...current, title],
      { shouldValidate: true },
    );
  };

  const onSubmit = (data: QuoteForm) => {
    setSending(true);
    const opened = openWhatsapp(buildWhatsappMessage(data));
    setSending(false);
    if (opened) {
      toast.success("Abrindo o WhatsApp com o seu resumo preenchido.");
    } else {
      toast.error("WhatsApp ainda não configurado. Adicione o número em src/config/contact.ts.");
    }
  };

  return (
    <section id="orcamento" className="bg-graphite py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-10">
        <div>
          <p className="eyebrow text-gold">Orçamento</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-onDark">
            Vamos planejar o seu ambiente
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-onDark/70">
            Preencha os campos e o resumo do seu projeto será enviado direto para o nosso WhatsApp.
            Sem cadastro, sem espera: você fala com a nossa equipe na hora.
          </p>

          <ul className="mt-10 space-y-3 text-sm text-onDark/70">
            {contactConfig.whatsappDisplay && <li>WhatsApp: {contactConfig.whatsappDisplay}</li>}
            {contactConfig.email && <li>E-mail: {contactConfig.email}</li>}
            {contactConfig.address && (
              <li>
                Endereço:{" "}
                <a
                  href={contactConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-gold"
                >
                  {contactConfig.address}
                </a>
              </li>
            )}
            {contactConfig.city && <li>Base: {contactConfig.city}</li>}
            {contactConfig.serviceArea && <li>Atendimento: {contactConfig.serviceArea}</li>}
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="eyebrow text-onDark/50">
                Nome
              </label>
              <input
                id="name"
                {...register("name")}
                placeholder="Como podemos te chamar?"
                className={cn(fieldClass, "border-onDark/25 text-onDark focus:border-gold")}
              />
              {errors.name && <p className="mt-2 text-xs text-gold">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="eyebrow text-onDark/50">
                WhatsApp
              </label>
              <input
                id="phone"
                inputMode="tel"
                {...register("phone")}
                placeholder="(00) 00000-0000"
                className={cn(fieldClass, "border-onDark/25 text-onDark focus:border-gold")}
              />
              {errors.phone && <p className="mt-2 text-xs text-gold">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="city" className="eyebrow text-onDark/50">
              Cidade / bairro (opcional)
            </label>
            <input
              id="city"
              {...register("city")}
              placeholder="Onde fica o projeto?"
              className={cn(fieldClass, "border-onDark/25 text-onDark focus:border-gold")}
            />
          </div>

          <fieldset>
            <legend className="eyebrow text-onDark/50">Ambientes de interesse</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => {
                const selected = environments?.includes(service.title);
                return (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => toggleEnvironment(service.title)}
                    aria-pressed={selected}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs transition-colors",
                      selected
                        ? "border-gold bg-gold text-graphite"
                        : "border-onDark/25 text-onDark/70 hover:border-onDark/60",
                    )}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>
            {errors.environments && (
              <p className="mt-3 text-xs text-gold">{errors.environments.message}</p>
            )}
          </fieldset>

          <div className="grid gap-8 sm:grid-cols-2">
            <fieldset>
              <legend className="eyebrow text-onDark/50">Etapa do projeto</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {stages.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setValue("stage", option, { shouldValidate: true })}
                    aria-pressed={stage === option}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs transition-colors",
                      stage === option
                        ? "border-gold bg-gold text-graphite"
                        : "border-onDark/25 text-onDark/70 hover:border-onDark/60",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.stage && <p className="mt-3 text-xs text-gold">{errors.stage.message}</p>}
            </fieldset>

            <fieldset>
              <legend className="eyebrow text-onDark/50">Prazo desejado</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {timelines.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setValue("timeline", option, { shouldValidate: true })}
                    aria-pressed={timeline === option}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs transition-colors",
                      timeline === option
                        ? "border-gold bg-gold text-graphite"
                        : "border-onDark/25 text-onDark/70 hover:border-onDark/60",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.timeline && (
                <p className="mt-3 text-xs text-gold">{errors.timeline.message}</p>
              )}
            </fieldset>
          </div>

          <div>
            <label htmlFor="message" className="eyebrow text-onDark/50">
              Conte um pouco do projeto (opcional)
            </label>
            <textarea
              id="message"
              rows={3}
              {...register("message")}
              placeholder="Medidas aproximadas, estilo, referências..."
              className={cn(
                fieldClass,
                "resize-none border-onDark/25 text-onDark focus:border-gold",
              )}
            />
          </div>

          <input type="hidden" {...register("reference")} />

          <button
            type="submit"
            disabled={sending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-xs font-medium tracking-widest text-graphite uppercase transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
          >
            {sending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <MessageCircle className="h-4 w-4" />
            )}
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
