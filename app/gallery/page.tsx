import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import FanArtGallery from "@/components/gallery/FanArtGallery";
import MemeSection from "@/components/gallery/MemeSection";
import ChatPhotos from "@/components/gallery/ChatPhotos";

export default function GalleryPage() {
  return (
    <PageTransition>
      <PageLayout
        hero={{
          title: "Galería",
          subtitle: "Arte, momentos y recuerdos de la comunidad",
          image: "/banners/gallery_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Bienvenido a la Galería!",
          text:
            "Este espacio reúne diferentes momentos de la comunidad de DEV'S ALLIANCE. Aquí encontrarás fan-arts de los personajes de Skullgirls Mobile, memes y capturas de situaciones memorables compartidas dentro del chat.",
        }}
        nextSections={[
          {
            title: "Comunidad",
            href: "/community",
          },
          {
            title: "Estadísticas",
            href: "/statistics",
          },
          {
            title: "Inicio",
            href: "/home",
          },
        ]}
      >
        <FanArtGallery />

        <MemeSection />

        <ChatPhotos />
      </PageLayout>
    </PageTransition>
  );
}