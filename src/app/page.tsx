import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDMsG-C1R1dGYjfEL6P6GqJRcV1Q3DVGvUUyGACWvVtNLUWHJAI51S5imAVr8-8BxbRAyM2MD4XReLj7NG9MLhaNRffjgKgH7rOLaXu_3iodIl70nQqdd__bNW9AGzYgyyobpRDrIrY_SAk9uMSOEzNz4A0R_G0JgRrI8-3jhha5OJ6e1hzrmuN5GlohRg3E7ffM9c_grCgUCOuqBdfaZT5RCwECAI1_iXz_66aROpq7gJjkedh8ZBdC0Bqm4A0AZGFCDHkvvhEJZU";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
          <Image
            src={HERO_IMAGE}
            alt="A sprawling modern financial district at dusk"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 px-gutter max-w-container-max mx-auto w-full grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 lg:col-span-6 space-y-stack-md">
            <div className="space-y-4">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container flex items-center gap-2">
                <span className="w-8 h-px bg-tertiary-fixed-dim"></span>
                PLACEHOLDER - OPTIONAL
              </span>
              <h1 className="font-display-lg text-display-lg text-primary leading-tight">
                Connecting Investors With Founders
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Here is a placeholder text
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-container text-on-primary font-label-md uppercase tracking-wider rounded transition-all hover:bg-primary hover:shadow-lg active:scale-95 text-center"
                style={{ letterSpacing: "0.8px" }}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-container py-stack-lg border-y border-outline-variant">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter text-on-primary justify-items-stretch">
            <div className="space-y-2 group cursor-default w-full">
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container transition-colors group-hover:text-tertiary-fixed-dim">
                STAT 1
              </p>
              <p className="font-headline-md text-headline-md text-on-primary">XX</p>
              <div className="w-12 h-0.5 bg-tertiary-fixed-dim transform origin-left transition-transform group-hover:scale-x-150"></div>
            </div>
            <div className="space-y-2 group cursor-default w-full">
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container transition-colors group-hover:text-tertiary-fixed-dim">
                RANGE OF MIN. INVESTMENT
              </p>
              <p className="font-headline-md text-headline-md text-on-primary">$X - $XX</p>
              <div className="w-12 h-0.5 bg-tertiary-fixed-dim transform origin-left transition-transform group-hover:scale-x-150"></div>
            </div>
            <div className="space-y-2 group cursor-default w-full">
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container transition-colors group-hover:text-tertiary-fixed-dim">
                Active Deals
              </p>
              <p className="font-headline-md text-headline-md text-on-primary">X</p>
              <div className="w-12 h-0.5 bg-tertiary-fixed-dim transform origin-left transition-transform group-hover:scale-x-150"></div>
            </div>
            <div className="space-y-2 group cursor-default w-full">
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container transition-colors group-hover:text-tertiary-fixed-dim">
                STAT 4
              </p>
              <p className="font-headline-md text-headline-md text-on-primary">XX</p>
              <div className="w-12 h-0.5 bg-tertiary-fixed-dim transform origin-left transition-transform group-hover:scale-x-150"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-stack-lg">
            <div className="lg:w-1/3">
              <h2 className="font-headline-md text-headline-md text-primary mb-6">THE PROCESS</h2>
              <div className="w-24 h-1 bg-tertiary-fixed-dim mb-6"></div>
              <Link
                href="/process"
                className="px-8 py-4 bg-primary-container text-on-primary font-label-md uppercase tracking-wider rounded transition-all hover:bg-primary hover:shadow-lg active:scale-95 block text-center"
                style={{ letterSpacing: "0.8px" }}
              >
                Our Process
              </Link>
            </div>
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="p-base border-t border-outline-variant pt-stack-sm group hover:bg-surface-container-low transition-colors duration-300">
                <span className="font-label-md text-label-md text-on-tertiary-container mb-4 block">01</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Set your mandate</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Tell us your ticket size, target sectors, preferred stage, and geographic focus.
                </p>
              </div>
              <div className="p-base border-t border-outline-variant pt-stack-sm group hover:bg-surface-container-low transition-colors duration-300">
                <span className="font-label-md text-label-md text-on-tertiary-container mb-4 block">02</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">We find you a founder</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We search for founders that match your investment criteria, so every introduction is relevant.
                </p>
              </div>
              <div className="p-base border-t border-outline-variant pt-stack-sm group hover:bg-surface-container-low transition-colors duration-300">
                <span className="font-label-md text-label-md text-on-tertiary-container mb-4 block">03</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">You Decide</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Every decision is yours. We simply make sure you have what you need - from the first introduction all the way to close.
                </p>
              </div>
              <div className="p-base border-t border-outline-variant pt-stack-sm group hover:bg-surface-container-low transition-colors duration-300">
                <span className="font-label-md text-label-md text-on-tertiary-container mb-4 block">04</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">4th step</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
