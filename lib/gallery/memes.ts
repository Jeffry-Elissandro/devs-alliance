export interface Meme {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const memes: Meme[] = [
  {
    id: "meme-01",
    title: "Skull-meme del día 💀",
    description:
      "Feliz jueves!",
    image: "/assets/gallery/memes/skull_meme_51.png",
  },
];