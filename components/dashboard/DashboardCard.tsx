import Link from "next/link";

interface DashboardCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function DashboardCard({
  title,
  description,
  image,
  href,
}: DashboardCardProps) {
  return (
    <Link
      href={href}
      className="dashboard-card"
    >
      <img
        src={image}
        alt={title}
        className="dashboard-card-image"
      />

      <h2>{title}</h2>

      <p>{description}</p>

      <span className="dashboard-card-button">
        Explorar →
      </span>
    </Link>
  );
}