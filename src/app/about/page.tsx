"use client";

import StatsCounter from "../../components/StatsCounter";
import { useEffect } from "react";
import Image from "next/image";
import "../../styles/brand-colors.css";
import "./about-professional.css";

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


export default function About() {
  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.tech-fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Hero Section */}
      <section className="tech-hero-section relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 tech-fade-in">
              <span className="w-2 h-2 bg-accent-orange rounded-full mr-2 tech-pulse"></span>
              <span className="text-white text-sm font-medium">Trusted by 100+ Clients Worldwide</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tech-fade-in" style={{ animationDelay: '200ms' }}>
              About <span className="tech-accent-gradient-text">Matainja</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8 tech-fade-in" style={{ animationDelay: '400ms' }}>
              Leading IT Solutions Provider Since 2010
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-gray-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="tech-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="tech-fade-in">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-base font-bold mb-6 border border-accent-orange/20 shadow-lg">
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-dark mb-6">
                  We Build <span className="tech-gradient-text">Digital Excellence</span>
                </h2>
                <p className="text-lg text-tech-gray leading-relaxed mb-8">
                  We are a growing web development company based in India. We provide any kind of service related to websites by taking full responsibility until your online business is growing smoothly. Our vision is to be the most trusted service provider of website systems and technologies that ensure the security and good navigation system in Web Technology.
                </p>
              </div>
              
              <div className="tech-testimonial tech-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold">
                      L
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-tech-dark">LUUK</div>
                    <div className="text-sm text-tech-gray-light">Natuurhuisje SEO</div>
                  </div>
                </div>
                <p className="text-tech-gray italic">
                  &ldquo;We are very happy working with Matainja. We have been working with them for over 6 years now and they have never disappointed us. They are hard workers and are ready to solve your problems anytime.&rdquo;
                </p>
              </div>
            </div>

            <div className="tech-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-accent-orange rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src="https://www.matainja.com/wp-content/uploads/2014/02/art-new.png"
                    alt="Matainja Technologies"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-medium mb-4">
              Our Core Values
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-dark mb-6">
              Foundation of <span className="tech-accent-gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Respect, professionalism and honesty are the values that are the foundation of Matainja
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "We take responsibility for bug-free website with security",
                "We deliver the project within the deadline",
                "We provide support 24 x 7 hours",
                "We undertake projects with low cost and short deadline",
                "We use framework technology for every custom code (Yii, Codeigniter, Zend, Cake PHP, Laravel, Hero Framework, React JS, Git) ,Database Design by Database Architect"
              ].map((item, index) => (
                <div key={index} className="flex items-start tech-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-blue-dark rounded-lg flex items-center justify-center text-white text-sm font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-tech-gray leading-relaxed pt-1">{item}</p>
                </div>
              ))}
            </div>

            <div className="tech-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="tech-testimonial">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                      IP
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-tech-dark">iOnline Paul</div>
                    <div className="text-sm text-tech-gray-light">SEO Expert</div>
                  </div>
                </div>
                <p className="text-tech-gray italic">
                  &ldquo;Matainja Technologies made sure work was completed exactly as defined. I will continue to work with them for future modifications without hesitation.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="tech-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-dark mb-6">
              What We <span className="tech-gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div 
                key={svc.title} 
                className="tech-card tech-card-hover tech-fade-in group"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="p-8">
                  <div className="tech-service-icon mb-6 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 ease-out">
                    {svc.iconClass.includes('fa-desktop') && (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5z"/>
                      </svg>
                    )}
                    {svc.iconClass.includes('fa-android') && (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z"/>
                      </svg>
                    )}
                    {svc.iconClass.includes('fa-apple') && (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2z"/>
                      </svg>
                    )}
                    {svc.iconClass.includes('fa-search') && (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                      </svg>
                    )}
                    {svc.iconClass.includes('fa-shopping-cart') && (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>
                      </svg>
                    )}
                    {svc.iconClass.includes('fa-gears') && (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-tech-dark mb-4">
                    {svc.title}
                  </h3>
                  <p className="text-tech-gray leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-medium mb-4">
              Our Impact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-dark mb-6">
              Numbers That <span className="tech-accent-gradient-text">Matter</span>
            </h2>
          </div>
          <StatsCounter />
        </div>
      </section>
    </div>
  );
}
