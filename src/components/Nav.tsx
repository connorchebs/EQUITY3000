'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LOGO_URL = "/E3K-NB-site.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Process", href: "/process" },
  { label: "Our Team", href: "/team" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-surface/80 backdrop-blur-md border-b border-outline-variant" : "bg-transparent border-b border-transparent"}`}>
      <nav className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <Link href="/">
          <Image src={LOGO_URL} alt="EQUITY3000 Logo" width={160} height={40} className="h-10 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md text-label-md uppercase tracking-wider ${
                  isActive
                    ? "text-primary border-b-2 border-tertiary-fixed-dim pb-1 font-bold"
                    : "text-on-surface-variant hover:text-primary transition-colors"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/contact"
          className={`hidden lg:block px-6 py-3 border font-label-md text-label-md uppercase tracking-wider transition-colors duration-300 ${
            scrolled
              ? "border-primary text-on-surface hover:bg-surface-container"
              : "border-white text-white hover:bg-white/10"
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
