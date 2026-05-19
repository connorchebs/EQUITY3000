import Image from "next/image";

const LOGO_URL = "/EQUITY3000/EQU3000-NB-site.png";

export default function Footer() {
  return (
    <footer className="bg-primary-container border-t border-outline-variant w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-gutter py-6 max-w-container-max mx-auto">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Image
            src={LOGO_URL}
            alt="EQUITY3000 Logo"
            width={128}
            height={32}
            className="h-8 w-auto object-contain brightness-0 invert opacity-80"
          />
          <p className="font-body-md text-body-md text-on-primary-container opacity-80">
            © 2025 EQUITY3000. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a
            href="#"
            className="font-label-md text-label-md text-on-primary-container opacity-80 hover:opacity-100 hover:text-surface-bright transition-colors"
          >
            NDA
          </a>
          <a
            href="#"
            className="font-label-md text-label-md text-on-primary-container opacity-80 hover:opacity-100 hover:text-surface-bright transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
