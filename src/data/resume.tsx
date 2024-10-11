import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Chufice",
  initials: "DV",
  url: "https://dillion.io",
  location: "Hanoi, Vietnam",
  locationLink: "https://www.google.com",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "Started full-time full-stack developer at Mirabo Global from Jun 2024 - Present.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Mysql",
    "Docker",
    "C++",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tranxuandat.dev@gmail.com",
    tel: "(+84) 357 339 ***",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dat-j",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "Facebook",
        url: "https://facebook.com/mymt13562",
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://facebook.com/mymt13562",
        icon: Icons.facebook,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mirabo Global",
      href: "https://mirabo-global.com",
      badges: [],
      location: "Hanoi, Vietma,",
      title: "Full-stack developer",
      logoUrl: "/atomic.png",
      start: "Jun 2024",
      end: "Present",
      description:
        "Building web-app for Japan customer using NextJs, NestJs",
    },
    {
      company: "Thinkdiff JSC",
      href: "/",
      badges: [],
      location: "Hanoi, Vietnam",
      title: "Front-end Internship",
      logoUrl: "/mitremedia.png",
      start: "Jan 2024",
      end: "May 2024",
      description:
        'Nothing to say, "best" company ever :)))',
    },
  ],
  education: [
    {
      school: "Electric Power University",
      href: "https://epu.edu.vn",
      degree: "Bachelor of Engineering",
      logoUrl: "/buildspace.jpg",
      start: "2019",
      end: "2024",
    },
    
  ],
  projects: [
    {
      title: "todo-app",
      href: "https://todo-app-functional.vercel.app",
      dates: "Dec 2023 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://todo-app-functional.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
