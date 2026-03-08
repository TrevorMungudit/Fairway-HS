export type ViewState = 'home' | 'about' | 'academics' | 'admissions' | 'co-curricular' | 'gallery' | 'blog' | 'contact' | 'faculty';

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

export interface FacultyMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
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