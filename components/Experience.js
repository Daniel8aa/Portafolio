"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, Building2, ChevronRight } from "lucide-react";

const experiences = [
    {
        role: "Desarrollador Full-Stack",
        company: "Universidad de Colima",
        area: "Dirección de Sistemas",
        period: "Feb 2023 – Presente",
        current: true,
        description:
            "Diseño e implementación de sistemas web institucionales para la gestión académica y administrativa. Desarrollo de plataformas de planeación estratégica y módulos dinámicos.",
        achievements: [
            "Sistema integral FLEX para la Facultad de Lenguas",
            "Plataforma de gestión de Diplomados DGEC",
            "Suite de Planeación 2026: POA26, Plan de Desarrollo (PD26) e Informe de Labores (INF_LAB26)",
            "Sistema de generación de Cotizaciones y Plataforma Sector Universitario",
        ],
        tech: ["Vue.js", "React", "Node.js", "PHP", "Docker"],
    },
    {
        role: "Desarrollador Front-End",
        company: "HMH SISTEMAS",
        area: "Desarrollo de Software",
        period: "Oct 2023 – Nov 2024",
        current: false,
        description:
            "Implementación y mantenimiento de aplicaciones web modernas. Desarrollo centrado en la experiencia de usuario e interfaces.",
        achievements: [
            "App Transcol: Desarrollo de aplicación para servicio de transporte público",
            "Sistema de Rastreo Montecristo: Plataforma de seguimiento y monitoreo",
        ],
        tech: ["Next.js", "Vue", "React", "PHP", "GitLab"],
    },
    {
        role: "Desarrollador / Freelance",
        company: "Proyectos Independientes",
        area: "Consultoría y Soluciones Digitales",
        period: "Ene 2022 – Presente",
        current: false,
        description:
            "Creación de soluciones personalizadas. Desarrollo de aplicaciones móviles, comercio electrónico y portales web institucionales.",
        achievements: [
            "Spaceflix App: PWA de e-commerce para servicios digitales (Ionic/Angular)",
            "Chatlive VNHE: Sistema de chat en vivo con panel administrativo (WebSockets/React)",
            "Payfri Wallet: Billetera digital y Sistema de Punto de Venta",
            "Actualización y optimización de sitio institucional para CNDH Colima",
        ],
        tech: ["Flutter", "Ionic", "WebSockets", "WordPress"],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="experience" className="section-spacing px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-accent-blue" />
                        <span className="font-mono text-xs text-accent-blue tracking-wider">
                            TRAYECTORIA
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
                        Experiencia Profesional
                    </h2>
                    <p className="text-text-muted mt-3 max-w-lg">
                        Mi recorrido construyendo software en el sector público y educativo.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue/40 via-accent-blue/20 to-transparent" />

                    <div className="space-y-8">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.15 * i,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="relative md:pl-14"
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-void border-2 border-accent-blue/40 items-center justify-center z-10">
                                    <Briefcase className={`w-4 h-4 ${exp.current ? "text-accent-green" : "text-accent-blue"}`} />
                                    {exp.current && (
                                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-green live-dot" />
                                    )}
                                </div>

                                {/* Card */}
                                <div className="glass-card p-6 md:p-8 hover:border-accent-blue/30 transition-colors duration-500">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap mb-1">
                                                <h3 className="text-xl font-bold text-text-primary">
                                                    {exp.role}
                                                </h3>
                                                {exp.current && (
                                                    <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-wider bg-accent-green/10 text-accent-green border border-accent-green/30 rounded-md">
                                                        ACTUAL
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-text-muted">
                                                <Building2 className="w-3.5 h-3.5 text-accent-blue" />
                                                <span>{exp.company}</span>
                                                <span className="text-text-muted/30">·</span>
                                                <span className="text-text-muted/70">{exp.area}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted shrink-0">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {exp.period}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-text-muted leading-relaxed mb-5">
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    <ul className="space-y-2 mb-5">
                                        {exp.achievements.map((achievement, j) => (
                                            <li
                                                key={j}
                                                className="flex items-start gap-2 text-sm text-text-muted/90"
                                            >
                                                <ChevronRight className="w-3.5 h-3.5 text-accent-green mt-0.5 shrink-0" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
