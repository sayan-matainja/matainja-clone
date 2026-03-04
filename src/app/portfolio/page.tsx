"use client";

import Link from "next/link";
import { useState } from "react";

const allProjects = [
  { title: "Mental Health Patient ~ Doctor Consult & Buy Medicine", tags: ["Figma", "UI & UX Design"] },
  { title: "Loca360 Location Tracking Android Application", tags: ["android", "Firestore", "json"] },
  { title: "Android Application for Blog", tags: ["android", "json"] },
  { title: "Laravel Ecommerce Website", tags: ["Laravel", "PHP", "Api"] },
  { title: "Hottieandlord Fashion eCommerce Website", tags: ["OpenCart", "PHP"] },
  { title: "Scrello project", tags: ["Laravel", "PHP", "Api"] },
  { title: "Goaly Website for Mobile", tags: ["Codeigniter", "PHP", "json"] },
  { title: "Workeasy Car Service", tags: ["Laravel", "PHP", "Solr"] },
  { title: "NIGERIAN SHIPPERS' COUNCIL INDIVIDUAL PERFORMANCE MANAGEMENT SYSTEM", tags: ["Codeigniter", "PHP", "Api", "Best Achievement"] },
  { title: "HDS Mobile Application", tags: ["android", "Firestore"] },
  { title: "Motornet.ro", tags: ["Codeigniter", "PHP", "Solr"] },
  { title: "Workeasy Car Service Care React Native", tags: ["React Native", "json"] },
  { title: "MinutesHub", tags: ["Laravel", "PHP", "Api", "Best Achievement"] },
  { title: "Music Website", tags: ["Wordpress"] },
  { title: "Quizy Game in Web React", tags: ["React", "Api"] },
  { title: "Python Attendance SYSTEM", tags: ["Python"] },
  { title: "Emmablair Joys – Jewellery Website", tags: ["Wordpress", "PHP"] },
  { title: "LG TIME CHECK AUTOMATION", tags: ["PHP", "Api"] },
  { title: "Dentis Make a Appointment", tags: ["Codeigniter", "PHP"] },
  { title: "The Greeting Cake", tags: ["Wordpress", "PHP"] },
  { title: "Home AND PATIO", tags: ["OpenCart", "PHP", "Solr"] },
  { title: "Connect Dojo", tags: ["Codeigniter", "PHP"] },
  { title: "EMA – ERP SYSTEM", tags: ["Codeigniter", "PHP", "Solr", "Best Achievement"] },
  { title: "Solr Search In WordPress Classified", tags: ["Wordpress", "Solr"] },
  { title: "centre for Suicide Prevention", tags: ["Wordpress", "Best Achievement"] },
  { title: "HibbardLaw Firms and associates", tags: ["Wordpress", "PHP"] },
  { title: "Mountain Meadow – Ecommerce", tags: ["OpenCart", "PHP"] },
  { title: "Digital Deck", tags: ["Angular", "Api"] },
  { title: "Recent Development – Ecommerce Website", tags: ["OpenCart", "PHP", "Solr"] },
  { title: "HCare Software – Matainja", tags: ["Codeigniter", "PHP", "Api"] },
  { title: "Human Resource Management Software", tags: ["Codeigniter", "PHP", "Best Achievement"] },
  { title: "Automated Personalized Phone Call", tags: ["PHP", "Api"] },
  { title: "LUVKush", tags: ["Codeigniter", "PHP", "json"] },
  { title: "Medcon", tags: ["Laravel", "PHP"] },
  { title: "Railway TimeTable", tags: ["React", "Api", "Best Achievement"] },
  { title: "TypeDojo – PHP Melody", tags: ["PHP"] },
  { title: "Natuurhuisje – Popular Travel Website in Nederland", tags: ["Codeigniter", "PHP", "Solr", "Api", "Best Achievement"] },
  { title: "Centerpiece Design Wizard And Sell", tags: ["React", "Api"] },
  { title: "High Intensity Internal Training (HIIT)", tags: ["Wordpress", "PHP"] },
  { title: "Coop-Asia – Magneto", tags: ["Magneto", "PHP"] },
  { title: "handtrucks2go – E-commerce", tags: ["Magneto", "PHP", "Solr", "Best Achievement"] },
  { title: "Eliteduty – Freelancing Website", tags: ["Laravel", "PHP", "Api"] },
  { title: "Natuurhuisje Android", tags: ["android", "json", "Api"] },
  { title: "Hottieandlord – Magneto", tags: ["Magneto", "PHP"] },
  { title: "HDS Cargo", tags: ["Codeigniter", "PHP", "Solr", "Api"] },
  { title: "Truecaller App Clone", tags: ["android", "json", "Api"] },
  { title: "Loca360 Web Admin", tags: ["Codeigniter", "PHP", "Api"] },
  { title: "Pajax Framework", tags: ["Pajax", "PHP"] },
  { title: "Yii2 Backend Framework", tags: ["Yii Framework", "PHP"] },
  { title: "Apricot Lane Boutique", tags: ["OpenCart", "PHP", "Solr"] },
  { title: "Bulk SMS Application", tags: ["Codeigniter", "PHP"] },
  { title: "Framework7 App", tags: ["Framework7"] },
  { title: "Nodejs Chat App", tags: ["Nodejs", "Api"] },
  { title: "Angular Blog App", tags: ["Angular"] },
  { title: "Yii2 REST API", tags: ["Yii Framework", "Api"] },
];

const filterTags = [
  "All", "android", "Angular", "Api", "Best Achievement", "Codeigniter",
  "Figma", "Firestore", "Framework7", "json", "Laravel", "Magneto",
  "Nodejs", "OpenCart", "Pajax", "PHP", "Python", "React", "React Native",
  "Solr", "UI & UX Design", "Wordpress", "Yii Framework",
];

const tagColors: Record<string, string> = {
  android: "bg-green-100 text-green-700",
  Angular: "bg-red-100 text-red-700",
  Api: "bg-yellow-100 text-yellow-700",
  "Best Achievement": "bg-amber-100 text-amber-700",
  Codeigniter: "bg-orange-100 text-orange-700",
  Figma: "bg-purple-100 text-purple-700",
  Firestore: "bg-orange-100 text-orange-700",
  Framework7: "bg-blue-100 text-blue-700",
  json: "bg-gray-100 text-gray-700",
  Laravel: "bg-red-100 text-red-700",
  Magneto: "bg-pink-100 text-pink-700",
  Nodejs: "bg-green-100 text-green-700",
  OpenCart: "bg-blue-100 text-blue-700",
  Pajax: "bg-indigo-100 text-indigo-700",
  PHP: "bg-indigo-100 text-indigo-700",
  Python: "bg-blue-100 text-blue-700",
  React: "bg-cyan-100 text-cyan-700",
  "React Native": "bg-cyan-100 text-cyan-700",
  Solr: "bg-orange-100 text-orange-700",
  "UI & UX Design": "bg-purple-100 text-purple-700",
  Wordpress: "bg-blue-100 text-blue-700",
  "Yii Framework": "bg-green-100 text-green-700",
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="text-white py-14 text-center" style={{ background: "linear-gradient(135deg, #1e2a4a 0%, #0f1b35 100%)" }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
          <nav className="text-gray-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#e8a020" }}>Portfolio</span>
          </nav>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                style={activeFilter === tag ? { background: "#e8a020" } : {}}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  activeFilter === tag
                    ? "text-white border-transparent"
                    : "bg-white text-gray-600 border-gray-200 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 flex-1" style={{ background: "#f5f7fa" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, idx) => {
              const primaryTag = project.tags[0] ?? "PHP";
              const thumbBg =
                primaryTag === "android" || primaryTag === "React Native" ? "linear-gradient(135deg,#1a6b3c,#2d9e5e)" :
                primaryTag === "Wordpress" ? "linear-gradient(135deg,#21759b,#3498db)" :
                primaryTag === "Laravel" ? "linear-gradient(135deg,#8b1a1a,#c0392b)" :
                primaryTag === "React" ? "linear-gradient(135deg,#1a4a6b,#2980b9)" :
                primaryTag === "Figma" || primaryTag === "UI & UX Design" ? "linear-gradient(135deg,#6b1a6b,#9b59b6)" :
                primaryTag === "OpenCart" ? "linear-gradient(135deg,#6b4a1a,#e67e22)" :
                primaryTag === "Magneto" ? "linear-gradient(135deg,#4a1a6b,#8e44ad)" :
                primaryTag === "Angular" ? "linear-gradient(135deg,#8b1a1a,#e74c3c)" :
                primaryTag === "Python" ? "linear-gradient(135deg,#1a3a6b,#2c5f8a)" :
                "linear-gradient(135deg,#1e2a4a,#2c3e6b)";
              return (
                <div
                  key={project.title}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col group"
                >
                  <div
                    className="h-36 flex flex-col items-center justify-center px-4 relative"
                    style={{ background: thumbBg }}
                  >
                    <span className="absolute top-2 right-2 text-xs font-bold text-white/60">
                      #{idx + 1}
                    </span>
                    <div className="text-white/20 text-6xl font-extrabold absolute select-none">
                      {primaryTag.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-sm font-bold mb-2 leading-snug group-hover:text-orange-500 transition-colors" style={{ color: "#1e2a4a" }}>
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-auto pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            tagColors[tag] ?? "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16">No projects found for this filter.</p>
          )}
        </div>
      </section>
    </div>
  );
}
