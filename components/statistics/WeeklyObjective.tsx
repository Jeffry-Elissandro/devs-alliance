import "@/styles/statistics/objective.css";

export default function WeeklyObjective() {
  return (
    <section className="weekly-objective">
      <div className="objective-header">
        <span className="objective-kicker">
          OBJETIVO SEMANAL
        </span>

        <h2>
          Todos podemos alcanzar la cima
        </h2>

        <p>
          Estas metas representan una referencia para medir el rendimiento
          semanal y ayudar a que cada miembro contribuya al crecimiento de la
          alianza.
        </p>
      </div>

      <div className="objective-grid">
        <article className="objective-card objective-points">
          <div className="objective-icon">
            🏅
          </div>

          <div className="objective-content">
            <span className="objective-label">
              META PRINCIPAL
            </span>

            <h3>
              500 Puntos
            </h3>

            <p>
              La meta principal de la alianza. Alcanzar esta cantidad demuestra
              una participación constante durante la semana.
            </p>
          </div>
        </article>

        <article className="objective-card objective-damage">
          <div className="objective-icon">
            ⚔️
          </div>

          <div className="objective-content">
            <span className="objective-label">
              DAÑO RECOMENDADO
            </span>

            <h3>
              200M de Daño
            </h3>

            <p>
              Una referencia recomendada para medir la contribución en combate.
              El daño es importante, aunque tiene menor peso que los puntos en
              la evaluación general.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}