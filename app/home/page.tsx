import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Values from "@/components/home/Values";
import News from "@/components/home/News";
import Explore from "@/components/home/Explore";

export default function HomePage() {
  return (
    <PageTransition>
    <PageLayout
      hero={{
        title: "Inicio",
        subtitle: "Bienvenido a DEV'S ALLIANCE",
        image: "/banners/home_banner.png",
      }}
      welcome={{
        image: "/images/guide.png",
        title: "¡Bienvenido!",
        text:
          "Desde esta sección podrás conocer el propósito del proyecto y descubrir todo lo que encontrarás en DEV'S ALLIANCE.",
      }}
      nextSections={[
        {
          title: "Estadísticas",
          href: "/statistics",
        },
        {
          title: "Temporada",
          href: "/season",
        },
        {
          title: "Comunidad",
          href: "/community",
        },
      ]}
    >

        <About />

        <Features />

        <Values />

        <News />

        <Explore />

    </PageLayout>
    </PageTransition>
  );
}