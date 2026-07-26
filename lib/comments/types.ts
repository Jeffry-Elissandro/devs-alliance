export interface Comment {
  id: string;

  nickname: string;

  message: string;

  createdAt: string;

  likes: number;

  member: boolean;

  featured: boolean;

  visible: boolean;
}