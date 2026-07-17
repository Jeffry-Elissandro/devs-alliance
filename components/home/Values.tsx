export default function Values() {
  const values = [
    {
      title: "Comunidad",
      description:
        "Creemos que aprender es mejor cuando todos colaboran.",
    },
    {
      title: "Aprendizaje",
      description:
        "Compartimos conocimiento para que cada jugador pueda mejorar.",
    },
    {
      title: "Pasión",
      description:
        "Este proyecto nace del entusiasmo por crear algo útil para todos.",
    },
  ];

  return (
    <section className="values-section">
      <h2>Nuestros pilares</h2>

      <div className="values-grid">
        {values.map((value) => (
          <article
            key={value.title}
            className="value-card"
          >
            <h3>{value.title}</h3>

            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}