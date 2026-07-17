interface WelcomeCardProps {
  image: string;
  title: string;
  text: string;
}

export default function WelcomeCard({
  image,
  title,
  text,
}: WelcomeCardProps) {
  return (
    <section className="welcome-card">

      <img
        src={image}
        alt={title}
      />

      <div>

        <h2>{title}</h2>

        <p>{text}</p>

      </div>

    </section>
  );
}