
"use client";

import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Menu,
  X,
  Code2,
  Database,
  Globe,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Download,
  ChevronRight,
  Terminal,
  Layers,
  Check,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const profile = {
  name: "Jafar Al-Khfaji",
  firstName: "Jafar",
  title: "Software Developer & Information Systems Student",
  email: "alkhfajijafar@gmail.com",
  location: "Calgary, Alberta",
  linkedin:
    "https://www.linkedin.com/in/jafar-al-khfaji-154340289",
  github: "https://github.com/jafar3073",
};



const projects = [
  {
    id: 1,
    title: "FlowLine",
    category: "Full Stack",
    subtitle: "AI-Powered Pipeline Risk Management",
    description:
      "A full-stack platform developed during the 2026 IEEE Young Professionals Industry Hackathon. Uses historical pipeline incident data, machine learning, and interactive mapping to help prioritize inspections and forecast potential hazards.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "LightGBM",
      "Mapbox",
    ],
    github: "https://github.com/ovie-d/FlowLine",
    demo: "",
    number: "01",
    featured: true,
  },
  {
    id: 2,
    title: "J&S Streakless",
    category: "Web Development",
    subtitle: "Business Website",
    description:
      "Designed, developed, and deployed a responsive website for my own window cleaning business. Built using Next.js and Tailwind CSS to showcase services, provide business information, and make it easier for customers to request services.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Git",
      "Vercel",
    ],
    github: "https://github.com/jafar3073/J-S-Streakless",
    demo: "https://j-s-streakless.ca",
    number: "02",
    featured: false,
  },
  {
    id: 3,
    title: "Sterling Auto Details",
    category: "Web Development",
    subtitle: "Automotive Detailing Website",
    description:
      "Developed a modern and responsive automotive detailing website featuring service descriptions, pricing packages, a project gallery, and appointment booking integration. Designed with an emphasis on intuitive navigation, mobile responsiveness, and user experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    github: "https://github.com/jafar3073/Detailing",
    demo: "https://sterlingdetails.com/",
    number: "03",
    featured: false,
  },
  {
    id: 4,
    title: "Narrator Research Explorer",
    category: "Full Stack",
    subtitle: "Database-Driven Research Platform",
    description:
      "Developed a full-stack research platform that allows users to search for narrators and retrieve structured information from a database through a connected backend. Integrates frontend search functionality with backend services and database queries to make research records easier to access and explore.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Backend API",
      "Database Integration",,
    ],
    github: "https://github.com/jafar3073/RijalProject",
    demo: "",
    number: "04",
    featured: false,
  },
];


const skillGroups = [
  {
    title: "Programming & Data",
    icon: Code2,
    skills: ["Python", "Java", "C", "SQL", "Data Analysis"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Microsoft Excel",
    ],
  },
  {
    title: "Information Systems",
    icon: Database,
    skills: [
      "Relational Databases",
      "Systems Analysis",
      "Requirements Analysis",
      "Software Testing",
      "Troubleshooting",
    ],
  },
];


const experiences = [
  {
    role: "Co-Founder & Business Operator",
    company: "J&S Streakless",
    date: "May 2026 – October 2026",
    description:
      "Co-founded and operated a residential window cleaning business in Calgary. Managed customer acquisition, door-to-door sales, service scheduling, pricing, and client communication. Developed and maintained the company's website using Next.js and Tailwind CSS. Gained hands-on experience in entrepreneurship, business operations, marketing, and customer relationship management.",
  },
  {
    role: "Sales Associate",
    company: "Sherwin-Williams",
    date: "June 2025 – January 2026",
    description:
      "Identified customer requirements, recommended appropriate solutions, communicated technical product information, and resolved customer concerns while maintaining professional service.",
  },
  {
    role: "Painter Lead",
    company: "Crystal Stoneworks Ltd.",
    date: "May 2022 – December 2024",
    description:
      "Supervised and trained team members, coordinated daily assignments, maintained quality standards, and communicated project requirements with clients.",
  },
  {
    role: "Youth Mentor",
    company: "Youth Improvement Group",
    date: "November 2023 – Present",
    description:
      "Volunteer mentor providing guidance to youth, explaining concepts clearly, and adapting communication to individual learning needs.",
  },
];

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-sm text-emerald-400">
          {number} / SECTION
        </span>
        <span className="h-px w-12 bg-emerald-500/50" />
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
        <span className="text-emerald-400">.</span>
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState<
    number | null
  >(null);
  const [copied, setCopied] = useState(false);

  const filters = ["All", "Full Stack", "Web Development"];

  const filteredProjects =
    projectFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === projectFilter
        );
  const [year, setYear] = useState(2026);

      useEffect(() => {
        setYear(new Date().getFullYear());
      }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b0a] text-white">
      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080b0a]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#home"
            className="font-mono text-2xl font-bold tracking-tight"
          >
            J<span className="text-emerald-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-emerald-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-lg border border-emerald-500/40 px-5 py-2.5 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500 hover:text-black md:inline-flex"
          >
            Let's Talk <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b100e] px-6 py-5 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-3 text-zinc-300 hover:text-emerald-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-10"
      >
        <div className="pointer-events-none absolute right-[-200px] top-20 h-[650px] w-[650px] rounded-full bg-emerald-600/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-900/10 blur-[100px]" />

        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-20 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-xs tracking-wide text-emerald-400">
                OPEN TO NEW OPPORTUNITIES
              </span>
            </div>

            <p className="mb-4 font-mono text-base text-emerald-400">
              Hi, my name is
            </p>

            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
              Jafar
              <br />
              <span className="text-emerald-400">Al-Khfaji.</span>
            </h1>

            <h2 className="mt-6 text-xl font-semibold text-zinc-300 md:text-2xl">
              Building digital solutions that matter.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-zinc-400">
              I'm a Computer Information Systems student at Mount
              Royal University with an interest in software
              development, data analytics, and building practical
              technology solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-emerald-400"
              >
                Explore My Work
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href="/JafarAl-Khfaji.pdf"
                download
                className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-emerald-500/50 hover:text-emerald-400"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-400 transition hover:-translate-y-1 hover:text-emerald-400"
                >
                  <FaGithub size={23} />
                </a>
              )}

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-400 transition hover:-translate-y-1 hover:text-emerald-400"
              >
                <FaLinkedin size={23} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-zinc-400 transition hover:-translate-y-1 hover:text-emerald-400"
              >
                <Mail size={23} />
              </a>

              <span className="h-px w-10 bg-zinc-700" />

              <span className="flex items-center gap-2 text-sm text-zinc-500">
                <MapPin size={15} />
                Calgary, AB
              </span>
            </div>
          </div>
          </div>

          {/* INTERACTIVE CODE CARD */}
          
          {/* PROFESSIONAL PROFILE PHOTO */}
          <div className="relative mx-auto w-full max-w-[440px] lg:max-w-[480px]">

            {/* Green background glow */}
            <div className="absolute -inset-8 rounded-full bg-emerald-500/15 blur-[90px]" />

            {/* Decorative border */}
            <div className="absolute -inset-3 rounded-[30px] border border-emerald-500/20" />

            {/* Photo container */}
            <div className="group relative overflow-hidden rounded-[24px] border border-emerald-500/40 bg-[#101713] shadow-2xl shadow-emerald-950/40 transition duration-500 hover:-translate-y-2 hover:border-emerald-400/70">

              <img
                src="/portfolio.png"
                alt="Professional portrait of Jafar Al-Khfaji"
                className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                  Software Developer
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Jafar Al-Khfaji
                </h3>

                <p className="mt-1 text-sm text-zinc-300">
                  Calgary, Alberta
                </p>
              </div>
            </div>

            {/* Floating status badge */}
            <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-[#101713] px-5 py-4 shadow-xl sm:-right-6">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>

              <span className="text-sm font-medium text-white">
                Open to Opportunities
              </span>
            </div>
          </div>


        <a
          href="#about"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-500 transition hover:text-emerald-400"
        >
          SCROLL TO EXPLORE
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/5 bg-[#0b100e] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            number="01"
            title="About Me"
            description="A little more about who I am, what I build, and what drives me."
          />

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* LEFT SIDE - ABOUT TEXT */}
            <div className="space-y-6 text-lg leading-9 text-zinc-400">
              <p>
                I'm{" "}
                <span className="font-semibold text-emerald-400">
                  Jafar Al-Khfaji
                </span>
                , a third-year Bachelor of Computer Information
                Systems student at Mount Royal University in
                Calgary, Alberta.
              </p>

              <p>
                I'm passionate about software development, data
                analytics, and building technology that solves
                real-world problems. My experience includes
                full-stack applications, relational databases,
                responsive websites, and systems analysis.
              </p>

              <p>
                I've worked on projects ranging from an AI-powered
                pipeline risk management platform to database-driven
                research applications and professional business
                websites.
              </p>

              <p>
                Beyond development, I co-founded{" "}
                <span className="font-semibold text-white">
                  J&S Streakless
                </span>
                , a residential window cleaning business. This
                experience strengthened my leadership, customer
                communication, and problem-solving skills while
                giving me practical business experience.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-emerald-400 transition hover:gap-4"
              >
                Let's connect
                <ArrowRight size={18} />
              </a>
            </div>

            {/* RIGHT SIDE - DEVELOPER CODE CARD */}
            <div className="relative">

              {/* Green glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-emerald-500/10 blur-[70px]" />

              <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-[#0d1511] shadow-2xl shadow-emerald-950/30 transition duration-500 hover:-translate-y-2 hover:border-emerald-500/60">

                {/* Window toolbar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-[#101a14] px-6 py-4">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>

                  <span className="font-mono text-xs text-zinc-500">
                    developer.ts
                  </span>

                  <Code2 className="h-4 w-4 text-emerald-400" />
                </div>

                {/* Code content */}
                <div className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:p-8 sm:text-sm">

                  <p className="text-zinc-500">
                    {"// The developer behind the projects"}
                  </p>

                  <div className="mt-5">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-200">developer</span>{" "}
                    <span className="text-white">= {"{"}</span>
                  </div>

                  <div className="pl-5">
                    <span className="text-emerald-300">name:</span>{" "}
                    <span className="text-orange-300">
                      "Jafar Al-Khfaji"
                    </span>,
                  </div>

                  <div className="pl-5">
                    <span className="text-emerald-300">education:</span>{" "}
                    <span className="text-orange-300">
                      "Computer Information Systems"
                    </span>,
                  </div>

                  <div className="pl-5">
                    <span className="text-emerald-300">university:</span>{" "}
                    <span className="text-orange-300">
                      "Mount Royal University"
                    </span>,
                  </div>

                  <div className="pl-5">
                    <span className="text-emerald-300">location:</span>{" "}
                    <span className="text-orange-300">
                      "Calgary, Canada"
                    </span>,
                  </div>

                  <div className="pl-5">
                    <span className="text-emerald-300">skills:</span> [
                  </div>

                  <div className="pl-10 text-orange-300">
                    "Next.js", "React", "TypeScript",
                  </div>

                  <div className="pl-10 text-orange-300">
                    "Python", "SQL", "Java"
                  </div>

                  <div className="pl-5">],</div>

                  <div className="pl-5">
                    <span className="text-emerald-300">interests:</span> [
                  </div>

                  <div className="pl-10 text-orange-300">
                    "Full Stack Development",
                  </div>

                  <div className="pl-10 text-orange-300">
                    "Data Analytics", "AI"
                  </div>

                  <div className="pl-5">],</div>

                  <div className="pl-5">
                    <span className="text-emerald-300">entrepreneur:</span>{" "}
                    <span className="text-purple-400">true</span>,
                  </div>

                  <div className="pl-5">
                    <span className="text-emerald-300">passion:</span>{" "}
                    <span className="text-orange-300">
                      "Building meaningful solutions"
                    </span>
                  </div>

                  <div>{"};"}</div>

                  <div className="mt-6 text-zinc-500">
                    {"// Always learning. Always building."}
                  </div>

                  <div className="mt-2 flex items-center text-emerald-400">
                    <span className="mr-2">➜</span>
                    <span className="typing-cursor">_</span>
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="flex items-center justify-between border-t border-white/10 bg-black/20 px-6 py-3">
                  <span className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    Ready to build
                  </span>

                  <span className="font-mono text-xs text-zinc-500">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            number="02"
            title="Technical Skills"
            description="Technologies, programming languages, and tools I use to turn ideas into working solutions."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="group rounded-xl border border-white/10 bg-[#0e1411] p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-400 transition group-hover:bg-emerald-500 group-hover:text-black">
                    <group.icon size={23} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 transition hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-y border-white/5 bg-[#0b100e] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            number="03"
            title="Featured Projects"
            description="A selection of projects that demonstrate my technical skills, problem-solving abilities, and development experience."
          />

          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                  projectFilter === filter
                    ? "bg-emerald-500 text-black"
                    : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-emerald-500/40 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101713] transition duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#12291d] via-[#0d1812] to-[#080b0a]">
                  <div className="absolute h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-500/20" />

                  <span className="absolute left-6 top-6 font-mono text-xs text-emerald-400">
                    PROJECT / {project.number}
                  </span>

                  <Layers className="h-20 w-20 text-emerald-500/40 transition duration-500 group-hover:scale-125 group-hover:text-emerald-400" />

                  <span className="absolute bottom-5 right-6 rounded-full border border-emerald-500/30 bg-black/40 px-3 py-1 font-mono text-xs text-emerald-400">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-2 font-mono text-xs text-emerald-400">
                    {project.subtitle}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies
                      .slice(
                        0,
                        expandedProject === project.id
                          ? undefined
                          : 5
                      )
                      .map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-emerald-500/10 px-3 py-1.5 font-mono text-xs text-emerald-300"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
                    <button
                      onClick={() =>
                        setExpandedProject(
                          expandedProject === project.id
                            ? null
                            : project.id
                        )
                      }
                      className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      {expandedProject === project.id
                        ? "Show Less"
                        : "View Tech Stack"}
                      <ChevronRight
                        size={16}
                        className={
                          expandedProject === project.id
                            ? "rotate-90 transition"
                            : "transition"
                        }
                      />
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
                      >
                        <FaGithub size={17} /> Code
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400"
                      >
                        <ExternalLink size={17} /> Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section
        id="experience"
        className="px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            number="04"
            title="Experience & Education"
            description="My professional background, leadership experience, and academic journey."
          />

          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold">
                <Briefcase className="text-emerald-400" />
                Experience
              </h3>

              <div className="relative border-l border-emerald-500/30 pl-8">
                {experiences.map((exp) => (
                  <div key={exp.role} className="relative mb-10 last:mb-0">
                    <span className="absolute -left-[39px] top-2 h-5 w-5 rounded-full border-4 border-[#080b0a] bg-emerald-500" />

                    <p className="mb-2 font-mono text-xs text-emerald-400">
                      {exp.date}
                    </p>

                    <h4 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h4>

                    <p className="mt-1 text-zinc-300">
                      {exp.company}
                    </p>

                    <p className="mt-4 leading-7 text-zinc-500">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold">
                <GraduationCap className="text-emerald-400" />
                Education
              </h3>

              <div className="rounded-xl border border-white/10 bg-[#101713] p-8 transition hover:border-emerald-500/30">
                <p className="mb-3 font-mono text-xs text-emerald-400">
                  EXPECTED GRADUATION: APRIL 2028
                </p>

                <h4 className="text-2xl font-bold">
                  Bachelor of Computer Information Systems
                </h4>

                <p className="mt-3 text-lg text-zinc-300">
                  Mount Royal University
                </p>

                <p className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                  <MapPin size={15} />
                  Calgary, Alberta
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h5 className="mb-4 font-semibold text-emerald-400">
                    Relevant Coursework
                  </h5>

                  <div className="space-y-3">
                    {[
                      "Data Modeling and Query Languages",
                      "Data Structures",
                      "Object-Oriented Programming",
                      "Systems Analysis",
                      "System Administration",
                      "Client Development",
                    ].map((course) => (
                      <p
                        key={course}
                        className="flex items-center gap-3 text-sm text-zinc-400"
                      >
                        <Check
                          size={15}
                          className="shrink-0 text-emerald-400"
                        />
                        {course}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/5 bg-[#0b100e] px-6 py-32 text-center lg:px-10"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-5 font-mono text-sm text-emerald-400">
            05 / WHAT'S NEXT?
          </p>

          <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
            Let's Build
            <br />
            <span className="text-emerald-400">
              Something Great.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl leading-8 text-zinc-400">
            I'm interested in opportunities involving software
            development, data analytics, and information systems.
            Have a project, opportunity, or question? I'd love to
            hear from you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 rounded-lg bg-emerald-500 px-8 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-emerald-400"
            >
              <Mail size={19} />
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-8 py-4 font-semibold transition hover:border-emerald-500/40 hover:text-emerald-400"
            >
              {copied ? (
                <>
                  <Check size={18} /> Copied!
                </>
              ) : (
                <>
                  <Mail size={18} /> Copy Email
                </>
              )}
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-8">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 transition hover:text-emerald-400"
            >
              <FaLinkedin size={19} />
              LinkedIn
            </a>

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 transition hover:text-emerald-400"
              >
                <FaGithub size={19} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#080b0a] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <a href="#home" className="font-mono text-xl font-bold">
            J<span className="text-emerald-400">.</span>
          </a>

          <p className="text-center text-sm text-zinc-500">
            © {year} Jafar Al-Khfaji.
            Built with Next.js & Tailwind CSS.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-emerald-400"
          >
            Back to Top
            <ArrowUpRight size={17} />
          </a>
        </div>
      </footer>
    </main>
  );
}
