const modifiers = [
  {
    code: "SA1",
    title: "Golpes Críticos",
    description:
      "Los golpes críticos de cualquiera de los luchadores aplican Sangrado durante 5 segundos, además de Inutilización y Marca de la Muerte durante 10 segundos.",
  },

  {
    code: "SA2",
    title: "Ataque Permanente",
    description:
      "Cada golpe crítico cuerpo a cuerpo aumenta permanentemente el Ataque del luchador en un 5 %.",
  },

  {
    code: "SA3",
    title: "Ejecución",
    description:
      "Los golpes críticos de Ms. Fortune aumentan permanentemente su Daño Crítico un 10 %. Si el enemigo tiene Marca de la Muerte existe un 25 % de probabilidad de derrotarlo instantáneamente.",
  },

  {
    code: "SA4",
    title: "Contraataque",
    description:
      "Los golpes no críticos fortalecen a Ms. Fortune mientras debilitan al rival. Si es derribada, el luchador activo obtiene Probabilidad y Daño Crítico durante 15 segundos.",
  },

  {
    code: "SA5",
    title: "Power Surge",
    description:
      "Los golpes no críticos aplican Power Surge durante 10 segundos. Además, los ataques cuerpo a cuerpo infligen más daño por cada Beneficio y Perjuicio presente en combate.",
  },
];

export default function BossSeason() {
  return (
    <section className="boss-season">

      <div className="boss-layout">

        <div className="boss-image">

          <img
            src="/season/bosses/Critty_Kitty.png"
            alt="Critty Kitty"
          />

        </div>

        <div className="boss-content">

          <span className="boss-tag">
            TEMPORADA ACTUAL
          </span>

          <h2>Critty Kitty</h2>

          <p className="boss-description">
            Critty Kitty es el Jefe de Inmortales activo durante esta semana.
            Conocer sus modificadores te permitirá preparar mejores equipos y
            maximizar el daño durante toda la temporada.
          </p>

          <div className="boss-duration">

            <strong>Duración</strong>

            <span>7 días</span>

          </div>

          <div className="boss-modifiers">

            {modifiers.map((modifier, index) => (

              <article
                key={modifier.code}
                className={`modifier-card modifier-${index + 1}`}
              >

                <span className="modifier-code">

                  {modifier.code}

                </span>

                <h4>

                  {modifier.title}

                </h4>

                <p>

                  {modifier.description}

                </p>

              </article>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}