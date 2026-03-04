"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    tag: "Welcome to Matainja Technologies",
    title: "More than 15K+ Project\nDelivered in 11 Years",
    subtitle: "Dedicated Programmer",
  },
  {
    tag: "Mobile Development Experts",
    title: "Android and IOS\nProgrammer",
    subtitle: "End-to-end mobile solutions for your business",
  },
  {
    tag: "Modern Web & App Development",
    title: "React Native , Angular\nNode Js , Golang",
    subtitle: "Cutting-edge technologies for scalable solutions",
  },
];

const processSteps = [
  {
    icon: "💡",
    title: "Commited",
    description:
      "We believe listening is a crucial key factor of effectiveness. Thus, we listen carefully to have a firm grasp of what is your Idea and goals are",
  },
  {
    icon: "📊",
    title: "Flow Chart",
    description:
      "According Clients Requirements, we made a Flow chart and blue print for all functionality and module structure and database Design .",
  },
  {
    icon: "🎨",
    title: "Design",
    description:
      "Design is important now days , We will provide Good navigation system design and loading fast Modern HTML tags.",
  },
  {
    icon: "💻",
    title: "Develop",
    description:
      "Development Phase is more important ,First of all choose Framework and language according to Clients Requirements and assign to exprience team .",
  },
  {
    icon: "🔧",
    title: "Optimization",
    description:
      "While develop module , our Quality Team test all completed module using different kind of testing tools, like unit test , selinium test etc.",
  },
  {
    icon: "🚀",
    title: "Deploy/Setup",
    description: "Now setup and deploy in Client Server or Hand over the source code .",
  },
];

const latestProjects = [
  { title: "Natuurhuisje", href: "/portfolio/natuurhuisje" },
  { title: "Hottieandlord – Magneto", href: "/portfolio/hottieandlord" },
  { title: "Dentis Make a Appointment", href: "/portfolio/dentis-make-a-appointment" },
  { title: "Mental Health Patient ~ Doctor Consult & Buy Medicine", href: "/portfolio/ui-ux-design-mental-health-medicine-consult" },
  { title: "Railway TimeTable", href: "/portfolio/railway-timetable" },
  { title: "Centerpiece Design Wizard And Sell", href: "/portfolio/partycenterpiecedesignwizard" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero / Banner ── */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          minHeight: 520,
          background: "linear-gradient(135deg, #1e2a4a 0%, #0f1b35 50%, #1a2540 100%)",
        }}
      >
        {/* Decorative diagonal stripes */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
          }}
        />
        {/* Orange accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#e8a020" }} />

        <div className="relative container mx-auto px-4 py-28 text-center">
          {/* Tag line */}
          <div
            key={`tag-${current}`}
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-6"
            style={{ background: "#e8a020", color: "#fff", animation: "fadeIn 0.6s ease" }}
          >
            {heroSlides[current].tag}
          </div>

          {/* Main heading */}
          <h1
            key={`h-${current}`}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight"
            style={{ animation: "fadeIn 0.7s ease", whiteSpace: "pre-line" }}
          >
            {heroSlides[current].title}
          </h1>

          {/* Sub heading */}
          <p
            key={`s-${current}`}
            className="text-lg md:text-xl mb-10 font-medium"
            style={{ color: "#c8d8f0", animation: "fadeIn 0.9s ease" }}
          >
            {heroSlides[current].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="font-bold py-3 px-8 rounded transition-all duration-300 text-white hover:opacity-90"
              style={{ background: "#e8a020" }}
            >
              Contact us!
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white/50 text-white hover:bg-white/10 font-bold py-3 px-8 rounded transition duration-300"
            >
              View Portfolio
            </Link>
          </div>

          {/* Slide dots */}
          <div className="flex justify-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-3 h-3 rounded-full transition-all"
                style={{
                  background: i === current ? "#e8a020" : "rgba(255,255,255,0.3)",
                  transform: i === current ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-2" style={{ color: "#1e2a4a" }}>
              How We Work
            </h2>
            <div className="w-16 h-1 mx-auto rounded" style={{ background: "#e8a020" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="p-6 rounded-lg hover:shadow-xl transition-shadow bg-white group"
                style={{ border: "1px solid #e8e8e8" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0"
                    style={{ background: "#1e2a4a" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3
                  className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors"
                  style={{ color: "#1e2a4a" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features / Why Choose Us ── */}
      <section className="py-16" style={{ background: "#f5f7fa" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-2" style={{ color: "#1e2a4a" }}>
              Why Choose Us
            </h2>
            <div className="w-16 h-1 mx-auto rounded" style={{ background: "#e8a020" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="👥"
              title="Team Working"
              description="We are expert working using Git repository with other member.and also solve Conflict issue and Setup git on Clients Server."
            />
            <FeatureCard
              icon="✨"
              title="Perfect code indentation"
              description="Indentation is used to format program source code to improve readability. Thats Why We are always maintain proper coding Style to make Clean code and Readable the functionality."
            />
            <FeatureCard
              icon="🎯"
              title="Easy Understand Clients requirements"
              description="We are very experienced to understand Clients requirements easily. and also We will provide Suggestion to improve your website design and functionality"
            />
          </div>
        </div>
      </section>

      {/* ── Latest Projects ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-2" style={{ color: "#1e2a4a" }}>
              Our Latest Project
            </h2>
            <div className="w-16 h-1 mx-auto rounded" style={{ background: "#e8a020" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestProjects.map((project, i) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-lg flex items-center justify-center text-center p-8 hover:shadow-xl transition-all duration-300"
                style={{
                  minHeight: 160,
                  background: i % 2 === 0 ? "#1e2a4a" : "#2c3e6b",
                  borderBottom: "3px solid #e8a020",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "#e8a020" }}
                />
                <span className="relative z-10 text-white text-base font-bold group-hover:text-white leading-snug">
                  {project.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-block font-bold py-3 px-10 rounded transition-all text-white hover:opacity-90"
              style={{ background: "#1e2a4a" }}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-16 text-white" style={{ background: "#1e2a4a" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-1 mx-auto rounded mb-6" style={{ background: "#e8a020" }} />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Call us today at{" "}
            <span style={{ color: "#e8a020" }}>+91 033-2323-45-05</span>
            {" "}or email{" "}
            <span style={{ color: "#e8a020" }}>support@matainja.com</span>
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            For any help, query, Hiring, Project work Or anything else ! Contact us ! Don&apos;t hesitate , Go forward and contact us ! .
          </p>
          <Link
            href="/contact"
            className="font-bold py-3 px-10 rounded transition-all text-white hover:opacity-90 inline-block"
            style={{ background: "#e8a020" }}
          >
            Contact us!
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group"
      style={{ border: "1px solid #e8e8e8", borderLeft: "4px solid #e8a020" }}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors" style={{ color: "#1e2a4a" }}>
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
