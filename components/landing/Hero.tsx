import Link from "next/link";
import { landingData } from "@/data/landing";

export default function Hero() {
  return (
    <main className="landing">

      <section className="hero-card">

        <div className="logo-container">

    <img
        className="logo"
        src="/images/devs_alliance_icon.png"
        alt="DEV'S ALLIANCE"
        width={150}
        height={150}
    />

</div>

        <div className="title-container">

    <h1>{landingData.title}</h1>

    <p className="subtitle">

        {landingData.subtitle}

    </p>

</div>

        <div className="quote-container">

    <blockquote>

        "{landingData.quote}"

    </blockquote>

    <span className="author">

        {landingData.author}

    </span>

</div>

        <div className="divider"></div>

<div className="info-container">

    {landingData.info.map((item) => (

        <div
            className="info-item"
            key={item.title}
        >

            <h3>{item.title}</h3>

            <p>{item.value}</p>

        </div>

    ))}

</div>

        <div className="button-container">

    <Link
    href="/dashboard"
    className="start-button">

    {landingData.button}

</Link>

</div>

      </section>

    </main>
  );
}