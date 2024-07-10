export interface Video {
  id: readonly number;
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

export interface CreatedVideo {
  title: string;
  categoryId: number;
  image: string;
  description: string;
  url: string;
}

export interface InitialErrors {
  title: string | undefined;
  categoryId: string | undefined;
  image: string | undefined;
  description: string | undefined;
  url: string | undefined;
}

export type CustomHandleChange = React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
