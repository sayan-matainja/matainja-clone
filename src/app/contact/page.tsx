export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header - tall white space like original */}
      <section className="py-16 bg-white" />

      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1e2a4a" }}>Contact us</h2>
              <div className="space-y-3 text-gray-600 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-base" style={{ color: "#e8a020" }}>📍</span>
                  <p>216 Canal South Road, Chingrighata (Saltlake), Kolkata 700105, WB, INDIA</p>
                </div>
                {/* Phone + Email on same row */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "#e8a020" }}>📞</span>
                    <a href="tel:+910332323-4505" className="hover:underline">+91 033-23234505</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "#e8a020" }}>✉</span>
                    <a href="mailto:hr@matainja.com" className="hover:underline" style={{ color: "#e8a020" }}>hr@matainja.com</a>
                  </div>
                </div>
                {/* Skype row */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "#e8a020" }}>💬</span>
                    <span>utpal.matainja</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "#e8a020" }}>💬</span>
                    <span>creativity16</span>
                  </div>
                </div>
                {/* WhatsApp row */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "#e8a020" }}>📱</span>
                    <span>+919674784589</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "#e8a020" }}>📱</span>
                    <span>+917003579764</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1e2a4a" }}>Office location</h2>
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.0635869088766!2d88.40544739999999!3d22.558319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02742e9e4acc3b%3A0x924a4d8acf33a574!2sMatainja%20Technologies!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Matainja Technologies Office Location"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: "#1e2a4a" }}>Send us a message</h2>
              <p className="text-gray-500 text-sm mb-6">
                For any help, query, hiring, project work or anything else ! Contact us ! Don&apos;t hesitate , Go forward and contact us ! We guarantee you , that you will be amazed with our service.
              </p>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Your Name (required)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Your Email (required)</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Your Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Attachment ( Docx|pdf|doc|xls| txt )</label>
                  <input
                    type="file"
                    accept=".docx,.pdf,.doc,.xls,.txt"
                    className="w-full text-sm text-gray-600 border border-gray-300 rounded py-1.5 px-2 outline-none"
                  />
                </div>
                <div className="text-sm text-gray-500">[recaptcha]</div>
                <button
                  type="submit"
                  className="text-white font-bold py-2 px-8 rounded transition duration-300 hover:opacity-90"
                  style={{ background: "#e8a020" }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
