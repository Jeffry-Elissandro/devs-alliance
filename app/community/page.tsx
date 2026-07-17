import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import MemberMessage from "@/components/community/CommunityMessage";
import CurrentMembers from "@/components/community/CurrentMembers";
import RecentAdditions from "@/components/community/NewMembers";

export default function CommunityPage() {
  return (
    <PageTransition>
    <PageLayout
      hero={{
        title: "Comunidad",
        subtitle: "Personas que forman parte de DEV'S ALLIANCE",
        image: "/banners/community_banner.png",
      }}
      welcome={{
        image: "/images/guide.png",
        title: "¡Bienvenido a la Comunidad!",
        text:
          "Una alianza no está formada únicamente por estadísticas, victorias o resultados. Está formada por las personas que deciden compartir el camino.",
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
          title: "Inicio",
          href: "/home",
        },
      ]}
    >
      <MemberMessage />

      <CurrentMembers />

      <RecentAdditions />
    </PageLayout>
    </PageTransition>
  );
}