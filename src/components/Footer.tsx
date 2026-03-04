import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="wp-container wp-container-pad84" style={{ paddingTop: "28px", paddingBottom: "20px" }}>

        {/* Logo + social row: logo left, social icons right with room for WhatsApp button */}
        <div className="grid items-start" style={{ gridTemplateColumns: "1fr auto 160px", paddingRight: "0" }}>
          {/* Logo */}
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.matainja.com/wp-content/uploads/2016/10/logo-1.png"
              alt="Matainja Technologies"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Social icons */}
          <div className="footer-social-icons dark-social-icons">
            <a href="https://www.facebook.com/matainja" target="_blank" rel="noopener noreferrer" className="social-icon-facebook" title="Facebook" aria-label="Facebook" />
            <a href="https://plus.google.com/+MatainjaTechnologies" target="_blank" rel="noopener noreferrer" className="social-icon-googleplus" title="Google+" aria-label="Google+" />
            <a href="https://twitter.com/matainja" target="_blank" rel="noopener noreferrer" className="social-icon-twitter" title="Twitter" aria-label="Twitter" />
          </div>

          {/* Empty col — reserves space for fixed WhatsApp button */}
          <div />
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs mt-2 mb-4">
          Copyright &copy; 2018 Matainja Technologies. All rights reserved.
        </p>

      </div>

      {/* Trustpilot — centered, bordered */}
      <div className="border-t border-gray-100 py-4 flex justify-center">
        <a
          href="https://www.trustpilot.com/review/matainja.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-300 px-5 py-2 text-sm text-gray-600 hover:border-gray-500 transition-colors"
        >
          Review us on
          <span className="flex items-center gap-1 font-semibold" style={{ color: "#00b67a" }}>
            <svg viewBox="0 0 24 24" fill="#00b67a" className="w-4 h-4">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            Trustpilot
          </span>
        </a>
      </div>

    </footer>
  );
}
