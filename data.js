/*
 * Datos del Tablero de Seguimiento del Plan de Implementación del Modelo Educativo UNEMI 2027–2030.
 * Fuente: Plan_Implementacion_Modelo_UNEMI_v1.2 (Tablas 2, 9, 14, 15, 16, 17, 20, 22, 23, 27, 28, 29 y 30).
 *
 * CÓMO SE ACTUALIZA
 *   - Solo se editan los campos de seguimiento: estado, avance, evidencia, nota, actualizado.
 *   - estado: "No iniciado" | "En curso" | "Completado" | "Bloqueado" | "Cancelado"
 *   - avance: 0–100 (porcentaje real reportado por el responsable)
 *   - Las fechas de 2027 en adelante son estimadas sobre el Cronograma 2026 (Plan, 6.3).
 *   - Desde el tablero se puede editar en modo local y luego "Exportar data.js" para reemplazar este archivo.
 */
window.PLAN_DATA = {
  meta: {
    titulo: "Plan de Implementación del Modelo Educativo UNEMI 2027–2030",
    version: "1.2",
    corte: "2026-10-26",
    horizonte: ["2026-10-01", "2030-12-31"],
    proponente: "VAFG - Dirección de Innovación de Procesos Académicos"
  },

  fases: [
    { id: "R",  nombre: "Ruta de aprobación",      inicio: "2026-10-16", fin: "2026-11-21", proposito: "Validar el Plan y aprobarlo con el Modelo en la misma sesión del OCS." },
    { id: "F0", nombre: "F0 Preparación",          inicio: "2026-11-22", fin: "2026-12-22", proposito: "Instalar la gobernanza; publicar el Modelo; fijar criterios homogéneos; registrar actividades en el POA 2027." },
    { id: "F1", nombre: "F1 Habilitación",         inicio: "2027-01-04", fin: "2027-08-22", proposito: "Aprobar el núcleo normativo, preparar el SGA, formar equipos y elegir pilotos." },
    { id: "F2", nombre: "F2 Piloto",               inicio: "2027-08-23", fin: "2028-02-28", proposito: "Aplicar el Modelo en 4 carreras, 2 maestrías y 1 ruta de microcredencial; evaluar el pilotaje." },
    { id: "F3", nombre: "F3 Escalamiento",         inicio: "2028-01-04", fin: "2029-01-31", proposito: "Dos olas de expansión (1S y 2S-2028), cada una condicionada a la evaluación de la anterior." },
    { id: "F4", nombre: "F4 Consolidación",        inicio: "2029-01-04", fin: "2029-12-20", proposito: "Integrar el Modelo a la gestión académica, la calidad y la planificación." },
    { id: "F5", nombre: "F5 Evaluación integral",  inicio: "2030-01-04", fin: "2030-12-18", proposito: "Evaluar pertinencia, resultados y madurez del Modelo; decidir su evolución." }
  ],

  hitos: [
    { id: "H0", fecha: "2026-12-19", fase: "F0", decide: "CGA", nombre: "Preparación verificada",
      condiciones: ["Modelo, Plan y Resolución de Implementación aprobados por el OCS", "Modelo anterior derogado y Modelo 2026 publicado", "Comisión ocasional designada e instalada", "Criterios homogéneos aprobados por la CGA", "Actividades registradas en el POA 2027", "Ficha de requerimiento del SGA entregada a la DTIC"],
      cumplidas: [], estado: "Pendiente", fechaReal: null },
    { id: "H1", fecha: "2027-08-22", fase: "F1", decide: "CGA, con informe de la comisión ocasional", nombre: "Habilitación lista para el piloto",
      condiciones: ["Núcleo de 5 instrumentos aprobado", "Pilotos con condiciones habilitantes", "Módulo del SGA probado", "Docentes formados"],
      cumplidas: [], estado: "Pendiente", fechaReal: null },
    { id: "H2", fecha: "2027-12-22", fase: "F2", decide: "Comisión ocasional", nombre: "Piloto aplicado",
      condiciones: ["Eje 1 y Eje 2 aplicados", "Evidencias registradas en el SGA"],
      cumplidas: [], estado: "Pendiente", fechaReal: null },
    { id: "H3", fecha: "2028-02-28", fase: "F2", decide: "CGA", nombre: "Decisión de escalamiento",
      condiciones: ["Informe de pilotaje aprobado", "Decisión: extender sin cambios / con ajustes / repetir piloto"],
      cumplidas: [], estado: "Pendiente", fechaReal: null },
    { id: "H4", fecha: "2028-08-31", fase: "F3", decide: "Comisión ocasional", nombre: "Ola 1 evaluada",
      condiciones: ["Informe breve de cobertura, incidencias y resultados de la ola 1"],
      cumplidas: [], estado: "Pendiente", fechaReal: null },
    { id: "H5", fecha: "2029-01-31", fase: "F3", decide: "CGA (el OCS conoce el informe)", nombre: "Ola 2 incorporada",
      condiciones: ["Ola 2 incorporada", "Informe anual del Modelo al OCS"],
      cumplidas: [], estado: "Pendiente", fechaReal: null },
    { id: "H6", fecha: "2029-12-20", fase: "F4", decide: "CGA, CGC", nombre: "Modelo consolidado",
      condiciones: ["Modelo integrado a la autoevaluación", "Brechas del Modelo en el POA 2030"],
      cumplidas: [], estado: "Pendiente", fechaReal: null },
    { id: "H7", fecha: "2030-12-18", fase: "F5", decide: "OCS", nombre: "Evaluación integral 2027–2030",
      condiciones: ["Informe de evaluación integral 2027–2030 presentado al OCS", "Decisión sobre continuidad y ajuste del Modelo"],
      cumplidas: [], estado: "Pendiente", fechaReal: null }
  ],

  // nivel: Grado | Posgrado | EC (Educación Continua) | Transversal
  actividades: [
    // Ruta de aprobación (Tabla 30)
    { id: "R1", fase: "R", componente: "Aprobación", nombre: "Validar el inventario de normas, guías e instrumentos citados", inicio: "2026-10-16", fin: "2026-11-04", responsables: ["Equipo redactor"], participan: ["DAC", "DIPA"], nivel: "Transversal", producto: "Inventario validado", estado: "No iniciado", avance: 0 },
    { id: "R2", fase: "R", componente: "Aprobación", nombre: "Validar la gobernanza y la RACI con los tres vicerrectorados", inicio: "2026-10-16", fin: "2026-11-04", responsables: ["VAFG"], participan: ["VIP", "VV", "DIPA"], nivel: "Transversal", producto: "Capítulo 3 validado", estado: "No iniciado", avance: 0 },
    { id: "R3", fase: "R", componente: "Aprobación", nombre: "Cerrar la matriz normativa y el plan de actualización de instrumentos", inicio: "2026-10-16", fin: "2026-11-06", responsables: ["DIPA"], participan: ["DAC", "CP"], nivel: "Transversal", producto: "Capítulo 4 final", estado: "No iniciado", avance: 0 },
    { id: "R4", fase: "R", componente: "Aprobación", nombre: "Redactar el proyecto de Resolución de Implementación", inicio: "2026-10-20", fin: "2026-11-06", responsables: ["VAFG"], participan: ["DAC", "DIPA"], nivel: "Transversal", producto: "Proyecto de resolución", estado: "No iniciado", avance: 0 },
    { id: "R5", fase: "R", componente: "Aprobación", nombre: "Revisión técnica del Plan", inicio: "2026-11-07", fin: "2026-11-10", responsables: ["CIAPC"], participan: ["DAC", "DPI"], nivel: "Transversal", producto: "Informe de revisión", estado: "No iniciado", avance: 0 },
    { id: "R6", fase: "R", componente: "Aprobación", nombre: "CGA aprueba el Modelo y el Plan y los remite al OCS", inicio: "2026-11-12", fin: "2026-11-14", responsables: ["CGA"], participan: ["VAFG", "Rectorado", "SG"], nivel: "Transversal", producto: "Resolución de la CGA", estado: "No iniciado", avance: 0 },
    { id: "R7", fase: "R", componente: "Aprobación", nombre: "OCS aprueba Modelo, Plan y Resolución de Implementación en la misma sesión", inicio: "2026-11-16", fin: "2026-11-21", responsables: ["OCS"], participan: ["SG"], nivel: "Transversal", producto: "Resolución del OCS", estado: "No iniciado", avance: 0, critica: true },

    // Fase 0 (Tabla 15)
    { id: "F0-01", fase: "F0", componente: "Gobernanza", nombre: "Rector designa la comisión ocasional (Resolución de Despacho)", inicio: "2026-11-16", fin: "2026-11-21", responsables: ["Rectorado"], nivel: "Transversal", producto: "Resolución de Despacho", hito: "H0", estado: "No iniciado", avance: 0, critica: true },
    { id: "F0-02", fase: "F0", componente: "Socialización", nombre: "Certificar y publicar el Modelo 2026 en el portal institucional", inicio: "2026-11-23", fin: "2026-11-28", responsables: ["SG", "DCI"], nivel: "Transversal", producto: "Modelo publicado", hito: "H0", estado: "No iniciado", avance: 0 },
    { id: "F0-03", fase: "F0", componente: "Gobernanza", nombre: "Instalar la comisión ocasional", inicio: "2026-11-23", fin: "2026-11-28", responsables: ["VAFG", "DIPA"], nivel: "Transversal", producto: "Acta de instalación", hito: "H0", estado: "No iniciado", avance: 0 },
    { id: "F0-04", fase: "F0", componente: "Normativa", nombre: "Criterios homogéneos y acuerdos con Posgrado y Educación Continua", inicio: "2026-11-23", fin: "2026-11-28", responsables: ["DIPA", "VIP", "VV"], nivel: "Transversal", producto: "Nota técnica para la CGA", estado: "No iniciado", avance: 0 },
    { id: "F0-05", fase: "F0", componente: "Normativa", nombre: "Validar inventario y prioridades de actualización de instrumentos", inicio: "2026-11-30", fin: "2026-12-05", responsables: ["DIPA", "DAC"], nivel: "Transversal", producto: "Plan de trabajo 2027 de la DIPA", estado: "No iniciado", avance: 0 },
    { id: "F0-06", fase: "F0", componente: "Normativa", nombre: "Borrador de reforma del art. 50 del RFG y de los Lineamientos de seguimiento al sílabo", inicio: "2026-11-30", fin: "2026-12-05", responsables: ["VAFG", "DAC"], nivel: "Grado", producto: "Borrador de reforma", estado: "No iniciado", avance: 0 },
    { id: "F0-07", fase: "F0", componente: "Recursos", nombre: "Registrar las actividades del Plan en el POA 2027 (sin asignación presupuestaria)", inicio: "2026-11-30", fin: "2026-12-05", responsables: ["DPI"], nivel: "Transversal", producto: "Actividades registradas en el POA", hito: "H0", estado: "No iniciado", avance: 0 },
    { id: "F0-08", fase: "F0", componente: "Tecnología", nombre: "Requerimiento funcional del módulo de evidencias del SGA", inicio: "2026-12-07", fin: "2026-12-19", responsables: ["DIPA", "DTIC"], nivel: "Transversal", producto: "Ficha de requerimiento", hito: "H0", estado: "No iniciado", avance: 0 },
    { id: "F0-09", fase: "F0", componente: "Gestión académica", nombre: "Calendario 2027 por ventanas de trabajo", inicio: "2026-12-07", fin: "2026-12-19", responsables: ["DGSA"], nivel: "Transversal", producto: "Calendario 2027", estado: "No iniciado", avance: 0 },
    { id: "F0-10", fase: "F0", componente: "Gobernanza", nombre: "Sesión de la CGA: aprueba criterios homogéneos y verifica H0", inicio: "2026-12-14", fin: "2026-12-19", responsables: ["CGA"], nivel: "Transversal", producto: "Resolución de la CGA", hito: "H0", estado: "No iniciado", avance: 0, critica: true },
    { id: "F0-11", fase: "F0", componente: "Gobernanza", nombre: "Informe de cierre de la Fase 0 y calendario de sesiones 2027", inicio: "2026-12-21", fin: "2026-12-22", responsables: ["DIPA"], nivel: "Transversal", producto: "Informe de cierre", estado: "No iniciado", avance: 0 },

    // Fase 1 (Tablas 16 y 17)
    { id: "F1-01", fase: "F1", componente: "Gobernanza", nombre: "Calendario de sesiones y plan de trabajo 2027 de la comisión", inicio: "2027-01-04", fin: "2027-01-29", responsables: ["VAFG", "DIPA"], nivel: "Transversal", producto: "Acta de sesión", estado: "No iniciado", avance: 0 },
    { id: "F1-02", fase: "F1", componente: "Normativa", nombre: "Aprobar reforma del art. 50 del RFG y Lineamientos de seguimiento al sílabo (instr. 5)", inicio: "2027-01-04", fin: "2027-02-26", responsables: ["VAFG", "DIPA", "DAC"], nivel: "Grado", producto: "Resolución del OCS", hito: "H1", instrumento: "5", estado: "No iniciado", avance: 0, critica: true },
    { id: "F1-03", fase: "F1", componente: "Normativa", nombre: "Lineamiento de Gestión Curricular por Competencias para Grado (instr. 2a)", inicio: "2027-01-04", fin: "2027-02-26", responsables: ["DIPA"], participan: ["VAFG", "CGA"], nivel: "Grado", producto: "Lineamiento aprobado por la CGA", hito: "H1", instrumento: "2a", estado: "No iniciado", avance: 0, critica: true },
    { id: "F1-04", fase: "F1", componente: "Currículo", nombre: "Formato del Plan de Evaluación del Logro de Competencias y mapa de competencias", inicio: "2027-01-04", fin: "2027-02-26", responsables: ["DIPA"], nivel: "Grado", producto: "Formatos institucionales", estado: "No iniciado", avance: 0 },
    { id: "F1-05", fase: "F1", componente: "Capacidades", nombre: "Formación inicial de autoridades, Decanos y Directores", inicio: "2027-01-11", fin: "2027-02-26", responsables: ["DEPA"], nivel: "Transversal", producto: "Plan de mejora con dictamen simulado", estado: "No iniciado", avance: 0 },
    { id: "F1-06", fase: "F1", componente: "Currículo", nombre: "Convocatoria a carreras y programas candidatos al piloto", inicio: "2027-04-01", fin: "2027-04-30", responsables: ["DIPA"], nivel: "Transversal", producto: "Convocatoria", estado: "No iniciado", avance: 0 },
    { id: "F1-07", fase: "F1", componente: "Tecnología", nombre: "Desarrollar y probar el módulo de evidencias del SGA", inicio: "2027-04-01", fin: "2027-07-31", responsables: ["DTIC", "DIPA"], nivel: "Transversal", producto: "Informe de pruebas y conformidad de la DIPA", hito: "H1", estado: "No iniciado", avance: 0, critica: true },
    { id: "F1-08", fase: "F1", componente: "Currículo", nombre: "Mapas de competencias y Planes de Evaluación de candidatos", inicio: "2027-04-05", fin: "2027-06-30", responsables: ["DC", "Coord. Programa"], participan: ["DIPA"], nivel: "Grado", producto: "Mapas y planes aprobados (Consejo Directivo y CGA)", estado: "No iniciado", avance: 0 },
    { id: "F1-09", fase: "F1", componente: "Instrumentos", nombre: "Actualizar instrumentos académicos de la DIPA (bloque abril–junio)", inicio: "2027-04-01", fin: "2027-06-30", responsables: ["DIPA", "CP"], participan: ["DEPA"], nivel: "Grado", producto: "Informe consolidado de instrumentos", estado: "No iniciado", avance: 0 },
    { id: "F1-10", fase: "F1", componente: "Normativa", nombre: "Protocolo Institucional de Gestión de Evidencias y Mejora Continua (instr. 6)", inicio: "2027-04-01", fin: "2027-06-30", responsables: ["DIPA", "DAC"], nivel: "Transversal", producto: "Protocolo aprobado por el OCS", hito: "H1", instrumento: "6", estado: "No iniciado", avance: 0, critica: true },
    { id: "F1-11", fase: "F1", componente: "Normativa", nombre: "Lineamiento de Gestión Curricular por Competencias para Posgrado (instr. 2b)", inicio: "2027-04-01", fin: "2027-06-30", responsables: ["VIP", "FP"], participan: ["DIPA"], nivel: "Posgrado", producto: "Lineamiento aprobado por la CGA", hito: "H1", instrumento: "2b", estado: "No iniciado", avance: 0, critica: true },
    { id: "F1-12", fase: "F1", componente: "Normativa", nombre: "Política de Educación Continua y microcredenciales (instr. 8)", inicio: "2027-04-01", fin: "2027-06-30", responsables: ["EFE", "FP"], nivel: "EC", producto: "Política aprobada", instrumento: "8", estado: "No iniciado", avance: 0 },
    { id: "F1-13", fase: "F1", componente: "Calidad", nombre: "Procedimiento SGC de seguimiento y evaluación del Modelo (instr. 14)", inicio: "2027-04-01", fin: "2027-06-30", responsables: ["DIPA", "DAC"], nivel: "Transversal", producto: "Procedimiento registrado", instrumento: "14", estado: "No iniciado", avance: 0 },
    { id: "F1-14", fase: "F1", componente: "Datos", nombre: "Gobernanza de datos en los protocolos y validación de Seguridad Informática (instr. 12)", inicio: "2027-05-01", fin: "2027-07-31", responsables: ["DSI"], nivel: "Transversal", producto: "Módulo validado por la DSI", instrumento: "12", estado: "No iniciado", avance: 0 },
    { id: "F1-15", fase: "F1", componente: "Evaluación", nombre: "Preparar TA1, TA2, cuestionarios de prácticas y rúbricas de los pilotos", inicio: "2027-04-15", fin: "2027-07-31", responsables: ["Comités Eje 2", "DC"], nivel: "Grado", producto: "TA1, TA2 y rúbricas aprobados por el Consejo Directivo", hito: "H1", estado: "No iniciado", avance: 0 },
    { id: "F1-16", fase: "F1", componente: "Capacidades", nombre: "Formación de Directores, comités del Eje 2 y equipos técnicos", inicio: "2027-04-01", fin: "2027-07-31", responsables: ["DEPA"], nivel: "Transversal", producto: "Mapas, TA ensamblados, rúbricas validadas", estado: "No iniciado", avance: 0 },
    { id: "F1-17", fase: "F1", componente: "Gobernanza", nombre: "CGA selecciona carreras y programas piloto", inicio: "2027-06-01", fin: "2027-06-30", responsables: ["CGA", "DIPA"], nivel: "Transversal", producto: "Pilotos designados (informe de condiciones)", estado: "No iniciado", avance: 0, critica: true },
    { id: "F1-18", fase: "F1", componente: "Indicadores", nombre: "Fichas técnicas de los 16 indicadores y línea base", inicio: "2027-05-01", fin: "2027-07-31", responsables: ["DIPA", "DAC", "CEE"], nivel: "Transversal", producto: "Marco de indicadores del Plan", estado: "No iniciado", avance: 0 },
    { id: "F1-19", fase: "F1", componente: "Recursos", nombre: "Distributivo del 2S-2027 con horas de pilotaje", inicio: "2027-07-01", fin: "2027-07-31", responsables: ["FG", "DGSA"], nivel: "Grado", producto: "Distributivo aprobado", estado: "No iniciado", avance: 0 },
    { id: "F1-20", fase: "F1", componente: "Recursos", nombre: "Seguimiento de las actividades registradas en el POA 2027", inicio: "2027-07-01", fin: "2027-07-31", responsables: ["DPI"], nivel: "Transversal", producto: "Reporte de seguimiento", estado: "No iniciado", avance: 0 },
    { id: "F1-21", fase: "F1", componente: "Capacidades", nombre: "Inducción de docentes piloto y creación de aulas en Moodle", inicio: "2027-08-10", fin: "2027-08-22", responsables: ["DEPA", "DOTL"], nivel: "Grado", producto: "Docentes piloto formados; aulas listas", hito: "H1", estado: "No iniciado", avance: 0 },

    // Fase 2 (Tablas 19 y 20)
    { id: "F2-01", fase: "F2", componente: "Piloto", nombre: "Arranque: socialización del plan de evaluación y verificación de aulas", inicio: "2027-08-23", fin: "2027-09-05", responsables: ["DC", "DIPA"], nivel: "Grado", producto: "Plan socializado", estado: "No iniciado", avance: 0 },
    { id: "F2-02", fase: "F2", componente: "Piloto", nombre: "Primer parcial: evidencias del Eje 1 y aplicación de TA1 y TA2", inicio: "2027-09-06", fin: "2027-10-10", responsables: ["Comités Eje 2", "DC"], nivel: "Grado", producto: "Resultados TA1/TA2", estado: "No iniciado", avance: 0 },
    { id: "F2-03", fase: "F2", componente: "Gobernanza", nombre: "Corte de seguimiento: comisión ocasional revisa incidencias", inicio: "2027-10-11", fin: "2027-10-17", responsables: ["Comisión ocasional"], nivel: "Transversal", producto: "Acta y bitácora de incidencias", estado: "No iniciado", avance: 0 },
    { id: "F2-04", fase: "F2", componente: "Piloto", nombre: "Segundo parcial: cuestionarios al tutor externo y proyectos integradores", inicio: "2027-10-18", fin: "2027-11-28", responsables: ["DC", "FV"], nivel: "Grado", producto: "Cuestionarios y rúbricas aplicados", estado: "No iniciado", avance: 0 },
    { id: "F2-05", fase: "F2", componente: "Piloto", nombre: "Exámenes y consolidación de resultados del Eje 2 por competencia", inicio: "2027-11-29", fin: "2027-12-22", responsables: ["DC", "DIPA"], nivel: "Grado", producto: "Resultados consolidados", hito: "H2", estado: "No iniciado", avance: 0 },
    { id: "F2-06", fase: "F2", componente: "Piloto", nombre: "Pilotos de Posgrado: hitos del Eje 2 en módulos integradores", inicio: "2027-08-01", fin: "2028-01-31", responsables: ["FP", "Coord. Programa"], nivel: "Posgrado", producto: "Informe de Coordinadores de Programa", estado: "No iniciado", avance: 0 },
    { id: "F2-07", fase: "F2", componente: "Piloto", nombre: "Ruta de microcredencial con evidencia de desempeño", inicio: "2027-08-23", fin: "2027-12-22", responsables: ["EFE"], nivel: "EC", producto: "Informe de la EFE", estado: "No iniciado", avance: 0 },
    { id: "F2-08", fase: "F2", componente: "Normativa", nombre: "Protocolo de Analítica Educativa y Alertas Tempranas (instr. 11)", inicio: "2027-07-01", fin: "2027-12-31", responsables: ["DIPA", "CEE", "DTIC"], nivel: "Transversal", producto: "Protocolo aprobado", instrumento: "11", estado: "No iniciado", avance: 0 },
    { id: "F2-09", fase: "F2", componente: "Evaluación", nombre: "Informe Institucional de Evaluación del Pilotaje (8 dimensiones)", inicio: "2028-01-04", fin: "2028-02-28", responsables: ["DIPA"], participan: ["CEE", "CGA"], nivel: "Transversal", producto: "Informe de pilotaje y resolución de la CGA", hito: "H3", estado: "No iniciado", avance: 0, critica: true },

    // Fase 3 (Tabla 22)
    { id: "F3-01", fase: "F3", componente: "Instrumentos", nombre: "Ajuste posterior al piloto: instrumentos, Protocolo y ruta formativa", inicio: "2028-01-04", fin: "2028-02-28", responsables: ["DIPA", "CGA"], nivel: "Transversal", producto: "Instrumentos ajustados", estado: "No iniciado", avance: 0 },
    { id: "F3-02", fase: "F3", componente: "Capacidades", nombre: "Formación de docentes de las olas 2028", inicio: "2028-02-01", fin: "2028-08-20", responsables: ["DEPA"], nivel: "Transversal", producto: "Sílabos alineados", estado: "No iniciado", avance: 0 },
    { id: "F3-03", fase: "F3", componente: "Escalamiento", nombre: "Ola 1: carreras con condiciones habilitantes y programas de Posgrado con cohortes nuevas", inicio: "2028-04-01", fin: "2028-08-31", responsables: ["CGA", "FG", "FP"], nivel: "Grado", producto: "Carreras incorporadas", hito: "H4", estado: "No iniciado", avance: 0 },
    { id: "F3-04", fase: "F3", componente: "Escalamiento", nombre: "Evaluación de la ola 1", inicio: "2028-08-01", fin: "2028-08-31", responsables: ["Comisión ocasional"], nivel: "Transversal", producto: "Informe breve de la ola 1", hito: "H4", estado: "No iniciado", avance: 0, critica: true },
    { id: "F3-05", fase: "F3", componente: "Escalamiento", nombre: "Ola 2: carreras restantes, extensión y centros de apoyo", inicio: "2028-08-23", fin: "2028-12-22", responsables: ["CGA", "FG"], nivel: "Grado", producto: "Cobertura completa de Grado", hito: "H5", estado: "No iniciado", avance: 0 },
    { id: "F3-06", fase: "F3", componente: "Gobernanza", nombre: "Informe anual del Modelo al OCS", inicio: "2028-12-01", fin: "2029-01-31", responsables: ["DIPA", "CGA"], nivel: "Transversal", producto: "Informe anual", hito: "H5", estado: "No iniciado", avance: 0, critica: true },
    { id: "F3-07", fase: "F3", componente: "Normativa", nombre: "Reforma del RFP y del RPD (instr. 7)", inicio: "2028-01-04", fin: "2028-12-15", responsables: ["VIP", "FP"], nivel: "Posgrado", producto: "Resolución del OCS", instrumento: "7", estado: "No iniciado", avance: 0 },
    { id: "F3-08", fase: "F3", componente: "Normativa", nombre: "Reforma del RPT y Protocolo de titulación: proyecto integrador (instr. 9)", inicio: "2028-01-04", fin: "2028-12-15", responsables: ["VAFG", "FP"], nivel: "Grado", producto: "Resolución del OCS", instrumento: "9", estado: "No iniciado", avance: 0 },
    { id: "F3-09", fase: "F3", componente: "Normativa", nombre: "Reforma del ISSG: valoración de competencias por graduados y empleadores (instr. 13)", inicio: "2028-01-04", fin: "2028-12-15", responsables: ["FV"], nivel: "Transversal", producto: "Instructivo reformado", instrumento: "13", estado: "No iniciado", avance: 0 },
    { id: "F3-10", fase: "F3", componente: "Normativa", nombre: "Reforma del RFI: investigación formativa (instr. 15)", inicio: "2028-01-04", fin: "2028-12-15", responsables: ["VIP", "FI"], nivel: "Transversal", producto: "Resolución del OCS", instrumento: "15", estado: "No iniciado", avance: 0 },
    { id: "F3-11", fase: "F3", componente: "Normativa", nombre: "Reforma del RFV: vinculación y servicio comunitario (instr. 16)", inicio: "2028-01-04", fin: "2028-12-15", responsables: ["VV", "FV"], nivel: "Transversal", producto: "Resolución del OCS", instrumento: "16", estado: "No iniciado", avance: 0 },
    { id: "F3-12", fase: "F3", componente: "Instrumentos", nombre: "Manual de rúbricas por competencia y demás instrumentos de la Fase 3", inicio: "2028-03-01", fin: "2028-12-15", responsables: ["DIPA", "CP"], nivel: "Transversal", producto: "Manual aprobado", estado: "No iniciado", avance: 0 },

    // Fase 4 (Tabla 23)
    { id: "F4-01", fase: "F4", componente: "Currículo", nombre: "Dictámenes del Eje 2 alimentan los ajustes curriculares", inicio: "2029-01-04", fin: "2029-12-20", responsables: ["FG", "DIPA"], nivel: "Grado", producto: "Ajustes curriculares documentados", estado: "No iniciado", avance: 0 },
    { id: "F4-02", fase: "F4", componente: "Calidad", nombre: "Resultados del Modelo en la autoevaluación y planes de mejora", inicio: "2029-01-04", fin: "2029-12-20", responsables: ["DAC", "CGC"], nivel: "Transversal", producto: "Informes de autoevaluación", hito: "H6", estado: "No iniciado", avance: 0 },
    { id: "F4-03", fase: "F4", componente: "Recursos", nombre: "Brechas del Modelo como líneas del POA 2030 y seguimiento del PEDI", inicio: "2029-06-01", fin: "2029-12-20", responsables: ["DPI"], nivel: "Transversal", producto: "POA 2030", hito: "H6", estado: "No iniciado", avance: 0 },
    { id: "F4-04", fase: "F4", componente: "Capacidades", nombre: "Rutas formativas según las brechas observadas", inicio: "2029-01-04", fin: "2029-12-20", responsables: ["DEPA"], nivel: "Transversal", producto: "Rutas formativas", estado: "No iniciado", avance: 0 },
    { id: "F4-05", fase: "F4", componente: "Capacidades", nombre: "Indicadores del Modelo propuestos para el REID (tras validarlos)", inicio: "2029-04-01", fin: "2029-12-20", responsables: ["DEPA"], nivel: "Transversal", producto: "Propuesta de indicadores", estado: "No iniciado", avance: 0 },
    { id: "F4-06", fase: "F4", componente: "Pertinencia", nombre: "Evidencia de graduados y empleadores en el análisis de pertinencia", inicio: "2029-01-04", fin: "2029-12-20", responsables: ["FV"], nivel: "Transversal", producto: "Informe de pertinencia", estado: "No iniciado", avance: 0 },
    { id: "F4-07", fase: "F4", componente: "Tecnología", nombre: "Tablero institucional con perfiles de acceso", inicio: "2029-01-04", fin: "2029-12-20", responsables: ["DTIC", "CEE"], nivel: "Transversal", producto: "Tablero en producción", estado: "No iniciado", avance: 0 },

    // Fase 5
    { id: "F5-01", fase: "F5", componente: "Evaluación", nombre: "Informe de Evaluación Integral del Modelo 2027–2030", inicio: "2030-01-04", fin: "2030-10-30", responsables: ["DIPA"], participan: ["CEE", "DAC"], nivel: "Transversal", producto: "Informe de evaluación integral", hito: "H7", estado: "No iniciado", avance: 0 },
    { id: "F5-02", fase: "F5", componente: "Gobernanza", nombre: "CGA revisa y remite; OCS decide continuidad y ajustes", inicio: "2030-11-02", fin: "2030-12-18", responsables: ["CGA", "OCS"], nivel: "Transversal", producto: "Resolución del OCS", hito: "H7", estado: "No iniciado", avance: 0, critica: true }
  ],

  // Tabla 9. etapa: Por iniciar | Borrador | Revisión técnica | En CGA | En OCS | Aprobado
  instrumentos: [
    { id: "1",  nombre: "Resolución de Implementación 2027–2030", accion: "Crear", nucleo: true, ruta: "VAFG con DIPA → Rectorado → CGA → OCS", plazo: "2026-11-21", nivel: "Transversal", etapa: "Por iniciar" },
    { id: "2a", nombre: "Lineamiento de Gestión Curricular por Competencias para Grado", accion: "Actualizar", nucleo: true, ruta: "DIPA (GPC) → VAFG → CGA", plazo: "2027-02-26", nivel: "Grado", etapa: "Por iniciar" },
    { id: "2b", nombre: "Lineamiento de Gestión Curricular por Competencias para Posgrado", accion: "Crear", nucleo: true, ruta: "FP con EP y DIPA → VIP → CGA", plazo: "2027-06-30", nivel: "Posgrado", etapa: "Por iniciar" },
    { id: "3",  nombre: "Instrumentos microcurriculares", accion: "Actualizar", nucleo: false, ruta: "DIPA y CP; DEPA → CIAPC → CGA", plazo: "2027-06-30", nivel: "Grado", etapa: "Por iniciar" },
    { id: "4",  nombre: "Evaluación por competencias (Eje 1 y Eje 2): armonizar guías", accion: "Actualizar", nucleo: false, ruta: "DIPA → CGA → OCS", plazo: "2027-12-15", nivel: "Grado", etapa: "Por iniciar" },
    { id: "5",  nombre: "Reforma del art. 50 del RFG y Lineamientos de seguimiento al sílabo", accion: "Reformar", nucleo: true, ruta: "VAFG con DIPA → DAC → CGA → OCS", plazo: "2027-02-26", nivel: "Grado", etapa: "Por iniciar" },
    { id: "6",  nombre: "Protocolo Institucional de Gestión de Evidencias y Mejora Continua", accion: "Crear", nucleo: true, ruta: "DIPA → DAC → CGA → OCS", plazo: "2027-06-30", nivel: "Transversal", etapa: "Por iniciar" },
    { id: "7",  nombre: "Reforma del RFP y del RPD", accion: "Reformar", nucleo: false, ruta: "VIP con FP → DAC → CGA → OCS", plazo: "2028-12-15", nivel: "Posgrado", etapa: "Por iniciar" },
    { id: "8",  nombre: "Política de Educación Continua y microcredenciales", accion: "Crear", nucleo: false, ruta: "EFE con FP → DAC → CGA → OCS", plazo: "2027-06-30", nivel: "EC", etapa: "Por iniciar" },
    { id: "9",  nombre: "Titulación como evidencia integradora (RPT y Protocolo)", accion: "Reformar", nucleo: false, ruta: "VAFG; FP → DAC → CGA → OCS", plazo: "2028-12-15", nivel: "Grado", etapa: "Por iniciar" },
    { id: "10", nombre: "Uso de IA en docencia y evaluación", accion: "Articular", nucleo: false, ruta: "DIPA, DEPA (sin aprobación nueva)", plazo: "2027-12-15", nivel: "Transversal", etapa: "Por iniciar" },
    { id: "11", nombre: "Protocolo de Analítica Educativa y Alertas Tempranas", accion: "Crear", nucleo: false, ruta: "DIPA con CEE, DTIC y Bienestar → DAC → Rector u OCS", plazo: "2027-12-31", nivel: "Transversal", etapa: "Por iniciar" },
    { id: "12", nombre: "Gobernanza de datos educativos", accion: "Articular", nucleo: false, ruta: "DSI (sin aprobación nueva)", plazo: "2027-06-30", nivel: "Transversal", etapa: "Por iniciar" },
    { id: "13", nombre: "Seguimiento a graduados y empleadores (ISSG)", accion: "Reformar", nucleo: false, ruta: "FV → DAC → Rector u OCS", plazo: "2028-12-15", nivel: "Transversal", etapa: "Por iniciar" },
    { id: "14", nombre: "Procedimiento de seguimiento y evaluación del Modelo (SGC)", accion: "Crear", nucleo: false, ruta: "DIPA con DAC → DAC registra; CGC conoce", plazo: "2027-06-30", nivel: "Transversal", etapa: "Por iniciar" },
    { id: "15", nombre: "Investigación formativa (RFI)", accion: "Reformar", nucleo: false, ruta: "VIP con FI → DAC → CGA → OCS", plazo: "2028-12-15", nivel: "Transversal", etapa: "Por iniciar" },
    { id: "16", nombre: "Vinculación con la sociedad (RFV)", accion: "Reformar", nucleo: false, ruta: "VV con FV → DAC → CGA → OCS", plazo: "2028-12-15", nivel: "Transversal", etapa: "Por iniciar" }
  ],

  // Tabla 27. mediciones: [{ periodo: "2S-2027", valor: 0 }] — vacías hasta la línea base (julio 2027)
  indicadores: [
    { id: "I01", familia: "Implementación", nombre: "Cobertura del Modelo", formula: "Carreras y programas incorporados / total vigentes × 100", fuente: "Resoluciones de la CGA", frecuencia: "Semestral", responsable: "DIPA", unidad: "%", meta: null, mediciones: [] },
    { id: "I02", familia: "Implementación", nombre: "Avance del núcleo normativo", formula: "Instrumentos aprobados / programados al hito × 100", fuente: "Matriz de instrumentos (Tabla 9)", frecuencia: "Por hito", responsable: "DAC", unidad: "%", meta: 100, calculado: "nucleo", mediciones: [] },
    { id: "I03", familia: "Implementación", nombre: "Hitos cumplidos a tiempo", formula: "Hitos cumplidos en fecha / hitos vencidos × 100", fuente: "Actas de la comisión ocasional", frecuencia: "Por hito", responsable: "DIPA", unidad: "%", meta: 100, calculado: "hitos", mediciones: [] },
    { id: "I04", familia: "Curricular", nombre: "Carreras con mapa y plan de evaluación aprobados", formula: "Carreras con ambos / carreras incorporadas × 100", fuente: "Resoluciones de la CGA", frecuencia: "Semestral", responsable: "DIPA", unidad: "%", meta: 100, mediciones: [] },
    { id: "I05", familia: "Curricular", nombre: "Asignaturas sin aporte a competencias", formula: "Asignaturas sin correspondencia / asignaturas de la malla × 100", fuente: "Matriz de articulación", frecuencia: "Anual", responsable: "DC", unidad: "%", meta: null, sentido: "bajar", mediciones: [] },
    { id: "I06", familia: "Curricular", nombre: "Actividades vinculadas a RAA", formula: "Actividades del SGA con RAA / actividades registradas × 100", fuente: "SGA", frecuencia: "Por periodo", responsable: "DIPA, DTIC", unidad: "%", meta: null, mediciones: [] },
    { id: "I07", familia: "Aprendizaje (Eje 2)", nombre: "Logro de la cohorte por competencia e instrumento", formula: "Según la Guía de Evaluación Integral", fuente: "TA1, TA2, prácticas, proyecto integrador", frecuencia: "Por aplicación", responsable: "DC", unidad: "%", meta: null, mediciones: [] },
    { id: "I08", familia: "Aprendizaje (Eje 2)", nombre: "Metas alcanzadas", formula: "Competencias con meta alcanzada / evaluadas × 100", fuente: "Dictámenes por carrera", frecuencia: "Anual", responsable: "DIPA", unidad: "%", meta: null, mediciones: [] },
    { id: "I09", familia: "Aprendizaje (Eje 2)", nombre: "Progresión TA1 → TA2", formula: "Según la Guía del Test de Aprendizaje", fuente: "Test de Aprendizaje", frecuencia: "Anual", responsable: "CEE", unidad: "", meta: null, mediciones: [] },
    { id: "I10", familia: "Trayectoria", nombre: "Permanencia y deserción", formula: "Según los reportes de permanencia y deserción", fuente: "SGA", frecuencia: "Por periodo", responsable: "DIPA", unidad: "%", meta: null, mediciones: [] },
    { id: "I11", familia: "Trayectoria", nombre: "Titulación", formula: "Según el Reporte de tasa de titulación", fuente: "SGA", frecuencia: "Anual", responsable: "DIPA", unidad: "%", meta: null, mediciones: [] },
    { id: "I12", familia: "Mejora", nombre: "Cierre de acciones de mejora", formula: "Acciones cerradas con evidencia / acciones definidas × 100", fuente: "Registro de acciones", frecuencia: "Anual", responsable: "DAC", unidad: "%", meta: null, mediciones: [] },
    { id: "I13", familia: "Capacidades", nombre: "Docentes formados en el Modelo", formula: "Docentes que aprobaron la ruta / docentes de carreras incorporadas × 100", fuente: "DEPA", frecuencia: "Semestral", responsable: "DEPA", unidad: "%", meta: null, mediciones: [] },
    { id: "I14", familia: "Capacidades", nombre: "Aplicación observable", formula: "Docentes con sílabo y evaluación alineados / revisados × 100", fuente: "Seguimiento al sílabo", frecuencia: "Por periodo", responsable: "DC", unidad: "%", meta: null, mediciones: [] },
    { id: "I15", familia: "Pertinencia externa", nombre: "Valoración de graduados y empleadores", formula: "Según los instrumentos del ISSG reformado", fuente: "Gestión de Graduados", frecuencia: "Anual", responsable: "FV", unidad: "", meta: null, mediciones: [] },
    { id: "I16", familia: "Tecnología y datos", nombre: "Cobertura de registro de evidencias", formula: "Evidencias del Eje 2 registradas / previstas × 100", fuente: "Módulo del SGA", frecuencia: "Por periodo", responsable: "DTIC, DIPA", unidad: "%", meta: null, mediciones: [] }
  ],

  // Tabla 28. prob/impacto: 1 Baja - 2 Media - 3 Alta. estado: Activo | Mitigado | Materializado | Cerrado
  riesgos: [
    { id: "RG01", nombre: "El núcleo normativo no se aprueba antes de agosto de 2027", prob: 2, impacto: 3, medida: "Fase 0; núcleo reducido a 4 instrumentos; aprobaciones en enero–febrero, fuera de marzo.", responsable: "VAFG, DAC", estado: "Activo" },
    { id: "RG02", nombre: "Sobrecarga de las unidades por ejecutar el Plan sin presupuesto", prob: 3, impacto: 3, medida: "Capacidad instalada; prioridad al núcleo y al piloto; escalamiento según capacidad.", responsable: "Comisión, DPI", estado: "Activo" },
    { id: "RG03", nombre: "Contradicción entre guías y reglamentos (Test de Aprendizaje)", prob: 3, impacto: 2, medida: "Reforma del art. 50 del RFG y Lineamientos de seguimiento al sílabo en enero–febrero 2027.", responsable: "VAFG, DIPA", estado: "Activo" },
    { id: "RG04", nombre: "Vocabulario y escalas distintos entre unidades", prob: 3, impacto: 2, medida: "Criterios homogéneos aprobados por la CGA en la Fase 0.", responsable: "DIPA, CGA", estado: "Activo" },
    { id: "RG05", nombre: "El Eje 2 se usa como segunda calificación", prob: 2, impacto: 3, medida: "Guías y formación; resultados agregados por cohorte.", responsable: "DIPA, DEPA", estado: "Activo" },
    { id: "RG06", nombre: "Sobrecarga docente y trabajo duplicado", prob: 3, impacto: 2, medida: "Horas en el distributivo; registro único en el SGA; formatos simples.", responsable: "FG, DTIC", estado: "Activo" },
    { id: "RG07", nombre: "Escalar antes de corregir lo observado en el piloto", prob: 2, impacto: 3, medida: "El informe de pilotaje es condición de la ola 1 (H3).", responsable: "CGA", estado: "Activo" },
    { id: "RG08", nombre: "Aplicar la lógica de Grado a Posgrado", prob: 2, impacto: 2, medida: "Lineamiento para Posgrado; pilotos de Posgrado propios.", responsable: "FP", estado: "Activo" },
    { id: "RG09", nombre: "Fragmentación de Educación Continua entre dos unidades", prob: 2, impacto: 2, medida: "Política única de Educación Continua y microcredenciales.", responsable: "VV, VIP", estado: "Activo" },
    { id: "RG10", nombre: "Baja validez o confiabilidad de los instrumentos", prob: 2, impacto: 3, medida: "Tabla de especificaciones, expertos revisores, análisis de ítems, calibración de rúbricas.", responsable: "Comités Eje 2, CEE", estado: "Activo" },
    { id: "RG11", nombre: "Uso indebido de datos personales", prob: 1, impacto: 3, medida: "Perfiles de acceso; validación de Seguridad Informática; supervisión humana.", responsable: "DTIC, DSI", estado: "Activo" },
    { id: "RG12", nombre: "Capacitación sin cambio en la práctica", prob: 2, impacto: 2, medida: "Formación validada con productos reales; seguimiento al sílabo.", responsable: "DEPA, DC", estado: "Activo" },
    { id: "RG13", nombre: "Indicadores sin decisiones", prob: 2, impacto: 2, medida: "Cada familia con responsable de decisión; acciones de mejora obligatorias.", responsable: "Comisión, DAC", estado: "Activo" }
  ],

  // Tabla 18 y Fase 3. Las cifras se completan cuando la CGA designe pilotos y olas.
  cobertura: {
    universo: { Grado: null, Posgrado: null, EC: null },
    etapas: [
      { id: "Piloto", periodo: "2S-2027", meta: { Grado: 4, Posgrado: 2, EC: 1 }, real: { Grado: 0, Posgrado: 0, EC: 0 } },
      { id: "Ola 1",  periodo: "1S-2028", meta: { Grado: null, Posgrado: null, EC: null }, real: { Grado: 0, Posgrado: 0, EC: 0 } },
      { id: "Ola 2",  periodo: "2S-2028", meta: { Grado: null, Posgrado: null, EC: null }, real: { Grado: 0, Posgrado: 0, EC: 0 } }
    ]
  },

  // Fotos del avance global que se agregan al exportar desde el tablero (alimentan la curva S real)
  historial: [],

  siglas: {
    CGA: "Comisión de Gestión Académica", CGC: "Comisión de Gestión de la Calidad", OCS: "Órgano Colegiado Superior",
    VAFG: "Vicerrectorado Académico de Formación de Grado", VIP: "Vicerrectorado de Investigación y Posgrado", VV: "Vicerrectorado de Vinculación",
    DIPA: "Dirección de Innovación de Procesos Académicos", DAC: "Dirección de Aseguramiento de la Calidad", DPI: "Dirección de Planificación Institucional",
    DTIC: "Dirección de Tecnología de la Información y Comunicaciones", DSI: "Dirección de Seguridad Informática", DOTL: "Dirección de Operaciones Tecnológicas y de Laboratorios",
    CEE: "Centro de Estudios Estadísticos", DEPA: "Dirección de Evaluación y Perfeccionamiento Académico", DGSA: "Dirección de Gestión y Servicios Académicos",
    DCI: "Dirección de Comunicación Institucional", SG: "Secretaría General", FG: "Facultades de Grado", FP: "Facultad de Posgrados", FI: "Facultad de Investigación",
    FV: "Facultad de Vinculación", EFE: "Escuela de Formación y Emprendimiento", DC: "Direcciones de Carrera", CP: "Comisión Pedagógica de la DIPA",
    CIAPC: "Comité de Innovación Académica, Pedagógica y Curricular"
  }
};
