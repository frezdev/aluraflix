export interface Video {
  id: number;
  title: string;
  category: string;
  categoryId: number;
  image: string;
  description: string;
  url: string;
}
export interface Category {
  id: number;
  title: string;
  description: string;
  asentColor: string;
}