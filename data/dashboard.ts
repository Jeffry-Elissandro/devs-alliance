export interface DashboardItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const dashboardData: DashboardItem[] = [
  {
    title: "Inicio",
    description: "Información principal.",
    image: "/images/dashboard/chibi_peacock.png",
    href: "/home",
  },
  {
    title: "Temporada",
    description: "Eventos y temporada.",
    image: "/images/dashboard/chibi_fortune.png",
    href: "/season",
  },
  {
    title: "Estadísticas",
    description: "Datos y rendimientos.",
    image: "/images/dashboard/chibi_robofortune.png",
    href: "/statistics",
  },
  {
    title: "Estrategias",
    description: "Guías y consejos.",
    image: "/images/dashboard/chibi_eliza.png",
    href: "/strategy",
  },
  {
    title: "Comunidad",
    description: "Miembros y participación.",
    image: "/images/dashboard/chibi_squigly.png",
    href: "/community",
  },
  {
    title: "Galería",
    description: "Capturas y recuerdos.",
    image: "/images/dashboard/chibi_annie.png",
    href: "/gallery",
  },
  {
    title: "Comentarios",
    description: "Opiniones de la comunidad.",
    image: "/images/dashboard/chibi_fukua.png",
    href: "/comments",
  },
  {
    title: "Historia",
    description: "Legado de DEV'S ALLIANCE.",
    image: "/images/dashboard/chibi_valentine.png",
    href: "/legacy",
  },
  {
    title: "Reglas",
    description: "Normas del gremio.",
    image: "/images/dashboard/chibi_parasoul.png",
    href: "/rules",
  },
  {
    title: "Progreso",
    description: "Objetivos alcanzados.",
    image: "/images/dashboard/chibi_cerebella.png",
    href: "/progress",
  },
  {
    title: "Multimedia",
    description: "Videos y contenido visual.",
    image: "/images/dashboard/chibi_bigband.png",
    href: "/media",
  },
  {
    title: "Contacto",
    description: "Ponte en contacto con nosotros.",
    image: "/images/dashboard/chibi_filia.png",
    href: "/contact",
  },
];