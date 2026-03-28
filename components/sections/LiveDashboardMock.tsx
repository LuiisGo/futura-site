"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Metric {
  label: string;
  value: string;
}

interface OperationRow {
  id: number;
  ubicacion: string;
  tipo: "Entrada" | "Salida" | "Ajuste";
  monto: string;
  hora: string;
}

const metrics: Metric[] = [
  { label: "Inventario Total", value: "1,247 u." },
  { label: "Ventas Hoy", value: "Q12,450" },
  { label: "Pedidos", value: "23" },
  { label: "Entradas", value: "8" },
];

const sampleRows: Omit<OperationRow, "id">[] = [
  { ubicacion: "Lechería Centro", tipo: "Entrada", monto: "Q3,200", hora: "09:14" },
  { ubicacion: "Bodega Norte", tipo: "Salida", monto: "Q1,870", hora: "09:22" },
  { ubicacion: "Tienda Sur", tipo: "Ajuste", monto: "Q450", hora: "09:35" },
  { ubicacion: "Planta Principal", tipo: "Entrada", monto: "Q5,100", hora: "09:41" },
  { ubicacion: "Sucursal Zona 10", tipo: "Salida", monto: "Q2,340", hora: "09:48" },
  { ubicacion: "Bodega Central", tipo: "Entrada", monto: "Q1,600", hora: "09:55" },
  { ubicacion: "Lechería Centro", tipo: "Ajuste", monto: "Q780", hora: "10:02" },
  { ubicacion: "Tienda Sur", tipo: "Salida", monto: "Q3,450", hora: "10:10" },
  { ubicacion: "Bodega Norte", tipo: "Entrada", monto: "Q2,100", hora: "10:18" },
  { ubicacion: "Planta Principal", tipo: "Salida", monto: "Q4,200", hora: "10:25" },
];

const tipoBadgeColor: Record<OperationRow["tipo"], string> = {
  Entrada: "bg-green-500/20 text-green-300",
  Salida: "bg-red-500/20 text-red-300",
  Ajuste: "bg-yellow-500/20 text-yellow-300",
};

const MAX_VISIBLE = 4;

export default function LiveDashboardMock() {
  const [visibleRows, setVisibleRows] = useState<OperationRow[]>(() =>
    sampleRows.slice(0, MAX_VISIBLE).map((r, i) => ({ ...r, id: i }))
  );
  const [nextIndex, setNextIndex] = useState(MAX_VISIBLE);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((prev) => {
        const idx = prev % sampleRows.length;
        const newRow: OperationRow = {
          ...sampleRows[idx],
          id: Date.now(),
        };

        setVisibleRows((rows) => {
          const updated = [newRow, ...rows];
          return updated.slice(0, MAX_VISIBLE);
        });

        setCycle((c) => c + 1);
        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl bg-[#13102a]/80 border border-white/10 p-4 backdrop-blur">
      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {metrics.map((m) => (
          <motion.div
            key={m.label}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 0.6,
              delay: cycle > 0 ? 0 : 999,
              repeat: 0,
            }}
            className="bg-white/5 border border-white/10 rounded-xl p-3"
          >
            <p className="text-[10px] md:text-xs text-white/60 mb-0.5">
              {m.label}
            </p>
            <p className="text-sm md:text-base font-semibold text-white/90">
              {m.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Table header */}
      <div className="grid grid-cols-4 gap-2 px-2 mb-2">
        {["Ubicación", "Tipo", "Monto", "Hora"].map((col) => (
          <p
            key={col}
            className="text-[10px] md:text-xs font-medium text-white/40 uppercase tracking-wider"
          >
            {col}
          </p>
        ))}
      </div>

      {/* Table rows */}
      <div className="relative overflow-hidden" style={{ minHeight: "10rem" }}>
        <AnimatePresence initial={false}>
          {visibleRows.map((row, i) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-4 gap-2 px-2 py-2 border-b border-white/5"
              style={{ position: "relative" }}
            >
              <p className="text-xs md:text-sm text-white/80 truncate">
                {row.ubicacion}
              </p>
              <span
                className={`text-[10px] md:text-xs px-2 py-0.5 rounded-full w-fit ${tipoBadgeColor[row.tipo]}`}
              >
                {row.tipo}
              </span>
              <p className="text-xs md:text-sm text-white/80">{row.monto}</p>
              <p className="text-xs md:text-sm text-white/60">{row.hora}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
