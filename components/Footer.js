"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Download, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="relative border-t border-border bg-surface/30">
            <div className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-accent-blue" />
                        <span className="font-mono text-xs text-accent-blue tracking-wider">{t("footer.contact_tag")}</span>
                        <div className="w-8 h-[1px] bg-accent-blue" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
                        {t("footer.contact_title")}
                    </h2>
                    <p className="text-text-muted max-w-lg mx-auto mb-8 leading-relaxed">
                        {t("footer.contact_desc")}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:luisdanielsolis8a@gmail.com"
                            className="group flex items-center gap-2.5 px-7 py-3.5 bg-accent-blue hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25 hover:-translate-y-0.5"
                        >
                            <Mail className="w-5 h-5" />
                            <span>{t("footer.send_email")}</span>
                        </a>
                        <a
                            href="/cv-daniel.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-border hover:border-border-hover text-text-primary font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <Download className="w-5 h-5" />
                            <span>{t("footer.preview_cv")}</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="border-t border-border">
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                                    <Terminal className="w-4 h-4 text-accent-blue" />
                                </div>
                                <span className="font-mono text-sm font-semibold text-text-primary">
                                    daniel<span className="text-accent-blue">.dev</span>
                                </span>
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                                {t("footer.brand_desc")}
                            </p>
                        </div>

                        <div>
                            <h3 className="font-mono text-xs text-accent-green tracking-wider mb-4">
                                {t("footer.links_tag")}
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="https://github.com/Daniel8aa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm text-text-muted hover:text-text-primary transition-colors duration-300 group"
                                >
                                    <Github className="w-4 h-4 group-hover:text-accent-blue transition-colors" />
                                    <span>github.com/Daniel8aa</span>
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm text-text-muted hover:text-text-primary transition-colors duration-300 group"
                                >
                                    <Linkedin className="w-4 h-4 group-hover:text-accent-blue transition-colors" />
                                    <span>LinkedIn</span>
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                                </a>
                                <a
                                    href="mailto:luisdanielsolis8a@gmail.com"
                                    className="flex items-center gap-3 text-sm text-text-muted hover:text-text-primary transition-colors duration-300 group"
                                >
                                    <Mail className="w-4 h-4 group-hover:text-accent-blue transition-colors" />
                                    <span>luisdanielsolis8a@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-mono text-xs text-accent-green tracking-wider mb-4">
                                {t("footer.nav_tag")}
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { label: t("nav.about"), href: "#about" },
                                    { label: t("nav.experience"), href: "#experience" },
                                    { label: t("nav.projects"), href: "#projects" },
                                    { label: t("nav.stack"), href: "#stack" },
                                ].map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="block text-sm font-mono text-text-muted hover:text-text-primary transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2.5"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent-green live-dot" />
                        <span className="text-xs font-mono text-text-muted">
                            {t("footer.status")}{" "}
                            <span className="text-accent-green">{t("footer.open_to_work")}</span>
                        </span>
                        <span className="text-xs text-text-muted/50 mx-2">|</span>
                        <span className="text-xs font-mono text-text-muted/50">v2.0.26</span>
                    </motion.div>
                    <span className="text-xs font-mono text-text-muted/50">
                        &copy; {currentYear} Daniel. {t("footer.rights")}
                    </span>
                </div>
            </div>
        </footer>
    );
}
