'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA84T8gUhPEiAv64FlkwqW10usP5cNf5hrCyv7bbf_w-Jo55dIVqVr3NrR8-SswI0CTdjs8q4a11kMovSLDfrwgRoqfMp7SdD7e3BJUqqwR-ACLtZf9OPDwkGwr2j3r9aNnjyO0175BcLauvIQUCXEkxSGm-jJ0c6gd4S98deTZVCHMg4NR5IYJn3Evu5fN6Z9EmnYGkct5q6Y_U4MFeJHrmSv605yyuxJx2CvESn5xxLw0AzfNTughyZG0zHvi6_VkxA8uEe67Tm4";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Our Team", href: "/team" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-outline-variant">
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
          className="hidden lg:block px-6 py-3 border border-primary text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container transition-colors duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
