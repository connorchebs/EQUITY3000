import Link from "next/link";

export default function ProcessPage() {
  return (
    <div className="py-section-padding bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">

        <section className="mb-stack-lg border-b border-outline-variant pb-stack-md">
          <div className="max-w-3xl">
            <p className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary-container mb-4">
              How We Work
            </p>
            <h1 className="font-display-lg text-display-lg text-primary mb-6">Our Process</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              EQUITY3000 serves as the bridge between ambitious founders and experienced investors. Whether you are
              raising capital or deploying it, our process is designed to protect your time and maximize the quality
              of every introduction.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <Link
            href="/process/investors"
            className="group bg-surface-container-lowest border border-outline-variant p-stack-md flex flex-col justify-between hover:border-primary transition-colors duration-300"
          >
            <div>
              <p className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary-container mb-4">
                For Investors
              </p>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Curated Deal Flow. No Noise.
              </h2>
              <div className="w-12 h-0.5 bg-tertiary-fixed-dim mb-6"></div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Set your mandate and let us do the sourcing. We screen every opportunity before it reaches you,
                so your time is spent only on deals that match your criteria.
              </p>
            </div>
            <div className="mt-stack-md flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary group-hover:gap-4 transition-all duration-300">
              Learn More
              <span className="text-lg">→</span>
            </div>
          </Link>

          <Link
            href="/process/founders"
            className="group bg-surface-container-lowest border border-outline-variant p-stack-md flex flex-col justify-between hover:border-primary transition-colors duration-300"
          >
            <div>
              <p className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary-container mb-4">
                For Founders
              </p>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                The Right Investors. At the Right Time.
              </h2>
              <div className="w-12 h-0.5 bg-tertiary-fixed-dim mb-6"></div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Stop pitching cold. We connect you with investors who have already expressed interest in your sector,
                stage, and geography — so every conversation starts warm.
              </p>
            </div>
            <div className="mt-stack-md flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary group-hover:gap-4 transition-all duration-300">
              Learn More
              <span className="text-lg">→</span>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
