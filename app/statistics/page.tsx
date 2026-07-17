import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import WeeklyObjective from "@/components/statistics/WeeklyObjective";
import ExecutiveSummary from "@/components/statistics/ExecutiveSummary";
import WeeklyResults from "@/components/statistics/WeeklyResults";
import StatsTable from "@/components/statistics/StatsTable";
import EvaluationMethod from "@/components/statistics/EvaluationMethod";
import ErrorFeedback from "@/components/statistics/ErrorFeedback";

export default function StatisticsPage() {
  return (
    <PageTransition>
    <PageLayout
      hero={{
        title: "Estadísticas",
        subtitle: "Rendimiento y resultados de la alianza",
        image: "/banners/statistics_banner.png",
      }}
      welcome={{
        image: "/images/guide.png",
        title: "¡Bienvenido a las Estadísticas!",
        text:
          "Consulta los resultados semanales, comprende cómo se evalúan los datos y revisa el desempeño de la alianza.",
      }}
      nextSections={[
        {
          title: "Galería",
          href: "/gallery",
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
      <WeeklyObjective />

      <ExecutiveSummary />

      <WeeklyResults />

      <StatsTable />

      <EvaluationMethod />

      <ErrorFeedback />
    </PageLayout>
    </PageTransition>
  );
}