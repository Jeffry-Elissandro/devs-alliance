import "@/styles/statistics/evaluation.css";

export default function EvaluationMethod() {
  return (
    <section className="evaluation-method">
      <div className="evaluation-header">
        <span className="evaluation-kicker">
          ¿CÓMO SE EVALÚA?
        </span>

        <h2>
          El rendimiento se calcula mediante datos
        </h2>

        <p>
          El sistema analiza los resultados semanales de cada miembro y los
          transforma en indicadores comparables.
        </p>
      </div>

      <div className="evaluation-grid">
        <article className="evaluation-step">
          <span className="evaluation-number">
            01
          </span>

          <h3>
            Puntos
          </h3>

          <p>
            Los puntos representan el principal indicador de participación
            dentro de la alianza.
          </p>

          <strong>
            Peso: 85%
          </strong>
        </article>

        <article className="evaluation-step">
          <span className="evaluation-number">
            02
          </span>

          <h3>
            Daño
          </h3>

          <p>
            El daño refleja la contribución ofensiva realizada durante el
            periodo evaluado.
          </p>

          <strong>
            Peso: 15%
          </strong>
        </article>

        <article className="evaluation-step">
          <span className="evaluation-number">
            03
          </span>

          <h3>
            Consistencia
          </h3>

          <p>
            Combina ambos factores para obtener una visión equilibrada del
            rendimiento general.
          </p>

          <strong>
            Puntos + Daño
          </strong>
        </article>

        <article className="evaluation-step">
          <span className="evaluation-number">
            04
          </span>

          <h3>
            Clasificación
          </h3>

          <p>
            El resultado final se transforma en un porcentaje y se clasifica
            según el nivel de rendimiento alcanzado.
          </p>

          <strong>
            Score final
          </strong>
        </article>
      </div>
    </section>
  );
}