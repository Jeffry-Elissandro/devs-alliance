export default function WeeklyTeam() {
  return (
    <section className="weekly-team-section">

      <div className="section-header">

        <h2>Equipo recomendado de la semana</h2>

        <p>
          Cada temporada favorece diferentes estrategias. Estos son los
          luchadores que actualmente recomendamos por su excelente rendimiento
          frente al jefe semanal.
        </p>

      </div>

      <div className="fighters-grid">

        {/* IZQUIERDA */}

        <article className="fighter-card">

          <span className="fighter-badge">
            RECOMENDADO
          </span>

          <img
            src="/season/fighters/bella_del_infierno.png"
            alt="Fukua"
            className="fighter-image"
          />

          <h3>Fukua</h3>

          <span className="fighter-variant">
            Vaporwave Vixen
          </span>

          <p>
            Excelente opción para aplicar daño constante durante combates
            prolongados gracias a su gran estabilidad.
          </p>

          <div className="fighter-info">

            <div>

              <strong>Rol</strong>

              <span>Daño Gradual</span>

            </div>

            <div>

              <strong>Dificultad</strong>

              <span>★★★★☆</span>

            </div>

          </div>

        </article>

        {/* CENTRO */}

        <article className="fighter-card featured">

          <span className="fighter-badge featured-badge">
            META ACTUAL
          </span>

          <img
            src="/season/fighters/marcada_por_el_fuego.png"
            alt="Annie"
            className="fighter-image"
          />

          <h3>Annie</h3>

          <span className="fighter-variant">
            Timeless Hero
          </span>

          <p>
            Nuestra principal recomendación de esta temporada. Posee un enorme
            potencial ofensivo y un rendimiento sobresaliente contra el jefe
            semanal.
          </p>

          <div className="fighter-info">

            <div>

              <strong>Rol</strong>

              <span>Daño Estratégico</span>

            </div>

            <div>

              <strong>Dificultad</strong>

              <span>★★★★★</span>

            </div>

          </div>

        </article>

        {/* DERECHA */}

        <article className="fighter-card">

          <span className="fighter-badge">
            ALTERNATIVA
          </span>

          <img
            src="/season/fighters/rey_de_las_bestias.png"
            alt="Beowulf"
            className="fighter-image"
          />

          <h3>Beowulf</h3>

          <span className="fighter-variant">
            Wulfsbane
          </span>

          <p>
            Una excelente alternativa para quienes buscan causar grandes picos
            de daño utilizando composiciones más agresivas.
          </p>

          <div className="fighter-info">

            <div>

              <strong>Rol</strong>

              <span>Daño Bruto</span>

            </div>

            <div>

              <strong>Dificultad</strong>

              <span>★★★☆☆</span>

            </div>

          </div>

        </article>

      </div>

    </section>
  );
}