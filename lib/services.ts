import { Code2, Smartphone, Network, Shield, Server, Wrench, HeadphonesIcon, Lightbulb } from "lucide-react"

export const services = [
  {
    slug: "desarrollo-web",
    icon: Code2,
    title: "Desarrollo Web",
    description: "Sitios web modernos, responsivos y optimizados para SEO",
    color: "text-primary",
    brochure: {
      headline: "Web moderna que vende y posiciona",
      bullets: [
        "Diseño moderno + responsive",
        "Optimización SEO base",
        "Velocidad y rendimiento",
        "Integración WhatsApp / formularios",
      ],
    },
  },
  {
    slug: "desarrollo-apps",
    icon: Smartphone,
    title: "Desarrollo de Apps",
    description: "Aplicaciones móviles nativas y multiplataforma",
    color: "text-accent",
    brochure: {
      headline: "Apps para operar y escalar tu negocio",
      bullets: [
        "MVP rápido para validar",
        "Android/iOS (según necesidad)",
        "Autenticación y roles",
        "Panel admin opcional",
      ],
    },
  },
  {
    slug: "redes-servidores",
    icon: Network,
    title: "Redes & Servidores",
    description: "Infraestructura de red robusta y configuración de servidores",
    color: "text-orange",
    brochure: {
      headline: "Infraestructura estable y segura",
      bullets: [
        "Redes cableadas / Wi-Fi",
        "Servidores y respaldos",
        "Monitoreo básico",
        "Documentación y soporte",
      ],
    },
  },
  {
    slug: "ciberseguridad",
    icon: Shield,
    title: "Ciberseguridad",
    description: "Protección avanzada contra amenazas y vulnerabilidades",
    color: "text-primary",
    brochure: {
      headline: "Prevención, control y respuesta",
      bullets: [
        "Hardening básico",
        "Backups y continuidad",
        "Revisión de vulnerabilidades",
        "Buenas prácticas y capacitación",
      ],
    },
  },
  {
    slug: "cctv-monitoreo",
    icon: Server,
    title: "CCTV & Monitoreo",
    description: "Sistemas de videovigilancia y monitoreo 24/7",
    color: "text-accent",
    brochure: {
      headline: "CCTV confiable y bien instalado",
      bullets: [
        "Instalación profesional",
        "Acceso remoto",
        "Grabación y retención",
        "Mantenimiento y soporte",
      ],
    },
  },
  {
    slug: "venta-mantenimiento",
    icon: Wrench,
    title: "Venta & Mantenimiento",
    description: "Equipos tecnológicos, instalación y soporte técnico",
    color: "text-orange",
    brochure: {
      headline: "Equipos + instalación + mantenimiento",
      bullets: [
        "Recomendación por necesidad",
        "Instalación y puesta a punto",
        "Mantenimiento preventivo",
        "Soporte correctivo",
      ],
    },
  },
  {
    slug: "soporte-ti",
    icon: HeadphonesIcon,
    title: "Soporte TI",
    description: "Asistencia técnica profesional para tu empresa",
    color: "text-primary",
    brochure: {
      headline: "Soporte profesional para operar sin estrés",
      bullets: [
        "Atención remota/presencial",
        "Mantenimiento mensual",
        "Gestión de incidentes",
        "SLA según plan",
      ],
    },
  },
  {
    slug: "consultoria",
    icon: Lightbulb,
    title: "Consultoría",
    description: "Asesoría experta para implementación de proyectos",
    color: "text-accent",
    brochure: {
      headline: "Planificación y ejecución sin improvisar",
      bullets: [
        "Diagnóstico",
        "Roadmap y prioridades",
        "Acompañamiento",
        "Documentación",
      ],
    },
  },
] as const
