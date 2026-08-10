import { data } from "@/lib/progress/data";

export default function FinalClassification() {
  return (
    <section className="final-classification">

      <div className="final-classification-header">

        <span>
          TEMPORADA FINALIZADA - 02/08/2026
        </span>

        <h2>
          Clasificación Final
        </h2>

        <p>
          Resultado obtenido por DEV&apos;S ALLIANCE al finalizar la temporada.
        </p>

      </div>

      <div className="final-classification-podium">

        <div className="final-classification-result">

          <div className="final-classification-icon">
            <img src="/images/devs_alliance_icon.png" alt="icono" width={100} height={100} />
          </div>

          <span>
            TOP FINAL
          </span>

          <strong>
            #{data.clasif_final}
          </strong>

        </div>

        <div className="final-classification-divider" />

        <div className="final-classification-result">

          <div className="final-classification-icon">
            <img src="/icons/elements/guilds_score_icon.png" alt="icono" width={100} height={100} />
          </div>

          <span>
            SCORE FINAL
          </span>

          <strong>
            {data.score_final.toLocaleString("es-GT")}
          </strong>

        </div>

      </div>

    </section>
  );
}