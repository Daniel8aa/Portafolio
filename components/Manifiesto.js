"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { useTranslation } from "react-i18next";

function SplitWord({ word, index, progress, totalWords }) {
    const start = index / totalWords;
    const end = start + 1 / totalWords;
    const opacity = useTransform(progress, [start, end], [0.12, 1]);

    return (
        <motion.span style={{ opacity }} className="inline-block">
            {word}&nbsp;
        </motion.span>
    );
}

export default function Manifiesto() {
    const { t } = useTranslation();
    const lines = t("manifesto.lines", { returnObjects: true }) || [];
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start 85%", "end 45%"],
    });

    const allWords = lines.flatMap((line) => (line.text || "").split(" "));

    return (
        <section ref={containerRef} className="relative py-32 md:py-48 px-6 bg-void overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />

            <div className="relative max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-center gap-3"
                >
                    <div className="w-8 h-[1px] bg-accent-blue" />
                    <span className="font-mono text-xs text-accent-blue tracking-wider">{t("manifesto.section")}</span>
                </motion.div>

                <div ref={textRef} className="space-y-4 md:space-y-6">
                    {lines.map((line, lineIndex) => {
                        const words = (line.text || "").split(" ");
                        const wordsBefore = lines
                            .slice(0, lineIndex)
                            .reduce((sum, l) => sum + (l.text || "").split(" ").length, 0);

                        return (
                            <p
                                key={lineIndex}
                                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight ${line.style === "muted"
                                    ? "font-light"
                                    : line.style === "accent"
                                        ? "font-semibold"
                                        : "font-bold"
                                    }`}
                                style={{
                                    fontFamily: line.style === "bold" ? "var(--font-mono)" : "var(--font-sans)",
                                }}
                            >
                                {words.map((word, wordIndex) => (
                                    <SplitWord
                                        key={wordIndex}
                                        word={word}
                                        index={wordsBefore + wordIndex}
                                        progress={scrollYProgress}
                                        totalWords={allWords.length}
                                    />
                                ))}
                            </p>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mt-16 h-[1px] bg-gradient-to-r from-accent-blue via-accent-green to-transparent origin-left"
                />
            </div>
        </section>
    );
}
