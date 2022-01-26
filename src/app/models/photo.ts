import { Commentaire } from './comment';

export interface Photo {
  src: string;
  description: string;
  comments?: Commentaire[];
  postedBy: number;
  postedAt: number;
}
