export interface ChatPhoto {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const chatPhotos: ChatPhoto[] = [
  {
    id: "chat-01",
    title: "Momentos del Chat 💬",
    description:
      "Situaciones cursed y surrealistas...",
    image: "/assets/gallery/chat/chat-01.png",
  },
];