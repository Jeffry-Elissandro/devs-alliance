import "@/styles/statistics/summary.css";

import { evaluateMembers } from "@/lib/statistics/calculations";
import { weeklyMembers } from "@/lib/statistics/data";

export default function ExecutiveSummary() {
  const members = evaluateMembers(weeklyMembers);

  const totalMembers = members.length;

  const averageScore =
    totalMembers > 0
      ? members.reduce((total, member) => total + member.score, 0) /
        totalMembers
      : 0;

  const topCount = members.filter(
    (member) => member.status === "TOP"
  ).length;

  const inefficientCount = members.filter(
    (member) => member.status === "Ineficiente"
  ).length;

  return (
    <section className="executive-summary">
      <div className="summary-header">
        <span className="summary-kicker">
          RESUMEN EJECUTIVO
        </span>

        <h2>
          Una visión rápida del rendimiento
        </h2>

        <p>
          Estos indicadores ofrecen una visión general del comportamiento de la
          alianza durante el periodo evaluado.
        </p>
      </div>

      <div className="summary-grid">
        <article className="summary-card">
          <span className="summary-card-label">
            MIEMBROS EVALUADOS
          </span>

          <strong>
            {totalMembers}
          </strong>

          <p>
            Miembros incluidos en el análisis semanal.
          </p>
        </article>

        <article className="summary-card">
          <span className="summary-card-label">
            RENDIMIENTO PROMEDIO
          </span>

          <strong>
            {averageScore.toFixed(1)}%
          </strong>

          <p>
            Promedio general obtenido por la alianza.
          </p>
        </article>

        <article className="summary-card">
          <span className="summary-card-label">
            JUGADORES TOP
          </span>

          <strong>
            {topCount}
          </strong>

          <p>
            Miembros que alcanzaron el máximo rendimiento.
          </p>
        </article>

        <article className="summary-card summary-card-warning">
          <span className="summary-card-label">
            EN RIESGO
          </span>

          <strong>
            {inefficientCount}
          </strong>

          <p>
            Resultados que requieren atención y seguimiento.
          </p>
        </article>
      </div>
    </section>
  );
}