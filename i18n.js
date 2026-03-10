import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "about": "About_Me()",
        "experience": "Experience[]",
        "projects": "Projects{}",
        "stack": "Stack",
        "contact": "Contact",
        "cv": "CV",
        "preview_cv": "Preview CV"
      },
      "hero": {
        "open_to_work": "OPEN TO WORK",
        "hello": "Hello, I'm Daniel.",
        "role": "Full-Stack Developer  ·  Software Architecture  ·  Master's in Digital Transformation",
        "location": "Colima, Mexico",
        "github": "View GitHub",
        "contact": "Contact",
        "scroll": "SCROLL",
        "typing": [
          "I build software that works.",
          "I automate complex processes.",
          "I design scalable architectures."
        ]
      },
      "about": {
        "section": "ABOUT ME",
        "title": "Who I am",
        "name": "Luis Daniel Solis Ochoa",
        "role": "Software Engineer / Full-Stack Developer",
        "p1": "Professional in software development with solid experience in both web and mobile technologies, specialized in creating intuitive interfaces and optimizing user experience.",
        "p2": "I have extensive knowledge in Front-End development (Vue.js, React.js, Next.js, Angular), along with solid Back-End capabilities (PHP, Node.js, Laravel) to implement comprehensive solutions.",
        "p3": "I am committed to quality and technological innovation, working with agile methodologies and relational and non-relational databases (MySQL, MongoDB, Firebase). My goal is to build architectures that scale without accumulating technical debt.",
        "stats": {
          "exp": "Years of Experience",
          "projects": "Projects in Production",
          "edu": "Digital Transformation"
        },
        "education": {
          "title": "EDUCATION",
          "master": "Master's in Digital Transformation",
          "master_date": "2025 – Present",
          "degree": "Software Engineering",
          "degree_date": "2021 – 2025 · Graduated",
          "tech": "Technical Programmer Analyst",
          "tech_date": "2018 – 2021"
        }
      },
      "experience": {
        "section": "CAREER",
        "title": "Professional Experience",
        "subtitle": "My journey building software in the public and educational sectors.",
        "current": "CURRENT",
        "list": [
          {
            "role": "Full-Stack Developer",
            "company": "Universidad de Colima",
            "area": "Systems",
            "period": "Feb 2023 – Present",
            "current": true,
            "description": "Design and implementation of institutional web systems for academic and administrative management. Development of strategic planning platforms and dynamic modules.",
            "achievements": [
              "FLEX comprehensive system for the Faculty of Languages",
              "DGEC Diploma management platform",
              "2026 Planning Suite: POA26, Development Plan (PD26) and Work Report (INF_LAB26)",
              "Quotes generation system and University Sector Platform"
            ],
            "tech": ["Vue.js", "React", "Node.js", "PHP", "Docker"]
          },
          {
            "role": "Front-End Developer",
            "company": "HMH SISTEMAS",
            "area": "Software Development",
            "period": "Oct 2023 – Nov 2024",
            "current": false,
            "description": "Implementation and maintenance of modern web applications. Development focused on user experience and interfaces.",
            "achievements": [
              "Transcol App: Application development for public transportation service",
              "Montecristo Tracking System: Tracking and monitoring platform"
            ],
            "tech": ["Next.js", "Vue", "React", "PHP", "GitLab"]
          },
          {
             "role": "Developer / Freelance",
             "company": "Independent Projects",
             "area": "Consulting and Digital Solutions",
             "period": "Jan 2022 – Present",
             "current": false,
             "description": "Creation of custom solutions. Development of mobile applications, e-commerce, and institutional web portals.",
             "achievements": [
               "Spaceflix App: E-commerce PWA for digital services (Ionic/Angular)",
               "Chatlive VNHE: Live chat system with administrative panel (WebSockets/React)",
               "Payfri Wallet: Digital wallet and Point of Sale System",
               "Update and optimization of institutional site for CNDH Colima"
             ],
             "tech": ["Flutter", "Ionic", "WebSockets", "WordPress"]
          }
        ]
      },
      "projects": {
        "title": "Featured Projects",
        "subtitle": "Systems I have designed and implemented from start to finish.",
        "visit": "Visit Site",
        "play_store": "View in Play Store",
        "panels": {
          "flex": {
            "tag": "FLEX & LANGUAGES",
            "title": "Comprehensive FLEX Platform",
            "desc": "Complete digitalization of language course enrollments, automating level assignment, seat validation, and schedules. Over <span class='text-text-primary font-medium'>thousands of users</span> interacting with a fluid and intuitive interface."
          },
          "suite": {
            "tag": "2026 SUITE",
            "title": "2026 Institutional Suite",
            "desc": "Development of robust interconnected systems. Platforms for transparency and complex data management.",
            "items": [
              { "label": "POA_26", "desc": "Budget" },
              { "label": "PD_26", "desc": "Development Plan" },
              { "label": "INF_LAB_26", "desc": "Work Report" }
            ]
          },
          "spaceflix": {
            "tag": "PWA & MOBILE",
            "title": "Spaceflix App",
            "desc": "E-commerce application for digital services. Published in the store with real-time database, secure authentication, and a native PWA experience."
          },
          "sector": {
            "tag": "INSTITUTIONAL",
            "title": "University Sector",
            "desc": "Centralized platform for managing requests, users, and directions within the university ecosystem. Includes quoting modules and resource administration."
          },
          "cotizador": {
             "tag": "TOOLS & FINANCE",
             "title": "DGEC & Outreach Quotation Systems",
             "desc": "Development of various specialized quoters for the University of Colima. These tools allow accurate calculation of event costs, diplomas, and physical space rentals, optimizing financial management and streamlining institutional processes."
          },
          "payfri": {
             "tag": "FREELANCE APP",
             "title": "Payfri Wallet",
             "desc": "Collaborated as a freelance developer in the creation of Payfri Wallet, a financial app available on the Play Store. Designed with a focus on agility and user experience for fast transactions."
          }
        }
      },
      "archive": {
        "section": "ARCHIVE",
        "title": "More Projects",
        "subtitle": "Complementary projects that demonstrate my technical versatility.",
        "visit": "Official Site",
        "cards": [
          {
            "id": "diplomados",
            "label": "DIPLOMAS.v1",
            "title": "DGEC Catalog - Diplomas and Courses",
            "description": "Comprehensive system for the display, filtering, and management of the academic offer (diplomas and courses) of Continuing Education. Implemented with React for ultra-fast navigation.",
            "impact": "Centralization of educational offers",
            "tags": ["React", "Continuing Education", "UI/UX"]
          },
          {
            "id": "cotizador",
            "label": "QUOTER.v1",
            "title": "Sheet Metal and Painting Quoter",
            "description": "Automated system for generating detailed quotes in body and paint shops. Optimizes the calculation of materials, labor, and delivery times with export to PDF.",
            "impact": "Automation of budgets and improvement in customer response times.",
            "tags": ["Vue.js", "PHP", "Management", "PDF Export"]
          }
        ]
      },
      "manifesto": {
        "section": "PHILOSOPHY",
        "lines": [
          { "text": "I don't just write lines of code.", "style": "muted" },
          { "text": "I design solutions that scale", "style": "accent" },
          { "text": "and optimize processes.", "style": "bold" }
        ]
      },
      "stack": {
        "section": "SKILLS",
        "title": "Stack & Skills",
        "subtitle": "The tools and competencies I use daily to build software.",
        "categories": [
          {
            "title": "Frontend",
            "items": ["Angular", "Vue.js", "React.js", "Next.js", "HTML5/CSS3/SCSS", "Tailwind CSS"]
          },
          {
            "title": "Backend",
            "items": ["Node.js", "Express", "PHP", "Laravel", "REST API", "WebSockets"]
          },
          {
            "title": "Mobile Development",
            "items": ["Flutter & Dart", "Ionic & Capacitor", "PWA", "Android Studio"]
          },
          {
            "title": "Databases",
            "items": ["MySQL", "MariaDB", "MongoDB", "Firebase"]
          },
          {
            "title": "DevOps & CMS",
            "items": ["Docker", "Git/GitLab", "Google Cloud", "WordPress (Plugins)"]
          },
          {
            "title": "Soft Skills",
            "items": ["Effective Communication", "Problem Solving", "Critical Thinking", "Self-Taught"]
          }
        ]
      },
      "footer": {
        "contact_tag": "CONTACT",
        "contact_title": "Shall we work together?",
        "contact_desc": "I am looking for new opportunities where I can contribute my experience in Full-Stack development and digital transformation. Let's talk!",
        "send_email": "Send Email",
        "preview_cv": "Preview CV",
        "brand_desc": "Full-Stack Developer specialized in digital transformation for the public and educational sectors.",
        "links_tag": "LINKS",
        "nav_tag": "NAVIGATION",
        "status": "Status:",
        "open_to_work": "Open to work",
        "rights": "All rights reserved."
      }
    }
  },
  es: {
    translation: {
       "nav": {
        "about": "Sobre_Mi()",
        "experience": "Experiencia[]",
        "projects": "Proyectos{}",
        "stack": "Stack",
        "contact": "Contacto",
        "cv": "CV",
        "preview_cv": "Previsualizar CV"
      },
      "hero": {
        "open_to_work": "OPEN TO WORK",
        "hello": "Hola, soy Daniel.",
        "role": "Desarrollador Full-Stack  ·  Arquitectura de Software  ·  Maestría en Transformación Digital",
        "location": "Colima, México",
        "github": "Ver GitHub",
        "contact": "Contactar",
        "scroll": "SCROLL",
        "typing": [
          "Construyo software que funciona.",
          "Automatizo procesos complejos.",
          "Diseño arquitecturas escalables."
        ]
      },
      "about": {
        "section": "SOBRE MÍ",
        "title": "Quién soy",
        "name": "Luis Daniel Solis Ochoa",
        "role": "Ingeniero de Software / Full-Stack Developer",
        "p1": "Profesional en desarrollo de software con una sólida experiencia en tecnologías tanto web como móviles, especializado en la creación de interfaces intuitivas y en la optimización de la experiencia del usuario.",
        "p2": "Cuento con un amplio conocimiento en desarrollo Front-End (Vue.js, React.js, Next.js, Angular), además de sólidas capacidades en Back-End (PHP, Node.js, Laravel) para implementar soluciones integrales.",
        "p3": "Estoy comprometido con la calidad y la innovación tecnológica, trabajando con metodologías ágiles y bases de datos relacionales y no relacionales (MySQL, MongoDB, Firebase). Mi meta es construir arquitecturas que escalen sin acumular deuda técnica.",
        "stats": {
          "exp": "Años de Experiencia",
          "projects": "Proyectos en Producción",
          "edu": "Transformación Digital"
        },
        "education": {
          "title": "EDUCACIÓN",
          "master": "Maestría en Transformación Digital",
          "master_date": "2025 – Presente",
          "degree": "Ingeniería en Software",
          "degree_date": "2021 – 2025 · Titulado",
          "tech": "Técnico Analista Programador",
          "tech_date": "2018 – 2021"
        }
      },
      "experience": {
        "section": "TRAYECTORIA",
        "title": "Experiencia Profesional",
        "subtitle": "Mi recorrido construyendo software en el sector público y educativo.",
        "current": "ACTUAL",
        "list": [
          {
            "role": "Desarrollador Full-Stack",
            "company": "Universidad de Colima",
            "area": "Sistemas",
            "period": "Feb 2023 – Presente",
            "current": true,
            "description": "Diseño e implementación de sistemas web institucionales para la gestión académica y administrativa. Desarrollo de plataformas de planeación estratégica y módulos dinámicos.",
            "achievements": [
              "Sistema integral FLEX para la Facultad de Lenguas",
              "Plataforma de gestión de Diplomados DGEC",
              "Suite de Planeación 2026: POA26, Plan de Desarrollo (PD26) e Informe de Labores (INF_LAB26)",
              "Sistema de generación de Cotizaciones y Plataforma Sector Universitario"
            ],
            "tech": ["Vue.js", "React", "Node.js", "PHP", "Docker"]
          },
          {
            "role": "Desarrollador Front-End",
            "company": "HMH SISTEMAS",
            "area": "Desarrollo de Software",
            "period": "Oct 2023 – Nov 2024",
            "current": false,
            "description": "Implementación y mantenimiento de aplicaciones web modernas. Desarrollo centrado en la experiencia de usuario e interfaces.",
            "achievements": [
              "App Transcol: Desarrollo de aplicación para servicio de transporte público",
              "Sistema de Rastreo Montecristo: Plataforma de seguimiento y monitoreo"
            ],
            "tech": ["Next.js", "Vue", "React", "PHP", "GitLab"]
          },
          {
            "role": "Desarrollador / Freelance",
            "company": "Proyectos Independientes",
            "area": "Consultoría y Soluciones Digitales",
            "period": "Ene 2022 – Presente",
            "current": false,
            "description": "Creación de soluciones personalizadas. Desarrollo de aplicaciones móviles, comercio electrónico y portales web institucionales.",
            "achievements": [
              "Spaceflix App: PWA de e-commerce para servicios digitales (Ionic/Angular)",
              "Chatlive VNHE: Sistema de chat en vivo con panel administrativo (WebSockets/React)",
              "Payfri Wallet: Billetera digital y Sistema de Punto de Venta",
              "Actualización y optimización de sitio institucional para CNDH Colima"
            ],
            "tech": ["Flutter", "Ionic", "WebSockets", "WordPress"]
          }
        ]
      },
      "projects": {
        "title": "Proyectos Destacados",
        "subtitle": "Sistemas que he diseñado e implementado de principio a fin.",
        "visit": "Visitar Sitio",
        "play_store": "Ver en Play Store",
        "panels": {
          "flex": {
            "tag": "FLEX & IDIOMAS",
            "title": "Plataforma Integral FLEX",
            "desc": "Digitalización completa de inscripciones a cursos de idiomas, automatizando la asignación de niveles, validación de cupos y horarios. Más de <span class='text-text-primary font-medium'>miles de usuarios</span> interactuando con una interfaz fluida e intuitiva."
          },
          "suite": {
            "tag": "SUITE 2026",
            "title": "Suite Institucional 2026",
            "desc": "Desarrollo de sistemas robustos interconectados. Plataformas para la transparencia y gestión de datos complejos.",
             "items": [
              { "label": "POA_26", "desc": "Presupuesto" },
              { "label": "PD_26", "desc": "Plan de Desarrollo" },
              { "label": "INF_LAB_26", "desc": "Informe Labores" }
            ]
          },
          "spaceflix": {
            "tag": "PWA & MOBILE",
            "title": "Spaceflix App",
            "desc": "Aplicación e-commerce para servicios digitales. Publicada en la tienda con base de datos en tiempo real, autenticación segura y una experiencia PWA nativa."
          },
          "sector": {
            "tag": "INSTITUCIONAL",
            "title": "Sector Universitario",
            "desc": "Plataforma centralizada para la gestión de solicitudes, usuarios y direcciones dentro del ecosistema universitario. Incluye módulos de cotización y administración de recursos."
          },
          "cotizador": {
             "tag": "HERRAMIENTAS & FINANZAS",
             "title": "Sistemas Cotizadores DGEC & Vinculación",
             "desc": "Desarrollo de diferentes cotizadores especializados para la Universidad de Colima. Estas herramientas permiten calcular de manera precisa los costos de eventos, diplomados y la renta de espacios físicos, optimizando la gestión financiera y agilizando procesos institucionales."
          },
          "payfri": {
             "tag": "FREELANCE APP",
             "title": "Payfri Wallet",
             "desc": "Colaboré como desarrollador freelance en la creación de Payfri Wallet, una aplicación financiera disponible en la Play Store. Diseñada con un enfoque en la agilidad y experiencia del usuario para transacciones rápidas."
          }
        }
      },
      "archive": {
        "section": "ARCHIVO",
        "title": "Más Proyectos",
        "subtitle": "Proyectos complementarios que demuestran mi versatilidad técnica.",
        "visit": "Sitio Oficial",
        "cards": [
          {
            "id": "diplomados",
            "label": "DIPLOMADOS.v1",
            "title": "Catalogo DGEC - Diplomados y Cursos",
            "description": "Sistema integral para la visualización, filtrado y gestión de la oferta académica (diplomados y cursos) de Educación Continua. Implementado con React para una navegación ultra rápida.",
            "impact": "Centralización de ofertas educativas",
            "tags": ["React", "Educación Continua", "UI/UX"]
          },
          {
            "id": "cotizador",
            "label": "COTIZADOR.v1",
            "title": "Cotizador de Lámina y Pintura",
            "description": "Sistema automatizado para la generación de cotizaciones detalladas en talleres de hojalatería y pintura. Optimiza el cálculo de materiales, mano de obra y tiempos de entrega con exportación a PDF.",
            "impact": "Automatización de presupuestos y mejora en tiempos de respuesta al cliente.",
            "tags": ["Vue.js", "PHP", "Gestión", "PDF Export"]
          }
        ]
      },
      "manifesto": {
        "section": "FILOSOFÍA",
        "lines": [
          { "text": "No solo escribo líneas de código.", "style": "muted" },
          { "text": "Diseño soluciones que escalan", "style": "accent" },
          { "text": "y optimizan procesos.", "style": "bold" }
        ]
      },
      "stack": {
        "section": "HABILIDADES",
        "title": "Stack & Skills",
        "subtitle": "Las herramientas y competencias que uso día a día para construir software.",
        "categories": [
          {
            "title": "Frontend",
            "items": ["Angular", "Vue.js", "React.js", "Next.js", "HTML5/CSS3/SCSS", "Tailwind CSS"]
          },
          {
            "title": "Backend",
            "items": ["Node.js", "Express", "PHP", "Laravel", "REST API", "WebSockets"]
          },
          {
            "title": "Desarrollo Móvil",
            "items": ["Flutter & Dart", "Ionic & Capacitor", "PWA", "Android Studio"]
          },
          {
            "title": "Bases de Datos",
            "items": ["MySQL", "MariaDB", "MongoDB", "Firebase"]
          },
          {
            "title": "DevOps & CMS",
            "items": ["Docker", "Git/GitLab", "Google Cloud", "WordPress (Plugins)"]
          },
          {
            "title": "Soft Skills",
            "items": ["Comunicación efectiva", "Resolución de problemas", "Pensamiento crítico", "Autodidacta"]
          }
        ]
      },
      "footer": {
        "contact_tag": "CONTACTO",
        "contact_title": "¿Trabajamos juntos?",
        "contact_desc": "Estoy buscando nuevas oportunidades donde pueda aportar mi experiencia en desarrollo Full-Stack y transformación digital. ¡Hablemos!",
        "send_email": "Enviar Email",
        "preview_cv": "Previsualizar CV",
        "brand_desc": "Desarrollador Full-Stack especializado en transformación digital para el sector público y educativo.",
        "links_tag": "ENLACES",
        "nav_tag": "NAVEGACIÓN",
        "status": "Status:",
        "open_to_work": "Open to work",
        "rights": "Todos los derechos reservados."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
