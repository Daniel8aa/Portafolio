"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download, MapPin } from "lucide-react";

const typingTexts = [
    "Construyo software que funciona.",
    "Automatizo procesos complejos.",
    "Diseño arquitecturas escalables.",
];

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => setShowCursor((v) => !v), 530);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const currentFullText = typingTexts[textIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setDisplayText(currentFullText.substring(0, charIndex + 1));
                    setCharIndex((c) => c + 1);
                    if (charIndex + 1 === currentFullText.length) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    setDisplayText(currentFullText.substring(0, charIndex - 1));
                    setCharIndex((c) => c - 1);
                    if (charIndex - 1 === 0) {
                        setIsDeleting(false);
                        setTextIndex((i) => (i + 1) % typingTexts.length);
                    }
                }
            },
            isDeleting ? 40 : 80
        );
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.8 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section
            id="hero"
            className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Radial glow */}
            <div className="absolute inset-0 hero-glow" />

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl float-animation" />
            <div
                className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-green/5 rounded-full blur-3xl float-animation"
                style={{ animationDelay: "3s" }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-6 max-w-4xl mx-auto"
            >
                {/* Status badge */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface-80 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-green live-dot" />
                    <span className="text-xs font-mono text-text-muted tracking-wide">
                        OPEN TO WORK
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-4"
                >
                    <span className="block text-text-primary" style={{ fontFamily: "var(--font-sans)" }}>
                        Hola, soy Daniel.
                    </span>
                </motion.h1>

                {/* Typing subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="font-mono text-xl sm:text-2xl md:text-3xl text-accent-blue mb-5"
                >
                    {displayText}
                    <span
                        className={`inline-block w-[3px] h-[0.85em] bg-accent-blue ml-1 align-middle transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </motion.p>

                {/* Role description */}
                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg text-text-muted font-light max-w-2xl mx-auto mb-3 leading-relaxed"
                >
                    Desarrollador Full-Stack &nbsp;·&nbsp; Entornos Linux &nbsp;·&nbsp;
                    Maestría en Transformación Digital
                </motion.p>

                {/* Location */}
                <motion.p
                    variants={itemVariants}
                    className="flex items-center justify-center gap-1.5 text-sm text-text-muted/70 mb-10"
                >
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-mono">Colima, México</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="/cv-daniel.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 px-7 py-3.5 bg-accent-blue hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25 hover:-translate-y-0.5"
                    >
                        <Download className="w-5 h-5" />
                        <span>Previsualizar CV</span>
                    </a>
                    <a
                        href="https://github.com/Daniel8aa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-border hover:border-border-hover text-text-primary font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <Github className="w-5 h-5" />
                        <span>Ver GitHub</span>
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex items-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-border hover:border-border-hover text-text-primary font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <span>Contactar</span>
                    </a>
                </motion.div>

                {/* Social */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 flex items-center justify-center gap-4"
                >
                    <a
                        href="https://github.com/Daniel8aa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 border border-border hover:border-border-hover flex items-center justify-center text-text-muted hover:text-text-primary transition-all duration-300"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 border border-border hover:border-border-hover flex items-center justify-center text-text-muted hover:text-text-primary transition-all duration-300"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs font-mono text-text-muted tracking-widest">SCROLL</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-4 h-4 text-text-muted" />
                </motion.div>
            </motion.div>
        </section>
    );
}
