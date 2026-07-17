import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import UnderConstruction from "@/components/shared/UnderConstruction";

export default function StrategyPage() {
  return (
    <PageTransition>
      <PageLayout
        hero={{
          title: "Estrategia",
          subtitle: "Conocimiento, coordinación y preparación para avanzar",
          image: "/banners/strategy_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Bienvenido a Estrategia!",
          text:
            "Esta sección estará dedicada a estrategias, recomendaciones y conocimientos útiles para que los miembros puedan mejorar su rendimiento dentro de Skullgirls Mobile.",
        }}
        nextSections={[
          {
            title: "Inicio",
            href: "/home",
          },
          {
            title: "Estadísticas",
            href: "/statistics",
          },
          {
            title: "Temporada",
            href: "/season",
          },
        ]}
      >
        <UnderConstruction />
      </PageLayout>
    </PageTransition>
  );
}