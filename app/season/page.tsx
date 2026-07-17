import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import GuildInfo from "@/components/season/GuildInfo";
import DevGuide from "@/components/season/DevGuide";
import CurrentSeason from "@/components/season/CurrentSeason";
import CommunityGuides from "@/components/season/CommunityGuides";
import WeeklyTeam from "@/components/season/WeeklyTeam";

export default function SeasonPage() {
  return (
    <PageTransition>
    <PageLayout
      hero={{
        title: "Temporada",
        subtitle: "Eventos, jefes y estrategias semanales",
        image: "/banners/season_banner.png",
      }}
      welcome={{
        image: "/images/guide.png",
        title: "¡Bienvenido a Temporada!",
        text:
          "Aquí encontrarás toda la información relacionada con los eventos semanales de Skullgirls Mobile, los jefes activos, estrategias recomendadas y los mejores equipos para obtener el máximo rendimiento.",
      }}
      nextSections={[
        {
          title: "Estadísticas",
          href: "/statistics",
        },
        {
          title: "Inicio",
          href: "/home",
        },
        {
          title: "Comunidad",
          href: "/community",
        },
      ]}
    >
      <GuildInfo />

      <DevGuide />

      <CurrentSeason />

      <CommunityGuides />

      <WeeklyTeam />

    </PageLayout>
    </PageTransition>
  );
}