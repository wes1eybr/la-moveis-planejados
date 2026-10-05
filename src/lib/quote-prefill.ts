export type QuotePrefill = {
  environment?: string | undefined;
  reference?: string | undefined;
};

type Listener = (prefill: QuotePrefill) => void;

const listeners = new Set<Listener>();

export function onQuotePrefill(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Rola até o formulário e pré-preenche os campos indicados. */
export function requestQuote(prefill: QuotePrefill = {}) {
  listeners.forEach((listener) => listener(prefill));
  scrollToSection("orcamento");
}
