"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Download } from "lucide-react";

import { useTranslation } from "react-i18next";

const navLinks = [
    { key: "about", href: "#about" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "stack", href: "#stack" },
    { key: "contact", href: "#contact" },
];

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
        >
            <div
                className={`navbar-island px-4 py-3 md:px-6 md:py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? "shadow-2xl shadow-accent-blue/5" : ""
                    }`}
            >

                <a
                    href="#hero"
                    onClick={(e) => handleClick(e, "#hero")}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors duration-300">
                        <Terminal className="w-4 h-4 text-accent-blue" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-text-primary tracking-tight hidden sm:block">
                        daniel<span className="text-accent-blue">.dev</span>
                    </span>
                </a>

                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="px-3 py-1.5 text-sm font-mono text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
                        >
                            {t(`nav.${link.key}`)}
                        </a>
                    ))}
                    <a
                        href="/cv-daniel.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono text-accent-blue hover:bg-accent-blue/10 border border-accent-blue/30 rounded-lg transition-all duration-300"
                    >
                        <Download className="w-3.5 h-3.5" />
                        {t("nav.cv")}
                    </a>
                    
                    <button
                        onClick={toggleLanguage}
                        className="ml-2 flex items-center justify-center px-2 py-1.5 text-xl font-mono text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
                        title={i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                    >
                        {i18n.language === 'en' ? '🇲🇽' : '🇺🇸'}
                    </button>
                </div>


                <div className="flex items-center gap-2 lg:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center px-2 py-1.5 text-xl font-mono text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
                        title={i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                    >
                        {i18n.language === 'en' ? '🇲🇽' : '🇺🇸'}
                    </button>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>


            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="navbar-island mt-2 px-4 py-3 flex flex-col gap-1 origin-top"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className="px-3 py-2.5 text-sm font-mono text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-all duration-300"
                            >
                                {t(`nav.${link.key}`)}
                            </a>
                        ))}
                        <a
                            href="/cv-daniel.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 flex items-center gap-2 px-3 py-2.5 text-sm font-mono text-accent-blue hover:bg-accent-blue/10 rounded-lg transition-all duration-300"
                        >
                            <Download className="w-3.5 h-3.5" />
                            {t("nav.preview_cv")}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
