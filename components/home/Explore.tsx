import Link from "next/link";

export default function Explore() {
  return (
    <section className="explore-section">

      <h2>Continúa explorando</h2>

      <p>
        Cada sección del sitio ha sido diseñada para ofrecerte
        nuevas herramientas, información y recursos para la comunidad.
      </p>

      <Link
        href="/dashboard"
        className="explore-button"
      >
        Volver al Dashboard
      </Link>

    </section>
  );
}