import Image from "next/image";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA84T8gUhPEiAv64FlkwqW10usP5cNf5hrCyv7bbf_w-Jo55dIVqVr3NrR8-SswI0CTdjs8q4a11kMovSLDfrwgRoqfMp7SdD7e3BJUqqwR-ACLtZf9OPDwkGwr2j3r9aNnjyO0175BcLauvIQUCXEkxSGm-jJ0c6gd4S98deTZVCHMg4NR5IYJn3Evu5fN6Z9EmnYGkct5q6Y_U4MFeJHrmSv605yyuxJx2CvESn5xxLw0AzfNTughyZG0zHvi6_VkxA8uEe67Tm4";

export default function Footer() {
  return (
    <footer className="bg-primary-container border-t border-outline-variant w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-gutter py-stack-lg max-w-container-max mx-auto">
        <div className="mb-8 md:mb-0">
          <Image
            src={LOGO_URL}
            alt="EQUITY3000 Logo"
            width={128}
            height={32}
            className="h-8 w-auto object-contain brightness-0 invert opacity-80 mb-4"
          />
          <p className="font-body-md text-body-md text-on-primary-container opacity-80 max-w-xs">
            © 2025 Equity3000. All rights reserved.
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
