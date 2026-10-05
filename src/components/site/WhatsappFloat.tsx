import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

import { openWhatsapp } from "@/utils/whatsapp";
import { cn } from "@/lib/utils";

export function WhatsappFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => openWhatsapp("Olá! Vim pelo site da LA Móveis Planejados.")}
      aria-label="Falar no WhatsApp"
      className={cn(
        "fixed right-5 bottom-5 z-[55] inline-flex h-14 w-14 items-center justify-center rounded-full bg-wood text-onDark shadow-soft transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
