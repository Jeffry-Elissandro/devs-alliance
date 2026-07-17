import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import UnderConstruction from "@/components/shared/UnderConstruction";

export default function MediaPage() {
  return (
    <PageTransition>
      <PageLayout
        hero={{
          title: "Multimedia",
          subtitle: "Contenido multimedia de la comunidad",
          image: "/banners/media_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Bienvenido a Multimedia!",
          text:
            "Esta sección reunirá diferentes contenidos multimedia relacionados con DEV'S ALLIANCE.",
        }}
        nextSections={[
          {
            title: "Inicio",
            href: "/home",
          },
          {
            title: "Galería",
            href: "/gallery",
          },
          {
            title: "Comunidad",
            href: "/community",
          },
        ]}
      >
        <UnderConstruction />
      </PageLayout>
    </PageTransition>
  );
}