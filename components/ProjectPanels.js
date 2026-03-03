"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Bot, Calendar, Database,
    MessageCircle, FileText, BarChart3,
    CheckCircle2, Users, TrendingUp,
} from "lucide-react";

/* ── Panel 1: FLEX & Chatbot ── */
function PanelFlex() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card p-6 md:p-8 overflow-hidden"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-accent-blue" />
                </div>
                <span className="font-mono text-xs text-accent-blue tracking-wider">
                    FLEX_CHATBOT.v2
                </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                FLEX & Asistentes Conversacionales
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-5">
                Digitalización del proceso de idiomas institucional. Desarrollo de un
                chatbot 24/7 que resuelve consultas de inscripción, niveles y horarios.
                Integración con el ecosistema de gestión de alumnos. Más de{" "}
                <span className="text-text-primary font-medium">1,200 usuarios activos</span>.
            </p>

            {/* Mini chat preview */}
            <div className="bg-void/50 rounded-xl border border-border p-4">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green live-dot" />
                    <span className="text-[10px] font-mono text-text-muted">FLEX Assistant · en línea</span>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-end">
                        <span className="px-3 py-1.5 bg-accent-blue text-white text-xs rounded-2xl rounded-br-md">
                            ¿Cuándo inician los cursos?
                        </span>
                    </div>
                    <div className="flex justify-start">
                        <span className="px-3 py-1.5 bg-surface border border-border text-text-primary text-xs rounded-2xl rounded-bl-md">
                            ¡Hola! Los cursos inician el 15 de Marzo. ¿Te inscribo? 📋
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
                {["Vue.js", "PHP", "MySQL", "REST API"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

/* ── Panel 2: Suite Institucional ── */
function PanelSuite() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card p-6 md:p-8 overflow-hidden"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/30 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-accent-green" />
                </div>
                <span className="font-mono text-xs text-accent-green tracking-wider">
                    PLANEACION_SYS.v3
                </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                Arquitectura Institucional (Suite 2026)
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-5">
                Desarrollo de sistemas robustos interconectados: POA, Plan de Desarrollo
                e Informe de Labores. Una sola plataforma para la transparencia y gestión
                de datos complejos con trazabilidad presupuestal.
            </p>

            {/* Mini stack visualization */}
            <div className="space-y-2">
                {[
                    { label: "POA_26", icon: Calendar, status: "ACTIVO", color: "accent-green" },
                    { label: "PD_26", icon: FileText, status: "EN PROGRESO", color: "accent-blue" },
                    { label: "INF_LAB_26", icon: BarChart3, status: "PLANIFICACIÓN", color: "text-muted" },
                ].map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center justify-between px-3 py-2.5 bg-void/50 border border-border rounded-lg"
                    >
                        <div className="flex items-center gap-2">
                            <item.icon className={`w-3.5 h-3.5 text-${item.color}`} />
                            <span className="font-mono text-xs text-text-primary">{item.label}</span>
                        </div>
                        <span className={`text-[10px] font-mono text-${item.color} tracking-wider`}>
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
                {["Vue.js", "PHP", "MySQL", "Arquitectura"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

/* ── Panel 3: Database module ── */
function PanelDB() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card p-6 md:p-8 overflow-hidden"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/30 flex items-center justify-center">
                    <Database className="w-4 h-4 text-accent-green" />
                </div>
                <span className="font-mono text-xs text-accent-green tracking-wider">
                    DB_MODULE.v4
                </span>
                <span className="ml-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green live-dot" />
                    <span className="text-[10px] font-mono text-accent-green">LIVE</span>
                </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                Módulo de Base de Datos Dinámico
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-5">
                Creación y Llenado de Tablas: Un único apartado centralizado.
                Cero redundancia. CRUD automatizado para cualquier entidad institucional.
            </p>

            {/* Terminal preview */}
            <div className="bg-void/80 rounded-xl border border-border overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-surface/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="text-[10px] font-mono text-text-muted ml-2">mysql</span>
                </div>
                <div className="p-3 font-mono text-xs leading-relaxed">
                    <p className="text-text-muted">mysql&gt; <span className="text-text-primary">CREATE TABLE flex_alumnos (</span></p>
                    <p className="text-text-primary pl-4">id INT PRIMARY KEY,</p>
                    <p className="text-text-primary pl-4">nombre VARCHAR(120)</p>
                    <p className="text-text-primary">);</p>
                    <p className="text-accent-green mt-1">-- ✓ Query OK (0.003 sec)</p>
                    <div className="flex items-center mt-2">
                        <span className="text-text-muted">mysql&gt;&nbsp;</span>
                        <span className="w-2 h-3.5 bg-accent-green cursor-blink" />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
                {["PHP", "MySQL", "CRUD", "Automatización"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

/* ── Export all panels ── */
export { PanelFlex, PanelSuite, PanelDB };
