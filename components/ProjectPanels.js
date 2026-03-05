"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Bot, Calendar, PlaySquare, Monitor, FileText, BarChart3, ExternalLink, Smartphone, Calculator } from "lucide-react";

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
                    <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex flex-wrap gap-2">
                            {["Vue.js", "PHP", "Docker"].map((t) => (
                                <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <a
                            href="https://datacenter.ucol.mx/dgec/FLEX/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-accent-blue border border-accent-blue/30 rounded-lg hover:bg-accent-blue/10 transition-all duration-300"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Visitar Sitio
                        </a>
                    </div>
                </div>
                <div className="relative h-64 lg:h-auto w-full bg-void/50 border-t lg:border-t-0 lg:border-l border-border/50 overflow-hidden">
                    <Image
                        src="/images/spaceflix.png"
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
            className="glass-card p-6 md:p-8 overflow-hidden h-full flex flex-col"
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

            <div className="space-y-2 mb-5 flex-1">
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
                    src="/images/flex.png"
                    alt="Spaceflix App"
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

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {["Ionic", "Angular", "Firebase"].map((t) => (
                            <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://play.google.com/store/apps/details?id=io.PHMSoft.SF&hl=es_MX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-accent-blue border border-accent-blue/30 rounded-lg hover:bg-accent-blue/10 transition-all duration-300"
                        >
                            <Smartphone className="w-3.5 h-3.5" />
                            Google Play
                        </a>
                        <a
                            href="https://spaceflix.digital/#/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-accent-blue border border-accent-blue/30 rounded-lg hover:bg-accent-blue/10 transition-all duration-300"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Web App
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function PanelSectorUniversitario() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card overflow-hidden group col-span-1 lg:col-span-2"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto w-full bg-void/50 border-b lg:border-b-0 lg:border-r border-border/50 overflow-hidden order-2 lg:order-1">
                    <Image
                        src="/images/sector_universitario.png"
                        alt="Plataforma Sector Universitario"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                    />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center order-1 lg:order-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                            <Monitor className="w-4 h-4 text-accent-blue" />
                        </div>
                        <span className="font-mono text-xs text-accent-blue tracking-wider">
                            INSTITUCIONAL
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                        Sector Universitario
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                        Plataforma centralizada para la gestión de solicitudes, usuarios y direcciones dentro del ecosistema universitario. Incluye módulos de cotización y administración de recursos.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["React", "Node.js", "MySQL", "UI/UX"].map((t) => (
                            <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-blue/5 border border-accent-blue/20 rounded-md text-accent-blue/80">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function PanelCotizador() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card overflow-hidden group"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/30 flex items-center justify-center">
                            <Calculator className="w-4 h-4 text-accent-green" />
                        </div>
                        <span className="font-mono text-xs text-accent-green tracking-wider">
                            HERRAMIENTAS & FINANZAS
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                        Sistemas Cotizadores DGEC & Vinculación
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                        Desarrollo de diferentes cotizadores especializados para la Universidad de Colima. Estas herramientas permiten calcular de manera precisa los costos de eventos, diplomados y la renta de espacios físicos, optimizando la gestión financiera y agilizando procesos institucionales.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex flex-wrap gap-2">
                            {["Desarrollo Web", "Lógica de Negocios", "UX/UI"].map((t) => (
                                <span key={t} className="px-2.5 py-1 text-xs font-mono bg-accent-green/5 border border-accent-green/20 rounded-md text-accent-green/80">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative h-64 lg:h-auto w-full bg-void/50 border-t lg:border-t-0 lg:border-l border-border/50 overflow-hidden">
                    <Image
                        src="/images/cotizador_nuevo.png"
                        alt="Sistemas Cotizadores UDC"
                        fill
                        className="object-cover object-left-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                    />
                </div>
            </div>
        </motion.div>
    );
}

export function PanelPayfri() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card overflow-hidden group"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto w-full bg-void/50 border-b lg:border-b-0 lg:border-r border-border/50 overflow-hidden">
                    <Image
                        src="/images/payfri.png"
                        alt="Payfri Wallet"
                        fill
                        className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                    />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                            <Smartphone className="w-4 h-4 text-pink-500" />
                        </div>
                        <span className="font-mono text-xs text-pink-500 tracking-wider">
                            FREELANCE APP
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                        Payfri Wallet
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                        Colaboré como desarrollador freelance en la creación de Payfri Wallet, una aplicación financiera disponible en la Play Store. Diseñada con un enfoque en la agilidad y experiencia del usuario para transacciones rápidas.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex flex-wrap gap-2">
                            {["Móvil", "Billetera Digital", "PWA"].map((t) => (
                                <span key={t} className="px-2.5 py-1 text-xs font-mono bg-pink-500/5 border border-pink-500/20 rounded-md text-pink-500/80">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.walletpayfri.magenta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-pink-500 border border-pink-500/30 rounded-lg hover:bg-pink-500/10 transition-all duration-300"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Ver en Play Store
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
