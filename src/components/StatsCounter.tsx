"use client";

import { useEffect, useRef, useState } from "react";
import "@/styles/brand-colors.css";

const stats = [
  { end: 7000, suffix: "+", label: "Jobs Completed", color: "from-accent-orange to-accent-orange-dark" },
  { end: 6300, suffix: "+", label: "Web Applications", color: "from-primary-blue to-primary-blue-dark" },
  { end: 700,  suffix: "+", label: "Mobile Applications", color: "from-tech-gray to-tech-gray-light" },
];

function useCountUp(end: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, end, duration]);

  return count;
}

function StatItem({ end, suffix, label, color, active }: { end: number; suffix: string; label: string; color: string; active: boolean }) {
  const count = useCountUp(end, 2000, active);
  return (
    <div className="tech-stat-item group">
      <div className="relative inline-block">
        <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        <div className={`relative bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tech-stat-number">
            {count.toLocaleString()}{suffix}
          </div>
        </div>
      </div>
      <div className="mt-6 text-lg sm:text-xl font-semibold text-tech-gray group-hover:text-tech-dark transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className || ''}`}>
      <div className="tech-stats-grid">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="tech-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <StatItem {...stat} active={active} />
          </div>
        ))}
      </div>
    </div>
  );
}
