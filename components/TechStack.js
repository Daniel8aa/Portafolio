"use client";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function TechStack() {
    const { t } = useTranslation();
    const categories = t("stack.categories", { returnObjects: true }) || [];

    return (
        <section id="stack" className="section-spacing px-6">
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
                            {t("stack.section")}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
                        {t("stack.title")}
                    </h2>
                    <p className="text-text-muted mt-3 max-w-lg">
                        {t("stack.subtitle")}
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: catIndex * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <h3 className="font-mono text-xs text-accent-blue tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-4 h-[1px] bg-accent-blue/50" />
                                {category.title.toUpperCase()}
                            </h3>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2.5"
                            >
                                {category.items.map((tech) => (
                                    <motion.span
                                        key={tech}
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: "rgba(59, 130, 246, 0.4)",
                                            transition: { duration: 0.2 },
                                        }}
                                        className="px-4 py-2.5 text-sm font-mono glass-card cursor-default text-text-primary hover:text-accent-blue transition-colors duration-300"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
