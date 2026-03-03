"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Code2, GraduationCap, Briefcase } from "lucide-react";

const stats = [
    { value: "3+", label: "Años de Experiencia", icon: Briefcase },
    { value: "10+", label: "Proyectos en Producción", icon: Code2 },
    { value: "Maestría", label: "Transformación Digital", icon: GraduationCap },
];

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="about" className="section-spacing px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-accent-blue" />
                        <span className="font-mono text-xs text-accent-blue tracking-wider">
                            SOBRE MÍ
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
                        Quién soy
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-card p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                                    <User className="w-5 h-5 text-accent-blue" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary">Luis Daniel Solis Ochoa</h3>
                                    <span className="text-xs font-mono text-text-muted">Ingeniero de Software / Full-Stack Developer</span>
                                </div>
                            </div>

                            <div className="space-y-4 text-[15px] text-text-muted leading-relaxed">
                                <p>
                                    Profesional en desarrollo de software con una sólida experiencia en tecnologías tanto web como móviles,
                                    especializado en la creación de interfaces intuitivas y en la <span className="text-text-primary font-medium">optimización de la experiencia del usuario</span>.
                                </p>
                                <p>
                                    Cuento con un amplio conocimiento en desarrollo <span className="font-mono text-accent-blue">Front-End (Vue.js, React.js, Next.js, Angular)</span>, además de sólidas capacidades en <span className="font-mono text-accent-blue">Back-End (PHP, Node.js, Laravel)</span> para implementar soluciones integrales.
                                </p>
                                <p>
                                    Estoy comprometido con la <span className="text-text-primary font-medium">calidad y la innovación tecnológica</span>, trabajando con metodologías ágiles y bases de datos relacionales y no relacionales <span className="text-text-primary font-medium">(MySQL, MongoDB, Firebase)</span>. Mi meta es construir arquitecturas que escalen sin acumular deuda técnica.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-2 flex flex-col gap-4"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-card p-5 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center shrink-0">
                                    <stat.icon className="w-6 h-6 text-accent-blue" />
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-text-primary block leading-tight">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs font-mono text-text-muted tracking-wide">
                                        {stat.label}
                                    </span>
                                </div>
                            </motion.div>
                        ))}

                        {/* Education mini-card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-card p-5"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <GraduationCap className="w-4 h-4 text-accent-blue" />
                                <span className="font-mono text-xs text-accent-blue tracking-wider">
                                    EDUCACIÓN
                                </span>
                            </div>
                            <div className="space-y-3">
                                <div className="border-l-2 border-accent-blue/30 pl-3">
                                    <p className="text-sm font-semibold text-text-primary">Maestría en Transformación Digital</p>
                                    <p className="text-xs text-text-muted font-mono">2025 – Presente</p>
                                </div>
                                <div className="border-l-2 border-accent-blue/30 pl-3">
                                    <p className="text-sm font-semibold text-text-primary">Ingeniería en Software</p>
                                    <p className="text-xs text-text-muted font-mono">2021 – 2025 · Titulado</p>
                                </div>
                                <div className="border-l-2 border-accent-blue/30 pl-3">
                                    <p className="text-sm font-semibold text-text-primary">Técnico Analista Programador</p>
                                    <p className="text-xs text-text-muted font-mono">2018 – 2021</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
