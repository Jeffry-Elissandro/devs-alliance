import "@/styles/statistics/results.css";

import { evaluateMembers } from "@/lib/statistics/calculations";
import { weeklyMembers } from "@/lib/statistics/data";

export default function WeeklyResults() {
  const members = evaluateMembers(weeklyMembers);

  return (
    <section className="weekly-results">
      <div className="results-header">
        <span className="results-kicker">
          RESULTADOS SEMANALES
        </span>

        <h2>
          Rendimiento de la alianza
        </h2>

        <p>
          Consulta visualmente el desempeño de cada miembro a partir de los
          puntos obtenidos, el daño realizado y la consistencia general.
        </p>
      </div>

      <div className="results-list">
        {members.map((member) => (
          <article
            className="result-row"
            key={member.id}
          >
            <div className="result-member">
              <strong>
                {member.name}
              </strong>

              <span>
                {member.status}
              </span>
            </div>

            <div className="result-metrics">
              <div className="result-metric">
                <div className="metric-label">
                  <span>Puntos</span>
                  <strong>
                    {member.pointsGrade.toFixed(1)}
                  </strong>
                </div>

                <div className="metric-bar">
                  <span
                    style={{
                      width: `${member.pointsGrade * 10}%`,
                    }}
                  />
                </div>
              </div>

              <div className="result-metric">
                <div className="metric-label">
                  <span>Daño</span>
                  <strong>
                    {member.damageGrade.toFixed(1)}
                  </strong>
                </div>

                <div className="metric-bar">
                  <span
                    style={{
                      width: `${member.damageGrade * 10}%`,
                    }}
                  />
                </div>
              </div>

              <div className="result-metric result-metric-consistency">
                <div className="metric-label">
                  <span>Consistencia</span>
                  <strong>
                    {member.consistency.toFixed(1)}
                  </strong>
                </div>

                <div className="metric-bar">
                  <span
                    style={{
                      width: `${member.consistency * 10}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="result-score">
              <span>
                SCORE
              </span>

              <strong>
                {member.score.toFixed(1)}%
              </strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}