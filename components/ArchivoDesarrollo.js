"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FileSpreadsheet, Smartphone, Podcast, BookOpen, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, margin: "-10% 0px -10% 0px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, margin: "-20px" }}
            className={`relative glass-card overflow-hidden transition-all duration-1000 ease-out ${isInView ? "scale-100 blur-0 opacity-100" : "scale-[0.98] blur-[8px] opacity-40 shadow-none border-transparent"
                }`}
        >
            {card.bgStyle === "laser" && <LaserGrid />}
            {card.bgStyle === "waves" && <WaveBg />}
            {card.bgStyle === "audio" && <AudioVisualizerBg />}

            <div className="relative z-10 p-6 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center shrink-0">
                        {card.id === "diplomados" && <BookOpen className="w-7 h-7 text-accent-blue" />}
                        {card.id === "cotizador" && <FileSpreadsheet className="w-7 h-7 text-accent-blue" />}
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
                        <p className="text-sm text-accent-green font-mono mb-5">
                            → {card.impact}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
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
                            {card.id === "diplomados" && (
                                <a
                                    href="https://datacenter.ucol.mx/dgec/Catalogo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-mono text-accent-blue hover:underline"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    {t("archive.visit")}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                {card.id === "diplomados" && (
                    <div className="relative mt-8 h-64 md:h-80 w-full rounded-xl overflow-hidden border border-border">
                        <Image
                            src="/images/catalogo.png"
                            alt={card.title}
                            fill
                            className="object-cover object-top opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-700"
                        />
                    </div>
                )}
                {card.id === "cotizador" && (
                    <div className="relative mt-8 h-64 md:h-80 w-full rounded-xl overflow-hidden border border-border">
                        <Image
                            src="/images/cotizador.png"
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
    const { t } = useTranslation();
    const archiveCards = t("archive.cards", { returnObjects: true }) || [];
    
    // Asignar los bgStyles aquí para mantener la lógica de UI
    if (archiveCards.length > 0) {
        archiveCards[0].bgStyle = "waves";
        if (archiveCards.length > 1) {
             archiveCards[1].bgStyle = "laser";
        }
    }

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
                            {t("archive.section")}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
                        {t("archive.title")}
                    </h2>
                    <p className="text-text-muted mt-3 max-w-lg">
                        {t("archive.subtitle")}
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
