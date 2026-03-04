import Link from "next/link";

const services = [
  {
    icon: "🖥️",
    title: "Website Development",
    description:
      "Delivering a fine combination of creativity, latest technical expertise and innovativeness, Matainja Technologies ensure both static and dynamic websites which also comes in customized form.",
  },
  {
    icon: "🤖",
    title: "Android Development",
    description:
      "Android services are offered to enterprises and companies who aspire to extend their business into the mobile arena with proper custom development and end-to-end solutions across varied categories.",
  },
  {
    icon: "🍎",
    title: "iOS Development",
    description:
      "Dedicated towards developing iOS and Utility based applications that are highly flexible and can easily accustom itself with existing mobile platforms.",
  },
  {
    icon: "🔍",
    title: "Apache Solr Search",
    description:
      "We are Provide Setup Solr On Server and Configure The schema files and Well Structure of Indexing and searching Query using Curl and Solarium Clients.",
  },
  {
    icon: "🛒",
    title: "Ecommerce",
    description:
      "Theme includes so many different options and designs. Users can make amazingly cool layouts.",
  },
  {
    icon: "⚙️",
    title: "Custom Code",
    description:
      "We are developed unique logical website using Php Good Framework like Yii framework , Codeigniter, Laravel, Symphony.",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="text-white py-14 text-center relative" style={{ background: "linear-gradient(135deg, #1e2a4a 0%, #0f1b35 100%)" }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Service</h1>
          <nav className="text-gray-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#e8a020" }}>Service</span>
          </nav>
        </div>
        {/* Scroll arrow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-400 border border-gray-100">
            ↓
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-20 pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1e2a4a" }}>Our Services</h2>
          <div className="w-12 h-1 mx-auto rounded mb-6" style={{ background: "#e8a020" }} />
          <p className="text-gray-500 leading-relaxed">
            We are growing web development company based in India, we provide any kind of service
            related to website with taking full responsibility until your online business growing up
            smoothly. Our vision is to be the most trusted Functionality of Website systems and
            technologies that ensure the security and Good navigation system in Web Technology..
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl shadow"
                  style={{ background: "#e8a020" }}
                >
                  {svc.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "#1e2a4a" }}>{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1e2a4a" }}>Office Location</h2>
          <div className="w-12 h-1 mx-auto rounded mb-2" style={{ background: "#e8a020" }} />
          {/* Pin icon */}
          <div className="flex justify-center mb-6 mt-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
              style={{ background: "#e8a020" }}
            >
              📍
            </div>
          </div>
          {/* Google Maps embed */}
          <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.0635869088766!2d88.40544739999999!3d22.558319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02742e9e4acc3b%3A0x924a4d8acf33a574!2sMatainja%20Technologies!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Matainja Technologies Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
