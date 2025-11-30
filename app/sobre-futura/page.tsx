export default function SobreFuturaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-10 pb-20 space-y-10">
      <section>
        <h1 className="text-3xl md:text-4xl font-semibold text-[#362263] mb-4">
          Sobre FUTURA
        </h1>
        <p className="text-slate-600 mb-4">
          FUTURA es una consultora de automatización y optimización operativa
          para PYMES que ya crecieron y necesitan orden. Tomamos tus procesos
          actuales (Excel, WhatsApp, cuadernos, sistemas sueltos) y los
          convertimos en flujos digitales, conectados y automatizados 
        </p>
        <p className="text-slate-600">
          Nuestro propósito es que puedas{" "}
          <span className="font-semibold">WORK LESS, LIVE MORE</span>: que tu
          sistema trabaje más y tú menos, con datos claros para decidir.
        </p>
      </section>

      <section className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#362263] mb-3">
          ¿Por qué existimos?
        </h2>
        <p className="text-slate-600 mb-3">
          Muchas PYMES quedan atrapadas entre dos extremos: seguir sufriendo con
          Excel y WhatsApp o invertir en un ERP gigante, caro y poco flexible.
          FUTURA nace para ofrecer un punto medio inteligente:  primero digitalizamos y automatizamos tus procesos, y cuando hace
  sentido, los organizamos en una capa tipo ERP-lite modular.
        </p>
        <p className="text-slate-600">
          No vendemos una licencia de software; diseñamos un sistema a la medida
          de tu operación, con implementaciones rápidas, enfoque en quick wins y
          acompañamiento continuo.
        </p>
      </section>

      <section className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#362263] mb-3">
          Sobre el fundador
        </h2>
        <p className="text-slate-600 mb-2">
          FUTURA fue fundada por <span className="font-semibold">Luis Marroquín</span>,
          apasionado por los datos, la tecnología aplicada y las PYMES reales de
          Guatemala y LATAM.
        </p>
        <p className="text-slate-600">
          Desde operar en negocios familiares hasta construir soluciones de
          automatización con Google Sheets, Apps Script, n8n y herramientas
          nocode, Luis entiende tanto la parte técnica como la realidad del día
          a día en planta, en la tienda y en la oficina.
        </p>
      </section>
    </div>
  );
}
