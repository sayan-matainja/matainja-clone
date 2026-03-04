import Link from "next/link";

const inputCls = "w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orange-300 outline-none";
const labelCls = "block text-sm text-gray-700 mb-1";

export default function Career() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="text-white py-14 text-center" style={{ background: "linear-gradient(135deg, #1e2a4a 0%, #0f1b35 100%)" }}>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-1">Build your career as a programmer and designer?</h1>
          <p className="mt-1 text-sm" style={{ color: "#e8a020" }}>Join our Organization</p>
          <nav className="text-gray-300 text-sm mt-3">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#e8a020" }}>Career</span>
          </nav>
        </div>
      </section>

      {/* Two-column section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* LEFT: Functional Area + Internship Form */}
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1e2a4a" }}>Our Functional Area</h2>
              <p className="text-gray-600 text-sm mb-3">PHP, MYSQL, Javascript , Jquery , Android, IOS</p>

              <div className="border border-gray-200 rounded p-4 mb-5">
                <h3 className="text-base font-bold mb-1" style={{ color: "#1e2a4a" }}>
                  Onsite Web Development Training &amp; Internship – Registration Form
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Note: Please register online to attend training program (applications invited for students who want to learn web programming)
                </p>

                <form className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Your First Name (required)</label>
                      <input type="text" className={inputCls} placeholder="First Name" />
                    </div>
                    <div>
                      <label className={labelCls}>Your Last Name (required)</label>
                      <input type="text" className={inputCls} placeholder="Last Name" />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Your Email (required)</label>
                    <input type="email" className={inputCls} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className={labelCls}>Contact Number (required)</label>
                    <input type="tel" className={inputCls} placeholder="+91 XXXXXXXXXX" />
                  </div>
                  <div>
                    <label className={labelCls}>Gender</label>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <label className="flex items-center gap-1"><input type="radio" name="gender" value="male" /> Male</label>
                      <label className="flex items-center gap-1"><input type="radio" name="gender" value="female" /> Female</label>
                      <label className="flex items-center gap-1"><input type="radio" name="gender" value="other" /> Other</label>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Current City (required)</label>
                    <select className={inputCls}>
                      <option value="">Select city</option>
                      {["Kolkata","Delhi","Mumbai","Bengaluru","Chennai","Hyderabad","Pune","Ahmedabad","Gurgaon","Noida"].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Highest Qualification (required)</label>
                    <input type="text" className={inputCls} placeholder="e.g. B.Tech, MCA, BCA" />
                  </div>
                  <div>
                    <label className={labelCls}>Programming Language (required)</label>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <label className="flex items-center gap-1"><input type="radio" name="lang" value="php" /> PHP</label>
                      <label className="flex items-center gap-1"><input type="radio" name="lang" value="python" /> Python</label>
                      <label className="flex items-center gap-1"><input type="radio" name="lang" value="java" /> Java</label>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Preferred Technology (required)</label>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <label className="flex items-center gap-1"><input type="radio" name="tech" value="backend" /> Backend (PHP)</label>
                      <label className="flex items-center gap-1"><input type="radio" name="tech" value="frontend" /> Frontend (React)</label>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Duration of Internship (required)</label>
                    <select className={inputCls}>
                      <option value="">Select Duration</option>
                      <option>15 Days</option>
                      <option>1 Month</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Note File (required)</label>
                    <input type="file" accept=".pdf" className="w-full text-sm text-gray-600 border border-gray-300 rounded py-1.5 px-2 outline-none" />
                  </div>
                  <div>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" className="mt-1 flex-shrink-0" required />
                      <span className="text-xs text-gray-600">
                        I confirm that the details provided are true and I agree to process personal data, including the ₹1000 non-refundable registration fee, and performance-based full-time opportunity.
                      </span>
                    </label>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-xs text-gray-700 rounded">
                    <strong>Note:</strong> The ₹1000 registration fee covers training and administrative costs. Certificates will be awarded upon successful completion.
                  </div>
                  <button type="submit" className="text-white font-bold py-2 px-6 rounded transition hover:opacity-90 text-sm" style={{ background: "#e8a020" }}>
                    Send
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT: Send Your CV */}
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#1e2a4a" }}>Send Your CV</h2>
              <p className="text-gray-500 text-sm mb-5">
                For any help, query, Hiring, Project work Or anything else ! Contact us ! Don&apos;t hesitate , Go forward and contact us ! We guarantee you , that you will be amazed with our service.
              </p>
              <form className="space-y-3">
                <div>
                  <label className={labelCls}>Your Name (required)</label>
                  <input type="text" className={inputCls} placeholder="Your Name" />
                </div>
                <div>
                  <label className={labelCls}>Your Email (required)</label>
                  <input type="email" className={inputCls} placeholder="your@email.com" />
                </div>
                <div>
                  <label className={labelCls}>Applied For (required)</label>
                  <select className={inputCls}>
                    <option value="">Select role</option>
                    <option>Web Development</option>
                    <option>Web Designer</option>
                    <option>Android Development</option>
                    <option>IOS Development</option>
                    <option>Hr</option>
                    <option>other staff</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Note File (required)</label>
                  <input type="file" accept=".pdf,.doc,.docx" className="w-full text-sm text-gray-600 border border-gray-300 rounded py-1.5 px-2 outline-none" />
                </div>
                <button type="submit" className="text-white font-bold py-2 px-6 rounded transition hover:opacity-90 text-sm" style={{ background: "#e8a020" }}>
                  Send
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Recruitment Notices */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-xl font-bold" style={{ color: "#1e2a4a" }}>Recruitment Notice (urgent) for PHP and React.js Programmer</h2>

          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
            <h3 className="text-base font-bold mb-3" style={{ color: "#1e2a4a" }}>Recruitment Notice for PHP Developer</h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-gray-600">
              <dt className="font-semibold">Job Expired</dt><dd>3rd October 2020</dd>
              <dt className="font-semibold">Vacancy</dt><dd>3</dd>
              <dt className="font-semibold">Experience</dt><dd>0 – 1 Years</dd>
              <dt className="font-semibold">Location</dt><dd>Kolkata</dd>
              <dt className="font-semibold">Education</dt><dd>B-Tech (Computer) / MCA / M.sc (Computer) / M-Tech (Computer)</dd>
              <dt className="font-semibold">Industry Type</dt><dd>IT-Software / Android Developer</dd>
            </dl>
            <p className="mt-3 text-sm text-gray-500">
              Send Your CV to{" "}
              <a href="mailto:hr@matainja.com" className="hover:underline" style={{ color: "#e8a020" }}>hr@matainja.com</a>
            </p>
          </div>

          <div className="border-t border-dashed border-gray-300 pt-4" />

          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-5">
            <h3 className="text-base font-bold mb-3" style={{ color: "#1e2a4a" }}>Recruitment Notice for React &amp; Node Js</h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-gray-600">
              <dt className="font-semibold">Job Expired</dt><dd>3rd October 2020</dd>
              <dt className="font-semibold">Vacancy</dt><dd>3</dd>
              <dt className="font-semibold">Experience</dt><dd>0 – 1 Years</dd>
              <dt className="font-semibold">Location</dt><dd>Kolkata</dd>
              <dt className="font-semibold">Education</dt><dd>(HONs) Only</dd>
              <dt className="font-semibold">Industry Type</dt><dd>IT-Software / Project Communicator</dd>
            </dl>
            <p className="mt-3 text-sm text-gray-500">
              Send Your CV to{" "}
              <a href="mailto:hr@matainja.com" className="hover:underline" style={{ color: "#e8a020" }}>hr@matainja.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Trustpilot */}
      <section className="py-10 text-center" style={{ background: "#f5f7fa" }}>
        <div className="container mx-auto px-4">
          <a
            href="https://www.trustpilot.com/review/matainja.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-sm font-bold px-6 py-3 rounded transition hover:opacity-90"
            style={{ background: "#00b67a" }}
          >
            ★ Review us on Trustpilot
          </a>
        </div>
      </section>
    </div>
  );
}
