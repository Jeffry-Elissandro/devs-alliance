import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import UnderConstruction from "@/components/shared/UnderConstruction";

export default function ProgressPage() {
  return (
    <PageTransition>
      <PageLayout
        hero={{
          title: "Progreso",
          subtitle: "El crecimiento de la alianza y sus miembros",
          image: "/banners/progress_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Bienvenido a Progreso!",
          text:
            "Esta sección estará dedicada a mostrar la evolución de DEV'S ALLIANCE, sus logros, avances y el crecimiento de sus miembros a lo largo del tiempo.",
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
            title: "Legado",
            href: "/legacy",
          },
        ]}
      >
        <UnderConstruction />
      </PageLayout>
    </PageTransition>
  );
}