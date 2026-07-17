import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import UnderConstruction from "@/components/shared/UnderConstruction";

export default function CommentsPage() {
  return (
    <PageTransition>
      <PageLayout
        hero={{
          title: "Comentarios",
          subtitle: "Las palabras de quienes forman parte de la comunidad",
          image: "/banners/comments_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Bienvenido a Comentarios!",
          text:
            "Esta sección reunirá opiniones, mensajes y experiencias compartidas por los miembros de DEV'S ALLIANCE.",
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
            title: "Galería",
            href: "/gallery",
          },
        ]}
      >
        <UnderConstruction />
      </PageLayout>
    </PageTransition>
  );
}