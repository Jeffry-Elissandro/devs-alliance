import Link from "next/link";

interface NextSectionProps {
  items: {
    title: string;
    href: string;
  }[];
}

export default function NextSection({
  items,
}: NextSectionProps) {
  return (
    <section className="next-section">

      <h2>

        ¿Qué deseas descubrir ahora?

      </h2>

      <div>

        {items.map((item) => (

          <Link
            key={item.title}
            href={item.href}
          >
            {item.title}
          </Link>

        ))}

      </div>

    </section>
  );
}