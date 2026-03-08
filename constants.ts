import { NavItem, BlogPost, GalleryItem, FacultyMember } from './types';

export const SCHOOL_NAME = "Fairway High School";
export const SCHOOL_LOCATION = "Kawempe-Kazo, Uganda";
export const SCHOOL_PHONE = "+256 700 123 456";
export const SCHOOL_EMAIL = "admissions@fairwayhigh.ac.ug";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', view: 'home' },
  { label: 'About Us', view: 'about' },
  { label: 'Academics', view: 'academics' },
  { label: 'Admissions', view: 'admissions' },
  { label: 'Co-curricular', view: 'co-curricular' },
  { label: 'Contact', view: 'contact' },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 1,
    name: "Mr. John Doe",
    role: "Headteacher",
    bio: "With over 20 years of experience in education administration, Mr. Doe leads Fairway High with a vision for holistic excellence.",
    image: "https://ui-avatars.com/api/?name=John+Doe&background=0ea5e9&color=fff&size=200"
  },
  {
    id: 2,
    name: "Ms. Jane Smith",
    role: "Deputy Headteacher (Academics)",
    bio: "Ms. Smith ensures our curriculum is rigorous and up-to-date, fostering an environment of academic achievement.",
    image: "https://ui-avatars.com/api/?name=Jane+Smith&background=f59e0b&color=fff&size=200"
  },
  {
    id: 3,
    name: "Mr. David Kato",
    role: "Head of Sciences",
    bio: "Passionate about STEM, Mr. Kato oversees our science laboratories and encourages practical learning.",
    image: "https://ui-avatars.com/api/?name=David+Kato&background=10b981&color=fff&size=200"
  },
  {
    id: 4,
    name: "Mrs. Sarah Nambi",
    role: "Head of Humanities",
    bio: "Mrs. Nambi inspires students to think critically about history, literature, and society.",
    image: "https://ui-avatars.com/api/?name=Sarah+Nambi&background=8b5cf6&color=fff&size=200"
  },
  {
    id: 5,
    name: "Coach Michael O.",
    role: "Sports Director",
    bio: "Coach Michael leads our sports teams to victory and promotes physical fitness among all students.",
    image: "https://ui-avatars.com/api/?name=Michael+O&background=ef4444&color=fff&size=200"
  },
  {
    id: 6,
    name: "Ms. Grace A.",
    role: "School Bursar",
    bio: "Ms. Grace manages the school's finances with transparency and efficiency, always ready to assist parents.",
    image: "https://ui-avatars.com/api/?name=Grace+A&background=6366f1&color=fff&size=200"
  }
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