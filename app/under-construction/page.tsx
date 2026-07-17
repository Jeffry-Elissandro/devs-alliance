import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

export default function UnderConstructionPage() {
  return (
    <PageTransition>
      <PageLayout
        hero={{
          title: "Sección en Construcción",
          subtitle: "Este espacio todavía está siendo desarrollado",
          image: "/banners/construction_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Estamos trabajando en esta sección!",
          text:
            "Esta parte de DEV'S WEB todavía se encuentra en desarrollo. Muy pronto contará con nuevo contenido, funciones y experiencias para la comunidad.",
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
        <section className="under-construction-content">
          <div className="under-construction-icon">
            🚧
          </div>

          <h2>Sección en Construcción</h2>

          <p>
            Estamos preparando algo nuevo para este espacio.
          </p>

          <p>
            Mientras tanto, puedes regresar al inicio o explorar las demás
            secciones disponibles de DEV&apos;S WEB.
          </p>
        </section>
      </PageLayout>
    </PageTransition>
  );
}