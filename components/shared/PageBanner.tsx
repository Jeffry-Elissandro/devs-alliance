interface PageBannerProps {
  title: string;
  description: string;
}

export default function PageBanner({
  title,
  description,
}: PageBannerProps) {
  return (
    <header className="page-banner">

      <h1>{title}</h1>

      <p>{description}</p>

    </header>
  );
}