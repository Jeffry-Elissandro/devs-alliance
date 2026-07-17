import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import UnderConstruction from "@/components/shared/UnderConstruction";

export default function RulesPage() {
  return (
    <PageTransition>
      <PageLayout
        hero={{
          title: "Reglas",
          subtitle: "Normas para mantener una comunidad fuerte y organizada",
          image: "/banners/rules_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Bienvenido a las Reglas!",
          text:
            "En esta sección encontrarás las normas y principios que ayudan a mantener el orden, el respeto y la buena convivencia dentro de DEV'S ALLIANCE.",
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
            title: "Estrategia",
            href: "/strategy",
          },
        ]}
      >
        <UnderConstruction />
      </PageLayout>
    </PageTransition>
  );
}