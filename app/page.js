"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import { PanelFlex, PanelSuite, PanelSpaceflix, PanelSectorUniversitario, PanelCotizador, PanelPayfri } from "@/components/ProjectPanels";
import Manifiesto from "@/components/Manifiesto";
import ArchivoDesarrollo from "@/components/ArchivoDesarrollo";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative">
            <Navbar />
            <Hero />

            {/* ── SOBRE MÍ ── */}
            <AboutMe />

            {/* ── EXPERIENCIA PROFESIONAL ── */}
            <Experience />

            {/* ── PROYECTOS ESTRELLA ── */}
            <section id="projects" className="section-spacing px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Section header */}
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
                                PROYECTOS
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
                            Proyectos Destacados
                        </h2>
                        <p className="text-text-muted mt-3 max-w-lg">
                            Sistemas que he diseñado e implementado de principio a fin.
                        </p>
                    </motion.div>

                    {/* Top panel full width */}
                    <div className="space-y-6">
                        <PanelFlex />
                        <PanelSectorUniversitario />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                            <PanelSuite />
                            <PanelSpaceflix />
                        </div>
                        <PanelCotizador />
                        <PanelPayfri />
                    </div>
                </div>
            </section>

            {/* ── FILOSOFÍA ── */}
            <Manifiesto />

            {/* ── MÁS PROYECTOS ── */}
            <ArchivoDesarrollo />

            {/* ── SKILLS & STACK ── */}
            <TechStack />

            {/* ── CONTACTO & FOOTER ── */}
            <Footer />
        </main>
    );
}
