import Hospital from './assets/Hospital.png';
import BookShop from './assets/BookShop.png';
import Booking from './assets/Booking.png';
import pos from './assets/pos.png';
import six from './assets/six.png';
import Ecommerce from './assets/E-Commerce.png';


import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub,
  FaLinkedin, FaInstagram, FaYoutube, FaFacebook,
  FaBootstrap, FaGitAlt, FaNpm, FaFigma, FaWordpress
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiVite, SiPostman, SiTypescript, SiFirebase, SiStrapi } from 'react-icons/si';

// Social Media Links
export const SOCIAL_LINKS = [
  { id: 1, name: 'Linkedin', icon: FaLinkedin, url: 'https://www.linkedin.com/in/mhmd-tolba/', color: '#0077b5' },
  { id: 2, name: 'GitHub', icon: FaGithub, url: 'https://github.com/MhmdMt7', color: '#333' },
  { id: 3, name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/mhmd.tolba/', color: '#a21caf' },
  { id: 4, name: 'Youtube', icon: FaYoutube, url: 'http://www.youtube.com/@mhmdtolba5668', color: '#CD201F' },
  { id: 5, name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/share/19hY4AtScZ/', color: '#316FF6' },
];

// Categorized Skills Data
export const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: [
      { id: 1, name: 'HTML5', icon: FaHtml5, color: '#E34F26', desc: 'Semantic, SEO, Accessibility' },
      { id: 2, name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', desc: 'Flexbox, Grid, Animations' },
      { id: 3, name: 'JavaScript', icon: FaJs, color: '#F7DF1E', desc: 'ES6+, DOM, Async/Await' },
      { id: 4, name: 'TypeScript', icon: SiTypescript, color: '#3178C6', desc: 'Types, Interfaces, Generics' },
      { id: 5, name: 'React.js', icon: FaReact, color: '#61DAFB', desc: 'Hooks, Context, Performance' },
      { id: 6, name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', desc: 'SSR, SSG, App Router' },
      { id: 7, name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', desc: 'Utility-first, Custom Config' },
      { id: 8, name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', desc: 'Responsive, Components' },
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      { id: 9, name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032', desc: 'Version Control, Collaboration' },
      { id: 10, name: 'Vite', icon: SiVite, color: '#646CFF', desc: 'Fast Bundling, HMR' },
      { id: 11, name: 'npm', icon: FaNpm, color: '#CB3837', desc: 'Package Management' },
      { id: 12, name: 'Postman', icon: SiPostman, color: '#FF6C37', desc: 'API Testing' },
      { id: 13, name: 'Figma', icon: FaFigma, color: '#F24E1E', desc: 'UI/UX Design' },
      { id: 14, name: 'Firebase', icon: SiFirebase, color: '#FFCA28', desc: 'Backend & Hosting' },
      { id: 15, name: 'Strapi', icon: SiStrapi, color: '#4945FF', desc: 'Headless CMS' },
      { id: 16, name: 'WordPress', icon: FaWordpress, color: '#21759B', desc: 'CMS & Website Building' },
    ]
  }
];

// Stats Data
export const STATS = [
  { id: 1, label: 'Completed Projects', value: 10 },
  { id: 2, label: 'Years Of Experience', value: 1 },
  { id: 3, label: 'Happy Clients', value: 5 },
  { id: 4, label: 'Awards Received', value: 3 },
];

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: 'Hospital System',
    tech: 'React • Tailwind CSS  • framer-motion • api',
    image: Hospital,
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    tech: 'React • Tailwind CSS  • framer-motion • api',
    image: Ecommerce,
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'BookShop Website',
    tech: 'React • Tailwind CSS  • framer-motion • api',
    image: BookShop,
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'pos System',
    tech: 'Next.js • Tailwind CSS  • framer-motion • api',
    image: pos,
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 5,
    title: 'Booking System',
    tech: 'React • Tailwind CSS  • framer-motion • api',
    image: Booking,
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 6,
    title: 'Coffee Shop Website',
    tech: 'React • Tailwind CSS  • framer-motion • api',
    image: six,
    liveLink: '#',
    codeLink: '#',
  },
];
