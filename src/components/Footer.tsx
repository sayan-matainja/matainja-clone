import Image from "next/image";
import Link from "next/link";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const capabilityItems = [
  "Product Strategy",
  "UI/UX & Prototyping",
  "Web & Mobile Engineering",
  "Maintenance & Scale",
];

const socialIcons = [
  { className: "social-icon-facebook", href: "https://www.facebook.com/matainja", label: "Facebook" },
  { className: "social-icon-googleplus", href: "https://plus.google.com/+MatainjaTechnologies", label: "Google+" },
  { className: "social-icon-twitter", href: "https://twitter.com/matainja", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__halo" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link href="/" className="footer-logo-link">
              <Image
                src="https://www.matainja.com/wp-content/uploads/2016/10/logo-1.png"
                alt="Matainja Technologies"
                width={160}
                height={48}
                className="footer-logo"
              />
            </Link>
            <p>
              Trusted design & engineering partners for ambitious brands worldwide. Born in Kolkata, collaborating
              everywhere.
            </p>
            <div className="footer-social-icons dark-social-icons">
              {socialIcons.map((icon) => (
                <a key={icon.label} href={icon.href} target="_blank" rel="noopener noreferrer" className={icon.className} aria-label={icon.label} />
              ))}
            </div>
          </div>
          <div className="site-footer__nav">
            <h4>Navigate</h4>
            <ul>
              {footerNav.map((nav) => (
                <li key={nav.label}>
                  <Link href={nav.href}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="site-footer__capability">
            <h4>Capabilities</h4>
            <ul>
              {capabilityItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__meta">
          <div className="footer-meta__copyright">
            <span>© {new Date().getFullYear()} Matainja Technologies. All rights reserved.</span>
          </div>
          <div className="footer-meta__trust">
            <span>Review us on</span>
            <a
              href="https://www.trustpilot.com/review/matainja.com"
              target="_blank"
              rel="noopener noreferrer"
              className="trustpilot-chip"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
