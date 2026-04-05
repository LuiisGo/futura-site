export interface SectorData {
  slug: string
  name: string
  headline: string
  description: string
  painPoints: string[]
  solutions: { title: string; description: string }[]
  tools: string[]
  caseStudy?: { company: string; result: string; link?: string }
  faq: { q: string; a: string }[]
  metaTitle: string
  metaDescription: string
}

export const sectors: SectorData[] = [
  {
    slug: 'agroindustria',
    name: 'Agroindustria y Alimentos',
    headline: 'Digitalización para agroindustria y alimentos en Guatemala',
    description:
      'Procesos productivos diarios, lotes, trazabilidad, rutas de reparto, devoluciones, cobranzas y análisis de márgenes por cliente y producto. FUTURA conecta planta, bodega, distribución y ventas en un solo sistema digital accesible desde el celular.',
    painPoints: [
      'Registros de inventario en papel que no cuadran al cierre del día',
      'Sin visibilidad en tiempo real entre sucursales y bodega central',
      'Control de combustible para flotillas sin trazabilidad ni evidencia',
      'Proceso de cobranza manual que retrasa el flujo de caja',
      'Márgenes por producto y cliente desconocidos hasta fin de mes',
    ],
    solutions: [
      {
        title: 'ERP-lite con Google Sheets y Forms',
        description:
          'Cada empleado registra movimientos de inventario desde el celular en 30 segundos. El sistema consolida inventario por sucursal y bodega en tiempo real y genera la vista ejecutiva para gerencia.',
      },
      {
        title: 'Control de combustible con PWA offline-first',
        description:
          'Sistema de control de inventario de combustible con PWA offline-first, autenticación biométrica y análisis de varianza en tiempo real. Evidencia fotográfica de cada entrega y exportación a Excel.',
      },
      {
        title: 'Automatización de cobranza por WhatsApp',
        description:
          'Flujos automáticos de seguimiento de facturas vencidas con notificaciones por WhatsApp, escalamiento y reporte de estatus diario al equipo de finanzas.',
      },
      {
        title: 'Dashboard de márgenes y rentabilidad',
        description:
          'Tablero en tiempo real que cruza costos de producción, insumos y precios de venta para mostrar margen por producto, por cliente y por ruta de distribución.',
      },
    ],
    tools: ['Google Sheets', 'Google Forms', 'n8n', 'WhatsApp', 'PWA offline-first'],
    caseStudy: {
      company: 'Lecheria San Antonio y Agricola San Antonio',
      result:
        'Tiempo de registro de inventario reducido de 15 horas/semana a menos de 30 minutos. Deteccion de discrepancias de combustible en tiempo real. 5 puntos de operacion manejados desde un solo sistema.',
      link: '/casos',
    },
    faq: [
      {
        q: '¿Funciona en zonas rurales sin internet estable?',
        a: 'Si. Nuestras soluciones PWA funcionan offline y sincronizan automaticamente cuando hay conexion. Los formularios de Google tambien permiten respuestas offline en dispositivos moviles.',
      },
      {
        q: '¿Pueden integrar el sistema con mi facturador o SAT?',
        a: 'Si. Mediante n8n conectamos tu sistema digital con el facturador electronico que uses (FEL) para que las ventas, despachos y cobranzas fluyan sin doble digitacion.',
      },
      {
        q: '¿Cuanto tiempo toma implementar el ERP-lite para agroindustria?',
        a: 'Un primer modulo funcional (por ejemplo, inventario por sucursal + vista ejecutiva) suele estar listo en 2 a 4 semanas. Luego iteramos con modulos adicionales por sprints.',
      },
      {
        q: '¿Necesito comprar hardware nuevo para la planta?',
        a: 'No. Todo funciona desde celulares y tablets que tu equipo ya tiene. Solo necesitamos navegador web y, en algunos casos, una impresora de etiquetas basica.',
      },
    ],
    metaTitle: 'Digitalizacion Agroindustria y Alimentos Guatemala',
    metaDescription:
      'Digitalizamos procesos de agroindustria y alimentos: inventario por sucursal, trazabilidad de lotes, control de combustible, cobranza automatizada y dashboards de margen. PYMEs en Guatemala.',
  },
  {
    slug: 'retail',
    name: 'Retail y Tiendas',
    headline: 'Digitalizacion para retail y tiendas en Guatemala',
    description:
      'Inventarios por tienda, reposiciones automaticas, rotacion, quiebres, precios y margen por categoria. Integracion con FUTURA Wallet para fidelizacion de clientes y cashback digital.',
    painPoints: [
      'Inventario desactualizado entre tiendas y bodega central',
      'Reposiciones manuales que generan quiebres de stock o sobreinventario',
      'Sin visibilidad de rotacion y margen por categoria o producto',
      'Programa de fidelizacion inexistente o basado en tarjetas fisicas',
      'Cierres de caja manuales con errores frecuentes',
    ],
    solutions: [
      {
        title: 'Control de inventario multitienda',
        description:
          'Sistema digital que consolida existencias de todas las tiendas y bodega en un solo dashboard. Alertas automaticas de quiebre de stock y sugerencias de reposicion.',
      },
      {
        title: 'FUTURA Wallet: fidelizacion digital',
        description:
          'Billetera digital con cashback y puntos que reemplaza tarjetas fisicas. Los clientes acumulan y canjean desde su celular, y tu obtienes datos de comportamiento de compra.',
      },
      {
        title: 'Dashboard de ventas y margenes',
        description:
          'Tablero ejecutivo con ventas por tienda, por categoria y por vendedor. Margenes en tiempo real para tomar decisiones de precio y promocion.',
      },
      {
        title: 'Automatizacion de cierres y reportes',
        description:
          'Flujos automaticos que consolidan cierres de caja, generan reportes diarios y notifican discrepancias al equipo de finanzas por WhatsApp.',
      },
    ],
    tools: ['Google Sheets', 'n8n', 'WhatsApp', 'FUTURA Wallet', 'Google Data Studio'],
    faq: [
      {
        q: '¿Como funciona FUTURA Wallet para mis tiendas?',
        a: 'FUTURA Wallet es una billetera digital donde tus clientes acumulan cashback en cada compra. No necesitan descargar app — funciona desde el navegador. Tu obtienes datos de frecuencia y ticket promedio.',
      },
      {
        q: '¿Puedo integrar mi punto de venta actual con FUTURA?',
        a: 'Si. Mediante n8n conectamos tu POS existente para que las ventas alimenten automaticamente el dashboard de inventario y el programa de fidelizacion.',
      },
      {
        q: '¿Cuantas tiendas puedo manejar desde un solo sistema?',
        a: 'No hay limite. Hemos trabajado con operaciones de 1 hasta mas de 10 puntos de venta, todas consolidadas en un mismo dashboard con permisos por rol.',
      },
      {
        q: '¿Cuanto cuesta implementar el sistema para retail?',
        a: 'Cada proyecto se cotiza segun alcance. Agenda un diagnostico gratuito de 30 minutos y te damos una propuesta concreta para tu caso.',
      },
    ],
    metaTitle: 'Digitalizacion Retail y Tiendas Guatemala',
    metaDescription:
      'Sistema digital para retail: inventario multitienda, reposiciones automaticas, fidelizacion con FUTURA Wallet, dashboards de venta y margen. PYMEs en Guatemala.',
  },
  {
    slug: 'distribucion-logistica',
    name: 'Distribucion y Logistica',
    headline: 'Digitalizacion para distribucion y logistica en Guatemala',
    description:
      'Rutas de reparto, control de entregas, devoluciones, liquidaciones de ruta, cobranza y trazabilidad de pedidos. FUTURA conecta bodega, piloto y cliente en un flujo digital sin papel.',
    painPoints: [
      'Liquidaciones de ruta en papel que tardan horas en procesarse',
      'Devoluciones sin registro claro que afectan el inventario',
      'Sin trazabilidad en tiempo real de las entregas',
      'Cobranza manual que no distingue clientes morosos a tiempo',
      'Pilotos y repartidores sin herramienta movil para confirmar entregas',
    ],
    solutions: [
      {
        title: 'Liquidacion de ruta digital',
        description:
          'El piloto registra entregas, devoluciones y cobros desde el celular. La liquidacion se genera automaticamente al cerrar la ruta, eliminando el papeleo de fin de dia.',
      },
      {
        title: 'Trazabilidad de pedidos en tiempo real',
        description:
          'Dashboard donde gerencia ve el estado de cada pedido: preparado, en ruta, entregado o devuelto. Notificaciones automaticas al cliente por WhatsApp.',
      },
      {
        title: 'Automatizacion de cobranza por ruta',
        description:
          'Flujos que cruzan facturas emitidas con pagos recibidos por ruta, generan alertas de mora y envian recordatorios automaticos al cliente.',
      },
    ],
    tools: ['Google Sheets', 'Google Forms', 'n8n', 'WhatsApp', 'Google Maps'],
    faq: [
      {
        q: '¿Los pilotos necesitan un celular especial?',
        a: 'No. Cualquier smartphone con navegador web funciona. Los formularios de registro son sencillos y estan disenados para usarse con una mano.',
      },
      {
        q: '¿Pueden rastrear la ubicacion de las unidades?',
        a: 'Si. Podemos integrar Google Maps para registrar la ubicacion al momento de cada entrega, dando visibilidad de ruta en tiempo real a gerencia.',
      },
      {
        q: '¿Como se manejan las devoluciones?',
        a: 'El piloto registra la devolucion con motivo y evidencia fotografica desde el celular. El inventario se actualiza automaticamente y se notifica a bodega y finanzas.',
      },
      {
        q: '¿Cuanto tiempo se ahorra con la liquidacion digital?',
        a: 'Los procesos de fin de dia que toman 1-2 horas por ruta se reducen a minutos. La informacion llega a finanzas en tiempo real, no al dia siguiente.',
      },
    ],
    metaTitle: 'Digitalizacion Distribucion y Logistica Guatemala',
    metaDescription:
      'Digitaliza tu operacion de distribucion: liquidacion de ruta, trazabilidad de entregas, cobranza automatizada y dashboards en tiempo real. PYMEs en Guatemala.',
  },
  {
    slug: 'combustibles-flotas',
    name: 'Combustibles y Flotas',
    headline: 'Digitalizacion para combustibles y flotas en Guatemala',
    description:
      'Flujos de cotizacion, ordenes, entregas, control de clientes, flotas, consumo y facturacion. Panel claro de estado de cada cuenta. Referencia: FUELDEPOT GT y sistema lsa-control de tracking de combustible.',
    painPoints: [
      'Control de entregas y consumo de combustible en papel sin trazabilidad',
      'Discrepancias entre lo facturado por proveedores y lo recibido en tanque',
      'Proceso comercial B2B desorganizado: cotizaciones, seguimiento y cierre manual',
      'Sin presencia digital para captar nuevos clientes corporativos',
      'Reportes de consumo por flota y vehiculo generados manualmente',
    ],
    solutions: [
      {
        title: 'Sistema lsa-control de tracking de combustible',
        description:
          'PWA offline-first con autenticacion biometrica para registro de entradas y salidas por tanque y proveedor. Analisis de varianza en tiempo real y evidencia fotografica de cada entrega.',
      },
      {
        title: 'Landing page B2B para generacion de leads',
        description:
          'Pagina optimizada para conversion con formulario de captura integrado al proceso comercial. Como lo hicimos con FUELDEPOT GT, que cerro 3 deals directamente desde su landing.',
      },
      {
        title: 'Dashboard de consumo y facturacion',
        description:
          'Panel ejecutivo que cruza entregas, consumo por flota/vehiculo y facturacion. Deteccion automatica de anomalias y alertas al equipo de operaciones.',
      },
      {
        title: 'Automatizacion del flujo comercial',
        description:
          'Desde la cotizacion hasta el cierre: seguimiento automatizado de prospectos, recordatorios por WhatsApp y pipeline visible para todo el equipo comercial.',
      },
    ],
    tools: ['PWA offline-first', 'n8n', 'Google Sheets', 'WhatsApp', 'Landing pages'],
    caseStudy: {
      company: 'FUELDEPOT GT',
      result:
        '3 deals cerrados directamente desde la landing page. Canal de generacion de leads activo y medible desde el dia 1.',
      link: '/casos',
    },
    faq: [
      {
        q: '¿El sistema funciona sin internet en campo?',
        a: 'Si. La PWA de control de combustible funciona completamente offline y sincroniza automaticamente cuando hay conexion. Ideal para tanques en ubicaciones rurales.',
      },
      {
        q: '¿Pueden generar reportes para mis clientes corporativos?',
        a: 'Si. El dashboard genera reportes de consumo por flota, por vehiculo y por periodo que puedes exportar en PDF o Excel para enviar a tus clientes.',
      },
      {
        q: '¿Como detectan discrepancias en las entregas?',
        a: 'El sistema compara automaticamente lo registrado en cada entrega contra lo facturado por el proveedor. Si hay varianza fuera del rango aceptable, genera una alerta inmediata.',
      },
      {
        q: '¿Pueden ayudarme a conseguir mas clientes B2B?',
        a: 'Si. Disenamos landing pages optimizadas para conversion y flujos de seguimiento automatizado para que captures y cierres leads de forma consistente.',
      },
    ],
    metaTitle: 'Digitalizacion Combustibles y Flotas Guatemala',
    metaDescription:
      'Control digital de combustible: tracking por tanque, analisis de varianza, dashboard de consumo por flota, landing pages B2B y automatizacion comercial. PYMEs en Guatemala.',
  },
  {
    slug: 'servicios-tecnicos',
    name: 'Servicios Tecnicos y Seguridad',
    headline: 'Digitalizacion para servicios tecnicos y seguridad en Guatemala',
    description:
      'Tickets, activos con QR, agenda de mantenimiento preventivo, visitas tecnicas y reportes fotograficos conectados a la base de datos. FUTURA digitaliza la operacion de campo de empresas de servicios.',
    painPoints: [
      'Tickets de servicio en papel o WhatsApp sin trazabilidad ni historial',
      'Sin control de activos instalados en cada cliente',
      'Mantenimiento preventivo olvidado hasta que algo falla',
      'Reportes de visita tecnica en papel que nunca se digitalizan',
      'Falta de indicadores de tiempo de respuesta y cumplimiento de SLA',
    ],
    solutions: [
      {
        title: 'Sistema de tickets digitalizado',
        description:
          'Cada solicitud de servicio se registra con formulario web, se asigna automaticamente al tecnico disponible y se rastrea hasta su cierre. Historial completo por cliente y activo.',
      },
      {
        title: 'Control de activos con QR',
        description:
          'Cada equipo instalado tiene un QR unico. Al escanearlo, el tecnico ve el historial completo y puede registrar la visita en segundos.',
      },
      {
        title: 'Agenda de mantenimiento preventivo',
        description:
          'Flujos automaticos que generan ordenes de trabajo segun calendario de mantenimiento. Notificaciones por WhatsApp al tecnico y al cliente.',
      },
      {
        title: 'Reportes fotograficos digitales',
        description:
          'El tecnico sube fotos de antes y despues desde el celular. El reporte se genera automaticamente y se envia al cliente por correo o WhatsApp.',
      },
    ],
    tools: ['Google Sheets', 'Google Forms', 'n8n', 'WhatsApp', 'QR codes'],
    faq: [
      {
        q: '¿Como funciona el sistema de QR para activos?',
        a: 'Generamos un QR unico por equipo que se pega fisicamente. Al escanearlo con el celular, el tecnico accede al historial completo del activo y puede registrar la visita directamente.',
      },
      {
        q: '¿Pueden integrar el sistema con mi facturacion?',
        a: 'Si. Mediante n8n conectamos el cierre de ticket con la generacion automatica de factura en tu sistema contable o FEL.',
      },
      {
        q: '¿Los tecnicos necesitan app especial?',
        a: 'No. Todo funciona desde el navegador del celular. No hay app que instalar ni actualizar.',
      },
      {
        q: '¿Puedo medir el desempeno de mis tecnicos?',
        a: 'Si. El dashboard muestra tiempo de respuesta, tickets cerrados, cumplimiento de SLA y satisfaccion del cliente por tecnico y por periodo.',
      },
    ],
    metaTitle: 'Digitalizacion Servicios Tecnicos y Seguridad Guatemala',
    metaDescription:
      'Digitaliza tu empresa de servicios tecnicos: tickets, activos con QR, mantenimiento preventivo, reportes fotograficos y dashboards de SLA. PYMEs en Guatemala.',
  },
  {
    slug: 'industrial-b2b',
    name: 'Industrial y B2B',
    headline: 'Digitalizacion para industria y empresas B2B en Guatemala',
    description:
      'Cotizaciones complejas, ordenes de compra, ordenes de produccion, despachos y trazabilidad de proyectos o clientes. FUTURA conecta el proceso comercial con produccion y despacho en un flujo digital.',
    painPoints: [
      'Cotizaciones en Word o Excel que se pierden y no tienen seguimiento',
      'Ordenes de produccion en papel sin visibilidad de avance',
      'Despachos sin trazabilidad que generan reclamos de clientes',
      'Proceso comercial largo sin CRM ni pipeline visible',
      'Informacion de proyectos dispersa entre correos, carpetas y WhatsApp',
    ],
    solutions: [
      {
        title: 'Pipeline comercial B2B',
        description:
          'CRM ligero en Google Sheets con automatizaciones de seguimiento, recordatorios por WhatsApp y vista de pipeline por etapa, monto y probabilidad de cierre.',
      },
      {
        title: 'Control de ordenes de produccion',
        description:
          'Flujo digital desde la orden de compra hasta el despacho. Cada etapa se registra y es visible en tiempo real para ventas, produccion y logistica.',
      },
      {
        title: 'Cotizador digital',
        description:
          'Plantilla inteligente que genera cotizaciones profesionales en PDF con precios actualizados, tiempos de entrega y condiciones comerciales. Historial completo por cliente.',
      },
      {
        title: 'Trazabilidad de proyectos',
        description:
          'Dashboard que consolida toda la informacion de un proyecto o cliente: cotizaciones, ordenes, produccion, despachos, pagos y comunicaciones.',
      },
    ],
    tools: ['Google Sheets', 'n8n', 'WhatsApp', 'Google Docs', 'PDF automatizado'],
    faq: [
      {
        q: '¿Pueden reemplazar mi ERP actual?',
        a: 'No buscamos reemplazar ERPs completos. Si ya tienes uno, lo complementamos y conectamos. Si no tienes, construimos un ERP-lite modular que cubre lo esencial sin la complejidad de un sistema grande.',
      },
      {
        q: '¿Como funciona el cotizador digital?',
        a: 'Llenas un formulario con los datos del cliente y los productos. El sistema genera automaticamente un PDF profesional con precios, descuentos y condiciones. Todo queda registrado en el historial del cliente.',
      },
      {
        q: '¿Puedo ver el avance de produccion en tiempo real?',
        a: 'Si. Cada estacion o etapa de produccion registra su avance en el sistema. El dashboard muestra el estado de cada orden y alerta si hay retrasos.',
      },
      {
        q: '¿Funciona para empresas con muchos SKUs?',
        a: 'Si. Hemos trabajado con catalogos de cientos de productos. El sistema esta disenado para manejar portafolios amplios con busqueda rapida y categorizacion.',
      },
    ],
    metaTitle: 'Digitalizacion Industrial y B2B Guatemala',
    metaDescription:
      'Digitaliza tu operacion industrial y B2B: pipeline comercial, ordenes de produccion, cotizador digital, trazabilidad de despachos y dashboards. PYMEs en Guatemala.',
  },
  {
    slug: 'educacion',
    name: 'Educacion',
    headline: 'Digitalizacion para instituciones educativas en Guatemala',
    description:
      'Inscripciones, cobros, comunicacion con padres, reportes academicos y gestion administrativa. FUTURA digitaliza los procesos administrativos de colegios, academias e institutos para que el equipo se enfoque en educar.',
    painPoints: [
      'Inscripciones y reinscripciones en papel con filas y papeleo',
      'Cobro de mensualidades manual sin control de mora efectivo',
      'Comunicacion con padres fragmentada entre circulares, WhatsApp y correo',
      'Reportes de notas y asistencia generados manualmente',
      'Gestion administrativa dispersa sin indicadores claros',
    ],
    solutions: [
      {
        title: 'Inscripcion digital y portal de padres',
        description:
          'Formulario de inscripcion en linea con documentos digitalizados. Portal donde los padres consultan notas, pagos y comunicados sin llamar a la administracion.',
      },
      {
        title: 'Automatizacion de cobros y recordatorios',
        description:
          'Flujos que generan estados de cuenta, envian recordatorios por WhatsApp antes del vencimiento y alertan de mora automaticamente.',
      },
      {
        title: 'Comunicacion centralizada con padres',
        description:
          'Canal unico donde se publican comunicados, se agendan reuniones y se envian notificaciones automaticas por WhatsApp o correo.',
      },
      {
        title: 'Dashboard administrativo',
        description:
          'Tablero con indicadores de cobranza, matricula, asistencia y desempeno academico para la direccion.',
      },
    ],
    tools: ['Google Sheets', 'Google Forms', 'n8n', 'WhatsApp', 'Google Classroom'],
    faq: [
      {
        q: '¿Funciona para colegios pequenos?',
        a: 'Si. El sistema es modular y se adapta al tamano de la institucion. Un colegio de 100 alumnos puede empezar con inscripcion digital y cobros, y crecer desde ahi.',
      },
      {
        q: '¿Los padres necesitan descargar alguna app?',
        a: 'No. Todo funciona desde el navegador del celular y WhatsApp. No hay barreras de adopcion.',
      },
      {
        q: '¿Pueden integrar con Google Classroom?',
        a: 'Si. Podemos conectar los datos academicos de Google Classroom con el dashboard administrativo para tener una vista unificada.',
      },
      {
        q: '¿Como se maneja la seguridad de datos de menores?',
        a: 'Los datos se almacenan en la cuenta de Google Workspace del colegio, con permisos estrictos por rol. FUTURA no almacena datos de alumnos en servidores propios.',
      },
    ],
    metaTitle: 'Digitalizacion Educacion Guatemala',
    metaDescription:
      'Digitaliza la administracion de tu colegio o academia: inscripciones online, cobros automatizados, comunicacion con padres y dashboards. Instituciones educativas en Guatemala.',
  },
  {
    slug: 'restaurantes',
    name: 'Restaurantes y Alimentos',
    headline: 'Digitalizacion para restaurantes y alimentos en Guatemala',
    description:
      'Control de costos, recetas, inventario de insumos, pedidos, fidelizacion de clientes y reportes de venta. FUTURA ayuda a restaurantes y negocios de alimentos a controlar su operacion y mejorar margenes.',
    painPoints: [
      'Costeo de recetas manual que no refleja precios reales de insumos',
      'Inventario de insumos sin control que genera merma y desperdicio',
      'Sin programa de fidelizacion para clientes frecuentes',
      'Reportes de venta manuales que no muestran margen real por platillo',
      'Pedidos a proveedores desorganizados que generan faltantes o exceso',
    ],
    solutions: [
      {
        title: 'Costeo de recetas en tiempo real',
        description:
          'Sistema que calcula el costo real de cada platillo basado en precios actualizados de insumos. Muestra margen por platillo y alerta cuando un precio de insumo cambia significativamente.',
      },
      {
        title: 'Control de inventario de insumos',
        description:
          'Registro digital de entradas y salidas de insumos. Alertas de stock minimo, sugerencias de compra y deteccion de merma por diferencias entre consumo teorico y real.',
      },
      {
        title: 'Fidelizacion con FUTURA Wallet',
        description:
          'Programa de cashback digital para clientes frecuentes. Sin tarjetas fisicas, sin app que descargar. El cliente acumula y canjea desde su celular.',
      },
      {
        title: 'Dashboard de ventas y operacion',
        description:
          'Tablero con ventas por dia/hora, platillos mas vendidos, margen real, inventario de insumos y comportamiento de clientes frecuentes.',
      },
    ],
    tools: ['Google Sheets', 'n8n', 'WhatsApp', 'FUTURA Wallet', 'Google Forms'],
    faq: [
      {
        q: '¿Como funciona el costeo de recetas?',
        a: 'Cargas tus recetas con los ingredientes y cantidades. El sistema consulta los precios actualizados de insumos y calcula el costo real por porcion. Si el precio de un ingrediente sube, ves el impacto inmediatamente.',
      },
      {
        q: '¿Puedo controlar la merma con el sistema?',
        a: 'Si. El sistema compara el consumo teorico (basado en ventas y recetas) con el inventario fisico. La diferencia es tu merma real, visible por insumo y por periodo.',
      },
      {
        q: '¿FUTURA Wallet funciona para restaurantes?',
        a: 'Si. Es ideal para restaurantes con clientes frecuentes. El cashback incentiva la repeticion de compra y tu obtienes datos de frecuencia y ticket promedio.',
      },
      {
        q: '¿Puedo empezar solo con control de costos?',
        a: 'Si. Cada modulo es independiente. Puedes empezar con costeo de recetas y margen, y luego agregar inventario de insumos, fidelizacion o lo que necesites.',
      },
    ],
    metaTitle: 'Digitalizacion Restaurantes y Alimentos Guatemala',
    metaDescription:
      'Digitaliza tu restaurante: costeo de recetas, control de insumos, fidelizacion con cashback digital, dashboards de margen y ventas. Restaurantes en Guatemala.',
  },
]
