import { MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "@/lib/site-data";

export function WhatsAppFAB() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-transform hover:scale-110 md:bottom-7 md:right-7"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}