import "./globals.css";

export const metadata = {
    title: "Daniel | Desarrollo Full-Stack & Transformación Digital",
    description:
        "Portafolio de desarrollo de software: Soluciones Full-Stack y Transformación Digital para el sector público y educativo. Vue.js, PHP, SQL, Docker, Linux.",
    keywords: [
        "Desarrollo Full-Stack",
        "Transformación Digital",
        "Vue.js",
        "PHP",
        "SQL",
        "Docker",
        "Linux",
        "Sector Público",
        "Educación",
    ],
    authors: [{ name: "Daniel" }],
    openGraph: {
        title: "Daniel | Desarrollo Full-Stack & Transformación Digital",
        description:
            "Soluciones Full-Stack y Transformación Digital para el sector público y educativo.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-void text-text-primary antialiased">
                {/* Noise Texture Overlay */}
                <div className="noise-overlay" aria-hidden="true">
                    <svg>
                        <filter id="noiseFilter">
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.65"
                                numOctaves="3"
                                stitchTiles="stitch"
                            />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                    </svg>
                </div>
                {children}
            </body>
        </html>
    );
}
