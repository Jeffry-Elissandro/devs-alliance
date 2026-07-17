const guides = [
  {
    title: "Estrategia Principal",
    description:
      "Aprende una estrategia sólida para enfrentar al Jefe de Inmortales. Esta guía explica el funcionamiento de los modificadores y cómo aprovechar al máximo tu equipo.",
    creator: "AlannAx",
    difficulty: "Intermedio",
    video: "https://www.youtube.com/embed/EsdLZ80r1cE",
    youtube: "https://www.youtube.com/watch?v=EsdLZ80r1cE",
  },

  {
    title: "Más Variedad de Equipos",
    description:
      "Si buscas alternativas, esta guía presenta distintas composiciones de luchadores para adaptarte a los personajes que tengas disponibles.",
    creator: "Deny17S",
    difficulty: "Intermedio / Avanzado",
    video: "https://www.youtube.com/embed/VGm-StKu0Kk",
    youtube: "https://www.youtube.com/watch?v=VGm-StKu0Kk",
  },

  {
    title: "Estrategia Histórica",
    description:
      "Un video que muestra una de las estrategias más curiosas que existieron antes de ser corregida por los desarrolladores. Aunque ya no funciona, sigue siendo parte de la historia del juego.",
    creator: "RodirKW",
    difficulty: "Curiosidad",
    video: "https://www.youtube.com/embed/tVqGYTvZyn8",
    youtube: "https://www.youtube.com/watch?v=tVqGYTvZyn8",
  },
];

export default function CommunityGuides() {
  return (
    <section className="community-guides-section">

      <div className="section-header">

        <h2>Guías recomendadas por la comunidad</h2>

        <p>
          Además de nuestra guía oficial, queremos reconocer el excelente
          trabajo realizado por distintos creadores de contenido que comparten
          estrategias, equipos y consejos para superar cada temporada.
        </p>

      </div>

      <div className="guides-list">

        {guides.map((guide, index) => (

          <article
            key={guide.title}
            className={`guide-card ${
              index % 2 === 1 ? "reverse" : ""
            }`}
          >

            <div className="guide-info">

              <span className="guide-tag">
                CREADOR DESTACADO
              </span>

              <h3>{guide.title}</h3>

              <p>{guide.description}</p>

              <div className="guide-meta">

                <div>

                  <strong>Creador</strong>

                  <span>{guide.creator}</span>

                </div>

                <div>

                  <strong>Dificultad</strong>

                  <span>{guide.difficulty}</span>

                </div>

              </div>

              <a
                href={guide.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-button"
              >
                ▶ Ver en YouTube
              </a>

            </div>

            <div className="guide-video">

              <iframe
                src={guide.video}
                title={guide.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}