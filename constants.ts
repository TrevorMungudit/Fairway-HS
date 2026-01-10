import { NavItem, BlogPost, GalleryItem } from './types';

export const SCHOOL_NAME = "Fairway High School";
export const SCHOOL_LOCATION = "Kawempe-Kazo, Uganda";
export const SCHOOL_PHONE = "+256 700 123 456";
export const SCHOOL_EMAIL = "admissions@fairwayhigh.ac.ug";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', view: 'home' },
  { label: 'About', view: 'about' },
  { label: 'Admissions', view: 'admissions' },
  { label: 'Student Life', view: 'student-life' },
  { label: 'Blog', view: 'blog' },
  { label: 'Gallery', view: 'gallery' },
  { label: 'Contact', view: 'contact' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Science Fair 2024 Winners",
    excerpt: "Our students showcased incredible innovation at the regional science fair in Kampala.",
    date: "Oct 15, 2024",
    image: "https://picsum.photos/id/20/600/400"
  },
  {
    id: 2,
    title: "New Sports Complex Opening",
    excerpt: "The long-awaited basketball and netball courts are now open for student use.",
    date: "Sep 28, 2024",
    image: "https://picsum.photos/id/73/600/400"
  },
  {
    id: 3,
    title: "UNEB Results Excellence",
    excerpt: "Fairway High School continues to lead in academic performance in the Kawempe division.",
    date: "Feb 10, 2024",
    image: "https://picsum.photos/id/175/600/400"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, url: "https://picsum.photos/id/1/800/600", caption: "Computer Lab Session" },
  { id: 2, url: "https://picsum.photos/id/180/800/600", caption: "Library Study Time" },
  { id: 3, url: "https://picsum.photos/id/250/800/600", caption: "Photography Club" },
  { id: 4, url: "https://picsum.photos/id/433/800/600", caption: "Annual Sports Day" },
  { id: 5, url: "https://picsum.photos/id/10/800/600", caption: "Nature Walk" },
  { id: 6, url: "https://picsum.photos/id/48/800/600", caption: "Main Campus Building" },
];