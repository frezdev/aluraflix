export interface Video {
  id: number;
  title: string;
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

export type CustomHandleChange = React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
