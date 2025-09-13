export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  phone?: string;
}
