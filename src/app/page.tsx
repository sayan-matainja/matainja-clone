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

  Zap,

  Sparkles,

  Clock,

  Shield,

  Heart,

  ShoppingCart,

  DollarSign,

} from "lucide-react";

import "@/styles/brand-colors.css";

import "./home/home-modern.css";



const heroSlides = [

  {

    tag: "Welcome to Matainja Technologies",

    title: "Digital Solutions\nSince 2013",

    subtitle: "Your Technology Partner",

  },

  {

    tag: "Mobile Development Experts",

    title: "Android and IOS\nProgrammer",

    subtitle: "End-to-end mobile solutions for your business",

  },

  {

    tag: "Modern Web & App Development",

    title: "Web & App\nDevelopment",

    subtitle: "Modern solutions for your business",

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

    value: 600,

    suffix: "+",

    label: "Strong Team",

    detail: "Experienced professionals dedicated to your success",

    accent: "#ffb347",

  },

  {

    value: 350,

    suffix: "+",

    label: "Projects Delivered",

    detail: "Successful deployments across various industries",

    accent: "#ff6363",

  },

  {

    value: 11,

    suffix: "+",

    label: "Years Experience",

    detail: "Building digital solutions since 2013",

    accent: "#5ec7ff",

  },

];



const techLogos = [
  // Frontend
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend" },
  { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", category: "Frontend" },
  
  // Backend
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "Backend" },
  { name: "Laravel", src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg", category: "Backend" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
  
  // Mobile
  { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Mobile" },
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "Mobile" },
  { name: "iOS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg", category: "Mobile" },
  { name: "Android", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", category: "Mobile" },
  
  // Database
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Database" },
];

const partnerLogos = [
  { name: "LG", src: "/logos/LG_logo.svg" },
  { name: "Nigerian Government", src: "/logos/nigerian_govt.svg" },
  { name: "Ola Cabs", src: "/logos/Ola_Cabs_logo.svg" },
  { name: "MP Government", src: "/logos/MP_Govt_Logo.svg" },
  { name: "Hibbard Lawyers", src: "/logos/hibbard_lawyers_logo.svg" },
  { name: "Hottie and Lord", src: "/logos/hottieandlord_logo.svg" },
  { name: "MotorNet", src: "/logos/motornet_logo.png" },
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

      "Development Phase is more important, First of all choose Framework and language according to Clients Requirements and assign to exprience team .",

    direction: "left",

  },

  {

    icon: <Wrench />,

    title: "Optimization",

    description:

      "While develop module, our Quality Team test all completed module using different kind of testing tools, like unit test , selinium test etc.",

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

    title: "EMA – ERP SYSTEM",

    href: "https://www.matainja.com/portfolio/ema-erp-system/",

    description: "Enterprise ERP suite covering inventory, finance and HR with granular role permissions.",

    category: "Enterprise",

    stack: "CodeIgniter • JSON",

    image: "https://www.matainja.com/wp-content/uploads/2017/03/EMA-ERP-676x451.png",

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

            <div className="hero-gallery-animation">

              <div className="hero-gallery-animation-orb1" />

              <div className="hero-gallery-animation-orb2" />

              <div className="hero-gallery-animation-orb3" />

            </div>

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

        <div className="process-simple">
          <div className="process-simple-row">
            <div className="process-simple-item reveal-on-scroll" style={{ transitionDelay: "0ms" }}>
              <div className="process-simple-header">
                <span className="process-simple-number">01</span>
                <span className="process-simple-icon"><Lightbulb /></span>
              </div>
              <h3>Commited</h3>
              <p>We believe listening is a crucial key factor of effectiveness. Thus, we listen carefully to have a firm grasp of your idea and goals.</p>
            </div>
            <div className="process-simple-item reveal-on-scroll" style={{ transitionDelay: "90ms" }}>
              <div className="process-simple-header">
                <span className="process-simple-number">02</span>
                <span className="process-simple-icon"><Workflow /></span>
              </div>
              <h3>Flow Chart</h3>
              <p>According to client requirements, we create a flowchart and blueprint for all functionality, module structure, and database design.</p>
            </div>
            <div className="process-simple-item reveal-on-scroll" style={{ transitionDelay: "180ms" }}>
              <div className="process-simple-header">
                <span className="process-simple-number">03</span>
                <span className="process-simple-icon"><PenSquare /></span>
              </div>
              <h3>Design</h3>
              <p>Design is crucial nowadays. We provide good navigation system design and fast-loading modern HTML tags.</p>
            </div>
          </div>
          <div className="process-simple-row">
            <div className="process-simple-item reveal-on-scroll" style={{ transitionDelay: "270ms" }}>
              <div className="process-simple-header">
                <span className="process-simple-number">04</span>
                <span className="process-simple-icon"><Laptop2 /></span>
              </div>
              <h3>Develop</h3>
              <p>Development is key. We choose the framework and language based on client requirements and assign it to an experienced team.</p>
            </div>
            <div className="process-simple-item reveal-on-scroll" style={{ transitionDelay: "360ms" }}>
              <div className="process-simple-header">
                <span className="process-simple-number">05</span>
                <span className="process-simple-icon"><Wrench /></span>
              </div>
              <h3>Optimization</h3>
              <p>During module development, our Quality Team tests all completed modules using various tools like unit tests and Selenium tests.</p>
            </div>
            <div className="process-simple-item reveal-on-scroll" style={{ transitionDelay: "450ms" }}>
              <div className="process-simple-header">
                <span className="process-simple-number">06</span>
                <span className="process-simple-icon"><Rocket /></span>
              </div>
              <h3>Deploy/Setup</h3>
              <p>Finally, we set up and deploy on the client's server or hand over the source code.</p>
            </div>
          </div>
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



      <section className="home-section home-key-features">

        <div className="key-features-video-background">

          <video

            autoPlay

            muted

            loop

            playsInline

            className="key-features-video"

          >

            <source src="/videos/tech-background.mp4" type="video/mp4" />

          </video>

          <div className="key-features-overlay" />

        </div>

        

        <div className="section-header">

          <span>Key Features</span>

          <h2>What Makes Us Different</h2>

          <p className="section-subtext">

            We deliver exceptional results with our core values and commitment to excellence

          </p>

        </div>



        <div className="key-features-simple">
          <div className="key-feature-simple reveal-on-scroll" style={{ transitionDelay: "0ms" }}>
            <div className="key-feature-simple-icon">
              <Zap />
            </div>
            <div className="key-feature-simple-content">
              <h3>Get things done faster</h3>
              <p>Focus, be persistent, and be consistent. It will help to get through your tasks as efficiently as possible.</p>
            </div>
          </div>

          <div className="key-feature-simple reveal-on-scroll" style={{ transitionDelay: "120ms" }}>
            <div className="key-feature-simple-icon">
              <Sparkles />
            </div>
            <div className="key-feature-simple-content">
              <h3>Clean and quality</h3>
              <p>Yes, it&apos;s good practice to write clean code, but never at the expense of being able to deliver. The benefit of delivering a duct-taped product on time.</p>
            </div>
          </div>

          <div className="key-feature-simple reveal-on-scroll" style={{ transitionDelay: "240ms" }}>
            <div className="key-feature-simple-icon">
              <Clock />
            </div>
            <div className="key-feature-simple-content">
              <h3>On time delivery</h3>
              <p>Ultimately, Our team determines the project outcome. Motivated and enthusiastic resources can achieve to meet your project deadline.</p>
            </div>
          </div>

          <div className="key-feature-simple reveal-on-scroll" style={{ transitionDelay: "360ms" }}>
            <div className="key-feature-simple-icon">
              <Shield />
            </div>
            <div className="key-feature-simple-content">
              <h3>Support 3 Months</h3>
              <p>We will take care if any bug founds and logical problems after launch website or apps. we will monitoring the data and Speed of page loading and any leak in code. Support 3 months free.</p>
            </div>
          </div>
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



      <section className="home-section home-trust">
        <div className="section-header">
          <span>Partners</span>
          <h2>Trusted by leading companies and partners</h2>
          <p className="section-subtext">
            Working with industry leaders to deliver exceptional digital solutions
          </p>
        </div>
        <div className="trust-slider-container">
          <div className="trust-slider">
            {/* First set of logos */}
            {partnerLogos.map((partner, index) => (
              <div key={`${partner.name}-1`} className="trust-logo-item reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={partner.name.includes('MP Government') || partner.name.includes('Nigerian Government') || partner.name.includes('Hottie and Lord') ? 180 : 120}
                  height={partner.name.includes('MP Government') || partner.name.includes('Nigerian Government') || partner.name.includes('Hottie and Lord') ? 90 : 60}
                  className={`trust-logo-image ${partner.name.includes('MP Government') || partner.name.includes('Nigerian Government') || partner.name.includes('Hottie and Lord') ? 'large-logo' : ''}`}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partnerLogos.map((partner, index) => (
              <div key={`${partner.name}-2`} className="trust-logo-item">
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={partner.name.includes('MP Government') || partner.name.includes('Nigerian Government') || partner.name.includes('Hottie and Lord') ? 180 : 120}
                  height={partner.name.includes('MP Government') || partner.name.includes('Nigerian Government') || partner.name.includes('Hottie and Lord') ? 90 : 60}
                  className={`trust-logo-image ${partner.name.includes('MP Government') || partner.name.includes('Nigerian Government') || partner.name.includes('Hottie and Lord') ? 'large-logo' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="home-section home-stats">

        <div className="stats-shell">

          {companyStats.map((stat, idx) => (

            <StatCard key={stat.label} stat={stat} delay={idx * 120} />

          ))}

        </div>

      </section>



      <section className="home-section home-industries">
        <div className="section-header">
          <span>Industries</span>
          <h2>Solutions for every industry</h2>
          <p className="section-subtext">
            Tailored digital solutions that drive success across diverse sectors
          </p>
        </div>
        <div className="industries-grid">
          <div className="industry-card reveal-on-scroll" style={{ transitionDelay: "0ms" }}>
            <div className="industry-icon">
              <Heart />
            </div>
            <h3>Healthcare</h3>
            <p>Digital health platforms and patient management systems</p>
          </div>
          <div className="industry-card reveal-on-scroll" style={{ transitionDelay: "120ms" }}>
            <div className="industry-icon">
              <ShoppingCart />
            </div>
            <h3>E-commerce</h3>
            <p>Online stores with modern UX and secure payment systems</p>
          </div>
          <div className="industry-card reveal-on-scroll" style={{ transitionDelay: "240ms" }}>
            <div className="industry-icon">
              <Rocket />
            </div>
            <h3>Education</h3>
            <p>E-learning platforms and student management solutions</p>
          </div>
          <div className="industry-card reveal-on-scroll" style={{ transitionDelay: "360ms" }}>
            <div className="industry-icon">
              <DollarSign />
            </div>
            <h3>Finance</h3>
            <p>Secure financial applications and data analytics tools</p>
          </div>
        </div>
      </section>


      <section className="home-section home-tech-stack">
        <div className="section-header">
          <span>Technology</span>
          <h2>We use technology that is built to last</h2>
          <p className="section-subtext">
            Modern, scalable tech stack ensuring robust and future-proof solutions
          </p>
        </div>
        <div className="tech-stack-grid">
          <div className="tech-category reveal-on-scroll" style={{ transitionDelay: "0ms" }}>
            <h3>Frontend</h3>
            <div className="tech-items">
              {techLogos.filter(tech => tech.category === "Frontend").map((tech) => (
                <div key={tech.name} className="tech-item">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="tech-logo"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="tech-category reveal-on-scroll" style={{ transitionDelay: "120ms" }}>
            <h3>Backend</h3>
            <div className="tech-items">
              {techLogos.filter(tech => tech.category === "Backend").map((tech) => (
                <div key={tech.name} className="tech-item">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="tech-logo"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="tech-category reveal-on-scroll" style={{ transitionDelay: "240ms" }}>
            <h3>Mobile</h3>
            <div className="tech-items">
              {techLogos.filter(tech => tech.category === "Mobile").map((tech) => (
                <div key={tech.name} className="tech-item">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="tech-logo"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="tech-category reveal-on-scroll" style={{ transitionDelay: "360ms" }}>
            <h3>Database</h3>
            <div className="tech-items">
              {techLogos.filter(tech => tech.category === "Database").map((tech) => (
                <div key={tech.name} className="tech-item">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="tech-logo"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
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

