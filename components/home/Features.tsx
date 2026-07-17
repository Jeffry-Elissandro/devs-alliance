export default function Features() {
  const features = [
    {
      title: "Guías",
      description:
        "Aprende estrategias, mecánicas y consejos para mejorar tu experiencia en Skullgirls Mobile.",
    },
    {
      title: "Estadísticas",
      description:
        "Consulta información, progreso, registros y análisis de la comunidad.",
    },
    {
      title: "Multimedia",
      description:
        "Descubre imágenes, videos, música y contenido visual relacionado con DEV'S ALLIANCE.",
    },
    {
      title: "Proyectos",
      description:
        "Explora las herramientas y desarrollos creados para apoyar a la comunidad.",
    },
  ];

  return (
    <section className="features-section">
      <h2>¿Qué encontrarás aquí?</h2>

      <div className="features-grid">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="feature-card"
          >
            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}