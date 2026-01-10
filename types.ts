export type ViewState = 'home' | 'about' | 'admissions' | 'student-life' | 'gallery' | 'blog' | 'contact';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
}

export interface NavItem {
  label: string;
  view: ViewState;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}