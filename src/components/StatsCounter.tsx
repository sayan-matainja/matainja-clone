"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 7000, suffix: "+", label: "jobs", color: "#e8a020" },
  { end: 6300, suffix: "+", label: "Web Application", color: "#e85050" },
  { end: 700,  suffix: "+", label: "Mobile Application", color: "#4a9fd4" },
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
    <div className="omsc-counter size-large" data-count={end} data-suffix={suffix} data-animation={2000}>
      <div className="omsc-counter-number" style={{ color }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="omsc-counter-title">{label}</div>
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
    <div ref={ref} className={className}>
      <div className="omsc-one-third">
        <StatItem {...stats[0]} active={active} />
        <br />
        <div className="clear" />
      </div>
      <div className="omsc-one-third">
        <StatItem {...stats[1]} active={active} />
        <br />
        <div className="clear" />
      </div>
      <div className="omsc-one-third omsc-last">
        <StatItem {...stats[2]} active={active} />
        <br />
        <div className="clear" />
      </div>
      <div className="omsc-clear" />
    </div>
  );
}
