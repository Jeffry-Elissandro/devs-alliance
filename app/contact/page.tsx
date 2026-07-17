import PageTransition from "@/components/transitions/PageTransition";
import PageLayout from "@/components/shared/PageLayout";

import UnderConstruction from "@/components/shared/UnderConstruction";

export default function ContactPage() {
  return (
    <PageTransition>
      <PageLayout
        hero={{
          title: "Contacto",
          subtitle: "Comunícate con DEV'S WEB",
          image: "/banners/contact_banner.png",
        }}
        welcome={{
          image: "/images/guide.png",
          title: "¡Bienvenido a Contacto!",
          text:
            "Aquí podrás encontrar diferentes formas de comunicarte con nosotros.",
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
        ]}
      >
        <UnderConstruction />
      </PageLayout>
    </PageTransition>
  );
}