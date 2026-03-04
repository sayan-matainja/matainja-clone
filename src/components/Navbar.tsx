"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react"; 

const NAV_COLOR = "#448FF5";

const mobileLinkCls = "block px-4 py-3 text-sm font-semibold hover:bg-gray-50 border-b border-gray-50";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const pathname = usePathname();

  function navLink(href: string) {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    return [
      "px-3 font-semibold transition-colors whitespace-nowrap",
      isActive ? "navlink-active" : "navlink-inactive",
    ].join(" ");
  }

  function navColor(href: string): string {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    return isActive ? "#e8a020" : NAV_COLOR;
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div>
        <div className="wp-container wp-container-pad84">
          <div className="flex items-center" style={{ height: "81.8px" }}>

            <div className="flex items-center w-full" style={{ height: "61px" }}>
              <div className="flex-shrink-0" style={{ width: "325px" }}>
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://www.matainja.com/wp-content/uploads/2016/10/logo-1.png"
                    alt="Matainja Technologies"
                    style={{ width: "325px", height: "61px", objectFit: "contain", display: "block" }}
                  />
                </Link>
              </div>

              <div className="hidden md:flex flex-1 justify-center items-center" style={{ lineHeight: "61px" }}>
                <Link href="/" className={navLink("/")} style={{ color: navColor("/"), fontSize: "16px", display: "inline-flex", alignItems: "center", height: "61px", lineHeight: "61px" }}>Home</Link>
                <Link href="/about" className={navLink("/about")} style={{ color: navColor("/about"), fontSize: "16px", display: "inline-flex", alignItems: "center", height: "61px", lineHeight: "61px" }}>About us</Link>

            {/* Portfolio Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setPortfolioOpen(true)}
                  onMouseLeave={() => setPortfolioOpen(false)}
                >
                  <button type="button" className={navLink("/portfolio")} style={{ color: navColor("/portfolio"), fontSize: "16px", display: "inline-flex", alignItems: "center", height: "61px", lineHeight: "61px" }}>
                    Portfolio
                  </button>
                  {portfolioOpen && (
                    <div
                      className="absolute top-full left-0 shadow-xl min-w-[160px] py-1 z-50 bg-white border border-gray-100"
                      style={{ borderTop: "3px solid #e8a020" }}
                    >
                      <Link href="/application" className="block px-4 py-2 text-sm hover:bg-gray-50" style={{ color: NAV_COLOR }} onClick={() => setPortfolioOpen(false)}>
                        Application
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/service" className={navLink("/service")} style={{ color: navColor("/service"), fontSize: "16px", display: "inline-flex", alignItems: "center", height: "61px", lineHeight: "61px" }}>Service</Link>
                <Link href="/career" className={navLink("/career")} style={{ color: navColor("/career"), fontSize: "16px", display: "inline-flex", alignItems: "center", height: "61px", lineHeight: "61px" }}>Career</Link>
                <Link href="/contact" className={navLink("/contact")} style={{ color: navColor("/contact"), fontSize: "16px", display: "inline-flex", alignItems: "center", height: "61px", lineHeight: "61px" }}>Contact us</Link>
              </div>

              <button
                className="md:hidden ml-auto p-2 focus:outline-none"
                style={{ color: NAV_COLOR }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <Link href="/" onClick={() => setIsOpen(false)} className={mobileLinkCls} style={{ color: NAV_COLOR }}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={mobileLinkCls} style={{ color: NAV_COLOR }}>About us</Link>

          {/* Mobile Portfolio accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold hover:bg-gray-50 border-b border-gray-50"
              style={{ color: NAV_COLOR }}
              onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
            >
              Portfolio
              <ChevronDown className={`w-4 h-4 transition-transform ${mobilePortfolioOpen ? "rotate-180" : ""}`} />
            </button>
            {mobilePortfolioOpen && (
              <div className="bg-gray-50">
                <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block px-8 py-2.5 text-sm border-b border-gray-100" style={{ color: NAV_COLOR }}>
                  Portfolio
                </Link>
                <Link href="/application" onClick={() => setIsOpen(false)} className="block px-8 py-2.5 text-sm border-b border-gray-100" style={{ color: NAV_COLOR }}>
                  Application
                </Link>
              </div>
            )}
          </div>

          <Link href="/service" onClick={() => setIsOpen(false)} className={mobileLinkCls} style={{ color: NAV_COLOR }}>Service</Link>
          <Link href="/career" onClick={() => setIsOpen(false)} className={mobileLinkCls} style={{ color: NAV_COLOR }}>Career</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-sm font-semibold text-white" style={{ background: "#e8a020" }}>
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}
    