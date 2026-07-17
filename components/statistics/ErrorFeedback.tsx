import "@/styles/statistics/feedback.css";

export default function ErrorFeedback() {
  return (
    <section className="error-feedback">
      <div className="feedback-content">
        <span className="feedback-kicker">
          TRANSPARENCIA Y MEJORA
        </span>

        <h2>
          ¿Encontraste un error?
        </h2>

        <p>
          Las estadísticas se calculan a partir de los datos disponibles. Si
          encuentras un resultado incorrecto, un dato desactualizado o
          consideras que algo debe revisarse, puedes comunicarlo.
        </p>

        <p>
          Toda observación puede ayudar a mejorar la precisión del sistema y
          hacer que la información sea más útil para toda la comunidad.
        </p>

        <a
          href="https://wa.me/50248320737" target="_blank"
          className="feedback-button"
        >
          Comunicar un error
        </a>
      </div>
    </section>
  );
}