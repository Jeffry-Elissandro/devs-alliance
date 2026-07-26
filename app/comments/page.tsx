import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import CommentSection from "@/components/comments/CommentSection";

export default function CommentsPage() {

  return (

    <PageTransition>

      <PageLayout
        hero={{
          title: "Comentarios",
          subtitle: "Comparte tu experiencia con DEV'S ALLIANCE",
          image: "/banners/comments_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Bienvenido a Comentarios!",
          text:
            "Este espacio está pensado para que cualquier visitante pueda compartir su experiencia dentro de DEV'S ALLIANCE. Tu opinión ayuda a mejorar la comunidad y puede servir de orientación para futuros miembros.",
        }}
        nextSections={[
          {
            title: "Comunidad",
            href: "/community",
          },
          {
            title: "Galería",
            href: "/gallery",
          },
          {
            title: "Inicio",
            href: "/home",
          },
        ]}
      >

        <CommentSection />

      </PageLayout>

    </PageTransition>

  );

}