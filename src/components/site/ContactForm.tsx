import { useState } from "react";
import { z } from "zod";
import { WHATSAPP_NUMBER, EMAIL } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome" })
    .max(100, { message: "Nome muito longo" }),
  company: z.string().trim().max(100, { message: "Empresa muito longa" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail muito longo" }),
  challenge: z
    .string()
    .trim()
    .min(10, { message: "Conte um pouco mais sobre o desafio" })
    .max(1000, { message: "Máximo de 1000 caracteres" }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const FIELDS = [
  { key: "name", label: "Nome", placeholder: "Seu nome", type: "text" },
  { key: "company", label: "Empresa", placeholder: "Nome da empresa (opcional)", type: "text" },
  { key: "email", label: "E-mail", placeholder: "voce@empresa.com.br", type: "email" },
] as const;

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    challenge: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const d = result.data;
    const msg = `Olá Gabriel, quero o diagnóstico gratuito de dados & IA.

Nome: ${d.name}
Empresa: ${d.company || "—"}
E-mail: ${d.email}

Desafio: ${d.challenge}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener",
    );
  };

  const inputClass =
    "border-border bg-transparent focus:border-foreground/60 w-full border-b py-2.5 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60";

  return (
    <section id="contato" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
            Contato
          </p>
          <h2 className="font-display text-foreground text-4xl leading-[1.1] md:text-5xl">
            Diagnóstico <span className="italic">gratuito</span> de dados &amp; IA.
          </h2>
          <p className="text-foreground/80 mt-5 text-lg leading-relaxed">
            Conte o seu desafio. Respondo em até 24h com os primeiros caminhos — sem compromisso.
            Prefere WhatsApp direto ou{" "}
            <a href={`mailto:${EMAIL}`} className="text-foreground underline underline-offset-4">
              e-mail
            </a>
            ? Também funciona.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={onSubmit} noValidate className="mt-10 space-y-7">
            {FIELDS.map((f) => (
              <div key={f.key}>
                <label
                  htmlFor={f.key}
                  className="font-mono-tech text-muted-foreground text-[11px] tracking-[0.2em] uppercase"
                >
                  {f.label}
                </label>
                <input
                  id={f.key}
                  type={f.type}
                  value={values[f.key]}
                  placeholder={f.placeholder}
                  onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                  className={inputClass}
                />
                {errors[f.key] && (
                  <p className="text-destructive mt-1.5 text-sm">{errors[f.key]}</p>
                )}
              </div>
            ))}

            <div>
              <label
                htmlFor="challenge"
                className="font-mono-tech text-muted-foreground text-[11px] tracking-[0.2em] uppercase"
              >
                Qual seu desafio?
              </label>
              <textarea
                id="challenge"
                rows={4}
                value={values.challenge}
                placeholder="Ex.: quero integrar meus marketplaces ao warehouse e automatizar relatórios com IA"
                onChange={(e) => setValues((v) => ({ ...v, challenge: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
              {errors.challenge && (
                <p className="text-destructive mt-1.5 text-sm">{errors.challenge}</p>
              )}
            </div>

            <button type="submit" className="btn-primary px-7 py-3 text-sm">
              Enviar pelo WhatsApp →
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
