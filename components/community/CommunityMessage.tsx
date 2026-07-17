export default function CommunityMessage() {
  return (
    <section className="community-message">
      <div className="community-message-content">
        <span className="community-message-icon">🤍</span>

        <h2 className="community-message__title">
          Un mensaje para quienes han sido parte
        </h2>

        <p className="community-message__text">
          Cada persona que pasó por esta alianza dejó algo.
          A veces fue apoyo, a veces constancia, a veces simplemente estar ahí.
          Algunos siguen caminando con nosotros y otros tomaron su propio rumbo,
          pero{" "}
          <strong className="community-message__highlight">
            ningún paso fue en vano.
          </strong>
        </p>

        <p className="community-message__text">
          Tomar decisiones no siempre es fácil. Hay momentos en los que toca
          pensar en el grupo, aunque eso duela más de lo que se nota desde fuera.
          Eso no borra lo vivido, ni el esfuerzo, ni el tiempo compartido.
        </p>

        <p className="community-message__text">
          Si hoy sigues aquí, gracias por quedarte.
          Si ya no estás, gracias por haber estado.
          Este espacio existe porque hubo personas que lo hicieron posible,
          aunque hoy no todas sigan presentes.
        </p>
      </div>
    </section>
  );
}