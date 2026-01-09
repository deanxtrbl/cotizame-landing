import { useEffect } from "react";
import LeadForm from "./components/LeadForm";


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
  { name: "esencial", logo: esencial },
  {name: "NuevaMasVida", logo: NuevaMasVida},
  { name: "Vida Tres", logo: vidaTres, compact: true},
  
];

/* =========================
   ICONOS PREMIUM (INLINE)
========================= */
const IconCheck = () => (
  <svg className="w-5 h-5 text-sky-600" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUser = () => (
  <svg className="w-5 h-5 text-sky-600" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconInfo = () => (
  <svg className="w-5 h-5 text-sky-600" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 11v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="7.5" r="1" fill="currentColor" />
  </svg>
);

const IconShield = () => (
  <svg className="w-5 h-5 text-sky-600" viewBox="0 0 24 24" fill="none">
    <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconWhatsApp = () => (
  <svg
    className="w-4 h-4 inline-block mr-1 text-sky-600"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.47 0 .15 5.32.15 11.9c0 2.1.55 4.15 1.6 5.97L0 24l6.28-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.92-5.32 11.92-11.9 0-3.18-1.24-6.16-3.47-8.45zM12.06 21.4c-1.84 0-3.64-.5-5.21-1.45l-.37-.22-3.73.98.99-3.64-.24-.38a9.45 9.45 0 0 1-1.47-5.07c0-5.22 4.25-9.46 9.48-9.46a9.42 9.42 0 0 1 6.69 2.77 9.37 9.37 0 0 1 2.78 6.67c0 5.22-4.25 9.46-9.48 9.46zm5.19-7.1c-.28-.14-1.64-.8-1.89-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.43-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.53-.44-.46-.62-.47h-.53c-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.31 0 1.36 1 2.68 1.14 2.87.14.18 1.96 2.98 4.75 4.18.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.2-.53-.35z" />
  </svg>
);

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-up, .fade-soft, .reveal-card"
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
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_15%_-10%,#eef7fb,transparent)] px-6">

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-16 lg:pt-20 pb-24 lg:pb-28">

        {/* COLUMNA IZQUIERDA */}
{/* Barra decorativa horizontal */}
<div
  aria-hidden
  className="
    absolute
    top-[85px]
    left-[160px]
    w-[1080px]
    h-[140px]
    rounded-full
    bg-sky-300/25
    blur-[130px]
    pointer-events-none
    hidden lg:block
  "
/>

        <div className="self-start pb-6 sm:pb-0">

          {/* LOGO (SIN ANIMACIÓN - FIX iOS) */}
          <div className="flex flex-col items-start gap-3 min-h-[90px]">
           <img
  src="/vitaplan-banner.svg"
  alt="VitaPlan, asesoría profesional en Isapres"
  className="w-36 sm:w-40 md:w-[260px]"
  loading="eager"
  decoding="sync"
/>

            <div className="mt-2 flex items-center gap-3 text-sm text-gray-500 fade-up">
              <span className="h-6 w-[3px] bg-sky-400 rounded-full"></span>
              <span>Nosotros comparamos. Tú decides.</span>
            </div>
          </div>
          

          {/* TEXTO */}
          <div className="animate-fade-in">
            <h1 className="mt-10 md:mt-14 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              Encuentra tu plan de salud ideal <br />
              <span className="text-sky-600">con asesoría profesional y sin costo</span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl">
              Cotiza, compara y cambia tu Isapre en Chile con asesoría clara y personalizada
            </p>

            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl lg:max-w-2xl leading-relaxed">
  En VitaPlan te asesoramos de forma clara y personalizada,{" "}
  <span className="font-medium text-gray-700">
    comparando los mejores planes de salud e Isapre
  </span>{" "}
  del mercado para ti y tu familia en Chile.
</p>


            <div className="mt-4">
              <p className="text-xs uppercase tracking-widest text-sky-600 font-semibold">
                Trayectoria comprobada
              </p>
              <p className="text-sm md:text-base font-semibold text-gray-900">
                +30 años de experiencia en asesoría de Isapres
              </p>
            </div>

            {/* BENEFICIOS */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 font-medium">
              <div className="flex items-center gap-3 fade-up"><IconCheck />Asesoría 100% gratuita</div>
              <div className="flex items-center gap-3 fade-up"><IconShield />Sin compromiso</div>
              <div className="hidden sm:flex items-center gap-3 fade-up"><IconUser />Acompañamiento personalizado</div>
              <div className="hidden sm:flex items-center gap-3 fade-up"><IconInfo />Información clara</div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="flex justify-center lg:justify-end animate-drop-in">
          <div className="w-full max-w-lg bg-white rounded-3xl border border-slate-200/70 shadow-[0_30px_80px_rgba(0,0,0,0.14)] p-10 reveal-card">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Cotiza tu plan de Isapre
            </h2>
            <p className="text-center text-gray-500 mt-2 mb-8">
              Recibe asesoría gratuita, rápida y sin compromiso
            </p>

            <LeadForm />

            <p className="mt-4 text-sm text-gray-500 text-center">
              Más de <span className="font-semibold text-gray-700">5.000 personas</span> asesoradas en todo Chile
            </p>
          </div>
        </div>
      </section>

{/* ISAPRES */}
<section className="w-full bg-white/70 backdrop-blur-sm border-t border-slate-200/60 -mt-12 + bg-white/60 + backdrop-blur-sm
">

  {/* TEXTO CENTRADO */}
  <div className="max-w-7xl mx-auto px-6 pt-14">
    <p className="text-xs font-semibold tracking-widest uppercase mb-10 text-gray-500 text-center">
      Trabajamos con las principales Isapres de Chile
    </p>
  </div>

  {/* LOGOS FULL WIDTH */}
  <div className="w-full px-10 pb-20">
    <div className="
  flex
  flex-wrap
  md:flex-nowrap
  items-center
  justify-center
  md:justify-between
  gap-8
  md:gap-12
">
      {isapres.map((item, index) => (
        <div
          key={item.name}
          className="flex justify-center fade-up"
          style={{ transitionDelay: `${index * 0.15}s` }}
        >
          <img
  src={item.logo}
  alt={`Logo ${item.name}`}
  className={`
    w-auto shrink-0 object-contain transition
    ${item.compact ? "h-8 lg:h-9 scale-95" : "h-9 lg:h-11"}
  `}
  loading="lazy"
  decoding="async"
/>

        </div>
      ))}
    </div>
  </div>

</section>



      {/* FOOTER */}
<footer className="w-full bg-gray-50 border-t border-slate-200/70">
  <div className="max-w-7xl mx-auto px-6 pt-4 pb-6 text-center text-[13px] text-gray-500 space-y-3">

    {/* Texto legal */}
    <p className="max-w-3xl mx-auto">
      Los datos enviados a través de este sitio serán utilizados únicamente para fines de contacto y asesoría,
      conforme a la normativa vigente.
    </p>

    {/* Contacto */}
    <div className="flex flex-wrap justify-center items-center gap-2 text-gray-600 font-medium">
      <span>Contacto:</span>

      <a
        href="mailto:asesoria@vitaplan.cl"
        className="text-sky-600 hover:underline"
      >
        asesoria@vitaplan.cl
      </a>

      <span className="text-gray-400">|</span>

 <a
  href="https://api.whatsapp.com/send?phone=56936276886&text=Hola%20VitaPlan,%20quisiera%20recibir%20asesor%C3%ADa%20sobre%20planes%20de%20Isapre."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 text-sky-600 hover:underline"
>
  <IconWhatsApp />
  WhatsApp Business <span className="hidden sm:inline">(Atención directa)</span>
</a>

    </div>

    {/* Derechos reservados */}
    <p className="text-xs text-gray-400">
      © {new Date().getFullYear()} VitaPlan. Todos los derechos reservados.
    </p>

  </div>
</footer>

    </div>
  );
}
