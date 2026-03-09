"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Lightbulb,
  Workflow,
  PenSquare,
  Laptop2,
  Wrench,
  Rocket,
} from "lucide-react";
import "@/styles/brand-colors.css";
import "./home/home-modern.css";

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

type CompanyStat = {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
  accent: string;
};

const companyStats: CompanyStat[] = [
  {
    value: 7000,
    suffix: "+",
    label: "Jobs",
    detail: "Full-cycle deliveries across industries",
    accent: "#ffb347",
  },
  {
    value: 6300,
    suffix: "+",
    label: "Web Applications",
    detail: "Custom platforms shipped to production",
    accent: "#ff6363",
  },
  {
    value: 700,
    suffix: "+",
    label: "Mobile Applications",
    detail: "React Native, Flutter & native builds",
    accent: "#5ec7ff",
  },
];

const heroImages = [
  "https://www.matainja.com/wp-content/uploads/2020/07/banner_1.jpg",
  "https://www.matainja.com/wp-content/uploads/2020/07/banner_3.jpg",
  "https://www.matainja.com/wp-content/uploads/2020/07/banner_2.jpg",
  "https://www.matainja.com/wp-content/uploads/2023/10/banner_4.jpg",
  "https://www.matainja.com/wp-content/uploads/2023/10/banner_5.jpg",
  "https://www.matainja.com/wp-content/uploads/2016/10/new_web_banner_introw.png",
];

const processSteps = [
  {
    icon: <Lightbulb />,
    title: "Commited",
    description:
      "We believe listening is a crucial key factor of effectiveness. Thus, we listen carefully to have a firm grasp of what is your Idea and goals are",
    direction: "left",
  },
  {
    icon: <Workflow />,
    title: "Flow Chart",
    description:
      "According Clients Requirements, we made a Flow chart and blue print for all functionality and module structure and database Design .",
    direction: "up",
  },
  {
    icon: <PenSquare />,
    title: "Design",
    description:
      "Design is important now days , We will provide Good navigation system design and loading fast Modern HTML tags.",
    direction: "right",
  },
  {
    icon: <Laptop2 />,
    title: "Develop",
    description:
      "Development Phase is more important ,First of all choose Framework and language according to Clients Requirements and assign to exprience team .",
    direction: "left",
  },
  {
    icon: <Wrench />,
    title: "Optimization",
    description:
      "While develop module , our Quality Team test all completed module using different kind of testing tools, like unit test , selinium test etc.",
    direction: "up",
  },
  {
    icon: <Rocket />,
    title: "Deploy/Setup",
    description: "Now setup and deploy in Client Server or Hand over the source code .",
    direction: "right",
  },
];

const latestProjects = [
  {
    title: "MinutesHub",
    href: "https://www.matainja.com/portfolio/minuteshub/",
    description: "MinutesHub keeps remote leadership teams aligned with real-time minutes, actions and KPIs.",
    category: "Productivity",
    stack: "Laravel • Android",
    image:
      "https://www.matainja.com/wp-content/uploads/2019/02/Screenshot-2019-02-19-at-4.39.30-PM-676x451.png",
  },
  {
    title: "centre for Suicide Prevention",
    href: "https://www.matainja.com/portfolio/centre-for-suicide-prevention/",
    description: "Awareness platform helping counsellors manage content, campaigns and volunteer onboarding.",
    category: "Social Impact",
    stack: "WordPress • API",
    image: "https://www.matainja.com/wp-content/uploads/2017/03/centre-676x451.png",
  },
  {
    title: "Motornet.ro",
    href: "https://www.matainja.com/portfolio/motornet-ro/",
    description: "Automotive marketplace with inventory syncing, dealer dashboards and finance integrations.",
    category: "Automotive",
    stack: "CodeIgniter • Solr",
    image:
      "https://www.matainja.com/wp-content/uploads/2019/04/Screenshot-2019-04-22-at-5.05.05-PM-676x451.png",
  },
  {
    title: "EMA – ERP SYSTEM",
    href: "https://www.matainja.com/portfolio/ema-erp-system/",
    description: "Enterprise ERP suite covering inventory, finance and HR with granular role permissions.",
    category: "Enterprise",
    stack: "CodeIgniter • JSON",
    image: "https://www.matainja.com/wp-content/uploads/2017/03/EMA-ERP-676x451.png",
  },
  {
    title: "Laravel Ecommerce  Website",
    href: "https://www.matainja.com/portfolio/ecommerce-website-laravel/",
    description: "Modern storefront UX with live inventory, promo engine and mobile-first checkout.",
    category: "eCommerce",
    stack: "Laravel • MySQL",
    image:
      "https://www.matainja.com/wp-content/uploads/2020/09/Screenshot-2020-09-15-at-3.56.19-PM-676x451.png",
  },
  {
    title: "Digital Deck",
    href: "https://www.matainja.com/portfolio/digital-deck/",
    description: "Custom CMS for digital agencies to showcase services, testimonials and lead funnels.",
    category: "Marketing",
    stack: "WordPress • PHP",
    image: "https://www.matainja.com/wp-content/uploads/2016/12/digital-deck1-676x451.jpg",
  },
];

const featureHighlights = [
  {
    title: "Team Working",
    description:
      "We are expert working using Git repository with other member.and also solve Conflict issue and Setup git on Clients Server.",
    media: "https://www.matainja.com/wp-content/uploads/2016/10/team_work.jpg",
    mediaAlt: "Product engineers collaborating in studio",
  },
  {
    title: "Perfect code indentation",
    description:
      "Indentation is used to format program source code to improve readability. Thats Why We are always maintain proper coding Style to make Clean code and Readable the functionality.",
    media: "https://www.matainja.com/wp-content/uploads/2016/10/SelectionIncreaseDecrease.gif",
    mediaAlt: "GIF showing code indentation selection",
  },
  {
    title: "Easy Understand Clients requirements",
    description:
      "We are very experienced to understand Clients requirements easily. and also We will provide Suggestion to improve your website design and functionality",
    media: "https://www.matainja.com/wp-content/uploads/2016/10/9-1.jpg",
    mediaAlt: "Matainja strategy workshop",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const heroTitle = useMemo(() => heroSlides[current].title.split("\n"), [current]);
  const galleryImages = useMemo(() => [...heroImages, ...heroImages], []);

  return (
    <div className="home-shell">
      <section className="home-hero">
        <div className="hero-background">
          <span className="hero-orb hero-orb--one" />
          <span className="hero-orb hero-orb--two" />
          <span className="hero-grid-lines" />
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tag">{heroSlides[current].tag}</span>
            <h1 className="hero-title">
              <span>{heroTitle[0]}</span>
              {heroTitle[1] && <span className="hero-title-accent">{heroTitle[1]}</span>}
            </h1>
            <p className="hero-subtitle">{heroSlides[current].subtitle}</p>
            <div className="hero-cta">
              <Link href="/contact" className="btn-primary">
                Contact us!
              </Link>
              <Link href="/portfolio" className="btn-ghost">
                View Portfolio
              </Link>
            </div>
            <div className="hero-dots">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={i === current ? "hero-dot hero-dot--active" : "hero-dot"}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="hero-badges">
              <span>Trusted by 100+ global brands</span>
              <span>11+ years shipping products</span>
            </div>
          </div>
          <div className="hero-gallery">
            <div className="hero-reel">
              {galleryImages.map((src, idx) => (
                <div key={`gallery-${idx}`} className="hero-gallery-card">
                  <Image
                    src={src}
                    alt={`Matainja hero showcase ${idx + 1}`}
                    width={320}
                    height={420}
                    className="hero-gallery-img"
                    sizes="(min-width: 1024px) 320px, 60vw"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
            <div className="hero-gallery-mask" />
          </div>
        </div>
      </section>

      <section className="home-section home-process">
        <div className="section-header">
          <span>How We Work</span>
          <h2>From idea to deployment</h2>
          <p className="section-subtext">
            Exactly the same six-step playbook we use on the live Matainja site—transparent, collaborative, obsessed with speed.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, idx) => (
            <div
              key={step.title}
              className={`process-card reveal-on-scroll direction-${step.direction}`}
              style={{
                transitionDelay: `${idx * 90}ms`,
                // @ts-expect-error custom CSS variable for animation delay
                "--process-delay": `${idx * 0.12}s`,
              }}
            >
              <div className="process-card-head">
                <span className="process-step-label">{String(idx + 1).padStart(2, "0")}</span>
                <span className="process-icon">{step.icon}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-features">
        <div className="section-header">
          <span>Why Choose Us</span>
          <h2>Exactly the partner you need</h2>
          <p className="section-subtext">
            Borrowing from matainja.com, we keep things bold, confident and energetic—without touching your original wording.
          </p>
        </div>
        <div className="feature-media-grid">
          {featureHighlights.map((feature, idx) => (
            <FeatureShowcase key={feature.title} feature={feature} delay={idx * 120} />
          ))}
        </div>
      </section>

      <section className="home-section home-projects">
        <div className="section-header">
          <span>Our Latest Project</span>
          <h2>Recent work we&apos;re proud of</h2>
          <p className="section-subtext">Same list, new drip: pill buttons, floating gradients and micro-interactions.</p>
        </div>
        <div className="project-showcase-grid">
          {latestProjects.map((project, i) => (
            <Link
              key={project.title}
              href={project.href}
              className="project-showcase-card reveal-on-scroll"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="project-media">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={420}
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="project-img"
                />
                <span className="project-badge">{project.category}</span>
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span className="project-rank">{String(i + 1).padStart(2, "0")}</span>
                  <span className="project-stack">{project.stack}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-link">
                  View Case Study <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="projects-cta">
          <Link href="/portfolio" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </section>

      <section className="home-section home-stats">
        <div className="stats-shell">
          {companyStats.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} delay={idx * 120} />
          ))}
        </div>
      </section>

      <section className="home-section home-cta">
        <div className="cta-card reveal-on-scroll" style={{ transitionDelay: "150ms" }}>
          <span className="hero-tag">Ready?</span>
          <h2 style={{fontWeight: "600"}}>
            Ready to Start Your <span>Next Project?</span>
          </h2>
          <p>
            For any help, query, Hiring, Project work Or anything else! Contact us! Don&apos;t hesitate, Go forward and contact us!
          </p>
          <div className="cta-contact">
            <div>
              <span>Call us today</span>
              <strong>+91 033-2323-45-05</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>support@matainja.com</strong>
            </div>
          </div>
          <Link href="/contact" className="cta-btn-glow">
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
}

function StatCard({ stat, delay = 0 }: { stat: CompanyStat; delay?: number }) {
  const { value, suffix = "+", label, detail, accent } = stat;
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node || hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.45 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 1600;
    const start = performance.now();
    let rafId: number;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated, value]);

  return (
    <div
      ref={cardRef}
      className="stat-card reveal-on-scroll"
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={`${value}${suffix} ${label}`}
    >
      <span className="stat-value" style={{ color: accent }}>
        {`${count.toLocaleString()}${suffix}`}
      </span>
      <span className="stat-label">{label}</span>
      <p>{detail}</p>
    </div>
  );
}

function FeatureShowcase({
  feature,
  delay = 0,
}: {
  feature: {
    title: string;
    description: string;
    media: string;
    mediaAlt: string;
  };
  delay?: number;
}) {
  return (
    <div className="feature-media-card reveal-on-scroll" style={{ transitionDelay: `${delay}ms` }}>
      <div className="feature-media">
        <Image
          src={feature.media}
          alt={feature.mediaAlt}
          width={480}
          height={320}
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="feature-media-img"
          unoptimized={feature.media.endsWith(".gif")}
        />
      </div>
      <div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}
