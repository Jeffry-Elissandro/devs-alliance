export default function DevGuide() {
  return (
    <section className="dev-guide-section">

      <div className="section-header">

        <h2>Guía Oficial DEV'S ALLIANCE</h2>

        <p>
          Aprende el funcionamiento de los Eventos de Gremio mediante nuestra
          guía oficial. En este video encontrarás la forma en que trabajamos,
          consejos para aumentar tu rendimiento y recomendaciones para colaborar
          con el resto de la alianza.
        </p>

      </div>

      <div className="dev-guide-card">

        <div className="video-wrapper">

          <iframe
            src="https://www.youtube.com/embed/aNyZGd1VZoI"
            title="Guía Oficial DEV'S ALLIANCE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        </div>

        <div className="guide-footer">

          <div>

            <h3>Operaciones de Gremio</h3>

            <span>
              Video oficial de DEV'S ALLIANCE
            </span>

          </div>

          <a
            href="https://www.youtube.com/watch?v=aNyZGd1VZoI"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-button"
          >
            ▶ Ver en YouTube
          </a>

        </div>

      </div>

    </section>
  );
}