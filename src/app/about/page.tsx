import StatsCounter from "@/components/StatsCounter";

const services = [
  {
    iconClass: "fa fa-desktop",
    title: "Website Development",
    description:
      "Delivering a fine combination of creativity, latest technical expertise and innovativeness, Matainja Technologies ensure both static and dynamic websites which also comes in customized form.",
  },
  {
    iconClass: "fa fa-android",
    title: "Android Development",
    description:
      "Android services are offered to enterprises and companies who aspire to extend their business into the mobile arena with proper custom development and end-to-end solutions across varied categories.",
  },
  {
    iconClass: "fa fa-apple",
    title: "iOS Development",
    description:
      "Dedicated towards developing iOS and Utility based applications that are highly flexible and can easily accustom itself with existing mobile platforms.",
  },
  {
    iconClass: "fa fa-search",
    title: "Apache Solr Search",
    description:
      "We are Provide Setup Solr On Server and Configure The schema files and Well Structure of Indexing and searching Query using Curl and Solarium Clients.",
  },
  {
    iconClass: "fa fa-shopping-cart",
    title: "Ecommerce",
    description:
      "Theme includes so many different options and designs. Users can make amazingly cool layouts.",
  },
  {
    iconClass: "fa fa-gears",
    title: "Custom Code",
    description:
      "We are developed unique logical website using Php Good Framework like Yii framework , Codeigniter, Laravel, Symphony.",
  },
];


import "./about-wp.css";

export default function About() {
  return (
    <div className="about-wp-scope flex flex-col min-h-screen">
      <section
        className="text-center"
        style={{
          backgroundImage: "url('https://www.matainja.com/wp-content/uploads/2016/10/about_us-new2.jpg')",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="container-inner" style={{ paddingTop: "42px", paddingBottom: "42px" }}>
            <h1 style={{ margin: 0, fontSize: "40px", lineHeight: "46px", fontWeight: 700, color: "#000" }}>About US</h1>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ paddingTop: "35px", paddingBottom: "15px" }}>
        <div className="container">
          <div className="container-inner">
            <div className="omsc-one-half">
                <p style={{ marginBottom: "18px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://www.matainja.com/wp-content/uploads/2014/02/art-new.png"
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </p>
                <h3 style={{ fontSize: "18px", lineHeight: "28px", fontWeight: 600, color: "#333" }}>
                  We are a growing web development company based in India. We provide any kind of service related to websites by taking full responsibility until your online business is growing smoothly. Our vision is to be the most trusted service provider of website systems and technologies that ensure the security and good navigation system in Web Technology.
                </h3>
                <blockquote className="omsc-blockquote">
                  <div className="omsc-blockquote-inner">
                    <div>
                      We are very happy working with Matainja. We have been working with them for over 6 years now and they have never disappointed us. They are hard workers and are ready to solve your problems anytime.
                    </div>
                    <div className="omsc-blockquote-footer">
                      <cite className="omsc-blockquote-author">LUUK ,Natuurhuisje SEO</cite>
                    </div>
                  </div>
                </blockquote>
                <br />
                <div className="clear" />
            </div>

            <div className="omsc-one-half omsc-last">
                <p style={{ color: "#666", fontSize: "12px", lineHeight: "18px", marginBottom: "10px" }}>
                  Respect, professionalism and honesty are the values that are the foundation of Matainja
                </p>
                <h3 style={{ fontSize: "18px", lineHeight: "28px", fontWeight: 600, color: "#333" }}>
                  Respect, professionalism and honesty are the values that are the foundation of Matainja
                </h3>
                <ul className="wp-like-list" style={{ color: "#333" }}>
                  <li>We take responsibility for bug-free website with security</li>
                  <li>We deliver the project within the deadline</li>
                  <li>We provide support 24 x 7 hours</li>
                  <li>We undertake projects with low cost and short deadline</li>
                  <li>
                    We use framework technology for every custom code (Yii, Codeigniter, Zend, Cake PHP, Laravel, Hero Framework, React JS, Git) ,Database Design by Database Architect
                  </li>
                </ul>
                <blockquote className="omsc-blockquote omsc-blockquote-large">
                  <div className="omsc-blockquote-inner">
                    <div>
                      Matainja Technologies made sure work was completed exactly as defined. I will continue to work with them for future modifications without hesitation..
                    </div>
                    <div className="omsc-blockquote-footer">
                      <cite className="omsc-blockquote-author">iOnline Paul, SEO</cite>
                    </div>
                  </div>
                </blockquote>
                <br />
                <div className="clear" />
            </div>

            <div className="omsc-clear" />

            <div style={{ height: "10px" }} />
            <div style={{ borderTop: "1px dashed #ccc" }} />
            <div style={{ height: "10px" }} />
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#ffffff",
          color: "#666666",
          backgroundImage: "url('https://www.matainja.com/wp-content/uploads/2014/02/cream_pixels.png')",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          paddingTop: "25px",
          paddingBottom: "25px",
        }}
      >
        <div className="container">
          <div className="container-inner">
            {services.map((svc, idx) => (
              <div key={svc.title} className={idx % 3 === 2 ? "omsc-one-third omsc-last" : "omsc-one-third"}>
                <h4 style={{ marginTop: 0 }}>
                  <span style={{ fontSize: "1em", lineHeight: "1.5em" }}>{svc.title}</span>
                </h4>
                <p>
                  <span className="omsc-dropcap omsc-bgcolor-theme omsc-with-bg-color omsc-shape-circle" style={{ fontSize: "300%" }}>
                    <i className={`omsc-icon ${svc.iconClass}`} aria-hidden="true" />
                  </span>
                  {svc.description}
                </p>
                <div className="clear" />
              </div>
            ))}
            <div className="omsc-clear" />

            <div style={{ height: "50px" }} />

            <StatsCounter />
          </div>
        </div>
      </section>

      <section className="bg-white text-center" style={{ paddingTop: "10px", paddingBottom: "30px" }}>
        <div className="container">
          <div className="container-inner">
          <h2 style={{ marginTop: 0, fontSize: "30px", lineHeight: "38px", fontWeight: 700, color: "#333" }}>Our Partners</h2>
          <div className="omsc-logos">
            <div className="omsc-clear" />
          </div>
          <br />
          <div style={{ height: "20px" }} />
          </div>
        </div>
      </section>
    </div>
  );
}
