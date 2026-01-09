import { useState, useEffect } from "react";

export default function LeadForm() {
  const [showQuoteFields, setShowQuoteFields] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "", // solo 8 dígitos (sin +56 9)
    email: "",
    renta: "",
    cargas: "",
    isapre: "",
    website: "", // honeypot
  });

  const [startTime, setStartTime] = useState<number>(0);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  /* ================= HELPERS ================= */

  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 12 ? "Buenos días" : "Buenas tardes";
  };

  const sanitize = (text: string) =>
    text.replace(/[<>$%{}[\]]/g, "").trim();

  const formatCLPInput = (value: string) => {
    const clean = value.replace(/\D/g, "");
    if (!clean) return "";
    return Number(clean).toLocaleString("es-CL");
  };

  const toNumberFromCLP = (value: string) =>
    Number(value.replace(/\./g, ""));

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /* ================= HANDLERS ================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "renta") {
      if (value.length > 12) return;
      setForm((prev) => ({ ...prev, renta: formatCLPInput(value) }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBasicBlur = () => {
    setShowQuoteFields(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /* ===== Anti-bot checks ===== */

    // Honeypot
    if (form.website) return;

    // Tiempo mínimo humano (3s)
    if (Date.now() - startTime < 3000) return;

    // Validaciones reales
    if (form.telefono.length !== 8) {
      alert("Ingresa tu número de WhatsApp (8 dígitos)");
      return;
    }

    if (!isValidEmail(form.email)) {
      alert("Ingresa un correo válido");
      return;
    }

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
Cargas: ${sanitize(form.cargas)}
Isapre actual: ${sanitize(form.isapre)}

Quedo atento(a). Gracias.
`.trim();

   const telefonoEmpresa = "56936276886";

const url = `https://wa.me/${telefonoEmpresa}?text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");

  };

  /* ================= JSX ================= */

  return (
    <>
      {/* HONEYPOT (oculto) */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* DATOS DE CONTACTO */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Nombre y Apellidos *
          </label>
          <input
            name="nombre"
            type="text"
            required
            maxLength={60}
            onBlur={handleBasicBlur}
            onChange={handleChange}
            value={form.nombre}
            placeholder="Nombre Completo"
            className="mt-1 w-full rounded-lg border px-4 py-2 focus:border-sky-500 focus:outline-none"
          />
        </div>

        {/* TELÉFONO CON PREFIJO CHILE */}
     <div>
  <label className="text-sm font-medium text-gray-700">
    Teléfono (WhatsApp) *
  </label>

  <div className="mt-1 flex items-stretch rounded-lg border border-gray-300 focus-within:border-sky-500">
    <span className="flex items-center px-3 text-sm text-gray-500 bg-gray-50 border-r border-gray-300">
      +569
    </span>

    <input
      name="telefono"
      type="tel"
      required
      maxLength={8}
      inputMode="numeric"
      onBlur={handleBasicBlur}
      onChange={(e) =>
        setForm((prev) => ({
          ...prev,
          telefono: e.target.value.replace(/\D/g, ""),
        }))
      }
      value={form.telefono}
      placeholder="71064542"
      className="w-full px-4 py-2 text-sm focus:outline-none"
    />
  </div>
</div>


        <div>
          <label className="text-sm font-medium text-gray-700">
            Correo electrónico *
          </label>
          <input
            name="email"
            type="email"
            required
            maxLength={80}
            onBlur={handleBasicBlur}
            onChange={handleChange}
            value={form.email}
            placeholder="Correo"
            className="mt-1 w-full rounded-lg border px-4 py-2 focus:border-sky-500 focus:outline-none"
          />
        </div>

        {/* DATOS DE COTIZACIÓN */}
        {showQuoteFields && (
          <div className="mt-6 space-y-4 animate-fade-in">
            <p className="text-sm font-semibold text-gray-500">
              Datos para cotización
            </p>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Renta imponible *
              </label>
              <input
                name="renta"
                type="text"
                required
                onChange={handleChange}
                value={form.renta}
                placeholder="Monto en pesos"
                className="mt-1 w-full rounded-lg border px-4 py-2 focus:border-sky-500 focus:outline-none"
              />
              <p className="mt-1 text-[12px] text-gray-400 leading-snug">
                Ingresa el monto sin puntos ni comas
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Cargas *
              </label>
              <input
                type="number"
                min={0}
                inputMode="numeric"
                placeholder="Cantidad de cargas"
                className="mt-1 w-full rounded-lg border px-4 py-2 text-sm border-slate-300 placeholder:text-gray-400 focus:border-sky-500 focus:outline-none"
                onChange={handleChange}
                name="cargas"
                value={form.cargas}
                required
              />
              <p className="mt-1 text-xs text-gray-400">
                Incluye cónyuge e hijos, si corresponde
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Isapre actual *
              </label>
              <select
                name="isapre"
                required
                onChange={handleChange}
                value={form.isapre}
                className="mt-1 w-full rounded-lg border px-4 py-2 focus:border-sky-500 focus:outline-none"
              >
                <option value="">Selecciona tu isapre</option>
                <option>Banmédica</option>
                <option>Colmena</option>
                <option>Consalud</option>
                <option>CruzBlanca</option>
                <option>Esencial</option>
                <option>Nueva Masvida</option>
                <option>Vida Tres</option>
                <option>Fonasa</option>
              </select>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-sky-500 py-3 font-semibold text-white hover:bg-sky-600 transition"
        >
          Cotizar ahora
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-400 text-center">
        Tus datos son confidenciales. Solo los usaremos para contactarte.
      </p>
    </>
  );
}
