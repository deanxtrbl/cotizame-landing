import { useState, useEffect, useRef } from "react";

import banmedica from "../assets/banmedica-logo-mobile.png";
import consalud from "../assets/consalud.png";
import colmena from "../assets/logo-colmena.svg";
import cruzBlanca from "../assets/logo-main.svg";
import esencial from "../assets/Logo-Clinica-Alemana.svg";
import nuevaMasVida from "../assets/nueva-Mas-VidaLogo.png";
import vidaTres from "../assets/vida-tres-logo-mobile.png";

const isapresList: { name: string; logo: string | null }[] = [
  { name: "Banmédica", logo: banmedica },
  { name: "Colmena", logo: colmena },
  { name: "Consalud", logo: consalud },
  { name: "Cruz Blanca", logo: cruzBlanca },
  { name: "Esencial", logo: esencial },
  { name: "Nueva MasVida", logo: nuevaMasVida },
  { name: "Vida Tres", logo: vidaTres },
  { name: "Fonasa", logo: null },
];

type FieldName =
  | "nombre"
  | "telefono"
  | "email"
  | "renta"
  | "cargas"
  | "isapre";

/* ================= ÍCONOS ================= */

const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M6.6 10.8c1.3 2.6 3 4.3 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.9 20 4 13.1 4 4.5c0-.6.4-1 1-1h3.1c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M3.75 6.75h16.5v10.5H3.75V6.75Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="m4.5 7.5 7.5 6 7.5-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconWallet = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M3.75 7.5A1.5 1.5 0 0 1 5.25 6h12a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5v-9Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      fill="currentColor"
    />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M8.25 11.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.5 19.5a5.75 5.75 0 0 1 11.5 0M15.75 11.25a2.75 2.75 0 1 0 0-5.5M16.5 14.25c2.2.4 3.9 1.9 4.5 5.25"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBuilding = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M4.5 21V4.5A.75.75 0 0 1 5.25 3.75h9a.75.75 0 0 1 .75.75V21M19.5 21v-9a.75.75 0 0 0-.75-.75H15M8 8h2M8 11.5h2M8 15h2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path
      d="m5 13 4 4 10-10"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
  >
    <path
      d="m6 9 6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path
      d="M15 6 9 12l6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path
      d="m9 6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LeadForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "", // solo 8 dígitos (sin +56 9)
    email: "",
    renta: "",
    edad: "",
    numCargas: "0",
    cargas: "",
    isapre: "",
    website: "", // honeypot
  });

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [error, setError] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [isapreOpen, setIsapreOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const isapreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isapreRef.current && !isapreRef.current.contains(e.target as Node)) {
        setIsapreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    // Enfoca el input al entrar a cada paso (sirve también tras animar)
    const t = setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 320);
    setIsapreOpen(false);
    return () => clearTimeout(t);
  }, [step]);

  /* ================= HELPERS ================= */

  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 12 ? "Buenos días" : "Buenas tardes";
  };

  const sanitize = (text: string) => text.replace(/[<>$%{}[\]]/g, "").trim();

  const formatCLPInput = (value: string) => {
    const clean = value.replace(/\D/g, "");
    if (!clean) return "";
    return Number(clean).toLocaleString("es-CL");
  };

  const toNumberFromCLP = (value: string) =>
    Number(value.replace(/\./g, ""));

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /* ================= PASOS ================= */

  const steps: {
    name: FieldName;
    label: string;
    icon: () => React.ReactNode;
    render: () => React.ReactNode;
    validate: () => string | null;
  }[] = [
    {
      name: "nombre",
      label: "¿Cuál es su nombre completo y edad?",
      icon: IconUser,
      validate: () => {
        if (form.nombre.trim().length < 2) return "Ingresa tu nombre completo";
        if (form.edad === "") return "Selecciona tu edad";
        return null;
      },
      render: () => (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_110px]">
          <div>
            <span className="mb-1.5 block text-sm font-medium text-slate-500">
              Nombre completo
            </span>
            <input
              ref={inputRef}
              name="nombre"
              type="text"
              maxLength={60}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, nombre: e.target.value }))
              }
              value={form.nombre}
              placeholder="Nombre completo"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-lg shadow-sm focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition"
            />
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-medium text-slate-500">
              Edad
            </span>
            <input
              name="edad"
              type="number"
              min={0}
              max={110}
              maxLength={3}
              inputMode="numeric"
              onChange={(e) => {
                if (e.target.value.length > 3) return;
                setForm((prev) => ({ ...prev, edad: e.target.value }));
              }}
              value={form.edad}
              placeholder="Ej: 35"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-lg shadow-sm focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition"
            />
          </div>
        </div>
      ),
    },
    {
      name: "telefono",
      label: "¿Cuál es su número de celular?",
      icon: IconPhone,
      validate: () =>
        form.telefono.length !== 8
          ? "Ingresa tu número de WhatsApp (8 dígitos)"
          : null,
      render: () => (
        <>
          <div className="flex items-stretch rounded-xl border border-slate-200 bg-white shadow-sm focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100 transition">
            <span className="flex items-center px-3 text-lg text-slate-500 py-3.5 bg-slate-50 border-r border-slate-200 rounded-l-xl">
              +569
            </span>
            <input
              ref={inputRef}
              name="telefono"
              type="tel"
              maxLength={8}
              inputMode="numeric"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  telefono: e.target.value.replace(/\D/g, ""),
                }))
              }
              value={form.telefono}
              placeholder="71064542"
              className="w-full px-4 py-3.5 text-lg rounded-r-xl focus:outline-none"
            />
          </div>
          <p className="mt-2 text-[12px] text-slate-400 leading-snug">
            Por favor confírmenos su actual número de celular para poder
            realizar una correcta asesoría.
          </p>
        </>
      ),
    },
    {
      name: "email",
      label: "¿Cuál es su correo electrónico?",
      icon: IconMail,
      validate: () =>
        !isValidEmail(form.email) ? "Ingresa un correo válido" : null,
      render: () => (
        <input
          ref={inputRef}
          name="email"
          type="email"
          maxLength={80}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
          value={form.email}
          placeholder="correo@ejemplo.cl"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-lg shadow-sm focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition"
        />
      ),
    },
    {
      name: "renta",
      label: "¿Cuál es su renta imponible?",
      icon: IconWallet,
      validate: () => (!form.renta ? "Ingresa tu renta imponible" : null),
      render: () => (
        <>
          <input
            ref={inputRef}
            name="renta"
            type="text"
            onChange={(e) => {
              if (e.target.value.length > 12) return;
              setForm((prev) => ({
                ...prev,
                renta: formatCLPInput(e.target.value),
              }));
            }}
            value={form.renta}
            placeholder="Monto en pesos"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-lg shadow-sm focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition"
          />
          <p className="mt-2 text-[12px] text-slate-400 leading-snug">
            Ingresa el monto sin puntos ni comas
          </p>
        </>
      ),
    },
    {
      name: "cargas",
      label: "¿Cuántas cargas tiene y qué edad tienen?",
      icon: IconUsers,
      validate: () => null,
      render: () => (
        <>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[110px_1fr]">
            <div>
              <span className="mb-1.5 block text-sm font-medium text-slate-500">
                Cantidad
              </span>
              <select
                ref={inputRef as unknown as React.RefObject<HTMLSelectElement>}
                name="numCargas"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, numCargas: e.target.value }))
                }
                value={form.numCargas}
                className={`w-full rounded-xl border border-slate-200 bg-white px-2 py-3.5 text-lg shadow-sm focus:border-sky-500 focus:ring-4 focus:ring-sky-100 focus:outline-none transition ${
                  form.numCargas
                    ? "font-semibold text-slate-800"
                    : "text-slate-400"
                }`}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
            <div>
              <span className="mb-1.5 block text-sm font-medium text-slate-500">
                Edad de sus cargas
              </span>
              <input
                name="cargas"
                type="text"
                inputMode="numeric"
                maxLength={30}
                disabled={form.numCargas === "0"}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    cargas: e.target.value.replace(/[^\d,\s]/g, ""),
                  }))
                }
                value={form.numCargas === "0" ? "" : form.cargas}
                placeholder={
                  form.numCargas === "0" ? "No aplica" : "Ej: 40, 12"
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-lg shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 disabled:bg-slate-50 disabled:text-slate-300"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Incluye cónyuge e hijos, si corresponde
          </p>
        </>
      ),
    },
    {
      name: "isapre",
      label: "¿En qué sistema de salud está hoy?",
      icon: IconBuilding,
      validate: () => (!form.isapre ? "Selecciona tu isapre actual" : null),
      render: () => {
        const selected = isapresList.find((i) => i.name === form.isapre);
        return (
          <div ref={isapreRef} className="relative">
            <button
              type="button"
              onClick={() => setIsapreOpen((o) => !o)}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left text-lg shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100"
            >
              <span className="flex items-center gap-3">
                {selected?.logo && (
                  <img
                    src={selected.logo}
                    alt=""
                    className="h-9 w-9 shrink-0 object-contain"
                  />
                )}
                <span
                  className={
                    form.isapre
                      ? "font-semibold text-slate-800"
                      : "text-slate-400"
                  }
                >
                  {form.isapre || "Selecciona tu isapre"}
                </span>
              </span>
              <IconChevronDown open={isapreOpen} />
            </button>

            {isapreOpen && (
              <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <div className="max-h-[248px] overflow-y-auto py-1.5">
                  {isapresList.map((isapre) => (
                    <button
                      key={isapre.name}
                      type="button"
                      onClick={() => {
                        setForm((prev) => ({ ...prev, isapre: isapre.name }));
                        setIsapreOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-left text-lg font-semibold transition ${
                        form.isapre === isapre.name
                          ? "bg-sky-50 text-sky-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {isapre.logo ? (
                        <img
                          src={isapre.logo}
                          alt=""
                          className="h-9 w-9 shrink-0 object-contain"
                        />
                      ) : (
                        <span className="h-9 w-9 shrink-0" />
                      )}
                      {isapre.name}
                      {form.isapre === isapre.name && (
                        <span className="ml-auto text-sky-500">
                          <IconCheck />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
              </div>
            )}
          </div>
        );
      },
    },
  ];

  const totalSteps = steps.length;
  const current = steps[step];

  /* ================= HANDLERS ================= */

  const goNext = () => {
    const validationError = current.validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setDirection("forward");
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  };

  const goBack = () => {
    setError(null);
    setDirection("back");
    if (step > 0) setStep((s) => s - 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      goNext();
    }
  };

  const handleSubmit = () => {
    // Honeypot
    if (form.website) return;

    // Tiempo mínimo humano (3s)
    if (Date.now() - startTime < 3000) return;

    const saludo = getGreeting();
    const rentaNumero = toNumberFromCLP(form.renta);
    const telefonoCompleto = `+569${form.telefono}`;

    const mensaje = `
Hola , ${saludo} 👋
Quisiera cotizar un plan de Isapre y recibir asesoría.

Nombre: ${sanitize(form.nombre)}
Teléfono: ${telefonoCompleto}
Email: ${sanitize(form.email)}

Renta imponible: $${rentaNumero.toLocaleString("es-CL")}
Edad: ${sanitize(form.edad)} años
Cantidad de cargas: ${form.numCargas}
Edad de cargas: ${form.cargas ? sanitize(form.cargas) : "Sin cargas"}
Isapre actual: ${sanitize(form.isapre)}

Quedo atento(a). Gracias.
`.trim();

    const telefonoEmpresa = "56944025097";
    const url = `https://wa.me/${telefonoEmpresa}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");
    setSubmitted(true);
  };

  /* ================= JSX ================= */

  if (submitted) {
    return (
      <div className="text-center py-10 space-y-3 animate-fade-in">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
          <IconCheck />
        </div>
        <p className="text-lg font-semibold text-gray-800">
          ¡Listo, {sanitize(form.nombre).split(" ")[0]}!
        </p>
        <p className="text-sm text-gray-500 max-w-xs mx-auto">
          Te abrimos WhatsApp para que confirmes tu mensaje. Si no se abrió,
          revisa que tu navegador no lo haya bloqueado.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* HONEYPOT (oculto) */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, website: e.target.value }))
        }
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* BARRA DE PROGRESO */}
      <div className="mb-6">
        <span className="mb-2 block text-xs font-medium text-slate-400">
          Paso {step + 1} de {totalSteps}
        </span>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-emerald-400 transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* TARJETA DE LA PREGUNTA ACTUAL */}
      <div
        onKeyDown={handleKeyDown}
        onFocusCapture={(e) => {
          const target = e.target as HTMLElement;
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 300);
        }}
        key={current.name}
        className={`rounded-2xl border border-slate-100 bg-slate-50/70 p-6 sm:p-7 ${
          direction === "forward"
            ? "animate-slide-in-right"
            : "animate-slide-in-left"
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <current.icon />
          </div>
          <span className="text-sm font-medium tabular-nums text-slate-300">
            {String(step + 1).padStart(2, "0")}
            <span className="mx-1 text-slate-200">/</span>
            {String(totalSteps).padStart(2, "0")}
          </span>
        </div>

        <label className="text-xl font-semibold text-gray-800">
          {current.label} <span className="text-red-500">*</span>
        </label>

        <div className="mt-3">{current.render()}</div>

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        <div className="mt-6 flex gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={goBack}
              className="flex items-center gap-1 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base sm:text-lg font-medium text-slate-600 hover:bg-slate-50 transition"
            >
              <IconArrowLeft />
              Atrás
            </button>
          )}
          <button
            type="button"
            onClick={goNext}
            className="flex-1 flex items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-sky-500 px-3 py-3.5 text-base sm:text-lg font-semibold text-white shadow-sm shadow-sky-200 hover:bg-sky-600 transition"
          >
            {step === totalSteps - 1 ? "Cotiza ahora" : "Siguiente"}
            {step < totalSteps - 1 && <IconArrowRight />}
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-400 text-center">
        <span className="text-red-400">*</span> Todos los campos son
        obligatorios. Tus datos son confidenciales.
      </p>
    </>
  );
}