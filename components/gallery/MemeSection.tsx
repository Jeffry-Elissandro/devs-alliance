import { memes } from "@/lib/gallery/memes";

export default function MemeSection() {
  const meme = memes[0];

  if (!meme) {
    return null;
  }

  return (
    <section className="meme-section">
      <div className="meme-header">
        <span> </span>

        <h2>{meme.title}</h2>
      </div>

      <div className="meme-image-wrapper">
        <img
          src={meme.image}
          alt={meme.title}
          className="meme-image"
        />
      </div>

      <p className="meme-description">
        {meme.description}
      </p>
    </section>
  );
}