"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Bot, Calendar, PlaySquare, Monitor, FileText, BarChart3 } from "lucide-react";

export function PanelFlex() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card overflow-hidden group"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                            <Bot className="w-4 h-4 text-accent-blue" />
                        </div>
                        <span className="font-mono text-xs text-accent-blue tracking-wider">
                            FLEX & IDIOMAS
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                        Plataforma Integral FLEX
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                        Digitalización completa de inscripciones a cursos de idiomas, automatizando
                        la asignación de niveles, validación de cupos y horarios.
                        Más de <span className="text-text-primary font-medium">miles de usuarios</span> interactuando
                        con una interfaz fluida e intuitiva.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Vue.js", "PHP", "Docker"].map((t) => (
                            <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="relative h-64 lg:h-auto w-full bg-void/50 border-t lg:border-t-0 lg:border-l border-border/50 overflow-hidden">
                    <Image
                        src="/images/flex.png"
                        alt="Plataforma FLEX Cursos de Idiomas"
                        fill
                        className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                    />
                </div>
            </div>
        </motion.div>
    );
}

export function PanelSuite() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card p-6 md:p-8 overflow-hidden"
        >
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-accent-blue" />
                </div>
                <span className="font-mono text-xs text-accent-blue tracking-wider">
                    SUITE 2026
                </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                Suite Institucional 2026
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-5">
                Desarrollo de sistemas robustos interconectados. Plataformas para la transparencia y gestión de datos complejos.
            </p>

            {/* Stack visualization */}
            <div className="space-y-2 mb-5">
                {[
                    { label: "POA_26", desc: "Presupuesto", icon: Calendar, color: "accent-blue" },
                    { label: "PD_26", desc: "Plan de Desarrollo", icon: FileText, color: "accent-blue" },
                    { label: "INF_LAB_26", desc: "Informe Labores", icon: BarChart3, color: "accent-blue" },
                ].map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center justify-between px-3 py-2.5 bg-void/50 border border-border rounded-lg"
                    >
                        <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-text-muted" />
                            <div>
                                <span className="font-mono text-sm text-text-primary block">{item.label}</span>
                                <span className="text-xs text-text-muted">{item.desc}</span>
                            </div>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue live-dot" />
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2">
                {["Arquitectura", "Backend", "MySQL"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export function PanelSpaceflix() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card p-0 overflow-hidden group flex flex-col"
        >
            <div className="relative h-48 w-full bg-void/50 border-b border-border/50 overflow-hidden">
                <Image
                    src="/images/spaceflix.png"
                    alt="Spaceflix App en Google Play"
                    fill
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between glass-card">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                            <PlaySquare className="w-4 h-4 text-accent-blue" />
                        </div>
                        <span className="font-mono text-xs text-accent-blue tracking-wider">
                            PWA & MOBILE
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                        Spaceflix App
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-5">
                        Aplicación e-commerce para servicios digitales. Publicada en la tienda con base de datos en tiempo real, autenticación segura y una experiencia PWA nativa.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {["Ionic", "Angular", "Firebase"].map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
