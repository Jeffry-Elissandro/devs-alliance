import { chatPhotos } from "@/lib/gallery/chatPhotos";

export default function ChatPhotos() {
  const chatPhoto = chatPhotos[0];

  if (!chatPhoto) {
    return null;
  }

  return (
    <section className="gallery-chat">
      <div className="gallery-chat__header">
        <span> </span>

        <h2>{chatPhoto.title}</h2>
      </div>

      <div className="gallery-chat-card">
        <p className="gallery-chat-card__description">
          {chatPhoto.description}
        </p>

        <img
          src={chatPhoto.image}
          alt={chatPhoto.title}
        />
      </div>
    </section>
  );
}