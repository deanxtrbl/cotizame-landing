import { useEffect, type CSSProperties } from "react";
import LeadForm from "./components/LeadForm";

// Foto del asesor
import asesorRodrigo from "./assets/asesor-rodrigo.jpg";

// Logos Isapres
import banmedica from "./assets/banmedica-logo-mobile.png";
import consalud from "./assets/consalud.png";
import colmena from "./assets/logo-colmena.svg";
import cruzBlanca from "./assets/logo-main.svg";
import esencial from "./assets/Logo-Clinica-Alemana.svg";
import NuevaMasVida from "./assets/nueva-Mas-VidaLogo.png";
import vidaTres from "./assets/vida-tres-logo-mobile.png";

const isapres = [
  { name: "Banmédica", logo: banmedica },
  { name: "Colmena", logo: colmena },
  { name: "Consalud", logo: consalud },
  { name: "Cruz Blanca", logo: cruzBlanca },
  { name: "Esencial", logo: esencial },
  { name: "Nueva MasVida", logo: NuevaMasVida },
  { name: "Vida Tres", logo: vidaTres, compact: true },
];

/* =========================
   ASESOR (bloque de confianza)
   Para cambiar o agregar datos, edita solo este objeto.
========================= */
const ASESOR = {
  nombre: "Rodrigo",
  rol: "Asesor VitaPlan",
  frase: "Te acompaño desde la cotización hasta el cambio de plan.",
  foto: asesorRodrigo,
};

/* =========================
   CÓMO FUNCIONA
========================= */
const PASOS = [
  {
    titulo: "Cuéntanos tu caso",
    texto: "Responde unas preguntas simples sobre ti y tu familia.",
  },
  {
    titulo: "Comparamos por ti",
    texto: "Buscamos los mejores planes según tu perfil y presupuesto.",
  },
  {
    titulo: "Te acompañamos",
    texto: "Tú decides, y te guiamos en cada paso del cambio.",
  },
];

/* =========================
   ENLACES DE CONTACTO
========================= */
const WHATSAPP_URL =
  "https://wa.me/56944025097?text=Hola%20VitaPlan,%20quisiera%20recibir%20asesor%C3%ADa%20sobre%20planes%20de%20Isapre.";
const INSTAGRAM_URL = "https://www.instagram.com/vitaplan.cl/";

/* =========================
   ICONOS (INLINE)
========================= */
const IconCheckFilled = () => (
  <svg
    className="h-5 w-5 shrink-0 text-vita-teal"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path
      d="M7 12.5l3.2 3.2L17 9"
      fill="none"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconWhatsApp = ({
  className = "w-4 h-4 inline-block mr-1",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.47 0 .15 5.32.15 11.9c0 2.1.55 4.15 1.6 5.97L0 24l6.28-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.92-5.32 11.92-11.9 0-3.18-1.24-6.16-3.47-8.45zM12.06 21.4c-1.84 0-3.64-.5-5.21-1.45l-.37-.22-3.73.98.99-3.64-.24-.38a9.45 9.45 0 0 1-1.47-5.07c0-5.22 4.25-9.46 9.48-9.46a9.42 9.42 0 0 1 6.69 2.77 9.37 9.37 0 0 1 2.78 6.67c0 5.22-4.25 9.46-9.48 9.46zm5.19-7.1c-.28-.14-1.64-.8-1.89-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.43-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.53-.44-.46-.62-.47h-.53c-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.31 0 1.36 1 2.68 1.14 2.87.14.18 1.96 2.98 4.75 4.18.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.2-.53-.35z" />
  </svg>
);

const IconInstagram = ({
  className = "w-4 h-4 inline-block mr-1",
}: {
  className?: string;
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
  </svg>
);

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-up, .fade-soft, .reveal-card, .reveal-stagger"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-vita-navy">

      {/* HERO */}
      <div className="bg-[radial-gradient(1200px_600px_at_15%_-10%,#e6f4fc,transparent)] px-6">
        <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 pb-16 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 lg:pb-24 lg:pt-20">

          {/* Barra decorativa horizontal */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[160px] top-[85px] hidden h-[140px] w-[1080px] rounded-full bg-sky-300/25 blur-[130px] lg:block"
          />

          {/* A: LOGO, TITULAR Y BENEFICIOS */}
          <div className="lg:col-start-1 lg:row-start-1">

            {/* LOGO (SIN ANIMACIÓN - FIX iOS) */}
            <div className="flex min-h-[72px] flex-col items-start gap-3">
              <img
                src="/vitaplan-banner.svg"
                alt="VitaPlan, asesoría profesional en Isapres"
                width={529}
                height={96}
                className="h-10 w-auto sm:h-12 md:h-14"
                loading="eager"
                decoding="sync"
              />
              <div className="fade-up flex items-center gap-3 text-sm font-medium text-vita-ink md:text-base">
                <span aria-hidden="true" className="h-6 w-[3px] rounded-full bg-vita-blue"></span>
                <span>Nosotros comparamos, Tú decides.</span>
              </div>
            </div>

            {/* TEXTO */}
            <div className="animate-fade-in">
              <h1 className="mt-8 text-[26px] font-extrabold leading-[1.15] tracking-tight text-vita-navy sm:text-[30px] md:mt-10 md:text-[34px] lg:text-[30px] xl:text-[34px]">
                Encuentra tu plan de salud ideal{" "}
                <br className="hidden md:block lg:hidden xl:block" />
                <span className="text-vita-blueDark">
                  con asesoría profesional y sin costo
                </span>
              </h1>

              {/* Subtítulo suave */}
              <p className="mt-4 max-w-xl text-sm text-slate-500 md:text-base">
                Cotiza, compara y cambia tu Isapre en Chile con asesoría clara y
                personalizada
              </p>

              {/* Mensaje principal (en celular se oculta para no cargar la pantalla) */}
              <p className="mt-5 hidden max-w-xl text-lg font-medium leading-relaxed text-slate-700 sm:block md:text-[21px] md:leading-[1.55] lg:max-w-2xl">
                En VitaPlan te asesoramos de forma clara y personalizada,{" "}
                <span className="font-bold text-vita-navy">
                  comparando los mejores planes de salud de Isapres
                </span>{" "}
                del mercado para ti y tu familia en Chile.
              </p>

              {/* BENEFICIOS */}
              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-3 text-sm font-medium text-vita-navy sm:grid-cols-2">
                <div className="fade-up flex items-center gap-3"><IconCheckFilled />Asesoría 100% gratuita</div>
                <div className="fade-up flex items-center gap-3"><IconCheckFilled />Sin compromiso</div>
                <div className="fade-up hidden items-center gap-3 sm:flex"><IconCheckFilled />Acompañamiento personalizado</div>
                <div className="fade-up hidden items-center gap-3 sm:flex"><IconCheckFilled />Información clara</div>
              </div>
            </div>
          </div>

          {/* B: FORMULARIO */}
          <div className="flex justify-center animate-drop-in lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-end lg:self-center">
            <div className="reveal-card w-full max-w-xl rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_30px_80px_rgba(15,42,67,0.14)] sm:p-10">
              <h2 className="text-center text-2xl font-bold text-vita-navy">
                Cotiza tu plan de Isapre
              </h2>
              <p className="mb-8 mt-2 text-center text-vita-ink">
                Asesoría gratuita, rápida y sin compromiso
              </p>

              <LeadForm />
            </div>
          </div>

          {/* C: CIFRAS Y ASESOR (en celular quedan bajo el formulario) */}
          <div className="lg:col-start-1 lg:row-start-2">
            <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-widest text-vita-blueDark">
              Trayectoria comprobada
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 sm:grid sm:grid-cols-2 sm:gap-x-4">
              <div>
                <p className="text-2xl font-bold text-vita-blueDark">+30 años</p>
                <p className="text-[13px] text-vita-ink">de experiencia en asesoría de Isapres</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-vita-blueDark">+5.000</p>
                <p className="text-[13px] text-vita-ink">personas asesoradas en Chile</p>
              </div>
            </div>

            <div className="mt-5 flex max-w-xl items-center gap-3 rounded-2xl border border-vita-line bg-white px-3.5 py-2.5">
              <img
                src={ASESOR.foto}
                alt={`${ASESOR.nombre}, ${ASESOR.rol}`}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-vita-navy">
                  {ASESOR.nombre}
                  <span className="font-medium text-vita-ink"> – {ASESOR.rol}</span>
                </p>
                <p className="mt-0.5 hidden text-xs leading-snug text-vita-ink sm:block">
                  “{ASESOR.frase}”
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ISAPRES */}
      <section className="w-full bg-vita-mist py-14 md:py-16">
        <div className="mx-auto max-w-[1480px] px-6 text-center xl:px-10">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-vita-ink">
            Trabajamos con las principales Isapres de Chile
          </p>

          {/* Una sola línea en pantallas grandes (xl); en celular y tablet se acomodan en filas */}
          <div className="reveal-stagger flex flex-wrap justify-center gap-3 xl:flex-nowrap">
            {isapres.map((item, index) => (
              <div
                key={item.name}
                className="reveal-item flex h-24 w-[calc(50%-0.375rem)] items-center justify-center rounded-2xl border border-vita-line bg-white px-3 sm:w-[170px] xl:w-auto xl:min-w-0 xl:flex-1"
                style={{ "--i": index } as CSSProperties}
              >
                <img
                  src={item.logo}
                  alt={`Logo ${item.name}`}
                  className={`w-auto max-w-full object-contain ${
                    item.compact ? "h-9 xl:h-10" : "h-10 xl:h-11"
                  }`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vita-navy">
            Cómo funciona
          </h2>

          <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PASOS.map((paso, i) => (
              <li
                key={paso.titulo}
                className="fade-up rounded-3xl border border-vita-line bg-white px-6 py-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span
                  className={`mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full text-lg font-extrabold text-white ${
                    i === 1 ? "bg-vita-tealDark" : "bg-vita-blueDark"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-vita-navy">
                  {paso.titulo}
                </h3>
                <p className="text-[15px] leading-relaxed text-vita-ink">
                  {paso.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-vita-navy">
        <div className="mx-auto max-w-7xl space-y-4 px-6 pb-24 pt-10 text-center text-sm leading-relaxed text-slate-300 sm:pb-8">

          {/* Texto legal */}
          <p className="mx-auto max-w-3xl">
            Los datos enviados a través de este sitio serán utilizados únicamente para fines de contacto y asesoría,
            conforme a la normativa vigente.
          </p>

          {/* Contacto */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium">
            <a
              href="mailto:asesoria@vitaplan.cl"
              className="text-white underline-offset-4 hover:underline"
            >
              asesoria@vitaplan.cl
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white underline-offset-4 hover:underline"
            >
              <IconWhatsApp className="inline-block h-4 w-4 text-sky-300" />
              WhatsApp Business <span className="hidden sm:inline">(Atención directa)</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white underline-offset-4 hover:underline"
            >
              <IconInstagram className="inline-block h-4 w-4 text-sky-300" />
              Instagram <span className="hidden sm:inline">@vitaplan.cl</span>
            </a>
          </div>

          {/* Derechos reservados */}
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} VitaPlan. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE: ATENCIÓN DIRECTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar con un asesor de VitaPlan por WhatsApp"
        className="whatsapp-float fixed right-4 z-50 flex items-center gap-2.5 rounded-full bg-[#16A34A] py-3 pl-3.5 pr-5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:scale-105 hover:bg-[#15803D] active:scale-95 sm:right-6"
        style={{ bottom: "calc(env(safe-area-inset-bottom) + 16px)" }}
      >
        <IconWhatsApp className="h-6 w-6 text-white" />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-sm font-bold">Háblanos</span>
          <span className="text-[11px]">Atención directa</span>
        </span>
      </a>

    </div>
  );
}