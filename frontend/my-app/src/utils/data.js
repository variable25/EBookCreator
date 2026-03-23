import { BookOpen, Download, Library, Lightbulb } from "lucide-react";

export const FEATURES = [
  {
    title: "AI-Powered Writing",
    description:
      "Overcome writer's block with smart assistance that helps generate ideas, outlines, and chapter content.",
    icon: Lightbulb,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Immersive Reader",
    description:
      "Preview your ebook in a clean, read-only layout so the manuscript feels closer to the final product.",
    icon: BookOpen,
    gradient: "from-sky-500 to-cyan-600",
  },
  {
    title: "One-Click Export",
    description:
      "Export your ebook to PDF and DOC formats from the same workspace whenever it is ready.",
    icon: Download,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "eBook Management",
    description:
      "Organize all your projects in one dashboard and move between drafting, editing, and exporting easily.",
    icon: Library,
    gradient: "from-rose-500 to-pink-600",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Create your project",
    description: "Start with a title and a clear idea for the ebook you want to build.",
  },
  {
    step: "02",
    title: "Generate an outline",
    description: "Use AI to break your topic into structured chapters and sections.",
  },
  {
    step: "03",
    title: "Write and refine",
    description: "Draft chapter content, edit the text, and keep everything in one place.",
  },
  {
    step: "04",
    title: "Export and share",
    description: "Download the finished ebook in PDF or DOC format when you are done.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "Indie Author",
    quote:
      "This helped me move from a rough idea to a real chapter plan much faster than writing from scratch.",
    rating: 5
  },
  {
    name: "Sofia Reed",
    role: "Course Creator",
    quote:
      "I used it to turn teaching notes into an ebook draft without jumping across multiple tools.",
    rating: 5
  },
  {
    name: "Daniel Park",
    role: "Startup Founder",
    quote:
      "The export flow and dashboard made the project feel organized from outline to final document.",
    rating: 5
  },
];

export const STATS = [
  { value: "AI", label: "assisted writing" },
  { value: "PDF", label: "ready export" },
  { value: "DOC", label: "editable export" },
  { value: "24/7", label: "draft support" },
];
