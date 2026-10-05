import { contactConfig, getWhatsappNumber, hasWhatsapp } from "@/config/contact";

export type QuoteMessage = {
  name?: string | undefined;
  phone?: string | undefined;
  city?: string | undefined;
  environments?: string[] | undefined;
  stage?: string | undefined;
  timeline?: string | undefined;
  message?: string | undefined;
  reference?: string | undefined;
};

/** Monta o texto da mensagem de WhatsApp a partir dos dados do formulário. */
export function buildWhatsappMessage(data: QuoteMessage): string {
  const lines: string[] = ["Olá! Gostaria de um orçamento de móveis planejados."];
  if (data.name) lines.push(`Nome: ${data.name}`);
  if (data.phone) lines.push(`Telefone: ${data.phone}`);
  if (data.city) lines.push(`Cidade: ${data.city}`);
  if (data.environments?.length) lines.push(`Ambientes: ${data.environments.join(", ")}`);
  if (data.stage) lines.push(`Etapa do projeto: ${data.stage}`);
  if (data.timeline) lines.push(`Prazo desejado: ${data.timeline}`);
  if (data.reference) lines.push(`Referência do site: ${data.reference}`);
  if (data.message) lines.push(`Detalhes: ${data.message}`);
  return lines.join("\n");
}

/** Retorna a URL do WhatsApp, ou null quando o número ainda não foi configurado. */
export function whatsappUrl(message?: string): string | null {
  const number = getWhatsappNumber();
  if (!number) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}

/**
 * Abre o WhatsApp em nova aba. Se o número não estiver configurado em
 * src/config/contact.ts, apenas registra um aviso no console.
 */
export function openWhatsapp(message?: string): boolean {
  const url = whatsappUrl(message);
  if (!url) {
    console.warn(
      "[LA Móveis] WhatsApp ainda não configurado. Defina `whatsappNumber` em src/config/contact.ts.",
    );
    return false;
  }
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}

export { contactConfig, hasWhatsapp };
