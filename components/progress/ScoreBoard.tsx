import { data } from "@/lib/progress/data";
import { getProgressData } from "@/lib/progress/logic";

export default function ScoreBoard() {
  const progress = getProgressData(data.score_actual);

  return (
    <section className="score-board">

      <div className="score-board-content">

        <div className="score-board-logo">

          <div className="score-board-logo-placeholder">
            <img src="/images/devs_alliance_icon.png" alt="icono" width={100} height={100} />
          </div>

        </div>

        <div className="score-board-info">

          <span className="score-board-position-label">
            POSICIÓN ACTUAL
          </span>

          <strong className="score-board-position">
            #{data.posición_top}
          </strong>

          <h2>
            DEV&apos;S ALLIANCE
          </h2>

          <div className="score-board-score">

            <strong>
              {progress.score.toLocaleString("es-GT")}
            </strong>

            <span>
              medallas
            </span>

          </div>

        </div>

      </div>

      <p className="score-board-note">
        Posición actual del gremio en la clasificación global de la temporada.
      </p>

    </section>
  );
}