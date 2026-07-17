import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import UnderConstruction from "@/components/shared/UnderConstruction";

export default function LegacyPage() {
  return (
    <PageTransition>
      <PageLayout
        hero={{
          title: "Legado",
          subtitle: "La historia de quienes construyeron la alianza",
          image: "/banners/legacy_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Bienvenido al Legado!",
          text:
            "Esta sección conservará la historia de DEV'S ALLIANCE, sus antiguos miembros, momentos importantes y las huellas que cada persona dejó dentro de la comunidad.",
        }}
        nextSections={[
          {
            title: "Inicio",
            href: "/home",
          },
          {
            title: "Comunidad",
            href: "/community",
          },
          {
            title: "Progreso",
            href: "/progress",
          },
        ]}
      >
        <UnderConstruction />
      </PageLayout>
    </PageTransition>
  );
}