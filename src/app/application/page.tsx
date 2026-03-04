import Link from "next/link";

const apps = [
  {
    title: "Mental Health Patient ~ Doctor Consult & Buy Medicine",
    tags: ["Figma", "UI & UX Design"],
    bg: "bg-purple-50",
  },
  {
    title: "Loca360 Location Tracking Android Application",
    tags: ["android", "Firestore"],
    bg: "bg-green-50",
  },
  {
    title: "Android Application for Blog",
    tags: ["android"],
    bg: "bg-blue-50",
  },
  {
    title: "HDS Mobile Application",
    tags: ["android", "Firestore"],
    bg: "bg-orange-50",
  },
  {
    title: "Workeasy Car Service Care React Native",
    tags: ["React Native"],
    bg: "bg-cyan-50",
  },
  {
    title: "Truecaller App Clone",
    tags: ["android"],
    bg: "bg-indigo-50",
  },
];

export default function Application() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="text-white py-14 text-center" style={{ background: "linear-gradient(135deg, #1e2a4a 0%, #0f1b35 100%)" }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Application</h1>
          <nav className="text-gray-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#e8a020" }}>Application</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1e2a4a" }}>Mobile & Web Applications</h2>
          <div className="w-12 h-1 mx-auto rounded mb-4" style={{ background: "#e8a020" }} />
          <p className="text-gray-500 leading-relaxed">
            We build robust, scalable, and secure Android, iOS, and React Native applications.
            From consumer apps to enterprise-grade systems, we deliver mobile-first solutions
            tailored to your business needs.
          </p>
        </div>
      </section>

      {/* App Types */}
      <section className="pb-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#1e2a4a" }}>Android Development</h3>
              <p className="text-gray-500 text-sm">
                Native Android apps using Kotlin/Java with Firebase, REST APIs, and more.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🍎</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#1e2a4a" }}>iOS Development</h3>
              <p className="text-gray-500 text-sm">
                Dedicated iOS applications that are highly flexible across existing mobile platforms.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#1e2a4a" }}>React Native</h3>
              <p className="text-gray-500 text-sm">
                Cross-platform apps for both Android and iOS from a single codebase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Projects */}
      <section className="py-14" style={{ background: "#f5f7fa" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#1e2a4a" }}>Application Projects</h2>
          <div className="w-12 h-1 mx-auto rounded mb-8" style={{ background: "#e8a020" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div
                key={app.title}
                className="rounded-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                style={{ background: "#1e2a4a", borderBottom: "3px solid #e8a020" }}
              >
                <h3 className="font-bold text-white mb-3 leading-snug">{app.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full font-medium text-white"
                      style={{ background: "rgba(232,160,32,0.3)", border: "1px solid #e8a020" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="text-white font-bold py-3 px-8 rounded transition duration-300 inline-block hover:opacity-90"
              style={{ background: "#e8a020" }}
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
