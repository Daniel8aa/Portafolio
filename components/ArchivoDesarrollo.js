"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FileSpreadsheet, Smartphone, Podcast, BookOpen } from "lucide-react";

const archiveCards = [
    {
        id: "diplomados",
        icon: BookOpen,
        label: "DIPLOMADOS.v1",
        title: "Catalogo DGEC - Diplomados y Cursos",
        description:
            "Sistema integral para la visualización, filtrado y gestión de la oferta académica (diplomados y cursos) de Educación Continua. Implementado con React para una navegación ultra rápida.",
        impact: "Centralización de ofertas educativas",
        tags: ["React", "Educación Continua", "UI/UX"],
        bgStyle: "waves",
        image: "/images/catalogo.png",
    },
    {
        id: "app-movil",
        icon: Smartphone,
        label: "MOBILE_SDK.v1",
        title: "App Móvil SDK + Mentoría en Talleres",
        description:
            "Desarrollo de aplicación móvil con SDK institucional. Sistema de mentoría para estudiantes, notificaciones push y seguimiento de avance académico.",
        impact: "Capacitación directa a 30+ estudiantes en desarrollo web",
        tags: ["Vue.js", "Capacitor", "REST API", "Push Notifications"],
        bgStyle: "waves",
    },
    {
        id: "podcast",
        icon: Podcast,
        label: "DIVULGACION.v1",
        title: "Podcast & Divulgación sobre Transformación Digital",
        description:
            "Creación de contenido técnico y divulgación sobre desarrollo de software, Linux, automatización y transformación digital en el sector público.",
        impact: "Difusión de conocimiento técnico para comunidad universitaria",
        tags: ["Educación", "Linux", "Open Source", "Comunicación"],
        bgStyle: "audio",
    },
];

function LaserGrid() {
    return <div className="absolute inset-0 opacity-30 laser-grid" />;
}

function WaveBg() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full border border-accent-blue/10 wave-bg"
                    style={{
                        width: `${200 + i * 100}px`,
                        height: `${200 + i * 100}px`,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${i * 0.8}s`,
                    }}
                />
            ))}
        </div>
    );
}

function AudioVisualizerBg() {
    return (
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 h-24 opacity-20 px-8">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="w-1.5 bg-accent-green/50 rounded-t-sm audio-bar"
                    style={{
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: `${0.8 + Math.random() * 0.8}s`,
                    }}
                />
            ))}
        </div>
    );
}

function ArchiveCard({ card, index }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, margin: "-20% 0px -20% 0px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative glass-card overflow-hidden transition-all duration-700 ${isInView ? "" : "scale-[0.95] blur-[10px] opacity-40"
                }`}
        >
            {card.bgStyle === "laser" && <LaserGrid />}
            {card.bgStyle === "waves" && <WaveBg />}
            {card.bgStyle === "audio" && <AudioVisualizerBg />}

            <div className="relative z-10 p-6 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center shrink-0">
                        <card.icon className="w-7 h-7 text-accent-blue" />
                    </div>
                    <div className="flex-1">
                        <span className="font-mono text-xs text-accent-green tracking-wider mb-2 block">
                            {card.label}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                            {card.title}
                        </h3>
                        <p className="text-sm md:text-base text-text-muted leading-relaxed mb-3 max-w-2xl">
                            {card.description}
                        </p>
                        {/* Impact */}
                        <p className="text-sm text-accent-green font-mono mb-5">
                            → {card.impact}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {card.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-mono bg-white/5 border border-border rounded-md text-text-muted"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                {card.image && (
                    <div className="relative mt-8 h-64 md:h-80 w-full rounded-xl overflow-hidden border border-border">
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover object-top opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-700"
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default function ArchivoDesarrollo() {
    return (
        <section className="section-spacing px-6" id="archive">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-accent-blue" />
                        <span className="font-mono text-xs text-accent-blue tracking-wider">
                            ARCHIVO
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
                        Más Proyectos
                    </h2>
                    <p className="text-text-muted mt-3 max-w-lg">
                        Proyectos complementarios que demuestran mi versatilidad técnica.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {archiveCards.map((card, i) => (
                        <ArchiveCard key={card.id} card={card} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
