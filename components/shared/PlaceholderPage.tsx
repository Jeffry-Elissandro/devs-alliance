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
      title={title}
      description={description}
    >

      <div className="placeholder-page">

        <section className="placeholder-card">

          <h2>Sección en desarrollo</h2>

          <p>{description}</p>

        </section>

      </div>

    </PageLayout>
  );
}