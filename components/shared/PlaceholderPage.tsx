import PageLayout from "./PageLayout";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <PageLayout
      hero={{
        title,
        subtitle: "Esta sección se encuentra actualmente en desarrollo",
        image: "/banners/default_banner.png",
      }}
      welcome={{
        image: "/images/guide.png",
        title: `¡Bienvenido a ${title}!`,
        text: description,
      }}
      nextSections={[
        {
          title: "Inicio",
          href: "/home",
        },
        {
          title: "Comunidad",
          href: "/community",
        },
        {
          title: "Galería",
          href: "/gallery",
        },
      ]}
    >
      <div className="placeholder-page">
        <section className="placeholder-card">
          <h2>Sección en desarrollo</h2>

          <p>{description}</p>

          <p>
            Estamos trabajando para preparar esta sección y añadir nuevo
            contenido a DEV&apos;S ALLIANCE.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}