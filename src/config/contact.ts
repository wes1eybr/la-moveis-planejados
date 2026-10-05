/**
 * Informações comerciais da LA Móveis Planejados.
 *
 * whatsappNumber: SOMENTE dígitos, com código do país + DDD + número.
 *                 Exemplo: "5511999999999"
 */
export const contactConfig = {
  whatsappNumber: "5511973711144",
  whatsappDisplay: "(11) 97371-1144",
  instagramUrl: "https://www.instagram.com/la_moveisoficial/",
  instagramUsername: "@la_moveisoficial",
  email: "",
  city: "Tatuí — SP",
  address: "Rua do Cruzeiro, 317B — Centro, Tatuí/SP",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Rua do Cruzeiro, 317B - Centro, Tatuí - SP"),
  serviceArea: "Tatuí e região",
};

export type ContactConfig = typeof contactConfig;

/** Retorna o número apenas com dígitos, ou string vazia se não configurado. */
export function getWhatsappNumber(): string {
  return contactConfig.whatsappNumber.replace(/\D/g, "");
}

/** Indica se o WhatsApp comercial já foi configurado. */
export function hasWhatsapp(): boolean {
  return getWhatsappNumber().length > 0;
}
