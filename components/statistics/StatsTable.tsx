import "@/styles/statistics/table.css";

import { evaluateMembers } from "@/lib/statistics/calculations";
import { weeklyMembers } from "@/lib/statistics/data";

export default function StatsTable() {
  const members = evaluateMembers(weeklyMembers);

  return (
    <section className="stats-table-section">
      <div className="table-header">
        <span className="table-kicker">
          TABLA DE STATS
        </span>

        <h2>
          Datos detallados de rendimiento
        </h2>

        <p>
          Consulta los valores utilizados para calcular el rendimiento semanal
          de cada miembro.
        </p>
      </div>

      <div className="stats-table-wrapper">
        <table className="stats-table">
          <thead>
            <tr>
              <th>Jugador</th>
              <th>Estado</th>
              <th>Puntos</th>
              <th>Daño</th>
              <th>Consistencia</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="table-player">
                  {member.name}
                </td>

                <td>
                  <span
                    className={`status-badge status-${member.status
                      .toLowerCase()
                      .replace("ó", "o")}`}
                  >
                    {member.status}
                  </span>
                </td>

                <td>
                  {member.points} pts
                </td>

                <td>
                  {member.damage}M
                </td>

                <td>
                  {member.consistency.toFixed(2)}
                </td>

                <td className="table-score">
                  {member.score.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}